import Header from '@/components/Header/Header';
import ImageInput from '@/components/ImageField';
import SelectInput from '@/components/SelectField';
import TextInput from '@/components/TextField/TextInput';
import { color } from '@/constants/color';
import { useToggle } from '@/hooks/useToggle';
import { FCC } from '@/types';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const AddPost: FCC<Props> = () => {
  const [name, setName] = useState('');
  const [activeName, onToggleActiveName] = useToggle();

  const [category, setCategory] = useState('');

  return (
    <>
      <Header
        leftBtnVariant="back"
        onPressLeftButton={() => {}}
        rightBtnVariant="post"
        onPressRightButton={() => {}}
        title={
          <Image
            style={styles.image}
            source={require('@/assets/logo.png')}
            alt="Logo Image"
          />
        }
        height={100}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
        <KeyboardAwareScrollView
          extraScrollHeight={48}
          contentContainerStyle={[styles.container, { paddingBottom: 0 }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.root}>
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
                data={[
                  { value: '1', label: 'New post' },
                  { value: '2', label: 'New post 2' },
                ]}
              />
            </View>
            <View style={styles.form}>
              <TextInput
                label="Description"
                placeholder="Enter your description"
                multiline
                numberOfLines={5}
              />
            </View>
            <View style={styles.form}>
              <ImageInput label="Images" placeholder="Choose your images" />
            </View>
          </View>
          <View style={{ height: 120 }} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
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
    width: 177,
  },
  form: {
    width: '100%',
  },
});
