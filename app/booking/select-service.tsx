import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import React from 'react';
import { TextInput } from 'react-native';

import Tick from '~/assets/svg/tick.svg';
import { Text, View } from '~/components/shared';
import { useLabAppointment } from '~/store/booking/use-lab-appointment';
import tw from '~/tw';
import { formatNaira } from '~/utils/formater';

const services = [
  {
    name: 'Malaria test',
    amount: 10000,
  },
  {
    name: 'Typhoid test',
    amount: 10000,
  },
  {
    name: 'STD test',
    amount: 10000,
  },
  {
    name: 'Complete blood count (CBC)',
    amount: 10000,
  },
  {
    name: 'DNA test',
    amount: 10000,
  },
  {
    name: 'Diabetes test',
    amount: 10000,
  },
  {
    name: 'HIV/AIDS test',
    amount: 10000,
  },
];

const SelectService = () => {
  const selected = useLabAppointment((state) => state.labServices);
  const setSelected = useLabAppointment((state) => state.updateBookingDetails);

  return (
    <View style={tw`p-5 gap-y-6`}>
      <View style={tw`relative`}>
        <TextInput
          placeholder="Search for X-ray, Malaria test"
          style={tw`border border-[#1C1C1E] p-4 rounded-full font-regular text-xs`}
          placeholderTextColor="#8E8E93"
        />
      </View>

      <View style={tw`gap-y-4`}>
        {services.map(({ name, amount }) => (
          <View key={name} style={tw`flex-row items-center justify-between py-1`}>
            <View style={tw`flex-row items-center gap-x-2`}>
              <CheckboxPrimitive.Root
                checked={selected.includes(name)}
                onCheckedChange={(v) =>
                  selected.includes(name)
                    ? setSelected({ labServices: selected.filter((s) => s !== name) })
                    : setSelected({ labServices: [...selected, name] })
                }
                style={tw.style(`h-5 w-5 rounded border border-[#242426] overflow-hidden`, {
                  'border-0': selected.includes(name),
                })}>
                <CheckboxPrimitive.Indicator>
                  <View style={tw`h-full w-full bg-primary-darker items-center justify-center`}>
                    <Tick />
                  </View>
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>
              <Text style={tw`text-xs font-medium text-[#242426]`}>{name}</Text>
            </View>
            <Text style={tw`text-xs font-medium text-[#242426]`}>{formatNaira(amount)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SelectService;
