import { router } from 'expo-router';
import { ScrollView } from 'react-native';

import { Button } from '~/components/shared';
import {
  AboutLab,
  ConsultationSchedule,
  LabProfile,
  Services,
} from '~/modules/booking/lab/components';
import { useLabAppointment } from '~/store/booking/use-lab-appointment';
import tw from '~/tw';

const LabAppointment = () => {
  const store = useLabAppointment((state) => state);
  const isDisabled = !store.time || !store.date || !store.labServices.length;

  return (
    <ScrollView
      style={tw`flex-1`}
      contentContainerStyle={tw`p-6 gap-y-8 bg-[#fbfbfd] pb-16`}
      showsVerticalScrollIndicator={false}>
      <LabProfile />
      <AboutLab />
      <ConsultationSchedule />
      <Services />

      <Button disabled={isDisabled} onPress={() => router.push('/booking/payment-method')}>
        Book an Appointment
      </Button>
    </ScrollView>
  );
};

export default LabAppointment;
