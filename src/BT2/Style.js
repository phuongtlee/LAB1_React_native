import React from "react";
import { StyleSheet } from "react-native";

const createStyles = (darkMode) => {
	return StyleSheet.create({
		results: {
			backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
			maxWidth: "100%",
			minHeight: "35%",
			alignItems: "flex-end",
			justifyContent: "flex-end",
		},
		resultText: {
			maxHeight: 45,
			color: "#00b9d6",
			margin: 15,
			fontSize: 35,
		},
		historyText: {
			color: darkMode ? "#b5b7bb" : "#7c7c7c",
			fontSize: 20,
			marginRight: 10,
			alignSelf: "flex-end",
		},
		themeButton: {
			alignSelf: "flex-start",
			bottom: "5%",
			margin: 15,
			backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
			alignItems: "center",
			justifyContent: "center",
			width: 50,
			height: 50,
			borderRadius: 25,
		},
		buttons: {
			width: "100%",
			height: "35%",
			flexDirection: "row",
			flexWrap: "wrap",
		},
		button: {
			borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
			alignItems: "center",
			justifyContent: "center",
			minHeight: "54%",
			minWidth: "24%",
			flex: 2,
		},
		textButton: {
			color: darkMode ? "#b5b7bb" : "#7c7c7c",
			fontSize: 28,
		},
	});
};
export default createStyles;
