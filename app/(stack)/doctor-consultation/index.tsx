import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from 'expo-router';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { Pressable } from 'react-native';

import FormDatePicker from '~/components/extended/form-date-picker';
import FormSelect from '~/components/extended/form-select';
import FormTimePicker from '~/components/extended/form-time-picker';
import { RouteHeader } from '~/components/route-header';
import { Button, Text, View } from '~/components/shared';
import {
  DoctorConsultationValidation,
  doctorConsultationValidation,
} from '~/modules/booking/doctor/validation';
import tw from '~/tw';

const dateOptions = [
  {
    label: 'Tomorrow',
    value: moment().add(1, 'days').toDate(),
  },
  {
    label: '3 days from now',
    value: moment().add(3, 'days').toDate(),
  },
  {
    label: '7 days from now',
    value: moment().add(7, 'days').toDate(),
  },
];

const timeOptions = [
  {
    label: '12:00 pm',
    value: moment().hour(12).minute(0).second(0).toDate(),
  },
  {
    label: '01:30 pm',
    value: moment().hour(13).minute(30).second(0).toDate(),
  },
  {
    label: '03:00 pm',
    value: moment().hour(15).minute(0).second(0).toDate(),
  },
  {
    label: '07:00 pm',
    value: moment().hour(19).minute(0).second(0).toDate(),
  },
];

const DoctorConsultation = () => {
  const form = useForm<DoctorConsultationValidation>({
    resolver: zodResolver(doctorConsultationValidation),
    mode: 'onChange',
  });

  const handleBookConsultation = (values: DoctorConsultationValidation) => {
    console.log(values);
  };

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <RouteHeader route="Consultation booking" />,
          headerShown: true,
        }}
      />

      <View style={tw`flex-1 p-5 gap-y-6 bg-bg`}>
        <FormSelect
          name="language"
          control={form.control}
          label="Select preferred language"
          options={[
            {
              label: 'English',
              value: 'English',
            },
            {
              label: 'French',
              value: 'Frenchd',
            },
          ]}
          placeholder="Select an option"
        />

        <View style={tw`gap-y-1`}>
          <FormDatePicker name="appointment_date" control={form.control} label="Appointment date" />

          <View style={tw`flex-row gap-x-1`}>
            {dateOptions.map((option, index) => (
              <Pressable
                style={tw`border border-[#E9ECF3] px-3 h-[34px] flex-row items-center justify-center self-start rounded-lg`}
                key={index}
                onPress={() => form.setValue('appointment_date', option.value)}>
                <Text style={tw`text-xs font-regular`}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={tw`gap-y-1`}>
          <FormTimePicker name="appointment_time" control={form.control} label="Choose Time" />

          <View style={tw`flex-row gap-x-1`}>
            {timeOptions.map((option, index) => (
              <Pressable
                style={tw`border border-[#E9ECF3] px-3 h-[34px] flex-row items-center justify-center self-start rounded-lg`}
                key={index}
                onPress={() => form.setValue('appointment_time', option.value)}>
                <Text style={tw`text-xs font-regular`}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={tw`mt-auto mb-4`}>
          <Button onPress={form.handleSubmit(handleBookConsultation)}>Book a consultation</Button>
        </View>
      </View>
    </>
  );
};
export default DoctorConsultation;
