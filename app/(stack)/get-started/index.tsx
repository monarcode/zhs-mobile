import { Button, Text, View } from 'components/shared';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router, Stack } from 'expo-router';

import tw from '~/tw';

const GetStarted = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={tw`flex-1 bg-bg`}>
        <View style={tw`w-full h-[60%] relative`}>
          <Image
            source={require('~/assets/images/onboarding-bg.png')}
            style={tw`absolute w-full h-full z-[1]`}
          />
          <LinearGradient
            colors={[
              'transparent',
              'transparent',
              'rgba(243, 245, 250, 0.448)',
              'rgb(243, 245, 250)',
            ]}
            style={tw`absolute w-full h-full z-[2]`}
          />
        </View>
        <View style={tw`flex-1 px-5 py-5`}>
          <Text style={tw`text-3xl font-medium text-center`}>ZHS</Text>
          <Text style={tw`mt-2 text-sm text-center text-neutral-600`}>
            Lorem ipsum dolor sit amet consectetur. Sed etiam elementum scelerisque.
          </Text>

          <View style={tw`my-auto gap-y-2`}>
            <Button onPress={() => router.push('/(auth)/register')}>Create an account</Button>
            <Button variant="outline" onPress={() => router.push('/(auth)/login')}>
              Sign in
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
export default GetStarted;
