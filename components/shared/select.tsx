import * as SelectPrimitive from '@rn-primitives/select';
import { ArrowDown2 } from 'iconsax-react-native';
import React from 'react';
import { Dimensions, StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

import TickIcon from '~/assets/svg/tick-02.svg';
import { THEME } from '~/constants';
import tw from '~/tw';

/**
 * Represents an option in the select component.
 */
export type Option = {
  label: string;
  value: string;
};

/**
 * Props for the Select component.
 */
export interface SelectProps {
  /** Array of options to display in the select */
  options: Option[];
  /** Placeholder text to display when no option is selected */
  placeholder?: string;
  /** Callback function called when an option is selected */
  onValueChange?: (value: SelectPrimitive.Option) => void;
  /** Callback function called when the select is opened or closed */
  onOpenChange?: (isOpen: boolean) => void;
  /** Style to apply to the container View */
  containerStyle?: StyleProp<ViewStyle>;
  /** Width of the select component dropdown */
  width?: number;
  /** Color of the chevron icon */
  iconColor?: string;
  value?: string;
}

const WIDTH = Dimensions.get('window').width - 48;

/**
 * A customizable select component for React Native.
 *
 * @component
 * @example
 * import Select from './Select';
 *
 * const MyComponent = () => {
 *   const options = [
 *     { label: 'Option 1', value: 'option1' },
 *     { label: 'Option 2', value: 'option2' },
 *   ];
 *
 *   return (
 *     <Select
 *       options={options}
 *       placeholder="Select an option"
 *       onValueChange={(value) => console.log('Selected:', value)}
 *       onOpenChange={(isOpen) => console.log('Select is open:', isOpen)}
 *       width={300}
 *       iconColor="#007AFF"
 *     />
 *   );
 * };
 */
const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select an option',
  onValueChange,
  containerStyle,
  onOpenChange,
  width = WIDTH,
  iconColor = THEME.colors.neutral[800],
  value,
}) => {
  /**
   * Handles the open state change of the select.
   * @param {boolean} isOpen - Whether the select is open or closed
   */
  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange?.(isOpen);
  };

  /**
   * Handles the value change when an option is selected.
   * @param {SelectPrimitive.Option} value - The selected option
   */
  const handleValueChange = (selectedValue: SelectPrimitive.Option) => {
    onValueChange?.(selectedValue);
  };

  // Find the label for the current value
  const selectedLabel = options.find((option) => option.value === value)?.label || placeholder;

  return (
    <View style={tw.style(`relative z-[1] w-full`)}>
      <SelectPrimitive.Root onOpenChange={handleOpenChange} onValueChange={handleValueChange}>
        <SelectPrimitive.Trigger style={tw.style('input')}>
          <SelectPrimitive.Value
            placeholder={selectedLabel}
            style={tw.style('text-sm tracking-normal font-regular text-inputPlaceholder', {
              'text-neutral-900': selectedLabel !== placeholder,
            })}
          />

          <ArrowDown2 style={tw`ml-auto`} color={iconColor} size={20} />
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Overlay style={tw`absolute inset-0 bg-transparent`}>
            <SelectPrimitive.Content align="center" style={{ width }}>
              <Animated.ScrollView
                entering={FadeInUp.duration(100)}
                exiting={FadeOutUp.duration(100)}
                style={tw.style(`bg-neutral-50 w-full rounded-xl mt-1`, {
                  boxShadow: '0px 14px 30px -10px rgba(0, 15, 55, 0.05)',
                })}>
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    style={tw`py-3.5 pl-4 pr-2 justify-between items-center relative flex-row`}>
                    <View style={tw.style(`flex-row w-full`)}>
                      <SelectPrimitive.ItemIndicator style={tw`absolute right-0 top-0`}>
                        <TickIcon height={18} />
                      </SelectPrimitive.ItemIndicator>

                      <Text style={tw`text-sm tracking-wide font-regular`}>{option.label}</Text>
                    </View>
                  </SelectPrimitive.Item>
                ))}
              </Animated.ScrollView>
            </SelectPrimitive.Content>
          </SelectPrimitive.Overlay>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </View>
  );
};

export default Select;
