import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, View } from 'react-native';

import { Text } from '~/components/shared';
import tw from '~/tw';

const actions = [
  {
    label: 'Doctor consultation',
    href: '/doctor-consultation',
    icon: require('~/assets/images/actions/doctor.png'),
  },
  {
    label: 'Hospital or Clinic',
    href: '/booking/clinic-appointment',
    icon: require('~/assets/images/actions/hospital.png'),
  },
  {
    label: 'Labr. Services',
    href: '/booking/lab-appointment',
    icon: require('~/assets/images/actions/lab.png'),
  },
  {
    label: 'Pharmacy Near You',
    href: '/booking/clinic-appointment',
    icon: require('~/assets/images/actions/pharmacy.png'),
  },
];

export const HomeActions = () => {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <Pressable
      onPress={() => router.push(item.href)}
      style={[tw`rounded-xl aspect-square w-[6.2rem] bg-white pl-3 pr-2 pt-3 overflow-hidden`]}>
      <Text style={tw.style('text-black text-xs font-regular tracking-wide')}>{item.label}</Text>

      <Image
        source={item.icon}
        style={tw`size-14 absolute -bottom-1 right-0`}
        contentFit="contain"
      />
    </Pressable>
  );

  return (
    <View style={tw`gap-y-1`}>
      <Text style={tw`px-5 font-semibold text-base`}>Book a service</Text>

      <FlatList
        data={actions}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-3 px-5`}
        decelerationRate="fast"
      />
    </View>
  );
};
