import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { theme } from '../theme';

const TodoList = () => {
  return (
    <View style = { styles.container }>
      <Text>TodoList Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default TodoList;