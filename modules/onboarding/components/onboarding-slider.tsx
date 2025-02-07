import { ArrowRight2 } from 'iconsax-react-native';
import { useCallback, useRef, useState } from 'react';
import { Dimensions, FlatList, Pressable, View, ViewToken } from 'react-native';

import { PaginationDots } from './pagination-dots';
import { Slide } from './slide';
import { OnboardingSlide, OnboardingSliderProps } from './types';
import tw from '../../../tw';

import { Text } from '~/components/shared';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const OnboardingSlider = ({ slides, onLastSlide }: OnboardingSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const isLastSlide = currentIndex === slides.length - 1;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 0,
  }).current;

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const handleNext = useCallback(() => {
    if (isLastSlide) {
      onLastSlide?.();
    } else {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  }, [currentIndex, isLastSlide, onLastSlide]);

  const renderItem = useCallback(
    ({ item, index }: { item: OnboardingSlide; index: number }) => (
      <View style={tw.style({ width: SCREEN_WIDTH, height: '100%' })}>
        <Slide {...item} isActive={index === currentIndex} />
      </View>
    ),
    [currentIndex]
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    }),
    []
  );

  return (
    <View style={tw`flex-1 gap-y-10 pt-8`}>
      <View style={tw`px-6`}>
        <Pressable style={tw`ml-auto w-fit self-start`} onPress={onLastSlide}>
          <Text style={tw``}>Skip</Text>
        </Pressable>
      </View>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={getItemLayout}
        style={tw`flex-1`}
      />

      <View style={tw`flex flex-row items-center justify-between px-6 mb-8`}>
        <PaginationDots total={slides.length} current={currentIndex} />

        <Pressable
          style={tw`bg-primary size-14 rounded-full items-center justify-center shadow-sm`}
          onPress={handleNext}>
          <ArrowRight2 size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
};
