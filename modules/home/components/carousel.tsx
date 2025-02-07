import { Image } from 'expo-image';

import { Text, View } from '~/components/shared';
import { Slider, SliderItem } from '~/components/slider';
import tw from '~/tw';

export const HomeCarousel = () => {
  return (
    <Slider showPagination>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <SliderItem key={index} style={tw`relative p-0 rounded-2xl bg-transparent`}>
            <View
              style={tw`absolute top-0 left-0 z-[1] h-[92%] w-full bg-primary rounded-2xl mt-4`}>
              <View style={tw`gap-1 p-6 z-[1]`}>
                <Text style={tw`font-semibold text-lg text-white`}>Complete your profile</Text>
                <Text style={tw`font-light text-xs leading-snug text-white w-1/2`}>
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </View>
            </View>

            <View style={tw`h-full w-full absolute bottom-0 right-0 z-0`}>
              <Image
                source={require('~/assets/images/blob.png')}
                style={tw`w-3/5 h-[90%] absolute ml-40 mt-4`}
              />
              <Image
                source={require('~/assets/images/skide-1.png')}
                style={tw`w-[70%] h-full ml-auto mr-0`}
                contentFit="cover"
              />
            </View>
          </SliderItem>
        ))}
    </Slider>
  );
};
