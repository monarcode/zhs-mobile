import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

import { PaginationDotsProps } from './types';
import tw from '../../../tw';

import { THEME } from '~/constants';

const Dot = ({
  isActive,
  index,
  current,
}: {
  isActive: boolean;
  index: number;
  current: number;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const distance = Math.abs(current - index);

    const scale = interpolate(distance, [0, 1, 2], [1, 0.8, 0.6], 'clamp');

    return {
      transform: [
        {
          scale: withSpring(scale, {
            mass: 0.2,
            damping: 2,
            stiffness: 80,
          }),
        },
      ],
      width: withSpring(isActive ? 24 : 8, {
        mass: 0.5,
        damping: 4,
        stiffness: 80,
      }),
      opacity: withSpring(isActive ? 1 : 0.6),
      backgroundColor: withTiming(isActive ? THEME.colors.primary.main : '#D2D7E2', {
        duration: 200,
      }),
    };
  });

  return <Animated.View style={[tw`h-2 rounded-full`, animatedStyle]} />;
};

export const PaginationDots = ({ total, current }: PaginationDotsProps) => {
  return (
    <View style={tw`flex-row items-center justify-center gap-x-1.5`}>
      {Array.from({ length: total }).map((_, index) => (
        <Dot key={index} index={index} current={current} isActive={current === index} />
      ))}
    </View>
  );
};
