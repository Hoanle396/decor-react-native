import Product from '@/modules/catetory';
import PostCategory from '@/modules/postCategory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
function CategoryNavigation(): JSX.Element {
  const Stack = createNativeStackNavigator<any>();

  return (
    <Stack.Navigator
      initialRouteName="category"
      screenOptions={{
        header: () => null,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="category" component={Product} />
      <Stack.Screen name="categoryPost" component={PostCategory} />
    </Stack.Navigator>
  );
}

export default CategoryNavigation;
