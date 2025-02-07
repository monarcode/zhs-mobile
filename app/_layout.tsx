import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PortalHost } from '@rn-primitives/portal';
import { useFonts } from 'expo-font';
import { router, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { View } from '~/components/shared';
import { useOnboarding } from '~/store/onboarding/use-onboarding';
import tw from '~/tw';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('~/assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('~/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-SemiBold': require('~/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-Light': require('~/assets/fonts/PlusJakartaSans-Light.ttf'),
    'PlusJakartaSans-Medium': require('~/assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Root />;
}

function Root() {
  const firstTimeUser = useOnboarding((state) => state.firstTimeUser);

  useEffect(() => {
    if (firstTimeUser) {
      router.push('/onboarding');
    } else {
      router.push('/(tabs)');
    }
  }, [firstTimeUser]);

  return (
    <KeyboardProvider>
      <GestureHandlerRootView style={tw`flex-1`}>
        <BottomSheetModalProvider>
          <View style={tw`flex-1 bg-bg`}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(stack)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="booking" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
            <PortalHost />
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </KeyboardProvider>
  );
}
