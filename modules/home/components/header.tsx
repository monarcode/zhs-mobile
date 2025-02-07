import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Avatar } from '~/components/shared';
import tw from '~/tw';

export const HomeHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={tw.style('bg-bg justify-end pb-3 px-5 min-h-[50px]', {
        paddingTop: top + 10,
      })}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center gap-x-2`}>
          <View
            style={tw`h-12 aspect-square rounded-full overflow-hidden justify-center items-center bg-primary`}>
            <Avatar source="" alt="Omorodion" fallback="D.O" />
          </View>

          <View>
            <Text style={tw`text-lg text-black font-semibold`}>Hey Isioma,</Text>
            <Text style={tw`text-xs text-black font-light`}>what would you like to do today?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
