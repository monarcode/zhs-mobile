import { Stack } from 'expo-router';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View } from '~/components/shared';
import {
  AdsSlider,
  AvailableDoctors,
  HomeActions,
  HomeHeader,
  HospitalsNearYou,
  LabsNearYou,
  PharmaciesNearYou,
  Specialties,
} from '~/modules/home/components';
import { HomeCarousel } from '~/modules/home/components/carousel';
import tw from '~/tw';

const Home = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={tw`bg-[#f6f6f6]`}
        showsVerticalScrollIndicator={false}>
        <View style={tw`bg-[#EBEBF0] pt-5 pb-8`}>
          <HomeCarousel />
        </View>

        <View
          style={{
            paddingVertical: 20,
            marginBottom: bottom + 100,
            gap: 28,
          }}>
          <HomeActions />
          <Specialties />
          <AvailableDoctors />
          <HospitalsNearYou />

          <View style={{ marginBottom: 20 }}>
            <AdsSlider />
          </View>

          <LabsNearYou />
          <PharmaciesNearYou />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
