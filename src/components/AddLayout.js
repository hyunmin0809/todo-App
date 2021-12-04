/*항목생성 페이지 layout*/
import React from "react";
import {StyleSheet, View} from 'react-native';
import {AddComment, AddTask} from "./sub/Input"
import {Duedate, Category, Reminder} from "./sub/Button"
import { ResetButton, ExportButton } from "./FinalButton";


export const Footer = () => { /*아래 버튼 */
  return(
    <View style = {[styles.container, styles.footer]}>
      <ResetButton />
      <ExportButton />
    </View>
  );
};


export const ImportTemplate = () => { /*가운데 조작 */
  return (
    <View style = {[styles.container, styles.template]}>
      <AddTask />
      
      <Duedate/>
      <Reminder/>
      <Category/>

      <AddComment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 4,
    backgroundColor: '#00462A',
  },
  template: {
    flex: 53,
    backgroundColor: '#fff',
  },

  footer: {
    flexDirection: "row",
    flex: 6,
    backgroundColor: '#C4C4C4',
  },

});