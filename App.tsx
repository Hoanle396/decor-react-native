import StatusBar from '@/components/StatusBar';
import { color } from '@/constants/color';
import Register from '@/modules/register';
import Splash from '@/modules/splash';
import Welcome from '@/modules/welcome';
import Alldone from '@/modules/alldone';
import Search from '@/modules/search';
import { RootStackRoute } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackRoute>();

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={color.white}
      />
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          header: () => null,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Splash} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="alldone" component={Alldone} />
        <Stack.Screen name="search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
