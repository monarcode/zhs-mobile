import React, { ReactNode } from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Text } from './text';

import { THEME } from '~/constants/theme';
import tw from '~/tw';

/**
 * Props for the TextInput component.
 */
export type TextInputProps = NativeTextInputProps & {
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
  /** Optional label text to display above the input */
  label?: string;
  /** Callback function called when the input is focused */
  onFocus?: () => void;
  /** Callback function called when the input loses focus */
  onBlur?: () => void;
  required?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  placeholder = '',
  value,
  onChangeText,
  icon,
  style,
  containerStyle,
  inputStyle,
  label,
  onFocus,
  onBlur,
  required = false,
  ...props
}) => {
  return (
    <View style={[tw.style('w-auto rounded-lg gap-1.5'), style]}>
      {label && (
        <View style={{ flexDirection: 'row' }}>
          <Text style={tw`text-sm font-regular`}>{label}</Text>
          {required && <Text style={{ color: '#f60000' }}>*</Text>}
        </View>
      )}

      <View
        style={[tw.style('flex-row items-center h-12 rounded-xl px-3 bg-input'), containerStyle]}>
        {icon && <View style={tw`mr-[6px]`}>{icon}</View>}
        <NativeTextInput
          style={[tw.style('flex-1 font-regular'), inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={THEME.colors.neutral[400]}
          {...props}
        />
      </View>
    </View>
  );
};

export default TextInput;
