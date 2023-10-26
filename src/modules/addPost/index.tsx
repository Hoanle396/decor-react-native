import { useCategory } from '@/apis/post';
import { createPost } from '@/apis/post/requests';
import Button from '@/components/Button';
import Header from '@/components/Header/Header';
import ImageInput from '@/components/ImageField';
import SelectInput from '@/components/SelectField';
import TextInput from '@/components/TextField/TextInput';
import TextGradient from '@/components/TextGradient';
import { color } from '@/constants/color';
import { useHideBottomBar } from '@/hooks/useHideBottomBar';
import { useToggle } from '@/hooks/useToggle';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { ImageTypes } from '@/types/utils';
import { toast } from '@backpackapp-io/react-native-toast';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';

type Props = {};

const AddPost: FCC<Props> = () => {
  useHideBottomBar();
  const [name, setName] = useState('');
  const [activeName, onToggleActiveName] = useToggle();
  const [description, setDescription] = useState('');
  const [activeDescription, onToggleActiveDescription] = useToggle();
  const [category, setCategory] = useState('');
  const { data } = useCategory();
  const options = useMemo(() => {
    return data?.data?.map(item => ({
      label: item.name,
      value: String(item.id),
    }));
  }, [data?.data]);

  const [imageList, setImageList] = useState<ImageTypes[]>([]);

  const navigation = useNavigation<NavigationProp<RootStackRoute, 'Create'>>();

  const onBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const onPublishSuccess = () => {
    setName('');
    setCategory('');
    setDescription('');
    setImageList([]);
    navigation.navigate('Dashboard');
  };

  const { mutateAsync } = useMutation(createPost, {
    onSuccess: onPublishSuccess,
  });

  const handelPublish = async () => {
    if (!name || !description || !imageList || !category) {
      toast.error('Please enter full field!', {
        duration: 3000,
        styles: {
          view: {
            backgroundColor: color.background.secondary,
          },
          text: {
            color: color.error.main,
          },
        },
        icon: '✘',
      });
    } else {
      try {
        await toast.promise(
          mutateAsync({
            category: category,
            description,
            name,
            files: imageList,
          }),
          {
            loading: 'Publishing!',
            success: 'Published successfully!',
            error: 'Publishing failed',
          },
          {
            duration: 3000,
            styles: {
              view: {
                backgroundColor: color.background.secondary,
              },
              text: {
                color: color.success.main,
              },
            },
          },
        );
      } catch {}
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={48}
      contentContainerStyle={[
        { paddingBottom: 0, flex: 1, backgroundColor: color.white },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
          <Header
            leftBtnVariant="back"
            onPressLeftButton={onBack}
            rightBtnVariant="post"
            onPressRightButton={handelPublish}
            title={
              <Image
                style={styles.image}
                source={require('@/assets/logo.png')}
                alt="Logo Image"
              />
            }
            height={100}
          />
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
              <View style={styles.root}>
                <TextGradient style={styles.slogan}>
                  Let's Share Decorations and Create Dreamlike Spaces Together.
                </TextGradient>
                <View style={styles.form}>
                  <TextInput
                    label="Name"
                    placeholder="Enter post name"
                    multiline
                    onFocus={onToggleActiveName}
                    onBlur={onToggleActiveName}
                    active={activeName}
                    value={name}
                    onChangeText={setName}
                  />
                </View>

                <View style={styles.form}>
                  <SelectInput
                    label="Category"
                    placeholder="Choose your category"
                    value={category}
                    onChangeText={setCategory}
                    data={options}
                  />
                </View>
                <View style={styles.form}>
                  <TextInput
                    label="Description"
                    placeholder="Enter your description"
                    multiline
                    numberOfLines={5}
                    onFocus={onToggleActiveDescription}
                    onBlur={onToggleActiveDescription}
                    active={activeDescription}
                    value={description}
                    onChangeText={setDescription}
                  />
                </View>
                <View style={styles.form}>
                  <ImageInput
                    label="Images"
                    imageList={imageList}
                    onValueChange={setImageList}
                    placeholder="Choose your images"
                  />
                </View>
                <View style={styles.form}>
                  <Button
                    onPress={handelPublish}
                    style={{ width: 232, alignSelf: 'center' }}
                  >
                    Publish
                  </Button>
                </View>
                <View style={{ height: 100 }} />
              </View>
            </SafeAreaView>
          </ScrollView>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    gap: 58,
  },
  root: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '7%',
    gap: 28,
  },
  image: {
    alignSelf: 'center',
    height: 77,
    width: 127,
  },
  form: {
    width: '100%',
  },
  slogan: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
