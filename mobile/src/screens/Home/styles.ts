import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.blackSecondary,
		paddingTop: getStatusBarHeight() + 28,
	},
});
