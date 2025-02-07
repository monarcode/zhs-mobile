import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import * as React from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';

import TickIcon from '~/assets/svg/tick-02.svg';
import tw from '~/tw';

type CheckboxProps = Omit<CheckboxPrimitive.RootProps, 'style'> & {
  style?: StyleProp<ViewStyle>;
};

const Checkbox = React.forwardRef<CheckboxPrimitive.RootRef, CheckboxProps>(
  ({ style, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        style={[
          tw.style(
            'size-6 shrink-0 rounded-md border border-neutral-600',
            props.checked && 'bg-primary border-primary'
          ),
          style,
        ]}
        {...props}>
        <CheckboxPrimitive.Indicator style={tw`items-center justify-center w-full h-full`}>
          <TickIcon
            strokeWidth={Platform.OS === 'web' ? 2.5 : 3.5}
            style={tw`text-white`}
            height={16}
            width={16}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
