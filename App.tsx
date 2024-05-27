/* eslint-disable prettier/prettier */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ArrayManipulation from './TaskOne/ArrayManipulations';
import UserCards from './TaskTwo/UserCards';
import ObjectManipulation from './TaskOne/ObjectManipulations';
import NewUserForm from './TaskTwo/NewUserForm';

function App(): React.JSX.Element {


  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* section one */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle]}>Task One</Text>
          <View style={styles.sectionContent}>
            <Text style={[styles.sectionDescription]}>Array Manipulations</Text>
            <ArrayManipulation numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
          </View>
          <View style={styles.sectionContent}>
            <Text style={[styles.sectionDescription]}>
              Object Manipulations
            </Text>
            <ObjectManipulation />
          </View>
        </View>
        {/* section two */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle]}>Task Two</Text>
          <View style={styles.sectionContent}>
            <Text style={[styles.sectionDescription]}>User Cards</Text>
            <UserCards />
          </View>
          <View style={styles.sectionContent}>
            <Text style={[styles.sectionDescription]}>New User Form</Text>
            <NewUserForm />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#297725',
    fontWeight: '500',
  },
  sectionDescription: {
    marginBottom: 12,
    color: '#333333',
    fontSize: 16,
    fontWeight: '400',
  },
  sectionContent: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
