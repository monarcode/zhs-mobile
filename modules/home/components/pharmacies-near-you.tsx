import { Image } from 'expo-image';
import { Dimensions, FlatList, Pressable } from 'react-native';

import FavoriteIcon from '~/assets/svg/favorite.svg';
import CalendarIcon from '~/assets/svg/icons/calendar-01.svg';
import RatingIcon from '~/assets/svg/icons/star-gold.svg';
import { Text, View } from '~/components/shared';
import tw from '~/tw';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.68;

const doctor = {
  id: 1,
  name: 'Synlab',
  type: 'Hospital',
  rating: '4.7',
  available_on: 'Mon-Fri',
  opening_hours: 'Always Open',
};

const doctors = new Array(5).fill(doctor);

export const PharmaciesNearYou = () => {
  const renderItem = ({ item }: { item: typeof doctor }) => {
    return (
      <View style={tw.style('h-auto bg-white p-3 rounded-2xl', { width: ITEM_WIDTH })}>
        {/* top section */}
        <View style={tw`flex-row justify-between border-[#adadad] pb-2`}>
          <View style={tw`w-[76px] aspect-square rounded-xl overflow-hidden`}>
            <Image
              source={require('~/assets/images/company-logo.png')}
              contentFit="cover"
              transition={300}
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 mx-1.5 gap-1`}>
            <Text style={tw`text-sm font-medium`}>{item.name}</Text>
            <Text style={tw`text-neutral-400 text-xs font-light`}>2km away</Text>
          </View>

          <Pressable>
            <FavoriteIcon height={24} width={24} />
          </Pressable>
        </View>

        {/* bottom section */}
        <View style={tw`flex-row justify-between items-center flex-1`}>
          <View style={tw`flex-row items-center gap-x-1`}>
            <RatingIcon />

            <Text style={tw`text-xs font-normal`}>{item.rating}</Text>
          </View>

          <View style={tw`flex-row items-center gap-x-1`}>
            <CalendarIcon />

            <Text style={tw`text-xs  font-regular`}>{item.available_on}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`gap-y-1`}>
      <View style={tw`flex-row justify-between px-5`}>
        <Text style={tw`font-semibold text-base`}>Pharmacies</Text>
      </View>

      <FlatList
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-3 rounded-lg px-5`}
      />
    </View>
  );
};
