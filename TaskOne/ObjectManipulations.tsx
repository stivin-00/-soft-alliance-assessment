/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

interface Student {
  name: string;
  age: string;
  grades: {
    math: string;
    english: string;
    physics: string;
    chemistry: string;
    biology: string;
  };
}

const ObjectManipulation: React.FC = () => {
  const [student, setStudent] = useState<Student>({
    name: '',
    age: '',
    grades: {
      math: '',
      english: '',
      physics: '',
      chemistry: '',
      biology: '',
    },
  });
  const [averageGrade, setAverageGrade] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setStudent(prevStudent => ({
      ...prevStudent,
      [field]: value,
    }));
  };

  const handleGradeChange = (subject: string, value: string) => {
    setStudent(prevStudent => ({
      ...prevStudent,
      grades: {
        ...prevStudent.grades,
        [subject]: value,
      },
    }));
  };

  const calculateAverageGrade = () => {
    const gradesArray = Object.values(student.grades).map(Number);
    const validGrades = gradesArray.filter(grade => !isNaN(grade));
    const total = validGrades.reduce((acc, grade) => acc + grade, 0);
    const average = validGrades.length ? total / validGrades.length : 0;
    setAverageGrade(average);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={student.name}
        onChangeText={text => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#888"
        value={student.age}
        keyboardType="numeric"
        onChangeText={text => handleInputChange('age', text)}
      />
      <Text style={styles.header}>Grades</Text>
      <TextInput
        style={styles.input}
        placeholder="Math"
        placeholderTextColor="#888"
        value={student.grades.math}
        keyboardType="numeric"
        onChangeText={text => handleGradeChange('math', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="English"
        placeholderTextColor="#888"
        value={student.grades.english}
        keyboardType="numeric"
        onChangeText={text => handleGradeChange('english', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Physics"
        placeholderTextColor="#888"
        value={student.grades.physics}
        keyboardType="numeric"
        onChangeText={text => handleGradeChange('physics', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Chemistry"
        placeholderTextColor="#888"
        value={student.grades.chemistry}
        keyboardType="numeric"
        onChangeText={text => handleGradeChange('chemistry', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Biology"
        placeholderTextColor="#888"
        value={student.grades.biology}
        keyboardType="numeric"
        onChangeText={text => handleGradeChange('biology', text)}
      />
      <Button title="Calculate" onPress={calculateAverageGrade} />
      {averageGrade !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Name: {student.name}</Text>
          <Text style={styles.resultText}>Age: {student.age} Years</Text>
          <Text style={styles.resultText}>
            Average Grade: {averageGrade.toFixed(2)} %
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  header: {
    fontSize: 14,
    color: '#000080',
    fontWeight: '400',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    color:'#333333',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  resultContainer: {
    marginTop: 16,
  },
  resultText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
});

export default ObjectManipulation;
