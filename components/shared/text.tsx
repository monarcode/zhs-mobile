import { Text as BaseText, TextProps as BaseTextProps, StyleProp } from 'react-native';

import tw from '~/tw';

export type TextProps = BaseTextProps & {
  style?: string | StyleProp<any>;
};

export const Text = ({ children, style, ...props }: TextProps) => {
  return (
    <BaseText style={tw.style(`font-regular text-sm leading-none`, style)} {...props}>
      {children}
    </BaseText>
  );
};
