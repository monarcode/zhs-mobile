import { Stack } from 'expo-router';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { RouteHeader } from '~/components/route-header';
import { View } from '~/components/shared';
import LoginForm from '~/modules/auth/components/login-form';
import tw from '~/tw';

const LoginScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, header: () => <RouteHeader route="Sign in to continue" /> }}
      />

      <TouchableWithoutFeedback style={tw`flex-1`} onPress={() => Keyboard.dismiss()}>
        <View style={tw`flex-1 bg-bg px-5 py-4`}>
          <LoginForm />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default LoginScreen;
