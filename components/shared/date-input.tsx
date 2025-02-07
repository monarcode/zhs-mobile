import { Calendar2 } from 'iconsax-react-native';
import moment from 'moment';
import { FC, useState } from 'react';
import { Pressable } from 'react-native';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';

import { Text, View } from '~/components/shared';
import tw from '~/tw';

export interface DateInputProps extends Omit<DatePickerProps, 'modal' | 'open' | 'date' | 'mode'> {
  date?: Date;
  placeholder?: string;
}

const DateInput: FC<DateInputProps> = ({
  onConfirm,
  date,
  onCancel = 'Select a date',
  placeholder = 'Select a date',
  ...props
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleConfirm = (date: Date): void => {
    onConfirm && onConfirm(date);
    setShowCalendar(false);
  };

  const handleCancel = (): void => {
    setShowCalendar(false);
    onCancel && typeof onCancel === 'function' && onCancel();
  };

  return (
    <View style={tw`relative z-[1] w-full`}>
      <Pressable style={tw`input`} onPress={() => setShowCalendar(true)}>
        <Text style={tw.style(`input-placeholder`, date && 'text-neutral-900')}>
          {/* {selectedDate ? moment(selectedDate).format('DD/MM/YYYY') : placeholder} */}
          {date ? moment(date).format('DD/MM/YYYY') : placeholder}
        </Text>

        <Calendar2 style={tw`ml-auto`} size={22} />
      </Pressable>

      <DatePicker
        date={date ?? new Date()}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        open={showCalendar}
        mode="date"
        modal
        {...props}
      />
    </View>
  );
};
export default DateInput;
