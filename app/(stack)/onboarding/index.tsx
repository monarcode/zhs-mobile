import { router, Stack } from 'expo-router';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View } from '~/components/shared';
import { OnboardingSlider } from '~/modules/onboarding/components/onboarding-slider';
import { useOnboarding } from '~/store/onboarding/use-onboarding';
import tw from '~/tw';

const slides = [
  {
    id: '1',
    title: 'Connect with Care, Anywhere',
    description:
      'Doctors, Hospitals, Labs, and Clinics, Right at Your Fingertips!. Your Health Hub on Demand',
    image: (
      <Image
        source={require('~/assets/images/onboarding/slide-1.png')}
        style={tw`w-60 h-60 rounded-full`}
      />
    ),
  },
  {
    id: '2',
    title: 'Smart Health Tracking & Records',
    description:
      'Keep your medical history, prescriptions, and test results in one secure place. Access your health journey anytime, anywhere.',
    image: (
      <Image
        source={require('~/assets/images/onboarding/slide-2.png')}
        style={tw`w-60 h-60 rounded-full`}
      />
    ),
  },
  {
    id: '3',
    title: 'Book & Manage Appointments',
    description:
      'Schedule visits, get reminders, and manage follow-ups seamlessly. Skip the waiting room with virtual consultations.',
    image: (
      <Image
        source={require('~/assets/images/onboarding/slide-3.png')}
        style={tw`w-60 h-60 rounded-full`}
      />
    ),
  },
];

const Onboarding = () => {
  const { top, bottom } = useSafeAreaInsets();
  const updateOnbaordingStore = useOnboarding((store) => store.setFirstTimeUser);

  const handleLastSlide = () => {
    updateOnbaordingStore(false);
    router.push('/(tabs)');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View
        style={tw.style('flex-1 bg-bg', {
          paddingTop: top + 10,
          paddingBottom: bottom + 10,
        })}>
        <OnboardingSlider slides={slides} onLastSlide={handleLastSlide} />
      </View>
    </>
  );
};

export default Onboarding;
