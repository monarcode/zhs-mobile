import { router } from 'expo-router';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowBack from '~/assets/svg/arraow-back.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

type Props = {
  route: string;
  showBackButton?: boolean;
};

export const RouteHeader = ({ route, showBackButton = true }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={tw.style(`flex-row bg-primary-darker pt-[${top}px]`)}>
      <View style={tw`w-full h-[${50}px] flex-1 px-5 flex-row items-center`}>
        {showBackButton && (
          <View style={tw`absolute left-5 z-10`}>
            <Pressable onPress={() => router.back()}>
              <ArrowBack height={20} width={20} />
            </Pressable>
          </View>
        )}
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-sm font-medium text-white`}>{route}</Text>
        </View>
      </View>
    </View>
  );
};
