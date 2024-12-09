import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { View } from '~/components/shared';
import { THEME } from '~/constants';

const screenWidth = Dimensions.get('window').width;
const defaultSlideWidth = screenWidth - 40;
const defaultSlideSpacing = 20;

interface SliderContextValue {
  slideWidth: number;
  slideSpacing: number;
  scrollX: Animated.SharedValue<number>;
}

const SliderContext = React.createContext<SliderContextValue | null>(null);

interface SliderProps {
  children: React.ReactNode;
  showPagination?: boolean;
  slideWidth?: number;
  slideSpacing?: number;
  containerStyle?: ViewStyle;
}

const useSliderContext = () => {
  const context = React.useContext(SliderContext);
  if (!context) {
    throw new Error('Slider components must be used within a Slider');
  }
  return context;
};

export const Slider = ({
  children,
  showPagination = true,
  slideWidth = defaultSlideWidth,
  slideSpacing = defaultSlideSpacing,
  containerStyle,
}: SliderProps) => {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useSharedValue(0);
  const slides = React.Children.toArray(children);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  return (
    <SliderContext.Provider value={{ slideWidth, slideSpacing, scrollX }}>
      <View style={[styles.container, containerStyle]}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={({ item }) => item}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={slideWidth + slideSpacing}
          decelerationRate="fast"
          contentContainerStyle={[styles.flatListContent, { paddingHorizontal: slideSpacing / 2 }]}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          keyExtractor={(_, index) => index.toString()}
        />

        {showPagination && (
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <SliderDot key={index} index={index} />
            ))}
          </View>
        )}
      </View>
    </SliderContext.Provider>
  );
};

interface SliderItemProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const SliderItem = ({ children, style }: SliderItemProps) => {
  const { slideWidth, slideSpacing } = useSliderContext();

  return (
    <View
      style={[
        styles.slide,
        {
          width: slideWidth,
          marginHorizontal: slideSpacing / 2,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

interface SliderDotProps {
  index: number;
}

const SliderDot = ({ index }: SliderDotProps) => {
  const { slideWidth, scrollX } = useSliderContext();

  const dotStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * slideWidth, index * slideWidth, (index + 1) * slideWidth];
    const width = interpolate(scrollX.value, inputRange, [18, 18, 18], 'clamp');
    const backgroundColor = interpolateColor(scrollX.value, inputRange, [
      '#D9D9D9',
      '#48484a',
      '#D9D9D9',
    ]);
    return {
      width: withTiming(width, { duration: 300 }),
      backgroundColor: withTiming(backgroundColor, { duration: 300 }),
    };
  });

  return <Animated.View style={[styles.paginationDot, dotStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 170,
  },
  flatListContent: {
    paddingHorizontal: defaultSlideSpacing / 2,
  },
  slide: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 18,
    justifyContent: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -16,
    left: 0,
    right: 0,
  },
  paginationDot: {
    height: 6,
    borderRadius: 4,
    backgroundColor: THEME.colors.primary.main,
    marginHorizontal: 4,
  },
});

export { type SliderItemProps, type SliderProps };
