import { ReactNode } from 'react';
import { Pressable, PressableProps, StyleProp } from 'react-native';

import { Text } from './text';

import tw from '~/tw';

type ButtonVariant = 'primary' | 'secondary' | 'plain';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  loading?: boolean;
  containerStyle?: StyleProp<any>;
  textStyle?: StyleProp<any>;
  variant?: ButtonVariant;
  icon?: ReactNode;
  disabled?: boolean;
}

const getButtonStyle = ({
  variant = 'primary',
  containerStyle,
  disabled,
}: {
  variant: ButtonVariant;
  containerStyle?: string | StyleProp<any>;
  disabled?: boolean;
}) => {
  const base = 'flex-row items-center justify-center gap-2 rounded-lg h-12';

  const colorVariants: Record<ButtonVariant, string> = {
    primary: 'bg-primary',
    secondary: 'bg-primary-lighter',
    plain: 'bg-transparent',
  };

  const disabledVariants: Record<ButtonVariant, string> = {
    primary: 'bg-primary/20',
    secondary: 'bg-gray-200',
    plain: 'bg-transparent',
  };

  return tw.style(
    base,
    disabled ? disabledVariants[variant] : colorVariants[variant],
    containerStyle
  );
};

const getTextStyle = ({
  variant = 'primary',
  textStyle,
  disabled,
}: {
  variant: ButtonVariant;
  textStyle?: string;
  disabled?: boolean;
}) => {
  const base = 'font-medium text-xs';

  const colorVariants: Record<ButtonVariant, string> = {
    primary: 'text-white',
    secondary: 'text-primary',
    plain: 'text-black',
  };

  const disabledTextVariants: Record<ButtonVariant, string> = {
    primary: 'text-white',
    secondary: 'text-gray-400',
    plain: 'text-gray-400',
  };

  return tw.style(
    base,
    disabled ? disabledTextVariants[variant] : colorVariants[variant],
    textStyle
  );
};

export const Button = ({ children, ...props }: ButtonProps) => {
  const { variant = 'primary', containerStyle, textStyle, disabled = false } = props;

  return (
    <Pressable
      style={getButtonStyle({
        variant,
        containerStyle,
        disabled,
      })}
      {...props}>
      <Text
        style={getTextStyle({
          variant,
          textStyle,
          disabled,
        })}>
        {children}
      </Text>
    </Pressable>
  );
};
