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
    backgroundColor: '#F7F9FC',
    paddingHorizontal: 10,
    rowGap: 30, // distance between select resource level and resource type
    paddingTop: 20, // distance from top of left panel
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
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  selectedFilterButton: {
    backgroundColor: '#E6EAF1',
    borderColor: '#E6EAF1',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
  selectedButtonText: {
    fontSize: 18,
    color: '#444',
    fontWeight: '600',
  },
  buttonText: {
    fontSize: 18,
    color: '#444',
  },
  selectJurisdictionContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
    rowGap: 32,
  },
  selectContainer: {
    marginHorizontal: 15,
    rowGap: 10,
  },
  selectText: {
    color: '#9B9B9B',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: -0.154,
  },
  checkButtonContainer: {
    flexDirection: 'row',
    columnGap: 20,
    width: '100%',
  },
  checkButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBD2DF',
    width: 20,
    height: 20,
  },
});
