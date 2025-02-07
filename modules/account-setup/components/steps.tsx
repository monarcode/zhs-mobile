import { View } from 'components/shared';
import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  useSharedValue,
} from 'react-native-reanimated';

import { THEME } from '~/constants';
import tw from '~/tw';

interface StepsProps {
  /**
   * Current active step (1-based index)
   * @example: If on step 2, steps 1 and 2 will be highlighted
   */
  completedSteps: number;
}

const TOTAL_STEPS = 4;
const STRIP_WIDTH = 60;
const ANIMATION_DURATION = 600;

// Individual step component to properly handle animation
const StepStrip = ({ isCompleted, index }: { isCompleted: boolean; index: number }) => {
  const progress = useSharedValue(0);

  // Update progress when isCompleted changes
  useEffect(() => {
    progress.value = withTiming(isCompleted ? 1 : 0, {
      duration: ANIMATION_DURATION,
    });
  }, [isCompleted]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'relative',
      overflow: 'hidden',
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${interpolate(progress.value, [0, 1], [0, 100], Extrapolate.CLAMP)}%`,
      backgroundColor: THEME.colors.primary.main,
      borderRadius: 9999, // Full rounded
    };
  });

  return (
    <Animated.View
      style={[tw`h-2 bg-gray-200 rounded-full`, { width: STRIP_WIDTH }, animatedStyle]}>
      <Animated.View style={fillStyle} />
    </Animated.View>
  );
};

const Steps = ({ completedSteps }: StepsProps) => {
  return (
    <View style={tw`flex-row items-center justify-center gap-x-1`}>
      {Array.from({ length: TOTAL_STEPS }, (_, index) => (
        <StepStrip key={index} index={index} isCompleted={index < completedSteps} />
      ))}
    </View>
  );
};

export default Steps;
