import { Stack } from 'expo-router';

import { RouteHeader } from '~/components/route-header';

export default function SettingsLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="medical-profile"
          options={{ header: () => <RouteHeader route="Medical Profile" /> }}
        />
        <Stack.Screen
          name="sub-accounts"
          options={{ header: () => <RouteHeader route="Sub-Accounts" /> }}
        />
        <Stack.Screen
          name="security"
          options={{ header: () => <RouteHeader route="Security" /> }}
        />
        <Stack.Screen
          name="notifications"
          options={{ header: () => <RouteHeader route="Notifications" /> }}
        />
        <Stack.Screen
          name="contact-us"
          options={{ header: () => <RouteHeader route="Contact Us" /> }}
        />
        <Stack.Screen
          name="manage-password"
          options={{ header: () => <RouteHeader route="Manage Password" /> }}
        />
      </Stack>

      {/* disable parent header */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
    </>
  );
}
