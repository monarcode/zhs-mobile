import React from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { ViewStyle } from 'react-native';

import { Text, View } from '../shared';
import PasswordInput, { PasswordInputProps } from '../shared/password-input';

import tw from '~/tw';

interface FormPasswordInputProps<TFieldValues extends FieldValues>
  extends Omit<PasswordInputProps, 'value' | 'onChangeText' | 'secureTextEntry'> {
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
 * FormPasswordInput is a custom password input component that integrates with React Hook Form.
 * It wraps the PasswordInput component and adds form control functionality.
 *
 * @template TFieldValues - The type of the form values
 * @param {FormPasswordInputProps<TFieldValues>} props - The component props
 * @param {FieldPath<TFieldValues>} props.name - The name of the form field, must match key in zod schema
 * @param {Control<TFieldValues>} props.control - The form control object from React Hook Form
 * @param {any} [props.rules] - Validation rules for the input
 * @param {string} [props.errorMessage] - Custom error message to display
 * @param {string} props.label - Label for the input field
 * @param {boolean} [props.required] - Whether the field is required
 * @param {ViewStyle} [props.containerStyle] - Style for the input container
 * @param {Omit<PasswordInputProps, 'value' | 'onChangeText'>} props - Other props inherited from PasswordInput component
 *
 * @returns {React.ReactElement} A controlled password input component
 *
 * @example
 * ```tsx
 * import { useForm } from 'react-hook-form';
 * import FormPasswordInput from './FormPasswordInput';
 *
 * function LoginForm() {
 *   const { control } = useForm();
 *
 *   return (
 *     <FormPasswordInput
 *       name="password"
 *       control={control}
 *       label="Password"
 *       placeholder="Enter your password"
 *       required
 *       rules={{
 *         required: 'Password is required',
 *         minLength: {
 *           value: 8,
 *           message: 'Password must be at least 8 characters'
 *         },
 *         pattern: {
 *           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
 *           message: 'Password must contain uppercase, lowercase and numbers'
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 */
function FormPasswordInput<TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  errorMessage,
  label,
  required = false,
  containerStyle,
  ...inputProps
}: FormPasswordInputProps<TFieldValues>): React.ReactElement {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={tw`w-full gap-y-1`}>
          <PasswordInput
            value={value}
            onChangeText={onChange}
            label={label}
            required={required}
            containerStyle={containerStyle}
            {...inputProps}
          />
          {error && <Text style={tw`text-sm text-red-500`}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default FormPasswordInput;
