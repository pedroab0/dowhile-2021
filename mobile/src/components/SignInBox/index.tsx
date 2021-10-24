import React from "react";
import { View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

import { useAuth } from "../../hooks/auth";
import { colors } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";

export function SignInBox() {
	const { signIn, isSigningIn } = useAuth();

	return (
		<View style={isIphoneX() ? styles.box : styles.container}>
			<Button
				title="ENTRAR COM O GITHUB"
				color={colors.blackPrimary}
				backgroundColor={colors.yellow}
				icon="github"
				height={75}
				onPress={signIn}
				isLoading={isSigningIn}
			/>
		</View>
	);
}
