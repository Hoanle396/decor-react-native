import Button from '@/components/Button';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
} from 'react-native';

const images = [
  'https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?w=1380&t=st=1697375770~exp=1697376370~hmac=e728f150f24123f4d7a53741909a7a225b08ae945bd471e4ea46de290d9f98ea',
  'https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=1380&t=st=1697375216~exp=1697375816~hmac=fb35af42d0282791ab7cefb16f45d462bd91f7d186945ab94c6d05d6fafdb8df',
  'https://img.freepik.com/free-photo/two-poster-frame-mockup-scandinavian-style-living-room-interior_41470-5137.jpg?w=1380&t=st=1697375838~exp=1697376438~hmac=e142e10bd80b9237e0f045b5abffead262c7af6c9d6830d5dc1347ac7091b371',
];

const Welcome: FCC<{}> = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  const navigation = useNavigation<NavigationProp<RootStackRoute, 'welcome'>>();

  const onLogin = () => {
    navigation.navigate('login');
  };

  const onRegister = () => {
    navigation.navigate('register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/logo.png')}
        alt="Logo Image"
      />
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 250 }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card} />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [11, 23, 11],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
      <Button style={styles.button} onPress={onRegister}>
        Register
      </Button>
      <Text style={styles.hasAccount}>
        Already have an account?{' '}
        <Text style={styles.login} onPress={onLogin}>
          Login
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    gap: 58,
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { width: 213 },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasAccount: {
    fontSize: 16,
    fontWeight: '400',
    color: color.text.light,
  },
  login: {
    fontSize: 16,
    fontWeight: '700',
    color: color.text.dark,
  },
  normalDot: {
    height: 11,
    width: 11,
    borderRadius: 10,
    backgroundColor: color.primary,
    marginHorizontal: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 171,
    top: 30,
  },
});
