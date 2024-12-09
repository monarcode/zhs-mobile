import { Image } from 'expo-image';
import { Dimensions, FlatList, Pressable } from 'react-native';

import FavoriteIcon from '~/assets/svg/favorite.svg';
import RatingIcon from '~/assets/svg/hotel_class.svg';
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
      <View style={tw.style('h-[130px] bg-white p-3 rounded-xl', { width: ITEM_WIDTH })}>
        {/* top section */}
        <View style={tw`flex-row justify-between border-b border-[#adadad] pb-2`}>
          <View style={tw`w-[76px] aspect-square rounded-xl overflow-hidden`}>
            <Image
              source={require('~/assets/images/lab-logo.png')}
              contentFit="cover"
              transition={300}
              style={tw`w-full h-full`}
            />
          </View>
          <View style={tw`flex-1 mx-1.5 gap-1`}>
            <Text style={tw`text-sm font-medium leading-none`}>{item.name}</Text>
            <Text style={tw`text-primary text-xs font-normal`} numberOfLines={1}>
              {item.type}
            </Text>

            <View style={tw`flex-row items-center gap-1`}>
              <RatingIcon height={16} width={16} />
              <Text style={tw`text-[#1C1C1E] text-xs font-medium`}>{item.rating}</Text>
            </View>
          </View>
          <Pressable>
            <FavoriteIcon height={24} width={24} />
          </Pressable>
        </View>

        {/* bottom section */}
        <View style={tw`flex-row justify-between items-center flex-1`}>
          <Text style={tw`text-xs font-medium`}>{item.available_on}</Text>

          <Text style={tw`text-xs font-medium`}>{item.opening_hours}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`gap-3 px-5`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-xs font-semibold leading-none`}>Pharmacies near you</Text>

        <Text style={tw`text-[10px] font-medium`}>View more</Text>
      </View>

      <FlatList
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-3 rounded-lg`}
      />
    </View>
  );
};
