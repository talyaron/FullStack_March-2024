import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DetailItem {
  label: string;
  value: string;
  icon?: string;
  link?: string;
}

const App = () => {
  const details: DetailItem[] = [
    { label: 'Phone', value: '054-431-1042', icon: 'phone', link: 'tel:+972544311042' },
    { label: 'Email', value: '21apr1988@gmail.com', icon: 'envelope', link: '21apr1988@gmail.com' },
    { label: 'GitHub', value: 'github.com/21apr', icon: 'github', link: 'https://github.com/21apr' },
    { label: 'LinkedIn', value: 'linkedin.com/in/olga-v-larina', icon: 'linkedin', link: 'https://linkedin.com/in/olga-v-larina' },
    { label: 'Telegram', value: '@two1apr', icon: 'telegram', link: 'https://t.me/two1apr' },
  ];

  const renderItem = ({ item }: { item: DetailItem }) => (
    <View style={styles.listItem}>
      {item.icon && <Icon name={item.icon} size={24} color="#333" style={styles.icon} />}
      <Text style={styles.label}>{item.label}:</Text>
      <Text style={styles.value} onPress={() => item.link && Linking.openURL(item.link)}>
        {item.value}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./assets/profile.jpg')} style={styles.image} />
      <Text style={styles.name}>Olga Larin</Text>
      <Text style={styles.about}>
        Highly motivated junior Frontend Developer with a passion for creating beautiful, intuitive, and user-friendly interfaces. Possessing a strong foundation in UX design principles and a keen eye for detail, I am eager to contribute to innovative projects and continuously learn new technologies.
      </Text>
      <FlatList
        data={details}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  about: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
  },
  value: {
    flex: 2,
    color: 'blue',
  },
  icon: {
    marginRight: 10,
  },
});

export default App;