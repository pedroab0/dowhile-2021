import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import avatarImg from "../../assets/avatar.png";
import { colors } from "../../theme";
import { styles } from "./styles";

const avatarDefault = Image.resolveAssetSource(avatarImg).uri;

const sizes = {
	small: {
		containerSize: 32,
		avatarSize: 28,
	},
	normal: {
		containerSize: 48,
		avatarSize: 42,
	},
};

type Props = {
	imageUri: string | undefined;
	size?: "small" | "normal";
};

export function UserPhoto({ imageUri, size = "normal" }: Props) {
	const { containerSize, avatarSize } = sizes[size];

	return (
		<>
			<LinearGradient
				colors={[colors.pink, colors.yellow]}
				start={{ x: 0, y: 0.8 }}
				end={{ x: 0.9, y: 1 }}
				style={[
					styles.container,
					{
						width: containerSize,
						height: containerSize,
						borderRadius: containerSize / 2,
					},
				]}
			>
				<Image
					source={{ uri: imageUri || avatarDefault }}
					style={[
						styles.avatar,
						{ width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
					]}
				/>
			</LinearGradient>
		</>
	);
}
