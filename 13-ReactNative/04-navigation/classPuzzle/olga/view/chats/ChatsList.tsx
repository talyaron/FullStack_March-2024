import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import ChatItem from './ChatItem';
import { users, User } from '../../data/users';
import { messages, Message } from '../../data/messages';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
	const [text, setText] = React.useState('');
	const navigation = useNavigation();

	const getLatestMessage = (userId: string): string => {
		const userMessages = messages.filter(
			(message) =>
				(message.senderId === userId || message.receiverId === userId) &&
				(message.senderId === '1' || message.receiverId === '1')
		);

		if (userMessages.length > 0) {
			const latestMessage = userMessages.reduce((prev, current) =>
				prev.timestamp > current.timestamp ? prev : current
			);
			return latestMessage.text;
		}
		return 'No messages';
	};

	const chatData = users.map((user) => ({
		...user,
		message: getLatestMessage(user.id),
	}));

	return (
		<View style={styles.container}>
			{/* <Text style={styles.title}>WhatsApp</Text> */}
			<TextInput
				style={styles.searchBar}
				placeholder="Search..."
				onChangeText={setText}
			/>
			<FlatList
				data={chatData}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { chat: item })}>
						<ChatItem item={item} />
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
	},
	searchBar: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 8,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
});

export default ChatList;