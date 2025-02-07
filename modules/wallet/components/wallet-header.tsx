import { Image } from 'expo-image';
import { Pressable } from 'react-native';

import WalletIcon from '~/assets/svg/icons/wallet-add-01.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

type WalletHeaderProps = {
  onFundWalletClick: () => void;
};

export const WalletHeader = ({ onFundWalletClick }: WalletHeaderProps) => {
  return (
    <View
      style={tw`relative flex-col justify-center bg-primary-darker rounded-br-3xl gap-y-3 h-60`}>
      <Image
        source={require('~/assets/images/wallet-bg.png')}
        style={tw.style(`absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full mx-4`)}
        tintColor={tw.color('white')}
      />

      <View style={tw`z-20 px-4 mt-14 gap-y-1`}>
        <Text style={tw`text-sm font-light text-white/40`}>wallet balance</Text>
        <Text style={tw`text-3xl text-white`}>{formatNaira(500000)}</Text>
      </View>

      <View style={tw`z-20 flex-row items-center justify-between ml-5`}>
        <Pressable
          onPress={onFundWalletClick}
          style={tw`px-3 py-4 border rounded-xl bg-[#ffffff07] border-white/5 flex-row gap-x-2`}>
          <WalletIcon />
          <Text style={tw`text-xs tracking-wide text-white font-regular`}>Fund Wallet</Text>
        </Pressable>
      </View>

      <View style={tw`h-8 w-5 absolute left-0 -bottom-8 bg-primary-darker z-[2]`} />
      <View style={tw`h-8 w-5 absolute left-0 -bottom-8 bg-bg rounded-tl-3xl z-[4]`} />
    </View>
  );
};
