import * as AvatarPrimitive from '@rn-primitives/avatar';

import { Text } from './text';

import tw from '~/tw';

type Props = {
  source?: string;
  alt: string;
  fallback: string;
};

export function Avatar({ source, alt, fallback }: Props) {
  return (
    <AvatarPrimitive.Root alt={alt}>
      <AvatarPrimitive.Image source={{ uri: source }} />
      <AvatarPrimitive.Fallback>
        <Text style={tw`font-semibold text-sm text-white`}>{fallback}</Text>
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
