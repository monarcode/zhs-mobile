import { Button, Text, View } from 'components/shared';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Calendar2 } from 'iconsax-react-native';

import CopyIcon from '~/assets/svg/icons/copy-02.svg';
import AppointmentIcon from '~/assets/svg/icons/transaction-types/doctor-01-duo.svg';
import { RouteHeader } from '~/components/route-header';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

const TransactionDetails = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <RouteHeader route="Transaction Details" />,
        }}
      />

      <View style={tw`flex-1 p-5 bg-bg`}>
        <View style={tw`items-center justify-center gap-2 mt-6`}>
          <AppointmentIcon />
          <Text style={tw`text-2xl font-medium text-center`}>Doctor Appointment</Text>
          <View style={tw`flex-row items-center gap-2`}>
            <Calendar2 size={18} />
            <Text style={tw`text-xs font-light text-center text-neutral-500`}>
              15 May 2020 8:30 am
            </Text>
          </View>
        </View>

        <View style={tw`mt-10 gap-y-5`}>
          <View style={tw``}>
            <Text style={tw`text-xs opacity-55`}>Status</Text>
            <Text style={tw`text-lg text-green-700 font-medium`}>Successful</Text>
          </View>

          <View style={tw``}>
            <Text style={tw`text-xs opacity-55`}>Amount</Text>
            <Text style={tw`text-lg text-neutral-950 font-medium`}>-{formatNaira(40000)}</Text>
          </View>

          <View style={tw``}>
            <Text style={tw`text-xs opacity-55`}>Booking for</Text>
            <Text style={tw`text-lg text-neutral-950 font-medium`}>Dr. Priscilla</Text>
          </View>

          <View style={tw``}>
            <Text style={tw`text-xs opacity-55`}>Description</Text>
            <Text style={tw`text-lg text-neutral-950 font-medium`}>Voice call Consultation</Text>
          </View>

          <View style={tw``}>
            <Text style={tw`text-xs opacity-55`}>Reference</Text>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`text-lg text-neutral-950 font-medium`}>TRN-53GG577-3333D</Text>
              <View style={tw`flex-row items-center gap-2`}>
                <Text>copy</Text>
                <CopyIcon />
              </View>
            </View>
          </View>
        </View>

        <View style={tw`mt-auto mb-4`}>
          <Button>Share Receipt</Button>
          <Button variant="plain" textStyle={tw`text-red-600`}>
            Dispute
          </Button>
        </View>
      </View>

      <StatusBar style="light" />
    </>
  );
};

export default TransactionDetails;
