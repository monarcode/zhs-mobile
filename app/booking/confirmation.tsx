import { Image } from 'expo-image';
import { Pressable } from 'react-native';

import DateIcon from '~/assets/svg/book-appointment/date-black.svg';
import TimeIcon from '~/assets/svg/book-appointment/time.svg';
import { Button, Text, View } from '~/components/shared';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

const BookingConfirmation = () => {
  return (
    <View style={tw`p-5 gap-y-8 bg-[#FBFBFD] flex-1`}>
      <View>
        <Text style={tw`text-base font-semibold mb-1`}>Appointment details</Text>
        <Text style={tw`text-xs text-neutral-800`}>
          Please confirm that the details Below are correct before booking
        </Text>
      </View>

      {/* lab details */}
      <View style={tw`flex-row items-center gap-2`}>
        <Image
          source={require('../../assets/images/lab-logo.png')}
          style={tw`h-20 w-20 rounded-full border border-neutral-100`}
        />
        <View style={tw`gap-y-1.5`}>
          <Text style={tw`text-sm font-semibold`}>Scantrik Diagnostics</Text>
          <Text style={tw`text-xs font-medium text-primary`}>Lab</Text>
        </View>
      </View>

      {/* schedule */}
      <View style={tw`gap-y-4`}>
        <View style={tw`flex-row items-center gap-x-2`}>
          <DateIcon height={16} width={16} />
          <Text style={tw`text-xs font-medium`}>Date: 24th March, 2024</Text>
        </View>
        <View style={tw`flex-row items-center gap-x-2`}>
          <TimeIcon height={16} width={16} />
          <Text style={tw`text-xs font-medium`}>Time: 10:00 AM (Morning Sessions)</Text>
        </View>
      </View>

      {/* services */}
      <View style={tw`gap-y-4`}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-sm font-semibold`}>Services</Text>

          <Pressable>
            <Text style={tw`text-primary font-medium text-xs underline`}>Edit</Text>
          </Pressable>
        </View>

        <View style={tw`gap-y-3`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-xs font-medium`}>X-ray</Text>
            <Text style={tw`text-xs font-medium`}>{formatNaira(5000)}</Text>
          </View>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-xs font-medium`}>HIV/AIDS test</Text>
            <Text style={tw`text-xs font-medium`}>{formatNaira(5000)}</Text>
          </View>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-xs font-medium`}>STD’s test</Text>
            <Text style={tw`text-xs font-medium`}>{formatNaira(5000)}</Text>
          </View>
        </View>
      </View>

      {/* payment type */}
      <View style={tw`gap-y-3`}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-sm font-semibold`}>Payment</Text>

          <Pressable>
            <Text style={tw`text-primary font-medium text-xs underline`}>Change</Text>
          </Pressable>
        </View>

        <View style={tw`gap-y-3`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-xs font-medium`}>Method</Text>
            <Text style={tw`text-xs font-medium`}>Wallet</Text>
          </View>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-xs font-medium`}>Total Amount</Text>
            <Text style={tw`text-xs font-medium`}>{formatNaira(5000)}</Text>
          </View>
        </View>
      </View>

      <View style={tw`mt-auto mb-4`}>
        <Button>Pay NGN 2000 to book consultation</Button>
      </View>
    </View>
  );
};

export default BookingConfirmation;
