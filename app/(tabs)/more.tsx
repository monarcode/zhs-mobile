import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignoutIcon from '~/assets/svg/icons/logout-01.svg';
import NotificationIcon from '~/assets/svg/icons/settings/notification-block-03.svg';
import ContactUsIcon from '~/assets/svg/icons/settings/question.svg';
import SubAccountsIcon from '~/assets/svg/icons/settings/user-group.svg';
import SecurityIcon from '~/assets/svg/icons/settings/user-lock-01.svg';
import MedicalProfileIcon from '~/assets/svg/icons/settings/user-love-01.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const More = () => {
  return (
    <SafeAreaView edges={['top']} style={tw`flex-1 pt-6 bg-bg`}>
      <View style={tw.style('flex-1 px-5 bg-bg gap-y-10')}>
        <View style={tw`flex-row items-center gap-x-3`}>
          {/* dp */}
          <View style={tw`rounded-full size-24 bg-slate-200`} />
          <View style={tw``}>
            <Text style={tw`text-xl font-medium text-black`}>Jane Doe</Text>
            <Text style={tw`text-slate-400 text-sm leading-none`}>account settings</Text>

            <Pressable style={tw`mt-3 flex-row gap-x-2`}>
              <Text style={tw`text-red-700 underline font-medium`}>Sign out</Text>
              <SignoutIcon />
            </Pressable>
          </View>
        </View>

        {/* options */}
        <View style={tw`gap-y-2`}>
          <Option
            title="Medical Profile"
            description="Manage your medical profile"
            icon={<MedicalProfileIcon height={20} width={20} />}
            href="/settings/medical-profile"
          />
          <Option
            title="Sub-Accounts"
            description="manage accounts for your children or wards"
            icon={<SubAccountsIcon height={20} width={20} />}
            href="/settings/sub-accounts"
          />
          <Option
            title="Security"
            description="manage account security settings"
            icon={<SecurityIcon height={20} width={20} />}
            href="/settings/security"
          />
          <Option
            title="Notification"
            description="Enable push notifications"
            icon={<NotificationIcon height={20} width={20} />}
            href="/settings/notifications"
          />
          <Option
            title="Contact us"
            description="need help? contact support"
            icon={<ContactUsIcon height={20} width={20} />}
            href="/settings/contact-us"
          />
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const Option = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: any;
}) => {
  return (
    <Pressable
      onPress={() => router.push(href)}
      style={tw`bg-white rounded-xl p-4 flex-row items-center gap-x-4`}>
      <View style={tw`size-10 rounded-full bg-primary justify-center items-center`}>{icon}</View>
      <View style={tw`gap-y-2`}>
        <Text style={tw`text-base font-medium text-black leading-none`}>{title}</Text>
        <Text style={tw`text-neutral-400 text-xs leading-none`}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default More;
