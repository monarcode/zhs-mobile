import { router } from 'expo-router';
import { Pressable } from 'react-native';

import { type Transaction } from '../types';

import DrAppnmtIcon from '~/assets/svg/icons/transaction-types/doctor-01.svg';
import LabAppnmtIcon from '~/assets/svg/icons/transaction-types/test-tube.svg';
import WalletFundIcon from '~/assets/svg/icons/transaction-types/wallet-add-01.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

const getTransactionIcon = (type: Transaction['type']) => {
  const icons = {
    'wallet-funding': <WalletFundIcon />,
    'dr-appnmt': <DrAppnmtIcon />,
    'lab-appnmt': <LabAppnmtIcon />,
  };
  return icons[type];
};

export const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  return (
    <Pressable
      onPress={() => router.push('/wallet/transaction-details')}
      style={tw`flex-row items-center justify-between w-full h-auto py-3 pl-3 pr-3 mb-2 bg-white rounded-xl`}>
      <View style={tw`flex-row items-center gap-x-2`}>
        <View style={tw`items-center justify-center rounded-full bg-neutral-100 size-10`}>
          {getTransactionIcon(transaction.type)}
        </View>
        <View style={tw`gap-y-0.5`}>
          <Text style={tw`text-sm font-medium tracking-wide text-black`}>{transaction.label}</Text>
          <Text style={tw`text-xs text-neutral-400 font-regular`}>{transaction.date}</Text>
        </View>
      </View>

      <View style={tw`justify-between items-end gap-y-0.5`}>
        <Text style={tw`text-lg font-semibold text-black`}>{formatNaira(transaction.amount)}</Text>
        <View style={tw`flex-row items-center gap-1`}>
          <Text style={tw`text-xs font-light leading-none text-neutral-400`}>success</Text>
          <View style={tw`w-2 h-2 bg-green-500 rounded-full`} />
        </View>
      </View>
    </Pressable>
  );
};
