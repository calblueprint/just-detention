import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  resourceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    marginRight: 20,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  headerContent: {
    flexDirection: 'column',
    width: '95%',
  },
  orgName: {
    fontSize: 18,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  summaryPreview: {
    fontSize: 14,
    color: '#666',
    paddingBottom: 5,
  },
  expandedContent: {
    marginTop: 10,
  },
  summary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginRight: 5,
  },
  info: {
    fontSize: 14,
    color: '#333',
  },
});
