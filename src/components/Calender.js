/*잘못짠 코드. 삭제 후 여기서 새로 class 달력 만들 생각*/

import React, { Component } from 'react'
import {LocaleConfig, Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { IconButton_direct } from "./IconButton";
import { images } from "../images";
import {View} from "react-native";

LocaleConfig.locales['fr'] = {
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['SUN','MON', 'TUE','WED','THU','FRI','SAT'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

export const Modalcalender = (props) => {
    let today = new Date();
    today = today.getFullYear()+ "-" + parseInt(today.getMonth()+1)+"-"+today.getDate().toString().padStart(2,'0');
    let now = new Date();
    let maxDate = parseInt(now.getFullYear()+5)+ "-" + parseInt(now.getMonth()+1)+"-"+now.getDate().toString().padStart(2,'0');

     return (
      <Calendar
        // Initially visible month. Default = Date()
        current={today}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2021-11-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={maxDate}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => props.setduedate(day.dateString)}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => {
            if (direction == "right")
              return (
                <View><IconButton_direct type = {images.left} /></View>
              );
            if (direction == "left")
              return (
                <View><IconButton_direct type = {images.right} /></View>
              );
          }}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        enableSwipeMonths={false}
      />
     )
   }
 
   