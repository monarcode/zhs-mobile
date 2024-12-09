import { Stack } from 'expo-router';

import { Text, View } from '~/components/shared';
import { SearchHeader } from '~/modules/search/components';
import tw from '~/tw';

const Search = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <SearchHeader /> }} />

      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Search</Text>
      </View>
    </>
  );
};

export default Search;
