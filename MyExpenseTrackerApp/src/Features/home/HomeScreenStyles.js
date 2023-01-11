import {StyleSheet} from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  MainView: {flex: 1, backgroundColor: '#C5C5C5'},
  OuterContainer: {
    width: 414,
    height: 250,
    backgroundColor: '#429690',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  GreetingContainer: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    left: 24,
  },
  GreetingTextOne: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 40,
  },
  GreetingTextTwo: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 2,
  },
  BalanceContainer: {
    backgroundColor: '#2F7E79',
    height: 160,
    width: 374,
    left: 20,
    position: 'absolute',
    top: 130,
    borderRadius: 20,
    opacity: 2,
    paddingHorizontal: 25,
    paddingVertical: 16,
  },
  TotalBalanceValue: {
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  BalanceTypeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  BalanceType: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  BalanceTypeValue: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  TransactionContainer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  History: {
    fontSize: 22,
    fontWeight: '700',
    color: '#262626',
  },
  SeeAll: {
    fontSize: 16,
    fontWeight: '500',
  },
  FlatlistView: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  AddBox: {
    backgroundColor: '#438883',
    bottom: 20,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
  },
  AddText: {
    fontSize: 40,
  },
});

export default HomeScreenStyles;
