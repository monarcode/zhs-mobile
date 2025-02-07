import React from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { ViewStyle } from 'react-native';

import { Text, View } from '../shared';
import TextInput, { TextInputProps } from '../shared/input';

import tw from '~/tw';

interface FormTextInputProps<TFieldValues extends FieldValues>
  extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  /** Name of the form field, must match key in zod schema */
  name: FieldPath<TFieldValues>;
  /** Form control object from React Hook Form */
  control: Control<TFieldValues>;
  /** Validation rules */
  rules?: any;
  /** Custom error message to display */
  errorMessage?: string;
  /** Label for the input field */
  label: string;
  /** Whether the field is required */
  required?: boolean;
  /** Style for the input container */
  containerStyle?: ViewStyle;
}

/**
 * FormTextInput is a custom text input component that integrates with React Hook Form.
 * It wraps the TextInput component and adds form control functionality.
 *
 * @template TFieldValues - The type of the form values
 * @param {FormTextInputProps<TFieldValues>} props - The component props
 * @param {FieldPath<TFieldValues>} props.name - The name of the form field, must match key in zod schema
 * @param {Control<TFieldValues>} props.control - The form control object from React Hook Form
 * @param {any} [props.rules] - Validation rules for the input
 * @param {string} [props.errorMessage] - Custom error message to display
 * @param {string} props.label - Label for the input field
 * @param {boolean} [props.required] - Whether the field is required
 * @param {ViewStyle} [props.containerStyle] - Style for the input container
 * @param {Omit<TextInputProps, 'value' | 'onChangeText'>} props - Other props inherited from TextInput component
 *
 * @returns {React.ReactElement} A controlled text input component
 *
 * @example
 * ```tsx
 * import { useForm } from 'react-hook-form';
 * import FormTextInput from './FormTextInput';
 *
 * function LoginForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <FormTextInput
 *       name="email"
 *       control={control}
 *       label="Email"
 *       placeholder="Enter your email"
 *       required
 *       rules={{
 *         required: 'Email is required',
 *         pattern: {
 *           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
 *           message: 'Invalid email address'
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 */
function FormTextInput<TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  errorMessage,
  label,
  required = false,
  containerStyle,
  ...inputProps
}: FormTextInputProps<TFieldValues>): React.ReactElement {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={tw`w-full gap-y-1`}>
          <TextInput
            value={value}
            onChangeText={onChange}
            label={label}
            required={required}
            containerStyle={containerStyle}
            {...inputProps}
          />
          {error && <Text style={tw`text-xs text-red-700`}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default FormTextInput;
