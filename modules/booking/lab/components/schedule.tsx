import type { Moment } from 'moment';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { AppointmentTime } from './time';

import Schedule from '~/assets/svg/book-appointment/date-range.svg';
import { Text, View } from '~/components/shared';
import { useLabAppointment } from '~/store/booking/use-lab-appointment';
import tw from '~/tw';

interface DayInfo {
  date: string;
  day: string;
  fullDate: Date;
}

export const ConsultationSchedule: React.FC = () => {
  const selectedDate = useLabAppointment((state) => state.date);
  const updateStore = useLabAppointment((state) => state.updateBookingDetails);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentWeek, setCurrentWeek] = useState<DayInfo[]>([]);

  useEffect(() => {
    const weekStart: Moment = moment(selectedDate).startOf('week');
    const weekDates: DayInfo[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate: Moment = weekStart.clone().add(i, 'days');
      weekDates.push({
        date: currentDate.format('D'),
        day: currentDate.format('ddd'),
        fullDate: currentDate.toDate(),
      });
    }

    setCurrentWeek(weekDates);
  }, [selectedDate]);

  const isSelectedDate = (dayDate: Date): boolean => {
    const currentDayMoment: Moment = moment(dayDate);
    const selectedMoment: Moment = moment(selectedDate);
    return currentDayMoment.isSame(selectedMoment, 'day');
  };

  const isWeekend = (date: Date): boolean => {
    const day = moment(date).day();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const getStyles = (dayDate: Date) => {
    const selected = isSelectedDate(dayDate);
    const weekend = isWeekend(dayDate);

    return {
      container: tw.style('flex-col items-center flex-1 h-[72px] rounded-lg justify-evenly', {
        'bg-primary': selected && !weekend,
        'bg-[#F2F2F7]': !selected && !weekend,
        'bg-[#C7C7CC]': weekend,
      }),
      text: tw.style('text-xs', {
        'text-white': selected && !weekend,
        'text-neutral-500': !selected && !weekend,
        'text-neutral-50': weekend,
      }),
    };
  };

  const setSelectedDate = (date: Date): void => {
    updateStore({ date });
  };

  const handleDateConfirm = (date: Date): void => {
    setShowCalendar(false);
    if (!isWeekend(date)) {
      setSelectedDate(date);
    }
  };

  const handleDateCancel = (): void => {
    setShowCalendar(false);
  };

  return (
    <View style={tw`gap-y-6 pb-8`}>
      <View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-sm font-semibold`}>Consultation Schedule</Text>

          <Pressable onPress={() => setShowCalendar(true)}>
            <Schedule />
          </Pressable>
        </View>

        <View style={tw`flex-row gap-x-1 mt-4`}>
          {currentWeek.map((day, index) => {
            const styles = getStyles(day.fullDate);
            const weekend = isWeekend(day.fullDate);

            return (
              <Pressable
                key={index}
                onPress={() => !weekend && setSelectedDate(day.fullDate)}
                style={styles.container}>
                <Text style={styles.text}>{day.day}</Text>
                <Text style={styles.text}>{day.date}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <AppointmentTime />

      <DatePicker
        modal
        open={showCalendar}
        date={selectedDate}
        onConfirm={handleDateConfirm}
        onCancel={handleDateCancel}
      />
    </View>
  );
};
