/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./PreLogin/WelcomeScreen"
import LoginScreen from "./PreLogin/LoginScreen"
import OtpScreen from "./PreLogin/OtpScreen"
import ResetPassword from "./PreLogin/ResetPasswordScreen"
import ForgotPasswordScreen from './PreLogin/ForgotPasswordScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [initialRoute, setInitialRoute] = useState(null);

    useEffect(() => {
      SplashScreen.hide()
    const checkStatus = async () => {
      // const onboarding = await AsyncStorage.getItem('completeOnboarding');
      // const login = await AsyncStorage.getItem('isLogin');

      // if (!onboarding || onboarding !== 'true') {
      // setInitialRoute('Welcome')
      // } else if (!login || login !== 'true') {
      //   setInitialRoute('Login')
      // } else {
      //   setInitialRoute('MainTab')
      // }
    };

    checkStatus();
  }, []);

  // if (!initialRoute) {
  //   return null; // or loading spinner
  // }


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Welcome"}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'WELCOME', headerBackVisible: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
