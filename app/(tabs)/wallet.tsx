import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import { useRef } from 'react';
import { FlatList } from 'react-native';

import { Text, View } from '~/components/shared';
import { FundWalletSheet } from '~/modules/wallet/components/fund-wallet-sheet';
import { TransactionCard } from '~/modules/wallet/components/transaction-card';
import { WalletHeader } from '~/modules/wallet/components/wallet-header';
import { Transaction } from '~/modules/wallet/types';
import tw from '~/tw';

const transactions: Transaction[] = [
  {
    label: 'Wallet Funding',
    type: 'wallet-funding',
    amount: 50000,
    date: '2025-01-12',
    status: 'success',
  },
  {
    label: 'Doctor Appointment',
    type: 'dr-appnmt',
    amount: 50000,
    date: '2025-01-12',
    status: 'success',
  },
  {
    label: 'Lab Appointment',
    type: 'lab-appnmt',
    amount: 50000,
    date: '2025-01-12',
    status: 'success',
  },
];

const Wallet = () => {
  const fundWalletSheetRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <WalletHeader onFundWalletClick={() => fundWalletSheetRef.current?.present()} />
          ),
        }}
      />

      <View style={tw`flex-1 px-5 py-10 bg-bg gap-y-3`}>
        <View style={tw`flex-row items-end justify-between`}>
          <Text style={tw`text-xl font-medium text-black`}>Transactions</Text>
          <Text style={tw`text-xs underline text-neutral-800 font-regular`}>see more</Text>
        </View>

        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
          contentContainerStyle={tw`gap-y-1`}
        />
      </View>

      <FundWalletSheet bottomSheetRef={fundWalletSheetRef} />
    </>
  );
};

export default Wallet;
