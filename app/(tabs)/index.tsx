import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
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
} from '~/modules/home/components';
import { HomeCarousel } from '~/modules/home/components/carousel';
import tw from '~/tw';

const Home = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={tw`bg-bg`}
        showsVerticalScrollIndicator={false}>
        <View style={tw`py-3`}>
          <HomeCarousel />
        </View>

        <View
          style={{
            paddingVertical: 20,
            marginBottom: bottom + 100,
            gap: 28,
          }}>
          <HomeActions />
          <AvailableDoctors />
          <HospitalsNearYou />
          <LabsNearYou />
          <PharmaciesNearYou />

          <View style={{ marginBottom: 0 }}>
            <AdsSlider />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
