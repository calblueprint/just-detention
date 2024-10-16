import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 15,
  },
  captionButtons: {
    borderRadius: 30,
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionButtonsPressed: {
    backgroundColor: '#D9D9D9',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  preaModulesView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  preaModule: {
    paddingTop: 15,
  },
  moduleTitle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'semibold',
  },
  modulePoster: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
});
