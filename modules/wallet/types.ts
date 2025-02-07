export type Transaction = {
  label: string;
  type: 'wallet-funding' | 'dr-appnmt' | 'lab-appnmt';
  amount: number;
  date: string;
  status: 'success' | 'failed' | 'pending';
};
