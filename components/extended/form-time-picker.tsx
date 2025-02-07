import React from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

import { DateInputProps } from '../shared/date-input';
import TimeInput from '../shared/time-input';

import { Text, View } from '~/components/shared';
import tw from '~/tw';

export interface FormTimePickerProps<TFieldValues extends FieldValues>
  extends Omit<DateInputProps, 'onValueChange' | 'value'> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  rules?: any;
  errorMessage?: string;
  label: string;
  required?: boolean;
}

function FormTimePicker<TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  errorMessage,
  placeholder,
  label,
  required = false,
  ...rest
}: FormTimePickerProps<TFieldValues>): React.ReactElement {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <View style={tw`gap-y-1`}>
            {label && (
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-sm font-regular`}>{label}</Text>
                {required && <Text style={{ color: '#f60000' }}>*</Text>}
              </View>
            )}

            <TimeInput
              date={value}
              onConfirm={(time) => {
                onChange(time);
              }}
            />

            {(error || errorMessage) && (
              <Text style={tw`text-red-700 text-xs font-regular pl-1 tracking-wide`}>
                {error?.message || errorMessage}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}
export default FormTimePicker;
