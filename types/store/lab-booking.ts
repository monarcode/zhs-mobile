export type UseLabBookingState = {
  date: Date;
  time: string;
  labServices: string[];
};

export type UseLabBookingActions = {
  updateBookingDetails: (data: Partial<UseLabBookingState>) => void;
};
