import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    columnGap: 20,
  },
  pagebutton: {
    borderColor: '#e8e8e8',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 20,
    width: 500,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});
