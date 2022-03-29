import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#c52525',
    marginTop: 8,
    marginHorizontal: 8,
    fontSize: 20,
  },
  image: {
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height / 2.3,
  },
  text: {
    color: '#c52525',
    margin: 8,
    fontSize: 18,
  },
  divider: {
    backgroundColor: 'gray',
    height: 1,
    marginHorizontal: 12,
  },
  instructions: {
    margin: 5,
  },
  button: {
    margin: 20,
    borderRadius: 15,
    padding: 15,
    backgroundColor: 'red',
  },
  button_text: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
