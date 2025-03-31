import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text } from 'react-native';
import ChatItem from './ChatItem';
import { Chat } from '../../App';

const mockData: Chat[] = [
	{
		id: '1',
		name: 'John Doe',
		message: 'Hey, how are you?',
		image: 'https://randomuser.me/api/portraits/men/21.jpg',
	},
	{
		id: '2',
		name: 'Jane Smith',
		message: 'See you later!',
		image: 'https://randomuser.me/api/portraits/women/22.jpg',
	},
	{
		id: '3',
		name: 'Alice Johnson',
		message: 'What are you doing?',
		image: 'https://randomuser.me/api/portraits/women/23.jpg',
	},
	{
		id: '4',
		name: 'Bob Williams',
		message: 'Call me!',
		image: 'https://randomuser.me/api/portraits/men/24.jpg',
	},
	{
		id: '5',
		name: 'Eva Brown',
		message: 'Okay, thanks!',
		image: 'https://randomuser.me/api/portraits/women/25.jpg',
	},
];

const ChatList = () => {
	const [text, setText] = React.useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>WhatsApp</Text>
			<TextInput
				style={styles.searchBar}
				placeholder="Search..."
				onChangeText={setText}
			/>
			<FlatList
				data={mockData}
				renderItem={({ item }) => <ChatItem item={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
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