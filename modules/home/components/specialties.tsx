import { FlatList, View } from 'react-native';

import { Text } from '~/components/shared';
import tw from '~/tw';

const specialties = [
  'General Medicine',
  'Pediatrics',
  'Dentistry',
  'Cardiology',
  'Dermatology',
  'ENT',
  'Ophthalmology',
  'Orthopedics',
];

export const Specialties = () => {
  const renderItem = ({ item }: { item: string }) => (
    <View style={tw`items-center gap-2 w-[70px] overflow-hidden`}>
      <View style={tw`w-[56px] aspect-square rounded-lg bg-neutral-200`} />
      <Text style={tw`text-[10px] font-medium text-center leading-none`} numberOfLines={1}>
        {item}
      </Text>
    </View>
  );

  return (
    <View style={tw`gap-3 px-5`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw.style('text-xs leading-none font-semibold')}>Specialties</Text>

        <Text style={tw`text-xs font-medium leading-none`}>View more</Text>
      </View>

      <FlatList
        data={specialties}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-2.5`}
      />
    </View>
  );
};
