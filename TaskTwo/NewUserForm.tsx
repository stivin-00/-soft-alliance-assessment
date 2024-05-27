/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const NewUserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [newUser, setNewUser] = useState<any>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          city,
          phone,
        }),
      });
      const data = await response.json();

      if (data) {
        setNewUser(data);
        Alert.alert('succeful', 'new user created');
      }
      setName('');
      setEmail('');
      setCity('');
      setPhone('');
    } catch (error: any) {
      Alert.alert('Error creating new user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#888"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#888"
          value={phone}
          onChangeText={setPhone}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      {newUser && (
        <View style={styles.card}>
          <Text style={styles.cardText}>ID: {newUser?.id}</Text>
          <Text style={styles.cardText}>Name: {newUser?.name}</Text>
          <Text style={styles.cardText}>Email: {newUser?.email}</Text>
          <Text style={styles.cardText}>City: {newUser?.city}</Text>
          <Text style={styles.cardText}>Phone: {newUser?.phone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    color: '#333333',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  card: {
    backgroundColor: '#fff',

    borderRadius: 8,
    padding: 10,
    marginTop: 16,
    width:
      (Dimensions.get('window').width - 50) /
        (Dimensions.get('window').width >= 600 ? 3 : 2) -
      10, // Calculate width based on screen width
  },

  cardText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
});

export default NewUserForm;
