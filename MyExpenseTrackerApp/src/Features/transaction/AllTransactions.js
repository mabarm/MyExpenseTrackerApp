import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import TransactionContext from '../../Frameworks/TransactionContext';
import TransactionItem from './TransactionItem';
import AllTransactionsStyles from './AllTransactionsStyles';

function AllTransactions({navigation}) {
  const {transactions} = useContext(TransactionContext);

  const renderItemHandler = ({item}) => {
    return <TransactionItem item={item} navigation={navigation} />;
  };

  return transactions && transactions.length > 0 ? (
    <FlatList
      data={transactions}
      renderItem={renderItemHandler}
      maxToRenderPerBatch={10}
      style={AllTransactionsStyles.FlatlistView}
    />
  ) : (
    <View style={AllTransactionsStyles.EmptyBox}>
      <Text style={AllTransactionsStyles.EmptyText}>No transactions</Text>
    </View>
  );
}

export default AllTransactions;
