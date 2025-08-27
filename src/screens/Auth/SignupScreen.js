import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { validateEmail, validatePassword } from '../../utils/validations';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSignup = () => {
    let newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    if (mobile.length < 10) newErrors.mobile = 'Invalid mobile number';
    if (!validatePassword(password)) newErrors.password = 'Weak password';
    if (password !== confirmPassword) newErrors.confirm = 'Passwords do not match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Call API here
      console.log({ name, email, mobile, password });
      navigation.replace('Home'); // redirect after signup
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        <Input
          label="Full Name"
          value={name}
          onChangeText={setName}
          error={errors.name}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          error={errors.email}
        />
        <Input
          label="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          error={errors.mobile}
        />

        {/* 👇 Password input with eye toggle */}
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          isPassword
          error={errors.password}
        />

        {/* 👇 Confirm Password input with eye toggle */}
        <Input
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          isPassword
          error={errors.confirm}
        />

        <Button title="Sign Up" onPress={onSignup} />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.link}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2382AA',
    textAlign: 'center',
    marginBottom: 30
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black'
  },
  link: {
    color: '#2382AA',
    fontWeight: '600'
  }
});
