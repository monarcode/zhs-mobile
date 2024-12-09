import { Stack } from 'expo-router';

import { RouteHeader } from '~/components/route-header';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const Wallet = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <RouteHeader route="Wallet" showBackButton={false} />,
        }}
      />

      <View style={tw`flex-1 justify-center items-center px-5`}>
        <Text>Wallet</Text>
      </View>
    </>
  );
};

export default Wallet;
