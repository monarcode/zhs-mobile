import { View } from 'components/shared';
import { Stack } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useMemo } from 'react';

import { RouteHeader } from '~/components/route-header';
import Lifestyle from '~/modules/account-setup/components/lifestyle';
import MedicalHistory from '~/modules/account-setup/components/medical-history';
import PersonalInfo from '~/modules/account-setup/components/personal-info';
import ProfilePhoto from '~/modules/account-setup/components/profile-photo';
import Steps from '~/modules/account-setup/components/steps';
import tw from '~/tw';

export type SetupSteps = 'profile-photo' | 'personal-info' | 'medical-history' | 'lifestyle';

// Define steps in order
const SETUP_STEPS: SetupSteps[] = [
  'profile-photo',
  'personal-info',
  'medical-history',
  'lifestyle',
];

const AccountSetup = () => {
  const search = useLocalSearchParams();
  const currentStep = search.step as SetupSteps;

  const completedSteps = useMemo(() => {
    return SETUP_STEPS.indexOf(currentStep);
  }, [currentStep]);

  const getScreenTitle = () => {
    const TITLES = ['Profile Photo', 'Personal Info', 'Medical History', 'Lifestyle'];
    return TITLES[completedSteps] ?? 'Account Setup';
  };

  const getScreenComponent = () => {
    const COMPONENTS = [ProfilePhoto, PersonalInfo, MedicalHistory, Lifestyle];
    return COMPONENTS[completedSteps] ?? ProfilePhoto;
  };

  const ScreenComponent = getScreenComponent();

  return (
    <>
      <Stack.Screen
        options={{ header: () => <RouteHeader route={getScreenTitle()} />, headerShown: true }}
      />

      <View style={tw`flex-1 px-5 pt-8 pb-5 bg-bg gap-y-6`}>
        <Steps completedSteps={completedSteps + 1} />

        <View style={tw`flex-1`}>
          <ScreenComponent />
        </View>
      </View>
    </>
  );
};

export default AccountSetup;
