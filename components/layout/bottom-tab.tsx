import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Path, Svg } from 'react-native-svg';

import { View } from '../shared';
import { TabButton } from './tab-button';

import tw from '~/tw';

const width = Dimensions.get('window').width;

export const BottomTab: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const TAB_WIDTH = width / state.routes.length;
  const { bottom } = useSafeAreaInsets();
  const CENTER_WIDTH = 160;
  const CURVE_HEIGHT = 50;

  const getPath = () => {
    const left = `M0 28C0 12.536 12.536 0 28 0H${width / 2 - CENTER_WIDTH / 2}`;
    const curve =
      `C${width / 2 - CENTER_WIDTH / 4} 0 ${width / 2 - CENTER_WIDTH / 4} ${CURVE_HEIGHT} ${width / 2} ${CURVE_HEIGHT}` +
      `C${width / 2 + CENTER_WIDTH / 4} ${CURVE_HEIGHT} ${width / 2 + CENTER_WIDTH / 4} 0 ${width / 2 + CENTER_WIDTH / 2} 0`;
    const right = `H${width - 28}C${width - 12.536} 0 ${width} 12.536 ${width} 28V90H0V28`;
    return `${left} ${curve} ${right}`;
  };

  // if (pathname === '/search') return;

  return (
    <View style={tw.style('absolute -bottom-1.5 left-0 right-0 h-24', { paddingBottom: bottom })}>
      <Svg width={width} height={90} viewBox={`0 0 ${width} 90`} style={tw`absolute`}>
        <Path d={getPath()} fill="#ffffff" />
      </Svg>

      <View style={tw`absolute bottom-0 left-0 right-0 flex-row h-24`}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
              key={route.key}
              style={[tw`items-center justify-center pt-2.5`, { width: TAB_WIDTH }]}>
              <Pressable
                onPress={onPress}
                accessibilityRole="tab"
                accessibilityLabel={label}
                accessibilityState={{ selected: isFocused }}>
                <TabButton route={label as any} isFocused={isFocused} />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};
