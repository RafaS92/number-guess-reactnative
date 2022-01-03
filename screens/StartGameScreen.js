import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new games!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='Reset' onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;