import { Button, Text, View } from 'components/shared';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Checkbox } from '~/components/shared/checkbox';
import tw from '~/tw';

const FiltersModal = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={tw`flex-1 gap-y-8`}>
      <Text style={tw`text-lg font-medium text-center`}>Filters</Text>

      <View style={tw`gap-y-3`}>
        <Text style={tw`font-medium text-neutral-400`}>Category</Text>
        <View style={tw`flex-row items-center justify-between`}>
          <Text>Doctors</Text>

          <Checkbox checked onCheckedChange={() => {}} />
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text>Hospitals</Text>

          <Checkbox checked={false} onCheckedChange={() => {}} />
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text>Labs</Text>

          <Checkbox checked={false} onCheckedChange={() => {}} />
        </View>
      </View>

      <View style={tw`gap-y-3`}>
        <Text style={tw`font-medium text-neutral-400`}>Working Days</Text>
        <View style={tw`flex-row items-center justify-between`}>
          <Text>Monday</Text>

          <Checkbox checked onCheckedChange={() => {}} />
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text>Tuesday</Text>

          <Checkbox checked={false} onCheckedChange={() => {}} />
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text>Wednesday</Text>

          <Checkbox checked={false} onCheckedChange={() => {}} />
        </View>
      </View>

      <Button
        containerStyle={tw.style(`mt-auto`, {
          marginBottom: bottom + 10,
        })}>
        Show Results
      </Button>
    </View>
  );
};
export default FiltersModal;
