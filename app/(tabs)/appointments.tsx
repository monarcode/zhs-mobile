import { Stack } from 'expo-router';

import { RouteHeader } from '~/components/route-header';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const Appointments = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <RouteHeader route="Appointments" showBackButton={false} />,
        }}
      />
      <View style={tw`flex-1 justify-center items-center px-5`}>
        <Text>Appointments</Text>
      </View>
    </>
  );
};

export default Appointments;
