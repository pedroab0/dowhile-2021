import { StyleSheet } from "react-native";
import { fonts } from "../../theme";

export const styles = StyleSheet.create({
	button: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 14,
		fontFamily: fonts.bold,
	},
	icon: {
		marginRight: 12,
	},
});
