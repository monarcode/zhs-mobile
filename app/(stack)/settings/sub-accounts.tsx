import { Button, Text, View } from 'components/shared';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '~/tw';

const SubAccounts = () => {
  return (
    <SafeAreaView edges={['bottom']} style={tw`flex-1 bg-bg`}>
      <View style={tw`flex-1 px-5 pt-5 gap-y-2`}>
        <View style={tw`flex-row items-center p-3 bg-white rounded-2xl gap-x-4`}>
          <View style={tw`rounded-full size-14 bg-neutral-200`} />
          <View style={tw`gap-y-1`}>
            <Text style={tw`text-base font-medium`}>Ugbah Junior</Text>
            <Text style={tw`text-xs text-neutral-500`}>Child</Text>
          </View>
        </View>

        <View style={tw`flex-row items-center p-3 bg-white rounded-2xl gap-x-4`}>
          <View style={tw`rounded-full size-14 bg-neutral-200`} />
          <View style={tw`gap-y-1`}>
            <Text style={tw`text-base font-medium`}>Jane Doe</Text>
            <Text style={tw`text-xs text-neutral-500`}>Ward</Text>
          </View>
        </View>

        <View style={tw`flex-row items-center p-3 bg-white rounded-2xl gap-x-4`}>
          <View style={tw`rounded-full size-14 bg-neutral-200`} />
          <View style={tw`gap-y-1`}>
            <Text style={tw`text-base font-medium`}>Ugbah Emmanuella</Text>
            <Text style={tw`text-xs text-neutral-500`}>Ward</Text>
          </View>
        </View>

        <Button containerStyle={tw`mt-auto mb-4`}>Add New Accounts</Button>
      </View>
    </SafeAreaView>
  );
};
export default SubAccounts;
