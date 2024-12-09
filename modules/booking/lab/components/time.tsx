import { Pressable } from 'react-native';

import { Text, View } from '~/components/shared';
import { useLabAppointment } from '~/store/booking/use-lab-appointment';
import tw from '~/tw';

const availableTimes = [
  {
    label: 'Morning Sessions',
    times: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'],
  },
  {
    label: 'Afternoon Sessions',
    times: ['12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
  },
  {
    label: 'Evening Sessions',
    times: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
  },
];

export const AppointmentTime = () => {
  const selectedTime = useLabAppointment((state) => state.time);
  const updateStore = useLabAppointment((state) => state.updateBookingDetails);

  return (
    <View style={tw`gap-y-3`}>
      {availableTimes.map(({ label, times }) => (
        <View key={label} style={tw`gap-y-2`}>
          <Text style={tw`text-sm font-medium`}>{label}</Text>

          <View style={tw`flex-row flex-wrap gap-x-2`}>
            {times.map((time) => (
              <Pressable
                onPress={() => updateStore({ time })}
                key={time}
                style={tw.style(
                  `bg-[#F2F2F7] p-3 rounded-lg flex-1`,
                  selectedTime === time ? 'bg-primary' : 'bg-[#F2F2F7]'
                )}>
                <Text
                  style={tw.style(
                    `text-xs text-center font-regular`,
                    selectedTime === time && 'text-white'
                  )}>
                  {time}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};
