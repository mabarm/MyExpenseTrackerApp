import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import TransactionItemStyles from './TransactionItemStyles';

function TransactionItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Transaction', {currentTransaction: item})
      }
      style={TransactionItemStyles.MainView}>
      <View style={TransactionItemStyles.ItemBox}>
        <Text style={TransactionItemStyles.Title}>{item.title}</Text>
        {item.amount >= 0 ? (
          <Text
            style={[
              TransactionItemStyles.Title,
              TransactionItemStyles.Positive,
            ]}>
            {item.amount} Rs
          </Text>
        ) : (
          <Text
            style={[
              TransactionItemStyles.Title,
              TransactionItemStyles.Negative,
            ]}>
            {item.amount} Rs
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(TransactionItem);
