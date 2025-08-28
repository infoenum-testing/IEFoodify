import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    alert("Edit Profile Clicked!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={handleEditProfile} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
  },
});
