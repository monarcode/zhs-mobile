import { Pressable } from 'react-native';

import UserIcon from '~/assets/svg/avatar.svg';
import { Text, View } from '~/components/shared';
import { Slider, SliderItem } from '~/components/slider';
import tw from '~/tw';

export const HomeCarousel = () => {
  return (
    <Slider showPagination>
      <SliderItem style={tw`justify-between`}>
        <UserIcon />

        <View style={tw`gap-1`}>
          <Text style={tw`font-semibold text-xs`}>Complete your profile</Text>
          <Text style={tw`font-medium text-[10px] leading-snug`}>
            Complete and review your profile, add your professional certification documents so
            patients can easily find you
          </Text>
        </View>

        <Pressable style={tw`bg-primary self-start px-[18px] py-2.5 rounded-[20px]`}>
          <Text style={tw`font-medium text-xs text-white`}>Edit Profile</Text>
        </Pressable>
      </SliderItem>

      <SliderItem style={tw`justify-between`}>
        <UserIcon />

        <View style={tw`gap-1`}>
          <Text style={tw`font-semibold text-xs`}>Complete your profile</Text>
          <Text style={tw`font-medium text-[10px] leading-snug`}>
            Complete and review your profile, add your professional certification documents so
            patients can easily find you
          </Text>
        </View>

        <Pressable style={tw`bg-primary self-start px-[18px] py-2.5 rounded-[20px]`}>
          <Text style={tw`font-medium text-xs text-white`}>Edit Profile</Text>
        </Pressable>
      </SliderItem>

      <SliderItem style={tw`justify-between`}>
        <UserIcon />

        <View style={tw`gap-1`}>
          <Text style={tw`font-semibold text-xs`}>Complete your profile</Text>
          <Text style={tw`font-medium text-[10px] leading-snug`}>
            Complete and review your profile, add your professional certification documents so
            patients can easily find you
          </Text>
        </View>

        <Pressable style={tw`bg-primary self-start px-[18px] py-2.5 rounded-[20px]`}>
          <Text style={tw`font-medium text-xs text-white`}>Edit Profile</Text>
        </Pressable>
      </SliderItem>

      <SliderItem style={tw`justify-between`}>
        <UserIcon />

        <View style={tw`gap-1`}>
          <Text style={tw`font-semibold text-xs`}>Complete your profile</Text>
          <Text style={tw`font-medium text-[10px] leading-snug`}>
            Complete and review your profile, add your professional certification documents so
            patients can easily find you
          </Text>
        </View>

        <Pressable style={tw`bg-primary self-start px-[18px] py-2.5 rounded-[20px]`}>
          <Text style={tw`font-medium text-xs text-white`}>Edit Profile</Text>
        </Pressable>
      </SliderItem>
    </Slider>
  );
};
