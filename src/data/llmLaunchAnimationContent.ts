/** LLM Attack Suite launch system log (canonical copy for product page preview). */
export const LLM_LAUNCH_SCAN_LINES = [
  'Initializing LLM attack surface engine...',
  'Loading prompt injection payloads...',
  'Bootstrapping jailbreak taxonomy...',
  'Connecting to model API endpoints...',
  'Calibrating token boundary analysis...',
  'Syncing RAG poisoning modules...',
  'Loading adversarial ML classifiers...',
  'LLM Attack Suite ready.',
] as const

export const LLM_LAUNCH_PHASES = ['PROMPT', 'JAIL', 'RAG', 'MODEL'] as const
