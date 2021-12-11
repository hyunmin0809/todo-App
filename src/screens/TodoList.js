import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../theme';

import AddFloatingButton from '../components/AddFloatingButton';
import ArchiveFloatingButton from '../components/ArchiveFloatingButton';

const TodoList = () => {
  return (
    <View style = { styles.container }>
      <Text>TodoList Screen</Text>
      <AddFloatingButton />
      <ArchiveFloatingButton />
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