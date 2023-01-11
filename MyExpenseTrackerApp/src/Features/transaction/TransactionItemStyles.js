import {StyleSheet} from 'react-native';

const TransactionItemStyles = StyleSheet.create({
  MainView: {
    backgroundColor: '#98D7C2',
    marginTop: 10,
  },
  ItemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 18,
    fontWeight: '500',
  },
  Positive: {color: 'green'},
  Negative: {color: 'red'},
});

export default TransactionItemStyles;
