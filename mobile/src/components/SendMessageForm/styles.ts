import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 184,
		backgroundColor: colors.blackTertiary,
		paddingBottom: getBottomSpace() + 16,
		paddingTop: 16,
		paddingHorizontal: 24,
	},
	input: {
		width: "100%",
		height: 88,
		textAlignVertical: "top",
		color: colors.white,
	},
});
