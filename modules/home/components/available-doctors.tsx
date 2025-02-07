import { router } from 'expo-router';
import { FlatList, Pressable } from 'react-native';

import { Text, View } from '~/components/shared';
import { DoctorCard } from '~/modules/available-doctors/components/doctor-card';
import tw from '~/tw';

const doctor = {
  id: 1,
  name: 'Dr. Priscilla Osolase',
  role: 'Gynaecologist',
  hospital: 'Lly Hospitals',
  status: 'Available',
  rating: '4.9',
  available_on: 'Mon-Fri',
  rates: {
    minimum: 2000,
    maximum: 10000,
  },
};

const doctors = new Array(5).fill(doctor);

export const AvailableDoctors = () => {
  return (
    <View style={tw`gap-y-1`}>
      <View style={tw`flex-row justify-between px-5`}>
        <Text style={tw`font-semibold text-base`}>Doctors available</Text>
      </View>

      <FlatList
        data={doctors}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-3 rounded-lg px-5`}
        ListFooterComponent={() => {
          return (
            <Pressable
              onPress={() => router.push('/available-doctors')}
              style={tw`w-36 rounded-xl bg-primary h-[195px] justify-center items-center flex-row`}>
              <Text style={tw`text-sm font-regular text-white`}>See more</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};
