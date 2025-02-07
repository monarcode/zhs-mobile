import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { StyleSheet, View, Text } from 'react-native';

import { registerSchema, RegisterSchema } from '../schemas/register.schema';

import FormPasswordInput from '~/components/extended/form-password-input';
import FormTextInput from '~/components/extended/form-text-input';
import { Button } from '~/components/shared';
import tw from '~/tw';

export default function RegisterForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
  });

  const onSubmit = (values: RegisterSchema) => {
    console.log(values);
    router.push('/(auth)/login');
  };

  return (
    <View style={tw`my-4 gap-y-5`}>
      <FormTextInput
        control={form.control}
        name="email"
        label="Email"
        autoCapitalize="none"
        placeholder="Enter your email"
      />

      <FormPasswordInput
        control={form.control}
        name="password"
        label="Password"
        placeholder="Enter your password"
      />

      <FormPasswordInput
        control={form.control}
        name="confirmPassword"
        label="Confirm password"
        placeholder="Confirm your password"
      />

      <FormTextInput
        control={form.control}
        name="phoneNumber"
        label="Phone number"
        autoCapitalize="none"
        placeholder="Enter your phone number"
      />

      <View style={tw`mt-12 gap-y-6`}>
        <Button onPress={form.handleSubmit(onSubmit)}>Create account</Button>

        <View style={tw`flex-row items-center justify-around`}>
          <View
            style={tw.style('w-1/3', {
              borderWidth: StyleSheet.hairlineWidth,
            })}
          />
          <Text>or</Text>
          <View
            style={tw.style('w-1/3', {
              borderWidth: StyleSheet.hairlineWidth,
            })}
          />
        </View>

        <Button variant="outline">Continue with Google</Button>

        <Text style={tw.style('text-center')}>
          Already have an account? <Text style={tw`text-primary`}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
}
