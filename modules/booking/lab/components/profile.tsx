import { Image, ImageBackground } from 'expo-image';
import { Pressable } from 'react-native';

import EcgHeartIcon from '~/assets/svg/book-appointment/ecg_heart.svg';
import WebsiteIcon from '~/assets/svg/book-appointment/language.svg';
import MapIcon from '~/assets/svg/book-appointment/map.svg';
import RingVolumeIcon from '~/assets/svg/book-appointment/ring_volume.svg';
import Schedule from '~/assets/svg/book-appointment/schedule.svg';
import FavoriteIcon from '~/assets/svg/favorite-stroke.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

export const LabProfile = () => {
  return (
    <View style={tw`gap-y-[50px]`}>
      <View style={tw`relative`}>
        <View style={tw`bg-neutral-100 rounded-lg h-[150px] w-full overflow-hidden`}>
          <ImageBackground
            style={tw`w-full h-full`}
            source={require('../../../../assets/images/lab-logo.png')}
            contentFit="contain"
          />
        </View>
        <View style={tw`h-20 w-20 absolute -bottom-10 left-3 rounded-full bg-white`}>
          <Image
            style={tw`h-full w-full aspect-square rounded-full`}
            source={require('../../../../assets/images/lab-logo.png')}
            contentFit="cover"
          />
        </View>
      </View>

      <View style={tw`gap-y-4`}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-base font-semibold`}>Scantrik Diagnostics</Text>
          <Pressable>
            <FavoriteIcon />
          </Pressable>
        </View>

        <View style={tw`flex-row items-center gap-x-2`}>
          <EcgHeartIcon />
          <Text style={tw`text-xs font-medium`}>Work Days:</Text>
          <Text style={tw`text-xs font-medium`}>Mon - Sat</Text>
        </View>
        <View style={tw`flex-row items-center gap-x-2`}>
          <Schedule />
          <Text style={tw`text-xs font-medium`}>Work Hours:</Text>
          <Text style={tw`text-xs font-medium`}>8:00am - 6:00pm</Text>
        </View>
        <View style={tw`flex-row items-center gap-x-2`}>
          <RingVolumeIcon />
          <Text style={tw`text-xs font-medium`}>Phone Number:</Text>
          <Text style={tw`text-xs font-medium`}>+234-8153116645</Text>
        </View>
        <View style={tw`flex-row items-center gap-x-2`}>
          <MapIcon />
          <Text style={tw`text-xs font-medium`}>Location:</Text>
          <Text style={tw`text-xs font-medium`}>Open in Maps</Text>
        </View>
        <View style={tw`flex-row items-center gap-x-2`}>
          <WebsiteIcon />
          <Text style={tw`text-xs font-medium`}>Website:</Text>
          <Text style={tw`text-xs font-medium`}>https://scantrikdiagnostics.com</Text>
        </View>
      </View>
    </View>
  );
};
