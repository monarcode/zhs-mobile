import { zodResolver } from '@hookform/resolvers/zod';
import { View, Button } from 'components/shared';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { PersonalInfoSchema, personalInfoSchema } from '../schemas/personal-info';

import FormDatePicker from '~/components/extended/form-date-picker';
import FormSelect from '~/components/extended/form-select';
import FormTextInput from '~/components/extended/form-text-input';
import tw from '~/tw';

const PersonalInfo = () => {
  const form = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
    },
  });

  const onSubmit = (data: PersonalInfoSchema) => {
    console.log(data);
    router.setParams({
      step: 'medical-history',
    });
  };

  return (
    <View style={tw`flex-1 gap-y-5`}>
      <KeyboardAwareScrollView
        bottomOffset={64}
        contentContainerStyle={tw`gap-y-4`}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}>
        <FormTextInput
          control={form.control}
          name="firstName"
          placeholder="First Name"
          label="First Name"
        />
        <FormTextInput
          control={form.control}
          name="lastName"
          placeholder="Last Name"
          label="Last Name"
        />
        <FormDatePicker control={form.control} name="dateOfBirth" label="Date of Birth" />
        <FormSelect
          control={form.control}
          name="gender"
          label="Gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />
        <FormTextInput control={form.control} name="street" label="Street" />
        <FormTextInput control={form.control} name="city" label="City" />
        <FormTextInput control={form.control} name="state" label="State" />
      </KeyboardAwareScrollView>

      <Button containerStyle={tw`mb-4`} onPress={form.handleSubmit(onSubmit)}>
        Save & Continue
      </Button>
    </View>
  );
};

export default PersonalInfo;
