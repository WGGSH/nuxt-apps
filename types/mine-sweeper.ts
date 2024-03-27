type Cell = {
  isMine: boolean;
  status: 'hidden' | 'flagged' | 'revealed';
  mineCount: number;
};

export type { Cell };
