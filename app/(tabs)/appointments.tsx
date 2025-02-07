import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Calendar, Calendar1, CloseCircle, DocumentText, Star } from 'iconsax-react-native';
import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';

import { AnimatedTabs } from '~/components/animated-tabs';
import { RouteHeader } from '~/components/route-header';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const tabs = [
  {
    key: 'upcoming',
    label: 'Upcoming',
    icon: <Calendar variant="Linear" />,
  },
  {
    key: 'complete',
    label: 'Complete',
    icon: <DocumentText variant="Linear" />,
  },
  {
    key: 'cancelled',
    label: 'Cancelled',
    icon: <CloseCircle variant="Linear" />,
  },
];

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Appointment ${i + 1}`,
}));

type AppointmentCardProps = {
  onPress: () => void;
};

const AppointmentCard = ({ onPress }: AppointmentCardProps) => {
  return (
    <Pressable onPress={onPress} style={tw`h-auto bg-white rounded-3xl p-[18px] relative gap-y-5`}>
      <View style={tw`flex-row gap-x-2`}>
        <Animated.View style={tw`overflow-hidden rounded-lg size-20`} sharedTransitionTag="side">
          <Animated.Image
            source={require('~/assets/images/appointmnt.png')}
            style={tw`w-full h-full`}
            sharedTransitionTag="apt-dp"
          />
        </Animated.View>

        <View style={tw`justify-between flex-1 py-1`}>
          <View>
            <Animated.Text sharedTransitionTag="name" style={tw`text-lg font-medium`}>
              Dr. John Doe
            </Animated.Text>
            <Text style={tw`text-xs font-regular text-neutral-400`}>Dentist - UBTH</Text>
          </View>

          <View style={tw`flex-row items-end gap-1 bg-go`}>
            <Star variant="Bold" size={18} color="#EABB1E" />
            <Text style={tw`text-xs font-medium`}>4.5</Text>
          </View>
        </View>
      </View>

      <View style={tw`flex-row items-center gap-2`}>
        <Calendar1 variant="TwoTone" size={20} />
        <Text style={tw`leading-none text-xs font-medium pt-0.5 tracking-[0.18px]`}>
          23 March , 2024 by 10:30 am
        </Text>
      </View>

      <View style={tw`absolute bg-purple-600 rounded-full size-3 top-5 right-5`} />
    </Pressable>
  );
};

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const renderItem = () => {
    return <AppointmentCard onPress={() => router.push('/appointment-details')} />;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <RouteHeader route="Appointments" showBackButton={false} />,
        }}
      />

      <View style={tw`flex-1 px-3 pt-5 bg-bg gap-y-4`}>
        <AnimatedTabs items={tabs} activeKey={activeTab} onChange={setActiveTab} />
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={tw`gap-y-4 rounded-2xl pb-42`}
          style={tw`mx-2 rounded-2xl`}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <StatusBar style="light" />
    </>
  );
};

export default Appointments;
