import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from 'react-native';
import { User } from '../../data/users';
import { messages, Message } from '../../data/messages';

interface ChatScreenProps {
	route: { params: { chat: User } };
}

const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
	const { chat } = route.params;
	const [chatMessages, setChatMessages] = useState<Message[]>([]);
	const [inputText, setInputText] = useState('');

	useEffect(() => {
		const filteredMessages = messages.filter(
			(message) =>
				(message.senderId === chat.id || message.receiverId === chat.id) &&
				(message.senderId === '1' || message.receiverId === '1')
		);
		setChatMessages(filteredMessages);
	}, [chat.id]);

	const sendMessage = () => {
		if (inputText.trim()) {
			const newMessage: Message = {
				id: Date.now().toString(),
				senderId: '1',
				receiverId: chat.id,
				text: inputText,
				timestamp: Date.now(),
			};
			setChatMessages([...chatMessages, newMessage]);
			setInputText('');

			setTimeout(() => {
				const responseMessage: Message = {
					id: Date.now().toString(),
					senderId: chat.id,
					receiverId: '1',
					text: `Answer from: ${chat.name}`,
					timestamp: Date.now(),
				};
				setChatMessages([...chatMessages, responseMessage]);
			}, 1000);
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView style={styles.messageArea}>
				{chatMessages.map((message, index) => (
					<View
						key={index}
						style={[
							styles.messageBubble,
							message.senderId === '1' ? styles.senderBubble : styles.receiverBubble,
						]}
					>
						<Text style={styles.messageText}>{message.text}</Text>
					</View>
				))}
			</ScrollView>
			<View style={styles.inputArea}>
				<TextInput
					style={styles.input}
					placeholder="Type a message..."
					value={inputText}
					onChangeText={setInputText}
				/>
				<TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
					<Text style={styles.sendButtonText}>Send</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	messageArea: {
		flex: 1,
		padding: 10,
	},
	messageBubble: {
		padding: 10,
		borderRadius: 10,
		marginBottom: 5,
		maxWidth: '80%',
	},
	senderBubble: {
		alignSelf: 'flex-end',
		backgroundColor: '#DCF8C6',
	},
	receiverBubble: {
		alignSelf: 'flex-start',
		backgroundColor: '#fff',
	},
	messageText: {
		fontSize: 16,
	},
	inputArea: {
		flexDirection: 'row',
		padding: 10,
		borderTopWidth: 1,
		borderTopColor: '#ccc',
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 20,
		paddingHorizontal: 10,
		marginRight: 10,
	},
	sendButton: {
		backgroundColor: '#075E54',
		padding: 10,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sendButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default ChatScreen;