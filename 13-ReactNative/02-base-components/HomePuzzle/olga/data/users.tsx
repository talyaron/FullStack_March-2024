export interface User {
	id: string;
	name: string;
	image: string;
}

export const users: User[] = [
	{
		id: '1',
		name: 'John Doe',
		image: 'https://randomuser.me/api/portraits/men/21.jpg',
	},
	{
		id: '2',
		name: 'Jane Smith',
		image: 'https://randomuser.me/api/portraits/women/22.jpg',
	},
	{
		id: '3',
		name: 'Alice Johnson',
		image: 'https://randomuser.me/api/portraits/women/23.jpg',
	},
	{
		id: '4',
		name: 'Bob Williams',
		image: 'https://randomuser.me/api/portraits/men/24.jpg',
	},
	{
		id: '5',
		name: 'Eva Brown',
		image: 'https://randomuser.me/api/portraits/women/25.jpg',
	},
];