import { StyleSheet } from "react-native";
import { theme } from '../theme';

export const viewStyles = StyleSheet.create({
    container_right: {
        flex: 1,
        position: 'absolute',
        right: 40,
        bottom: 40,
    },
    container_left: {
        flex: 1,
        position: 'absolute',
        left: 40,
        bottom: 40,
    },
});

export const buttonStyles = StyleSheet.create({
    button_green: {
        backgroundColor: theme.ewhagreen,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: theme.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button_white: {
        backgroundColor: theme.white,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: theme.midGray,
        shadowColor: theme.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
});