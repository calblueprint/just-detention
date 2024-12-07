import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    padding: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 46,
  },
  videoAndTitle: {
    alignItems: 'flex-start',
    gap: 10,
  },
  title: {
    color: '#444',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  video: {
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.18)',
    width: 928,
    height: 521,
  },
  captionButtons: {
    display: 'flex',
    gap: 3,
    flexDirection: 'row',
    borderRadius: 15,
    width: 100,
    height: 43,
    backgroundColor: '#EDF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 10px 1px rgba(0, 0, 0, 0.10)',
  },
  noButton: {
    opacity: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4C4C4C',
    fontFamily: 'Inter',
  },
  arrows: {
    width: 12,
    height: 12,
  },
});
