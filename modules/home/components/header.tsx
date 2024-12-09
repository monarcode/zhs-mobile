import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Avatar } from '~/components/shared';
import tw from '~/tw';

export const HomeHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={tw.style('bg-primary-darker justify-end pb-5 px-5 min-h-[50px]', {
        paddingTop: top + 10,
      })}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center gap-x-2`}>
          <View
            style={tw`h-9 aspect-square rounded-full overflow-hidden justify-center items-center bg-white`}>
            <Avatar source="" alt="Omorodion" fallback="D.O" />
          </View>

          <View>
            <Text style={tw`text-sm text-white font-semibold`}>Mr Omorodion</Text>
            <Text style={tw`text-[10px] text-white font-regular`}>Hello, Good afternoon Sir.</Text>
          </View>
        </View>

        <Pressable style={tw`rounded-full border border-white py-3 px-4`}>
          <Text style={tw`text-xs text-white font-regular`}>Switch Account</Text>
        </Pressable>
      </View>
    </View>
  );
};
