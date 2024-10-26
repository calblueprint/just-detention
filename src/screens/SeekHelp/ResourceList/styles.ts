import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    padding: 30,
  },
  leftPanel: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: 5,
    width: '25%',
    paddingRight: 20,
    backgroundColor: '#f4f4f4',
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedFilterButton: {
    backgroundColor: '#e0f7fa',
    borderColor: '#00acc1',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});
