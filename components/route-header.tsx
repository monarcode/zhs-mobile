import { router } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowBack from '~/assets/svg/chevron-left.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

type Props = {
  route: string;
  showBackButton?: boolean;
  action?: {
    icon: ReactNode;
    onPress: () => void;
  };
};

export const RouteHeader = ({ route, showBackButton = true, action }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={tw.style(`flex-row bg-primary-darker pt-[${top}px] rounded-br-3xl relative`)}>
        <View style={tw`w-full h-[${50}px] flex-1 px-5 flex-row items-center`}>
          {showBackButton && (
            <View style={tw`absolute left-5 z-10`}>
              <Pressable onPress={() => router.back()}>
                <ArrowBack height={20} width={20} />
              </Pressable>
            </View>
          )}

          <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-sm font-medium text-white tracking-wide`}>{route}</Text>
          </View>

          {action && (
            <View style={tw`absolute right-5 z-10`}>
              <Pressable onPress={action.onPress}>{action.icon}</Pressable>
            </View>
          )}
        </View>

        <View style={tw`h-8 w-5 absolute left-0 -bottom-8 bg-primary-darker z-[2]`} />
        <View style={tw`h-8 w-5 absolute left-0 -bottom-8 bg-bg rounded-tl-3xl z-[4]`} />
      </View>
    </>
  );
};
