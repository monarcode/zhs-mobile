import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, ViewStyle } from 'react-native';

import FavoriteIcon from '~/assets/svg/icons/favourite-fill.svg';
import CashIcon from '~/assets/svg/icons/payment-02.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

type Props = {
  doctor: any;
  containerViewProps?: {
    style?: ViewStyle | ViewStyle[];
  };
};

export const DoctorCard = ({ doctor, containerViewProps }: Props) => {
  return (
    <View
      style={[
        tw.style('h-[195px] bg-white pb-0 rounded-2xl w-[170px] relative overflow-hidden'),
        containerViewProps?.style,
      ]}>
      <ImageBackground
        source={require(`~/assets/images/doctors/doctor-1.png`)}
        contentFit="cover"
        transition={300}
        style={tw`w-full h-full`}
      />

      <View style={tw`absolute top-0 left-0 w-full h-full`}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={tw`h-full w-full flex-1 p-3 relative`}>
          <Pressable style={tw`ml-auto`}>
            <FavoriteIcon />
          </Pressable>

          <View style={tw`mt-auto gap-y-1`}>
            <Text style={tw`text-white font-medium text-sm`} numberOfLines={1}>
              {doctor.name}
            </Text>
            <Text style={tw`text-white opacity-55 text-xs font-regular`} numberOfLines={1}>
              {doctor.role}
            </Text>
            <View style={tw`flex-row items-center gap-x-2`}>
              <CashIcon />
              <Text style={tw`text-white text-xs font-regular`}>
                {formatNaira(doctor.rates.minimum)} - {formatNaira(doctor.rates.maximum)} /hr
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
