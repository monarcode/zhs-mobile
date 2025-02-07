import React, { ReactNode, useState } from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Eye, EyeOff } from 'react-native-feather';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Text } from './text';

import { THEME } from '~/constants/theme';
import tw from '~/tw';

/**
 * Props for the TextInput component.
 */
export type PasswordInputProps = Omit<NativeTextInputProps, 'secureTextEntry'> & {
  /** Placeholder text for the input */
  placeholder?: string;
  /** Current value of the input */
  value?: string;
  /** Callback function called when the text changes */
  onChangeText?: (text: string) => void;
  /** Optional icon to display before the input */
  icon?: ReactNode;
  /** Style for the outer container */
  style?: ViewStyle;
  /** Style for the input container */
  containerStyle?: ViewStyle;
  /** Style for the text input itself */
  inputStyle?: TextStyle;
  /** Color of the border when the input is focused */
  focusColor?: string;
  /** Color of the border when the input is not focused */
  unfocusedColor?: string;
  /** Optional label text to display above the input */
  label?: string;
  /** Callback function called when the input is focused */
  onFocus?: () => void;
  /** Callback function called when the input loses focus */
  onBlur?: () => void;
  required?: boolean;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder = '',
  value,
  onChangeText,
  icon,
  style,
  containerStyle,
  inputStyle,
  focusColor = THEME.colors.primary,
  unfocusedColor = '#9b9b9b',
  label,
  onFocus,
  onBlur,
  required = false,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const focusProgress = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      focusProgress.value,
      [0, 1],
      [unfocusedColor, typeof focusColor === 'string' ? focusColor : focusColor.main]
    );

    return {
      borderColor,
    };
  });

  const handleFocus = () => {
    focusProgress.value = withTiming(1, { duration: 300 });
    onFocus?.();
  };

  const handleBlur = () => {
    focusProgress.value = withTiming(0, { duration: 300 });
    onBlur?.();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[tw.style('w-auto rounded-lg gap-1.5'), style]}>
      {label && (
        <View style={{ flexDirection: 'row' }}>
          <Text style={tw`text-sm font-regular`}>{label}</Text>
          {required && <Text style={{ color: '#f60000' }}>*</Text>}
        </View>
      )}

      <Animated.View
        style={[
          tw.style('flex-row items-center h-12 rounded-xl px-3', {
            borderWidth: StyleSheet.hairlineWidth + 0.4,
          }),
          containerStyle,
          animatedContainerStyle,
        ]}>
        {icon && <View style={tw`mr-[6px]`}>{icon}</View>}
        <NativeTextInput
          style={[tw.style('flex-1 font-regular'), inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={THEME.colors.neutral[400]}
          secureTextEntry={!isPasswordVisible}
          {...props}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={tw`p-1`}>
          {!isPasswordVisible ? (
            <Eye width={16} height={16} color={THEME.colors.neutral[950]} />
          ) : (
            <EyeOff width={16} height={16} color={THEME.colors.neutral[950]} />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default PasswordInput;
