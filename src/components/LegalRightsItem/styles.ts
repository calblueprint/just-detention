import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  preaModule: {
    flex: 1,
    margin: 5,
    alignSelf: 'stretch',
  },

  modulePoster: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },

  moduleTitle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '600',
    flexWrap: 'wrap',
    width: '100%',
    flexShrink: 1,
  },
});
