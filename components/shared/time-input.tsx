import { Clock } from 'iconsax-react-native';
import moment from 'moment';
import { FC, useState } from 'react';
import { Pressable } from 'react-native';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';

import { Text, View } from '~/components/shared';
import tw from '~/tw';

export interface TimeInputProps extends Omit<DatePickerProps, 'modal' | 'open' | 'date' | 'mode'> {
  date?: Date;
  placeholder?: string;
}

const TimeInput: FC<TimeInputProps> = ({
  onConfirm,
  date,
  onCancel,
  placeholder = 'Select a time',
  ...props
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleConfirm = (date: Date): void => {
    onConfirm && onConfirm(date);
    setShowCalendar(false);
  };

  const handleCancel = (): void => {
    setShowCalendar(false);
    onCancel && onCancel();
  };

  return (
    <View style={tw`relative z-[1] w-full`}>
      <Pressable style={tw`input`} onPress={() => setShowCalendar(true)}>
        <Text style={tw.style(`input-placeholder`, date && 'text-neutral-900')}>
          {date ? moment(date).format('h:mm a') : placeholder}
        </Text>

        <Clock style={tw`ml-auto`} size={22} />
      </Pressable>

      <DatePicker
        date={date ?? new Date()}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        open={showCalendar}
        mode="time"
        modal
        {...props}
      />
    </View>
  );
};
export default TimeInput;
