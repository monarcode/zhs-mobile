import { Stack } from 'expo-router';

import { RouteHeader } from '~/components/route-header';
import { View } from '~/components/shared';
import tw from '~/tw';

const BookingLayout = () => {
  return (
    <View style={tw`flex-1 bg-bg`}>
      <Stack>
        <Stack.Screen
          name="lab-appointment"
          options={{
            title: 'Lab Details',
            header: () => <RouteHeader route="Lab Details" />,
          }}
        />
        <Stack.Screen
          name="select-service"
          options={{
            title: 'Select Service',
            header: () => <RouteHeader route="Select Service" />,
          }}
        />
        <Stack.Screen
          name="payment-method"
          options={{
            title: 'Payment Method',
            header: () => <RouteHeader route="Payment Method" />,
          }}
        />
        <Stack.Screen
          name="confirmation"
          options={{
            title: 'Booking Confirmation',
            header: () => <RouteHeader route="Booking Confirmation" />,
          }}
        />
      </Stack>
    </View>
  );
};

export default BookingLayout;
