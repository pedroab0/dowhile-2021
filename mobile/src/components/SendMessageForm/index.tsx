import React, { useState } from "react";
import { KeyboardAvoidingView, TextInput, View, Platform, Alert, Keyboard } from "react-native";
import { api } from "../../services/api";

import { colors } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";

export function SendMessageForm() {
	const [message, setMessage] = useState("");
	const [sendingMessage, setSendingMessage] = useState(false);

	async function handleMessageSubmit() {
		const messageFomatted = message.trim();

		if (messageFomatted.length > 0) {
			setSendingMessage(true);

			await api.post("/messages", { message: messageFomatted });
			setMessage("");
			Keyboard.dismiss();
			setSendingMessage(false);
			Alert.alert("Mensagem enviada com sucesso");
		} else {
			Alert.alert("Escreva a mensagem para enviar");
		}
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Qual a sua expectativa para o evento ?"
					placeholderTextColor={colors.grayPrimary}
					keyboardAppearance="dark"
					multiline
					maxLength={140}
					onChangeText={setMessage}
					value={message}
					editable={!sendingMessage}
				/>

				<Button
					title="ENVIAR MENSAGEM"
					backgroundColor={colors.pink}
					color={colors.white}
					height={48}
					isLoading={sendingMessage}
					onPress={handleMessageSubmit}
				/>
			</View>
		</KeyboardAvoidingView>
	);
}
