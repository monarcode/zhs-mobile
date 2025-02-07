import { Stack } from 'expo-router';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { RouteHeader } from '~/components/route-header';
import { View } from '~/components/shared';
import RegisterForm from '~/modules/auth/components/register-form';
import tw from '~/tw';

const RegisterScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, header: () => <RouteHeader route="Get Started" /> }}
      />

      <ScrollView style={tw`flex-1 bg-bg`} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback style={tw`flex-1 bg-bg`} onPress={Keyboard.dismiss}>
          <View style={tw`flex-1 bg-bg px-5 py-4`}>
            <RegisterForm />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
