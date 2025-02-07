import { Text, View } from 'components/shared';
import { router } from 'expo-router';
import { Pressable } from 'react-native';
import { ChevronRight } from 'react-native-feather';

import tw from '~/tw';

const Security = () => {
  return (
    <View style={tw`p-5 flex-1 bg-bg`}>
      <Pressable
        onPress={() => router.push('/settings/manage-password')}
        style={tw`flex-row justify-between items-center rounded-xl`}>
        <View style={tw`gap-y-0`}>
          <Text style={tw`text-base`}>Password</Text>
          <Text style={tw`text-xs text-neutral-500`}>manage your account password</Text>
        </View>

        <ChevronRight />
      </Pressable>
    </View>
  );
};
export default Security;
