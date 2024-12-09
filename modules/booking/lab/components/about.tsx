import { Link } from 'expo-router';

import BriefCaseIcon from '~/assets/svg/book-appointment/business_center.svg';
import PeopleIcon from '~/assets/svg/book-appointment/group.svg';
import StarIcon from '~/assets/svg/book-appointment/hotel_class.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

export const AboutLab = () => {
  return (
    <View style={tw`gap-y-4`}>
      <View style={tw`flex-row`}>
        <View style={tw`items-center flex-1 py-1`}>
          <View style={tw`flex-row items-center gap-1.5`}>
            <BriefCaseIcon height={20} width={20} />
            <Text style={tw`text-xs`}>52</Text>
          </View>
          <Text style={tw`text-neutral-500 font-medium text-[10px]`}>Services</Text>
        </View>
        <View style={tw`items-center flex-1 py-1 border-l border-r border-neutral-300`}>
          <View style={tw`flex-row items-center gap-1.5`}>
            <PeopleIcon height={20} width={20} />
            <Text style={tw`text-xs`}>200k+</Text>
          </View>
          <Text style={tw`text-neutral-500 font-medium text-[10px]`}>Years of Service</Text>
        </View>
        <View style={tw`items-center flex-1 py-1`}>
          <View style={tw`flex-row items-center gap-1.5`}>
            <StarIcon height={20} width={20} />
            <Text style={tw`text-xs`}>3.9 of 5</Text>
          </View>
          <Text style={tw`text-neutral-500 font-medium text-[10px]`}>Rating</Text>
        </View>
      </View>

      <View style={tw`gap-y-2`}>
        <Text style={tw`text-sm font-semibold`}>About</Text>
        <Text style={tw`text-[#242426] text-xs`}>
          Scantrik Diagnostics is technology driven to discover and deliver diagnostic insights and
          innovations that help to improve human health.We offer a wide range of products and
          services that benefit patients, healthcare providers, hospitals, pharmaceutical, insurance
          companies and employers.
        </Text>
        <Link href="/booking/lab-appointment">Read more</Link>
      </View>
    </View>
  );
};
