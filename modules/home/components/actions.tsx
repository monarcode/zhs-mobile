import { useRouter } from 'expo-router';
import { FlatList, Pressable, View } from 'react-native';

import Biotech from '~/assets/svg/biotech.svg';
import HomeHealth from '~/assets/svg/home_health.svg';
import Stetoscope from '~/assets/svg/stethoscope.svg';
import { Text } from '~/components/shared';
import { THEME } from '~/constants';
import tw from '~/tw';

const actions = [
  {
    label: 'Book consultation with a doctor',
    href: '/booking/docter-consultation',
    bg: '#0040DD',
    icon: <Stetoscope height={24} width={24} />,
  },
  {
    label: 'Book a hospital/clinic appointment',
    href: '/booking/clinic-appointment',
    bg: '#0071A4',
    icon: <HomeHealth height={24} width={24} />,
  },
  {
    label: 'Book a Labs/diagnostic clinic appointment',
    href: '/booking/lab-appointment',
    bg: '#3634A3',
    icon: <Biotech height={24} width={24} />,
  },
  {
    label: 'Find a pharmacy near you',
    href: '/booking/clinic-appointment',
    bg: '#248A3D',
    icon: <Biotech height={24} width={24} />,
  },
];

export const HomeActions = () => {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <Pressable
      onPress={() => router.push(item.href)}
      style={[
        tw`justify-center rounded-[6px] h-[70px] w-[110px] px-[6px]`,
        { backgroundColor: item.bg },
      ]}>
      <View style={tw`items-center space-y-[6px]`}>
        {item.icon}
        <Text
          style={tw.style('text-white text-[8px] leading-[12px] text-center', {
            fontFamily: THEME.fontFamily.semiBold,
          })}>
          {item.label}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={actions}
        renderItem={renderItem}
        keyExtractor={(item) => item.bg}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-2 px-5`}
        decelerationRate="fast"
      />
    </View>
  );
};
