import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  resourceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    rowGap: 10,
  },
  headerContent: {
    flexDirection: 'column',
    width: '95%',
  },
  orgName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444444',
  },
  summaryPreview: {
    marginTop: 10,
    fontSize: 18,
    color: '#9B9B9B',
  },
  expandedContent: {
    rowGap: 15,
  },
  summary: {
    fontSize: 18,
    color: '#4C4C4C',
  },
  fieldsContainer: {
    flexDirection: 'column',
    rowGap: 5,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontWeight: '600',
    fontSize: 18,
    marginRight: 5,
    color: '#4C4C4C',
  },
  info: {
    fontSize: 18,
    color: '#4C4C4C',
  },
});
