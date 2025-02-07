import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import FormPasswordInput from '~/components/extended/form-password-input';
import { Button, View } from '~/components/shared';
import {
  ManagePasswordSchema,
  managePasswordSchema,
} from '~/modules/settings/schemas/manage-password.schema';
import tw from '~/tw';

const ManagePassword = () => {
  const form = useForm<ManagePasswordSchema>({
    resolver: zodResolver(managePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: ManagePasswordSchema) => {};

  return (
    <View style={tw`flex-1 bg-bg p-5`}>
      <KeyboardAwareScrollView
        style={tw`flex-1`}
        bottomOffset={64}
        contentContainerStyle={tw`gap-y-6 flex-1`}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}>
        <FormPasswordInput control={form.control} name="currentPassword" label="Current Password" />
        <FormPasswordInput control={form.control} name="newPassword" label="New Password" />
        <FormPasswordInput control={form.control} name="confirmPassword" label="Confirm Password" />

        <Button containerStyle={tw`mt-auto mb-4`} onPress={form.handleSubmit(onSubmit)}>
          Save Changes
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ManagePassword;
