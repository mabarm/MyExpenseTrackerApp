import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import TransactionContext from '../../Frameworks/TransactionContext';
import TransactionItem from '../transaction/TransactionItem';
import HomeScreenStyles from './HomeScreenStyles';

function HomeScreen({navigation}) {
  const {transactions} = useContext(TransactionContext);
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    let earnings = 0;
    let spendings = 0;

    for (let item of transactions) {
      if (item.amount > 0) {
        earnings += item.amount;
      } else if (item.amount <= 0) {
        spendings += item.amount;
      }
    }
    setIncome(earnings);
    setExpenses(spendings);
  }, [transactions]);

  const renderItemHandler = ({item}) => {
    return <TransactionItem item={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={HomeScreenStyles.MainView}>
      <View style={HomeScreenStyles.OuterContainer}>
        <Text
          style={[
            HomeScreenStyles.GreetingContainer,
            HomeScreenStyles.GreetingTextOne,
          ]}>
          Good afternoon,
        </Text>
        <Text
          style={[
            HomeScreenStyles.GreetingContainer,
            HomeScreenStyles.GreetingTextTwo,
          ]}>
          Dear User,
        </Text>
        <View style={HomeScreenStyles.BalanceContainer}>
          <Text style={HomeScreenStyles.BalanceType}>Total Balance</Text>
          <Text style={HomeScreenStyles.TotalBalanceValue}>
            Rs {income + expenses}
          </Text>
          <View style={HomeScreenStyles.BalanceTypeBox}>
            <View>
              <Text style={HomeScreenStyles.BalanceType}>Income</Text>
              <Text style={HomeScreenStyles.BalanceTypeValue}>Rs {income}</Text>
            </View>
            <View>
              <Text style={HomeScreenStyles.BalanceType}>Expenses</Text>
              <Text style={HomeScreenStyles.BalanceTypeValue}>
                Rs {expenses}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={HomeScreenStyles.TransactionContainer}>
        <Text style={HomeScreenStyles.History}>Transactions History</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllTransactions');
          }}>
          <Text style={HomeScreenStyles.SeeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions.slice(0, 5)}
        renderItem={renderItemHandler}
        style={HomeScreenStyles.FlatlistView}
      />

      <TouchableOpacity
        style={HomeScreenStyles.AddBox}
        onPress={() => {
          navigation.navigate('Transaction');
        }}>
        <Text style={HomeScreenStyles.AddText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
