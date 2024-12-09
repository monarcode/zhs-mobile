import { router } from 'expo-router';
import { Pressable } from 'react-native';

import ChevronRight from '~/assets/svg/chevron-right.svg';
import { Text, View } from '~/components/shared';
import { useLabAppointment } from '~/store/booking/use-lab-appointment';
import tw from '~/tw';

export const Services = () => {
  const selectedServices = useLabAppointment((state) => state.labServices);

  return (
    <View style={tw`gap-y-4 pb-8`}>
      <View>
        <Text style={tw`text-sm font-semibold`}>Choose Service</Text>
      </View>

      {selectedServices.length === 0 ? (
        <Pressable
          style={tw`bg-[#F2F2F7] p-4 rounded-lg flex-row items-center`}
          onPress={() => router.push('/booking/select-service')}>
          <Text style={tw`text-xs leading-5 flex-1`}>
            X-ray, Malaria-test, HIV/AIDS test, X-ray, Malaria-test, HIV/AIDS test
          </Text>

          <View>
            <ChevronRight />
          </View>
        </Pressable>
      ) : (
        <View style={tw`gap-y-1`}>
          {selectedServices.map((service) => (
            <Pressable
              key={service}
              style={tw`bg-[#F2F2F7] p-4 rounded-lg flex-row items-center`}
              onPress={() => router.push('/booking/select-service')}>
              <Text style={tw`text-xs leading-5 flex-1`}>{service}</Text>

              <View>
                <ChevronRight />
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};
