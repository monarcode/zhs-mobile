import { ReactNode } from 'react';

export interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image?: ReactNode;
}

export interface OnboardingSliderProps {
  slides: OnboardingSlide[];
  onLastSlide?: () => void;
}

export interface PaginationDotsProps {
  total: number;
  current: number;
}

export interface SlideProps extends OnboardingSlide {
  isActive: boolean;
}
