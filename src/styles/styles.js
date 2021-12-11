// 'src/styles.js' from branch 'DAYOON0836'

import { StyleSheet } from "react-native";
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
  },
  item1: {
    flexDirection: 'row',
    top: 10,
    width:390,
    height: 'auto',
    padding: 15,
    backgroundColor: '#e6e6e6',
    alignItems: 'center', 
  },
  item2: {
    top: 10,
    width:390,
    height: 170,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: theme.main,
    alignItems: 'flex-start',
    marginTop: -5,
  },
  title2: {
    marginTop: 70,
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.main,
  },
  title3: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.main,
  },
  quote: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.main,
    marginLeft: 10,
  },
  author: {
    fontSize: 15,
    fontWeight: '600',
    color: '#595959',
    marginRight: 20,
    marginTop: 10,
    textAlign: 'right',
  },
  todo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.main,
    marginRight: 45
  },
  duedate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#595959',
  },
});

  export const imageStyles = StyleSheet.create({
    image: {
      width: 116,
      height: 154,
      marginTop: 150,
      marginBottom: 50,
    },
    image2: {
      width: 40,
      height: 43,
      marginRight: 20,
    },
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#314c1c',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    width: 202,
    height: 40,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: '#565656',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    left: 10,
    width: 85,
    height: 40,
    borderRadius: 5,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});