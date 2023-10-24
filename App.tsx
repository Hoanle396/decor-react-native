import StatusBar from '@/components/StatusBar';
import { color } from '@/constants/color';
import Register from '@/modules/register';
import Splash from '@/modules/splash';
import Welcome from '@/modules/welcome';
import Alldone from '@/modules/alldone';
import Search from '@/modules/search';
import DetailRooms from '@/modules/detailDecors';
import { RootStackRoute } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Login from '@/modules/login';
import BottomTab from '@/navigations';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from 'react-query';
const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackRoute>();
  const [queryClient] = useState(new QueryClient(queryClientOption));

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={color.white}
        />
        <Stack.Navigator
          initialRouteName="detailRooms"
          screenOptions={{
            header: () => null,
            animation: 'fade',
          }}
        >
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="alldone" component={Alldone} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="detailRooms" component={DetailRooms} />
          <Stack.Screen name="home" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
