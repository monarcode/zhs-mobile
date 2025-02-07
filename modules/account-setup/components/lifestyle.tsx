import { zodResolver } from '@hookform/resolvers/zod';
import { View, Text, Button } from 'components/shared';
import { router } from 'expo-router';
import { useForm, useWatch } from 'react-hook-form';
import { Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { LifestyleFormData, lifestyleSchema } from '../schemas/lifestyle.schema';

import FormSelect from '~/components/extended/form-select';
import FormTextInput from '~/components/extended/form-text-input';
import tw from '~/tw';

const YES_NO_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

const drugUseOptions = ['Daily', 'Weekly', 'Monthly'];

const Lifestyle = () => {
  const form = useForm<LifestyleFormData>({
    resolver: zodResolver(lifestyleSchema),
  });

  const selectedDrugUse = useWatch({
    control: form.control,
    name: 'drugUseFrequency',
  });

  const onSubmit = async (values: LifestyleFormData) => {
    console.log(values);
    router.replace('/(tabs)');
  };

  const isSelected = (value: string) => {
    return selectedDrugUse === value;
  };

  return (
    <View style={tw`flex-1 gap-y-5`}>
      <KeyboardAwareScrollView
        bottomOffset={64}
        contentContainerStyle={tw`gap-y-6`}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}>
        {/* smoking */}
        <FormSelect
          options={YES_NO_OPTIONS}
          control={form.control}
          name="isSmoker"
          label="Do you smoke?"
        />
        <FormTextInput
          control={form.control}
          name="smokeCount"
          label="On an average how many sticks do you smoke per day?"
          placeholder="e.g 2"
        />

        {/* alcohol */}
        <FormSelect
          options={YES_NO_OPTIONS}
          control={form.control}
          name="isDrinker"
          label="Do you drink alcohol?"
        />
        <FormTextInput
          control={form.control}
          name="drinkCount"
          label="On an average how many bottles do you drink per day?"
          placeholder="e.g 2"
        />

        {/* drug use */}
        <FormSelect
          options={YES_NO_OPTIONS}
          control={form.control}
          name="isDrinker"
          label="Do you take other recreational drugs?"
        />

        <View>
          <Text>How often do you use it?</Text>
          <View style={tw`flex-row items-center flex-wrap gap-2 mt-1.5`}>
            {drugUseOptions.map((option, index) => (
              <Pressable
                style={tw.style(`py-3 px-4 rounded-full bg-input`, {
                  'bg-primary': isSelected(option),
                })}
                key={index}
                onPress={() => form.setValue('drugUseFrequency', option)}>
                <Text
                  style={tw.style(`text-sm`, {
                    'text-white': isSelected(option),
                  })}>
                  {option}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* does exercise */}
        <FormSelect
          options={YES_NO_OPTIONS}
          control={form.control}
          name="doesExercise"
          label="Do you exercise regularly?"
        />
      </KeyboardAwareScrollView>

      <Button containerStyle={tw`mb-4`} onPress={form.handleSubmit(onSubmit)}>
        Save & Continue
      </Button>
    </View>
  );
};
export default Lifestyle;
