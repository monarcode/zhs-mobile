import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { SlideProps } from './types';
import { Text } from '../../../components/shared/text';
import tw from '../../../tw';

export const Slide = ({ title, description, image, isActive }: SlideProps) => {
  return (
    <Animated.View
      entering={FadeIn.duration(400).springify()}
      exiting={FadeOut.duration(400).springify()}
      style={[tw`h-full justify-between py-8`]}>
      <Animated.View
        entering={FadeIn.delay(200).duration(400).springify()}
        style={tw`flex-1 items-center justify-center`}>
        {image}
      </Animated.View>

      <Animated.View entering={FadeIn.delay(400).duration(400).springify()} style={tw`px-6`}>
        <Text style={tw`text-3xl font-medium text-center mb-2`}>{title}</Text>
        <Text style={tw`text-sm font-regular text-center tracking-[0.20px] text-gray-600`}>
          {description}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};
