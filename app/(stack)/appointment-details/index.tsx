import { Stack } from 'expo-router';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import ClockIcon from '~/assets/svg/icons/alarm-clock.svg';
import CalendarIcon from '~/assets/svg/icons/calendar-01-duo.svg';
import MailIcon from '~/assets/svg/icons/mail-at-sign-02.svg';
import PriceIcon from '~/assets/svg/icons/sale-tag-02.svg';
import { RouteHeader } from '~/components/route-header';
import { Button, Text, View } from '~/components/shared';
import tw from '~/tw';

const AppointmentDetails = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <RouteHeader route="Appointment Details" />,
        }}
      />

      <SafeAreaView edges={['bottom']} style={tw`flex-1`}>
        <View style={tw`flex-1 px-5 pt-5 gap-y-7 bg-bg`}>
          <View style={tw`flex-row gap-3`}>
            <View
              style={tw`overflow-hidden border size-28 bg-slate-700 rounded-xl border-zinc-200`}>
              <Animated.Image
                source={require('~/assets/images/appointmnt.png')}
                style={tw`w-full h-full`}
                sharedTransitionTag="apt-dp"
              />
            </View>

            <View style={tw`flex-col py-2.5`}>
              <Animated.Text sharedTransitionTag="name" style={tw`text-xl font-medium`}>
                Dr. John Lennon
              </Animated.Text>
              <Text style={tw`mt-0.5 text-sm opacity-50 font-regular`}>Dentist - UBTH</Text>

              <View style={tw`flex-row items-center gap-3 mt-auto`}>
                <MailIcon />
                <Text style={tw`text-sm underline`}>johnlennon@email.com</Text>
              </View>
            </View>
          </View>

          <View style={tw`gap-y-4`}>
            <Text style={tw`text-lg font-semibold`}>Schedule</Text>

            <View style={tw`gap-y-3`}>
              <View style={tw`flex-row items-center gap-3`}>
                <CalendarIcon />
                <Text style={tw`text-sm font-regular`}>24th March, 2024</Text>
              </View>
              <View style={tw`flex-row items-center gap-3`}>
                <ClockIcon />
                <Text style={tw`text-sm tracking-wide font-regular`}>
                  Morning session, 10:00 am
                </Text>

                <View style={tw`px-2 py-2 bg-purple-500 rounded-full`}>
                  <Text style={tw`text-xs leading-none text-white font-regular`}>upcoming</Text>
                </View>
              </View>
              <View style={tw`flex-row items-center gap-3`}>
                <PriceIcon />
                <Text style={tw`text-sm font-regular`}>NGN 2,000 / hr</Text>
              </View>
            </View>
          </View>

          <View style={tw`gap-y-4`}>
            <Text style={tw`text-lg font-semibold`}>Patient Information</Text>

            <View style={tw`gap-y-3`}>
              <View style={tw`flex-row items-center gap-3`}>
                <Text style={tw`w-20 text-sm font-regular text-neutral-400`}>Full name:</Text>
                <Text style={tw`text-sm font-regular`}>Ugbah Isioma</Text>
              </View>
              <View style={tw`flex-row items-center gap-3`}>
                <Text style={tw`w-20 text-sm font-regular text-neutral-400`}>Gender:</Text>
                <Text style={tw`text-sm font-regular`}>Male</Text>
              </View>
              <View style={tw`flex-row items-center gap-3`}>
                <Text style={tw`w-20 text-sm font-regular text-neutral-400`}>Age:</Text>
                <Text style={tw`text-sm font-regular`}>30</Text>
              </View>
              <View style={tw`flex-row items-start gap-3`}>
                <Text style={tw`w-20 text-sm font-regular text-neutral-400`}>Complain:</Text>
                <Text style={tw`flex-1 text-sm font-regular`}>
                  Lorem ipsum dolor sit amet consectetur. Sem nulla donec hendrerit orci est. Justo
                  ornare in ut.
                </Text>
              </View>
            </View>
          </View>

          <View style={tw`mt-auto mb-2`}>
            <Button>Reschedule</Button>
            <Button variant="plain">Cancel</Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default AppointmentDetails;
