import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, View } from 'components/shared';
import { router } from 'expo-router';
import { useForm, useWatch } from 'react-hook-form';
import { Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { MedicalHistorySchema, medicalHistorySchema } from '../schemas/medical-history.schema';

import FormSelect from '~/components/extended/form-select';
import tw from '~/tw';

const YES_NO_OPTIONS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

const diagnosis = [
  'Diabetes',
  'HIV/AIDs',
  'Cancer',
  'Tuberculosis',
  'Stroke',
  'Ulcer',
  'Hypertension',
  'Asthma',
];

const MedicalHistory = () => {
  const form = useForm<MedicalHistorySchema>({
    resolver: zodResolver(medicalHistorySchema),
    defaultValues: {
      alergies: [''],
      diagnosis: [''],
    },
  });

  const diagnosisList = useWatch({
    control: form.control,
    name: 'diagnosis',
  });

  const alergiesList = useWatch({
    control: form.control,
    name: 'alergies',
  });

  const onSubmit = (data: MedicalHistorySchema) => {
    console.log(data);
    router.setParams({
      step: 'lifestyle',
    });
  };

  const onSelectDiagnosis = (alergy: string) => {
    if (!alergy) return;
    const currentDiagnosis = diagnosisList || [];
    const isAlreadySelected = currentDiagnosis.includes(alergy);

    const newDiagnosis = isAlreadySelected
      ? currentDiagnosis.filter((item) => item !== alergy)
      : [...currentDiagnosis, alergy];

    form.setValue('diagnosis', newDiagnosis);
  };

  const onSelectAlergy = (alergy: string) => {
    if (!alergy) return;
    const currentAlergies = alergiesList || [];
    const isAlreadySelected = currentAlergies.includes(alergy);

    const newAlergies = isAlreadySelected
      ? currentAlergies.filter((item) => item !== alergy)
      : [...currentAlergies, alergy];

    form.setValue('alergies', newAlergies);
  };

  const isPresentInArray = (arr: string[] | undefined, value: string) => {
    if (!arr) return false;
    return arr?.includes(value);
  };

  return (
    <View style={tw`flex-1 gap-y-5`}>
      <KeyboardAwareScrollView
        bottomOffset={64}
        contentContainerStyle={tw`gap-y-6`}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}>
        <FormSelect
          control={form.control}
          name="medical_condition"
          label="Have you ever been diagnosed with any medical condition?"
          options={YES_NO_OPTIONS}
        />

        <FormSelect
          control={form.control}
          name="family_history"
          label="Has anyone in your family ever been diagnosed with any medical condition?"
          options={YES_NO_OPTIONS}
        />

        <FormSelect
          control={form.control}
          name="has_disability"
          label="Do you have any disabilities?"
          options={YES_NO_OPTIONS}
        />

        <FormSelect
          control={form.control}
          name="has_reaction_to_medication"
          label="Do you react negatively to any medication?"
          options={YES_NO_OPTIONS}
        />

        <View>
          <Text>Medical Diagnosis</Text>
          <View style={tw`flex-row items-center flex-wrap gap-2 mt-1.5`}>
            {diagnosis.map((alergy, index) => (
              <Pressable
                style={tw.style(`py-3 px-4 rounded-full bg-input`, {
                  'bg-primary': isPresentInArray(diagnosisList, alergy),
                })}
                key={index}
                onPress={() => onSelectDiagnosis(alergy)}>
                <Text
                  style={tw.style(`text-sm`, {
                    'text-white': isPresentInArray(diagnosisList, alergy),
                  })}>
                  {alergy}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View>
          <Text>Alergies</Text>
          <View style={tw`flex-row items-center flex-wrap gap-2 mt-1.5`}>
            {diagnosis.map((alergy, index) => (
              <Pressable
                style={tw.style(`py-3 px-4 rounded-full bg-input`, {
                  'bg-primary': isPresentInArray(alergiesList, alergy),
                })}
                key={index}
                onPress={() => onSelectAlergy(alergy)}>
                <Text
                  style={tw.style(`text-sm`, {
                    'text-white': isPresentInArray(alergiesList, alergy),
                  })}>
                  {alergy}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Button containerStyle={tw`mb-4`} onPress={form.handleSubmit(onSubmit)}>
        Save & Continue
      </Button>
    </View>
  );
};
export default MedicalHistory;
