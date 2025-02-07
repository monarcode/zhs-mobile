import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Pressable } from 'react-native';

import BankIcon from '~/assets/svg/bank-illus-2.svg';
import CardIcon from '~/assets/svg/card-illus.svg';
import UssdIcon from '~/assets/svg/ussd-illus-2.svg';
import { Text, View } from '~/components/shared';
import { Sheet } from '~/components/shared/bottom-sheet';
import tw from '~/tw';

type FundWalletSheetProps = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};

export const FundWalletSheet = ({ bottomSheetRef }: FundWalletSheetProps) => {
  const snapPoints = ['50%'];

  return (
    <Sheet ref={bottomSheetRef} snapPoints={snapPoints}>
      <BottomSheetView style={tw`flex-1 p-4`}>
        <Text style={tw`text-lg font-medium text-center text-black`}>
          Funding your wallet is easy and safe
        </Text>

        <View style={tw`mt-5 gap-y-2`}>
          <Pressable style={tw`bg-[#F9F9F9] h-22 rounded-xl relative`}>
            <Text style={tw`w-2/3 p-5 text-sm font-medium text-black`}>
              Fund wallet using your Debit card
            </Text>

            <CardIcon style={tw`absolute bottom-0 right-3`} />
          </Pressable>
          <Pressable style={tw`bg-[#F9F9F9] h-22 rounded-xl relative`}>
            <Text style={tw`w-2/3 p-5 text-sm font-medium text-black`}>
              Fund wallet using bank transfer
            </Text>

            <BankIcon style={tw`absolute bottom-0 right-3`} />
          </Pressable>
          <Pressable style={tw`bg-[#F9F9F9] h-22 rounded-xl relative`}>
            <Text style={tw`w-2/3 p-5 text-sm font-medium text-black`}>
              Fund wallet using USSD Service
            </Text>

            <UssdIcon style={tw`absolute bottom-0 right-3`} />
          </Pressable>
        </View>
      </BottomSheetView>
    </Sheet>
  );
};
