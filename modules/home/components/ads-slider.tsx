import { ImageBackground } from 'expo-image';

import { Text, View } from '~/components/shared';
import { Slider, SliderItem } from '~/components/slider';
import tw from '~/tw';

export const AdsSlider = () => {
  return (
    <Slider>
      <SliderItem style={tw`bg-primary justify-center items-center relative flex-1 p-0`}>
        <ImageBackground source={require('~/assets/images/blob-2.png')} style={tw`w-full h-full`}>
          <View
            style={tw`absolute top-0 left-0 w-full h-full flex-row items-center justify-center`}>
            <Text style={tw`text-white font-regular`}>Advertise here</Text>
          </View>
        </ImageBackground>
      </SliderItem>
      <SliderItem style={tw`bg-primary justify-center items-center relative flex-1 p-0`}>
        <ImageBackground source={require('~/assets/images/blob-2.png')} style={tw`w-full h-full`}>
          <View
            style={tw`absolute top-0 left-0 w-full h-full flex-row items-center justify-center`}>
            <Text style={tw`text-white font-regular`}>Advertise here</Text>
          </View>
        </ImageBackground>
      </SliderItem>
    </Slider>
  );
};
