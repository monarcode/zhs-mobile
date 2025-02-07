import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Setting4 } from 'iconsax-react-native';
import { FlatList } from 'react-native';

import { RouteHeader } from '~/components/route-header';
import { View } from '~/components/shared';
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

const doctors = new Array(20).fill(doctor);

const AvailableDoctors = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <RouteHeader
              route="Available Doctors"
              action={{
                icon: <Setting4 color="#fff" size={20} />,
                onPress() {
                  console.log('Pressed');
                },
              }}
            />
          ),
          headerShown: true,
        }}
      />

      <View style={tw`bg-bg flex-1`}>
        <FlatList
          data={doctors}
          renderItem={({ item }) => (
            <DoctorCard doctor={item} containerViewProps={{ style: tw`flex-1 max-w-[48%]` }} />
          )}
          keyExtractor={(_, idx) => idx.toString()}
          contentContainerStyle={tw`gap-y-3 pb-16`}
          columnWrapperStyle={tw`justify-between p-0`}
          showsHorizontalScrollIndicator={false}
          style={tw`px-5 pt-5`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <StatusBar style="light" />
    </>
  );
};
export default AvailableDoctors;
