import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (value) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(value).toLowerCase());
    };

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        setEmailError('');
        // 🔑 Add password reset logic here (e.g. Firebase / API call)
        navigation.navigate('OtpScreen');

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
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={styles.subtitle}>
                        Enter your email to receive a password reset link
                    </Text>

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

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Send Reset Link</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: 8,
        color: '#222',
    },
    subtitle: {
        fontSize: 15,
        color: '#666',
        alignSelf: 'center',
        marginBottom: 24,
        textAlign: 'center',
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
    },
    inputError: {
        borderColor: '#e53935',
        borderWidth: 1.5,
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
        fontSize: 13,
        marginBottom: 6,
        marginLeft: 6,
        fontWeight: '500',
    },
    submitButton: {
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
    submitButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
});

export default ForgotPasswordScreen;
