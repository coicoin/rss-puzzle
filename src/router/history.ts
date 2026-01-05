export const HISTORY_ACTION = {
  PUSH: 'PUSH',
  REPLACE: 'REPLACE',
  SKIP: 'SKIP',
} as const;

export type HistoryAction = keyof typeof HISTORY_ACTION;
