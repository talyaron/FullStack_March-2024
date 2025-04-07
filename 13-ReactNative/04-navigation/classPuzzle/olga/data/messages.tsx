export interface Message {
	id: string;
	senderId: string;
	receiverId: string;
	text: string;
	timestamp: number;
}

export const messages: Message[] = [
	{ id: '1', senderId: '1', receiverId: '2', text: 'Hello!', timestamp: Date.now() - 100000 },
	{ id: '2', senderId: '2', receiverId: '1', text: 'Hi there!', timestamp: Date.now() - 90000 },
	{ id: '3', senderId: '1', receiverId: '2', text: 'How are you?', timestamp: Date.now() - 80000 },
	{ id: '4', senderId: '2', receiverId: '1', text: 'I\'m fine, thanks!', timestamp: Date.now() - 70000 },
	{ id: '5', senderId: '1', receiverId: '3', text: 'Hey Alice!', timestamp: Date.now() - 60000 },
	{ id: '6', senderId: '3', receiverId: '1', text: 'Hi John!', timestamp: Date.now() - 50000 },
	{ id: '7', senderId: '1', receiverId: '4', text: 'Bob, call me!', timestamp: Date.now() - 40000 },
	{ id: '8', senderId: '4', receiverId: '1', text: 'Sure, when?', timestamp: Date.now() - 30000 },
	{ id: '9', senderId: '1', receiverId: '5', text: 'Eva, are you there?', timestamp: Date.now() - 20000 },
	{ id: '10', senderId: '5', receiverId: '1', text: 'Yes, I am!', timestamp: Date.now() - 10000 },
	{ id: '11', senderId: '2', receiverId: '3', text: 'Jane to Alice', timestamp: Date.now() - 5000 },
	{ id: '12', senderId: '3', receiverId: '2', text: 'Alice to Jane', timestamp: Date.now() - 2000 },
	{ id: '13', senderId: '4', receiverId: '5', text: 'Bob to Eva', timestamp: Date.now() - 1000 },
	{ id: '14', senderId: '5', receiverId: '4', text: 'Eva to Bob', timestamp: Date.now() },
];