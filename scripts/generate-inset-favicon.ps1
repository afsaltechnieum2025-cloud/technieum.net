# Regenerates public/favicon/favicon.png: transparent canvas, mark scaled/inset so it reads smaller in tabs/taskbar.
# Requires Windows PowerShell 5.1+ (System.Drawing).
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$public = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\public\favicon'))
$outPath = Join-Path $public 'favicon.png'
$widePath = Join-Path $public 'favicon-source-wide.png'

if (-not (Test-Path $outPath)) { throw "Missing $outPath" }

# Keep the original wide raster as the generation source after the first run
if (-not (Test-Path $widePath)) {
  Copy-Item -LiteralPath $outPath -Destination $widePath -Force
}

$sourceFile = (Resolve-Path $widePath).Path
$src = [System.Drawing.Bitmap]::FromFile($sourceFile)
try {
  $side = 512
  # Fraction of canvas used by the mark (transparent margin = 1 - inset). Higher = larger mark.
  $inset = 0.80
  $maxBox = [double]$side * $inset
  $scale = [Math]::Min($maxBox / $src.Width, $maxBox / $src.Height)
  $nw = [int][Math]::Round($src.Width * $scale)
  $nh = [int][Math]::Round($src.Height * $scale)
  $dx = [int](($side - $nw) / 2)
  $dy = [int](($side - $nh) / 2)

  $fmt = [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  $out = New-Object System.Drawing.Bitmap $side, $side, $fmt
  $g = [System.Drawing.Graphics]::FromImage($out)
  try {
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $dest = New-Object System.Drawing.Rectangle $dx, $dy, $nw, $nh
    $g.DrawImage($src, $dest)
  }
  finally { $g.Dispose() }

  $out.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $out.Dispose()
}
finally {
  $src.Dispose()
}

Write-Host "Updated $outPath (${side}x${side}, inset factor $inset). Wide source: $widePath"
