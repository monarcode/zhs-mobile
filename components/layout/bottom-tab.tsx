import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View } from '../shared';
import { TabButton } from './tab-button';

import tw from '~/tw';

const width = Dimensions.get('window').width;

export const BottomTab: React.FC<BottomTabBarProps> = (props) => {
  const { state, descriptors, navigation } = props;
  const TAB_WIDTH = width / state.routes.length;
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={tw.style('w-full bg-light flex-row absolute bottom-0', {
        paddingBottom: bottom,
        boxShadow: '0 -4 30 -15 rgba(0, 0, 0, 0.1250)',
      })}>
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
            style={tw.style('items-center justify-center pt-[10px]', {
              width: TAB_WIDTH,
            })}>
            <Pressable onPress={onPress}>
              <TabButton route={label as any} isFocused={isFocused} />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};
