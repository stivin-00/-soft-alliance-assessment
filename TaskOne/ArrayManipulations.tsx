/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

interface ArrayManipulationComponentProps {
  numbers: number[];
}

const ArrayManipulation: React.FC<ArrayManipulationComponentProps> = ({
  numbers,
}) => {
  const filterAndReverseArray = (arr: number[]): string => {
    return arr
      .filter(num => num % 2 !== 0)
      .reverse()
      .join(', ');
  };

  return (
    <View>
      <Text style={{color: '#333333'}}>{filterAndReverseArray(numbers)}</Text>
    </View>
  );
};

export default ArrayManipulation;
