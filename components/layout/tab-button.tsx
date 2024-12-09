import { memo } from 'react';

import ApptInactiveIcon from '~/assets/svg/appointments-inactive.svg';
import ApptIcon from '~/assets/svg/appointments.svg';
import HomeInactiveIcon from '~/assets/svg/home-inactive.svg';
import HomeIcon from '~/assets/svg/home.svg';
import MoreInactiveIcon from '~/assets/svg/more-inactive.svg';
import MoreIcon from '~/assets/svg/more.svg';
import SearchIcon from '~/assets/svg/search.svg';
import WalletInactiveIcon from '~/assets/svg/wallet-inactive.svg';
import WalletIcon from '~/assets/svg/wallet.svg';
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
      return <SearchIcon style={tw`absolute -top-[34px]`} />;
    }
    return IconComponent;
  };

  return (
    <View style={tw`relative items-center justify-start flex-1 gap-1 z-10`}>
      <View style={tw`h-6 aspect-square justify-center items-center relative`}>{renderIcon()}</View>

      <Text
        style={tw`${isFocused ? 'text-primary font-semibold' : 'text-neutral-400 font-medium'} text-[10px]`}>
        {route}
      </Text>
    </View>
  );
});

type RouteKey = keyof typeof icons;

type Props = {
  route: RouteKey;
  isFocused: boolean;
};
