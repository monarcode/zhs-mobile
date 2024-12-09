import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchIcon from '~/assets/svg/search-lens.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

export const SearchHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`pt-[${top}px] bg-primary-darker`}>
        <View style={tw`min-h-[50px] justify-center gap-y-1.5 pb-5 mt-2`}>
          <Text style={tw`text-center text-base font-semibold text-white leading-none`}>
            Find a Doctor
          </Text>
          <Text style={tw`text-center text-xs text-white leading-none`}>
            Search for Doctors, Hospitals, Labs & Clinics, Symptoms
          </Text>

          <View style={tw`px-5 relative`}>
            <TextInput
              style={tw`bg-white rounded-full w-full h-11 px-4 text-xs leading-none font-regular`}
              placeholder="Search"
              placeholderTextColor="#8E8E93"
            />

            <SearchIcon style={tw`absolute right-8 top-3`} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
