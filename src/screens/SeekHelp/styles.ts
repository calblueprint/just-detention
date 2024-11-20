import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  leftPanel: {
    flexDirection: 'column',
    width: '23%',
    backgroundColor: '#f7f9fc',
    paddingHorizontal: 10,
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  filterButton: {
    backgroundColor: '#f7f9fc',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f7f9fc',
  },
  selectedFilterButton: {
    backgroundColor: '#e8e8e8',
    borderColor: '#e8e8e8',
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '95%',
    alignItems: 'flex-start',
    borderWidth: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  selectedButtonText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '600',
  },
  buttonText: {
    fontSize: 16,
    color: '#444',
  },
  selectJurisdictionContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 18,
    borderRadius: 10,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: -2, height: 3 },
    rowGap: 32,
  },
  selectTextContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  selectText: {
    color: '#9B9B9B',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: -0.154,
  },
  checkButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBD2DF',
    width: 20,
    height: 20,
  },
});
