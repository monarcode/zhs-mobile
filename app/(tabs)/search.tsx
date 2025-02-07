import { BottomSheetView } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Clock, Heart, Hospital } from 'iconsax-react-native';
import { useCallback } from 'react';
import { FlatList, Keyboard, Pressable, TouchableWithoutFeedback } from 'react-native';

import FilterIcon from '~/assets/svg/icons/filter-vertical.svg';
import { Text, View } from '~/components/shared';
import { Sheet, useSheetRef } from '~/components/shared/bottom-sheet';
import { SearchHeader } from '~/modules/search/components';
import FiltersModal from '~/modules/search/components/filters-modal';
import tw from '~/tw';

const Search = () => {
  const bottomSheetModalRef = useSheetRef();

  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: true, header: () => <SearchHeader /> }} />

      <Sheet ref={bottomSheetModalRef} snapPoints={['70%']} name="filters" index={1}>
        <BottomSheetView style={tw`flex-1 px-5 pt-3`}>
          <FiltersModal />
        </BottomSheetView>
      </Sheet>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`flex-1`}>
        <View style={tw`flex-1 px-5 pt-8 bg-bg gap-y-5`}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center gap-x-2`}>
              <Text style={tw`text-lg font-medium`}>Favorites</Text>
              <View style={tw`items-center justify-center rounded-full bg-primary size-7`}>
                <Text style={tw`text-sm text-white`}>4</Text>
              </View>
            </View>

            <Pressable style={tw`flex-row items-end gap-x-1.5`} onPress={handlePresentModal}>
              <Text style={tw`font-medium leading-none`}>Filter Search</Text>
              <FilterIcon height={20} width={20} />
            </Pressable>
          </View>

          <FlatList
            data={[...new Array(3)]}
            renderItem={() => (
              <View style={tw`relative flex-row p-4 bg-white h-28 rounded-3xl gap-x-3`}>
                {/* logo */}
                <View style={tw`overflow-hidden rounded-xl bg-slate-100 size-14 shrink-0`} />

                {/* name */}
                <View style={tw`flex-1`}>
                  <Text style={tw`text-sm font-medium`} numberOfLines={2}>
                    University of Benin Teaching Hospital
                  </Text>

                  <View style={tw`flex-row mt-auto gap-x-5`}>
                    <View style={tw`flex-row items-center gap-x-1.5`}>
                      <Hospital size={16} strokeWidth={1.5} color="#8e8e8e" />
                      <Text style={tw`text-xs text-neutral-400`}>Hospital</Text>
                    </View>
                    <View style={tw`flex-row items-center gap-x-1.5`}>
                      <Clock size={16} strokeWidth={1.5} color="#8e8e8e" />
                      <Text style={tw`text-xs text-neutral-400`}>24/7</Text>
                    </View>
                  </View>
                </View>

                <Pressable style={tw`size-auto`}>
                  <Heart variant="Bold" color="#e32e0ef3" />
                </Pressable>
              </View>
            )}
            contentContainerStyle={tw`pb-32 gap-y-3`}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Search;
