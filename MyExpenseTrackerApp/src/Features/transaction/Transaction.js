import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import TransactionContext from '../../Frameworks/TransactionContext';
import TransactionStyles from './TransactionStyles';

function Transaction({navigation, route}) {
  const {addTransaction, editTransaction, deleteTransaction} =
    useContext(TransactionContext);
  const [task, setTask] = useState(route?.params?.currentTransaction.title);
  const [cost, setCost] = useState(route?.params?.currentTransaction.amount);

  const createTwoButtonAlert = () =>
    Alert.alert('Some fields are empty', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={TransactionStyles.MainView}>
      <Text style={TransactionStyles.Add}>Add transaction</Text>
      <Text style={TransactionStyles.Description}>Description</Text>
      <TextInput
        style={TransactionStyles.DescriptionInput}
        value={task}
        onChangeText={value => setTask(value)}
      />
      <Text style={TransactionStyles.Amount}>Amount</Text>
      <TextInput
        style={TransactionStyles.AmountInput}
        keyboardType="number-pad"
        value={cost && cost.toString()}
        onChangeText={value => setCost(() => Number(value))}
      />

      <View style={TransactionStyles.PressableMainContainer}>
        <TouchableOpacity
          onPress={() => {
            if (cost && task) {
              deleteTransaction(route.params.currentTransaction.id);
              navigation.popToTop();
            } else {
              createTwoButtonAlert();
            }
          }}
          style={TransactionStyles.PressableSubContainer}>
          <Text style={TransactionStyles.PressableText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (cost && task) {
              if (route?.params?.currentTransaction) {
                let item = {
                  id: route.params.currentTransaction.id,
                  title: task,
                  amount: cost,
                };
                editTransaction(item);
              } else {
                let item = {
                  id: Math.floor(Math.random() * 100000),
                  title: task,
                  amount: cost,
                };
                addTransaction(item);
              }
              setCost();
              setTask();
              navigation.popToTop();
            } else {
              createTwoButtonAlert();
            }
          }}
          style={TransactionStyles.PressableSubContainer}>
          <Text style={TransactionStyles.PressableText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={TransactionStyles.PressableSubContainer}>
          <Text style={TransactionStyles.PressableText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Transaction;
