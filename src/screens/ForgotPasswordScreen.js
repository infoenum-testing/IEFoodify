import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Button from '../components/Button';
import { validateEmail } from '../utils/validations';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        setEmailError('');
        // 🔑 API call / Firebase password reset
        navigation.navigate('OtpScreen');
    };

    return (
        <SafeAreaProvider style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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

                    {/* ✅ Reusable Input */}
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            if (emailError) setEmailError('');
                        }}
                        keyboardType="email-address"
                        error={emailError}
                    />

                    {/* ✅ Reusable Button */}
                    <Button title="Send Reset Link" onPress={handleSubmit} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
};

export default ForgotPasswordScreen;

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
});
