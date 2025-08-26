import React, { useState } from 'react';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'; 
import { AppleButton } from '@invertase/react-native-apple-authentication'; 

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Platform,
Image
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const validateEmail = (value) => {
        // Simple email regex
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(value).toLowerCase());
    };
    const handleLogin = () => {
        let valid = true;
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        } else {
            setEmailError('');
        }
        if (password.length < 6) {
            setPasswordError('At least 6 characters');
            valid = false;
        } else {
            setPasswordError('');
        }
        if (!valid) return;
        // Handle login logic
    };
    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic
    };
    const handleAppleSignIn = () => {
        // Handle Apple sign-in logic
    };

return (
        <SafeAreaProvider style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={[styles.inputContainer, emailError ? styles.inputError : null]}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => {
                        setEmail(text);
                        if (emailError) setEmailError('');
                    }}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#bbb"
                />
            </View>
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <View style={[styles.inputContainer, passwordError ? styles.inputError : null]}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => {
                        setPassword(text);
                        if (passwordError) setPasswordError('');
                    }}
                    style={styles.input}
                    secureTextEntry={secureText}
                    autoCapitalize="none"
                    placeholderTextColor="#bbb"
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setSecureText(!secureText)}
                >
                    <Image
                        source={secureText ? require('../Assets/Images/PreLogin/eye.slash.png') : require('../Assets/Images/PreLogin/eye.fill.png')}
                        resizeMode="contain"
                        style={{ width: 22, height: 22, tintColor: '#888' }}
                    />
                </TouchableOpacity>
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <GoogleSigninButton
                style={styles.socialButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleGoogleSignIn}
            />
            {Platform.OS === 'ios' && (
                <AppleButton
                    style={styles.socialButton}
                    cornerRadius={5}
                    buttonStyle={AppleButton.Style.BLACK}
                    buttonType={AppleButton.Type.SIGN_IN}
                    onPress={handleAppleSignIn}
                />
            )}
        </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 32,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9',
        minHeight: 48,
    },
    inputError: {
        borderColor: '#e53935',
        borderWidth: 2,
        backgroundColor: '#fff5f5',
    },
    input: {
        flex: 1,
        height: 48,
        fontSize: 16,
        color: '#222',
    },
    errorText: {
        color: '#e53935',
        fontSize: 14,
        marginBottom: 8,
        marginLeft: 4,
        fontWeight: '500',
    },
    eyeButton: {
        padding: 8,
    },
    loginButton: {
        backgroundColor: '#2e7d32',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpButton: {
        marginTop: 16,
        alignItems: 'center',
    },
    signUpText: {
        color: '#2e7d32',
        fontSize: 16,
    },
    orText: {
        textAlign: 'center',
        marginVertical: 16,
        color: '#888',
        fontSize: 16,
    },
    socialButton: {
        width: '100%',
        height: 48,
        marginBottom: 12,
        alignSelf: 'center',
    },
});

export default LoginScreen;