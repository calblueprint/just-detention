import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    padding: 30,
  },
  video: {
    width: '100%',
    height: 630,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  captionButtons: {
    borderRadius: 10,
    width: 180,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    shadowColor: 'black',
    shadowOpacity: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
