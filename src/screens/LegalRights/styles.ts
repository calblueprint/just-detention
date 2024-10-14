import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    marginLeft: 20,
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
