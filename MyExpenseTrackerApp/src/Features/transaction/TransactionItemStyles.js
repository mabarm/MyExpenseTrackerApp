import {StyleSheet} from 'react-native';

const TransactionItemStyles = StyleSheet.create({
  MainView: {
    backgroundColor: '#b9d0d4',
    marginTop: 10,
    paddingVertical: 20,
    borderRadius: 14,
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
