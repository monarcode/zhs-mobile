import { Image } from 'expo-image';
import { memo } from 'react';

import ApptIcon from '~/assets/svg/icons/appointments-icon/variant=active.svg';
import ApptInactiveIcon from '~/assets/svg/icons/appointments-icon/variant=inactive.svg';
import HomeIcon from '~/assets/svg/icons/home-icon/active.svg';
import HomeInactiveIcon from '~/assets/svg/icons/home-icon/inactive.svg';
import MoreIcon from '~/assets/svg/icons/more-icon/variant=active.svg';
import MoreInactiveIcon from '~/assets/svg/icons/more-icon/variant=inactive.svg';
import WalletIcon from '~/assets/svg/icons/wallet-icon/variant=active.svg';
import WalletInactiveIcon from '~/assets/svg/icons/wallet-icon/variant=inactive.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const icons = {
  Home: {
    active: <HomeIcon />,
    inactive: <HomeInactiveIcon />,
  },
  'Appt.': {
    active: <ApptIcon />,
    inactive: <ApptInactiveIcon />,
  },
  Search: {
    active: null,
    inactive: null,
  },
  Wallet: {
    active: <WalletIcon />,
    inactive: <WalletInactiveIcon />,
  },
  More: {
    active: <MoreIcon />,
    inactive: <MoreInactiveIcon />,
  },
};

export const TabButton = memo(({ isFocused, route }: Props) => {
  const IconComponent = isFocused
    ? (icons[route]?.active ?? null)
    : (icons[route]?.inactive ?? null);

  const renderIcon = () => {
    if (route === 'Search') {
      return (
        <Image
          source={require('~/assets/images/search-icon.png')}
          style={tw`size-24 -top-2.5`}
          contentFit="contain"
        />
      );
    }
    return IconComponent;
  };

  return (
    <View style={tw`relative items-center justify-start flex-1 gap-1 z-10 pt-1`}>
      <View style={tw`h-6 aspect-square justify-center items-center relative`}>{renderIcon()}</View>

      {route !== 'Search' ? (
        <Text
          style={tw`font-medium tracking-wide text-xs ${isFocused ? 'text-primary' : 'text-[#B5BCD0]'} text-[10px]`}>
          {route}
        </Text>
      ) : null}
    </View>
  );
});

type RouteKey = keyof typeof icons;

type Props = {
  route: RouteKey;
  isFocused: boolean;
};
