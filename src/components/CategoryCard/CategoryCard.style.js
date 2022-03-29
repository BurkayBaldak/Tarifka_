import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#eceff1',
    margin: 10,
    padding: 8,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    justifyContent: 'flex-start',
  },
  image: {
    alignItems: 'flex-start',
    minHeight: 100,
    width: 100,
    resizeMode: 'contain',
  },
});
