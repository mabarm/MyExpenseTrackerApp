import {StyleSheet} from 'react-native';

const TransactionStyles = StyleSheet.create({
  MainView: {padding: 20},
  ItemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Add: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262626',
    marginTop: 15,
    marginLeft: 15,
  },
  Description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2F7E79',
    marginTop: 30,
    marginLeft: 15,
  },
  DescriptionInput: {
    backgroundColor: 'lightgrey',
    marginTop: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 15,
  },
  Amount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2F7E79',
    marginTop: 30,
    marginLeft: 15,
  },
  AmountInput: {
    backgroundColor: 'lightgrey',
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 15,
  },
  PressableMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 160,
  },
  PressableSubContainer: {
    backgroundColor: '#438883',
    borderRadius: 36,
    width: 70,
    height: 70,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  PressableText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default TransactionStyles;
