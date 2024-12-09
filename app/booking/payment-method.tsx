import { router } from 'expo-router';
import { Pressable } from 'react-native';

import CardIcon from '~/assets/svg/book-appointment/card.svg';
import ChevronRight from '~/assets/svg/chevron-right.svg';
import WalletIcon from '~/assets/svg/wallet.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

const PaymentMethod = () => {
  return (
    <View style={tw`p-5 gap-y-8 bg-[#FBFBFD] flex-1`}>
      <View>
        <Text style={tw`text-base font-semibold mb-1`}>Please select payment method</Text>
        <Text style={tw`text-xs text-neutral-800`}>
          Please select your preferred payment method to successfully book your consultation
        </Text>
      </View>

      <View style={tw`gap-y-2`}>
        <Pressable
          onPress={() => router.push('/booking/confirmation?method=wallet')}
          style={tw`h-20 bg-[#F1F3FD] rounded-lg flex-row items-center justify-between px-4`}>
          <View style={tw`flex-row items-center gap-x-2`}>
            <WalletIcon />
            <Text style={tw`text-xs font-medium`}>Wallet Balance: {formatNaira(5000)}</Text>
          </View>

          <ChevronRight />
        </Pressable>

        <Pressable
          onPress={() => router.push('/booking/confirmation?method=card')}
          style={tw`h-20 bg-[#F1F3FD] rounded-lg flex-row items-center justify-between px-4`}>
          <View style={tw`flex-row items-center gap-x-2`}>
            <CardIcon />
            <Text style={tw`text-xs font-medium`}>Card</Text>
          </View>

          <ChevronRight />
        </Pressable>
      </View>
    </View>
  );
};

export default PaymentMethod;
