import { Stack } from 'expo-router';

import { RouteHeader } from '~/components/route-header';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const More = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <RouteHeader route="More" showBackButton={false} />,
        }}
      />
      <View style={tw`flex-1 justify-center items-center px-5`}>
        <Text>More</Text>
      </View>
    </>
  );
};

export default More;
