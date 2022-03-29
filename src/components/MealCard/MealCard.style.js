import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    textAlign: 'right',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontSize: 22,
    color: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
  },
  image: {
    borderRadius: 15,
    justifyContent: 'flex-end',
    margin: 10,
    height: Dimensions.get('window').height / 4,
  },
});
