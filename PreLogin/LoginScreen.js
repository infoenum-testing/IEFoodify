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
    Image,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (value) => {
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
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>Login</Text>

                    {/* Email */}
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

                    {/* Password */}
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

                    {/* Login Button */}
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    {/* Forgot Password */}
                    <View style={styles.forgotPasswordContainer}>
                        <Text
                            style={styles.forgotPasswordText}
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            Forgot Password?
                        </Text>
                    </View>

                    <View style={styles.signUpButton}>
                        <Text style={styles.signUpText}>
                            Don't have an account?{' '}
                            <Text
                                style={styles.signUpLink}
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                Sign Up
                            </Text>
                        </Text>
                    </View>

                    {/* OR */}
                    <Text style={styles.orText}>────────  OR  ────────</Text>

                    {/* Social Buttons */}
                    <GoogleSigninButton
                        style={styles.socialButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={handleGoogleSignIn}
                    />
                    {Platform.OS === 'ios' && (
                        <AppleButton
                            style={styles.socialButton}
                            cornerRadius={8}
                            buttonStyle={AppleButton.Style.BLACK}
                            buttonType={AppleButton.Type.SIGN_IN}
                            onPress={handleAppleSignIn}
                        />
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '900',
        alignSelf: 'center',
        marginBottom: 40,
        color: '#22789E',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: 10,
        paddingHorizontal: 14,
        backgroundColor: '#f9f9f9',
        minHeight: 52,
        elevation: 1,
    },
    inputError: {
        borderColor: '#e53935',
        borderWidth: 1.5,
        backgroundColor: '#fff5f5',
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#222',
    },
    errorText: {
        color: '#e53935',
        fontSize: 13,
        marginBottom: 6,
        marginLeft: 6,
        fontWeight: '500',
    },
    eyeButton: {
        padding: 5,
    },
    loginButton: {
        backgroundColor: '#22789E',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    signUpButton: {
        marginTop: 18,
        alignItems: 'center',
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginTop: 8,
        marginRight: 4,
    },
    forgotPasswordText: {
        color: '#22789E',
        fontSize: 14,
        fontWeight: '600',
    },

    signUpText: {
        color: 'black',
        fontSize: 15,
    },
    signUpLink: {
        color: '#22789E',
        fontWeight: '700',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 22,
        color: '#999',
        fontSize: 14,
    },
    socialButton: {
        width: '100%',
        height: 50,
        marginBottom: 15,
        alignSelf: 'center',
    },
});

export default LoginScreen;