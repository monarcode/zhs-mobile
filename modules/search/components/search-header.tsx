import { TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchIcon from '~/assets/svg/icons/search-02.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

export const SearchHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={tw`pt-[${top}px] bg-primary-darker pb-8`}>
      <View style={tw`min-h-[50px] justify-center gap-y-5mt-2`}>
        <View style={tw`gap-y-2`}>
          <Text style={tw`mt-4 text-2xl font-semibold leading-none text-center text-white`}>
            Find the help you need
          </Text>
          <Text style={tw`text-xs leading-none text-center text-white`}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </View>

        <View style={tw`relative px-5`}>
          <TextInput
            style={tw`w-full pl-12 pr-4 text-sm leading-none items-center flex-row text-white rounded-2xl font-regular bg-white/10 h-[52px]`}
            placeholder="Search for doctors, labs, etc"
            placeholderTextColor="#fff"
          />

          <SearchIcon style={tw`absolute left-10 top-4`} />
        </View>
      </View>

      <View style={tw`h-8 w-5 absolute left-0 -bottom-8 bg-primary-darker z-[2]`} />
      <View style={tw`h-8 w-5 absolute left-0 -bottom-8 bg-bg rounded-tl-3xl z-[4]`} />
      <View style={tw`h-8 w-5 absolute right-0 -bottom-8 bg-primary-darker z-[2]`} />
      <View style={tw`h-8 w-5 absolute right-0 -bottom-8 bg-bg rounded-tr-3xl z-[4]`} />
    </View>
  );
};
