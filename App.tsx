import StatusBar from '@/components/StatusBar';
import { color } from '@/constants/color';
import Splash from '@/modules/splash';
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
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          options={{ header: () => null }}
          component={Splash}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
