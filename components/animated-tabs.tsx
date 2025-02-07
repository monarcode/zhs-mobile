import { MotiText, MotiView } from 'moti';
import React, { ReactNode, useCallback } from 'react';
import { Dimensions, Pressable } from 'react-native';

import { View } from './shared';

import { THEME } from '~/constants';
import tw from '~/tw';

export interface TabItem {
  key: string;
  label: string;
  icon: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export interface TabButtonProps extends TabItem {
  isActive: boolean;
  onPress: () => void;
}

export const ANIMATION = {
  duration: 300,
} as const;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const TAB_WIDTH = (SCREEN_WIDTH - 20) / 3; // For 3 tabs

export const TabButton: React.FC<TabButtonProps> = ({ label, icon, isActive, onPress }) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <Pressable onPress={handlePress} style={[tw.style('w-auto h-12 relative flex-1')]}>
      <MotiView
        style={[
          tw.style(
            'absolute top-0 left-0 right-0 bottom-0 w-full h-full pl-1 pr-2 bg-transparent rounded-full justify-center items-center flex-row gap-1.5 border-[4px] border-transparent'
          ),
        ]}
        animate={{
          backgroundColor: isActive ? THEME.colors.primary.main : 'transparent',
          borderColor: isActive ? THEME.colors.primary.alt : 'transparent',
        }}
        transition={{
          duration: 100,
        }}>
        {React.cloneElement(icon as React.ReactElement, {
          size: 18,
          variant: 'Linear',
          style: {
            color: isActive ? '#ffffff' : '#8E8E93',
          },
        })}
        <MotiText
          style={[
            tw.style('text-xs font-regular z-20 text-neutral-400', {
              'text-white': isActive,
            }),
          ]}
          animate={{
            opacity: isActive ? 1 : 0.4,
          }}
          transition={{
            duration: 100,
          }}>
          {label}
        </MotiText>
      </MotiView>
    </Pressable>
  );
};

export const AnimatedTabs: React.FC<TabsProps> = ({ items, activeKey, onChange }) => {
  const handlePress = useCallback(
    (key: string) => {
      onChange(key);
    },
    [onChange]
  );

  return (
    <View style={tw`flex-row bg-white rounded-full p-1 w-full gap-x-1`}>
      {items.map((item) => (
        <TabButton
          {...item}
          key={item.key}
          isActive={activeKey === item.key}
          onPress={() => handlePress(item.key)}
        />
      ))}
    </View>
  );
};
