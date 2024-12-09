import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { BottomTab } from '~/components/layout/bottom-tab';

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <BottomTab {...props} />;
};

const TabsLayout = () => {
  return (
    <>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          headerShown: false,
          animation: 'shift',
        }}
        tabBar={CustomBottomTabs}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="appointments"
          options={{
            title: 'Appt.',
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: 'Wallet',
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: 'More',
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
