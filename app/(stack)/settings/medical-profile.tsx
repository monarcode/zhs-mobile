import { Button, Text, View } from 'components/shared';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '~/tw';

const history = ['Asthma', 'Pneumonia', 'High Blood Pressure', 'Diabetes'];
const lifeStyle = [
  {
    type: 'Smoker',
    value: 'No',
  },
  {
    type: 'Drinker',
    value: 'Casual',
  },
  {
    type: 'Other recreational drugs',
    value: 'No',
  },
];

const MedicalProfile = () => {
  return (
    <SafeAreaView edges={['bottom']} style={tw`flex-1 bg-bg`}>
      <View style={tw`flex-1 px-5 pt-5 gap-y-6`}>
        <View>
          <Text style={tw`text-base font-medium`}>Medical History:</Text>

          <View style={tw`flex-row flex-wrap items-center gap-2 mt-2`}>
            {history.map((item, i) => (
              <View key={i} style={tw`border border-slate-300 rounded-full py-2 px-2.5`}>
                <Text style={tw`text-xs font-medium leading-none`}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={tw`gap-y-2`}>
          <Text style={tw`text-base font-medium`}>Blood Group:</Text>
          <Text style={tw`text-slate-400`}>NA</Text>
        </View>

        <View style={tw`gap-y-2`}>
          <Text style={tw`text-base font-medium`}>Genotype:</Text>
          <Text style={tw`text-slate-400`}>NA</Text>
        </View>

        <View style={tw`gap-y-2`}>
          <Text style={tw`text-base font-medium`}>Alergies:</Text>
          <Text style={tw`text-slate-400`}>None</Text>
        </View>

        <View>
          <Text style={tw`text-base font-medium`}>Lifestyle:</Text>

          <View style={tw`flex-row flex-wrap items-center gap-2 mt-2`}>
            {lifeStyle.map((item, i) => (
              <View key={i} style={tw`border border-slate-300 rounded-full py-2 px-2.5`}>
                <Text style={tw`text-xs font-medium leading-none`}>
                  {item.type}: {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Button containerStyle={tw`mt-auto`}>Update Details</Button>
      </View>
    </SafeAreaView>
  );
};
export default MedicalProfile;
