import { create } from 'zustand';

import { UseLabBookingActions, UseLabBookingState } from '~/types/store/lab-booking';

type Store = UseLabBookingState & UseLabBookingActions;

export const useLabAppointment = create<Store>()((set) => ({
  date: new Date(),
  time: '',
  labServices: [],
  updateBookingDetails: (data) => set(data),
}));
