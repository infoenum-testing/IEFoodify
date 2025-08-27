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

import WelcomeScreen from "./src/screens/WelcomeScreen"
import LoginScreen from "./src/screens/LoginScreen"
import OtpScreen from "./src/screens/OtpScreen"
import ResetPassword from "./src/screens/ResetPasswordScreen"
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import SplashScreen from 'react-native-splash-screen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';



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
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


export default App;
