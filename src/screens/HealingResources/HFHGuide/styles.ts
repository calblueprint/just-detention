import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    padding: '5%',
  },
  text: {
    fontFamily: 'Roboto Serif',
    color: '#444',
  },
  nextButtonContainer: {
    height: '10%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 50,
  },
  nextButton: {
    height: '50%',
    width: '20%',
    borderColor: 'black',
    borderWidth: 1,
  },
});
