import AuthProvider from '@/context/Auth';
import Splash from '@/modules/splash';
import AppNavigation from '@/navigations/AppNavigation';
import { Toasts } from '@backpackapp-io/react-native-toast';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
  const [queryClient] = useState(new QueryClient(queryClientOption));
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  });
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {isLoading ? <Splash /> : <AppNavigation />}
          </AuthProvider>
        </QueryClientProvider>
        <Toasts />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
