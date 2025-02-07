import { View, Text, Button } from 'components/shared';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerAsset } from 'expo-image-picker';
import { router } from 'expo-router';
import { Gallery } from 'iconsax-react-native';
import { useState } from 'react';
import { Image, Pressable } from 'react-native';

import tw from '~/tw';

const ProfilePhoto = () => {
  const [image, setImage] = useState<ImagePickerAsset | null>();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images' as ImagePicker.MediaType,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const onSubmitPhoto = () => {
    router.setParams({
      step: 'personal-info',
    });
  };

  return (
    <View style={tw`flex-1 pb-4`}>
      <View style={tw`items-center mt-6`}>
        <View style={tw`overflow-hidden rounded-full size-36 bg-input`}>
          {image ? <Image source={{ uri: image.uri }} style={tw`w-full h-full`} /> : null}
        </View>

        <Pressable onPress={pickImage} style={tw`flex-row items-center mt-6 gap-x-2`}>
          <Gallery size={20} />
          <Text style={tw`text-sm`}>Upload Profile Photo</Text>
        </Pressable>
      </View>

      <Button onPress={onSubmitPhoto} containerStyle={tw`mt-auto`}>
        Save & Continue
      </Button>
    </View>
  );
};
export default ProfilePhoto;
