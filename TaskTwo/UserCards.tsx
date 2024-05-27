/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/users?_limit=6';

interface User {
  id: number;
  name: string;
  email: string;
  address: {city: string};
  phone: string;
}

const UserCards: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const renderItem = ({item}: {item: User}) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Name: {item?.name}</Text>
      <Text style={styles.cardText}>Email: {item?.email}</Text>
      <Text style={styles.cardText}>City: {item?.address?.city}</Text>
      <Text style={styles.cardText}>Phone: {item.phone}</Text>
    </View>
  );

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={windowWidth >= 500 ? 3 : 2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width:
      (Dimensions.get('window').width - 50) /
        (Dimensions.get('window').width >= 500 ? 3 : 2) -
      10,
  },
  cardText: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 5,
  },
});

export default UserCards;
