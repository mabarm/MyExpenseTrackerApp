import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionHelper from '../../Frameworks/TransactionHelper';
import HomeScreen from '../home/HomeScreen';
import Transaction from '../transaction/Transaction';
import AllTransactions from '../transaction/AllTransactions';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <TransactionHelper>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Transaction"
            options={{
              headerStyle: {
                backgroundColor: 'lightgrey',
              },
            }}
            component={Transaction}></Stack.Screen>
          <Stack.Screen
            name="AllTransactions"
            options={{
              title: 'All Transactions',
              headerStyle: {
                backgroundColor: 'lightgrey',
              },
            }}
            component={AllTransactions}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionHelper>
  );
}

export default Routes;
