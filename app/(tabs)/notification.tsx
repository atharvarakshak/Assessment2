import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
}

const notifications: NotificationItem[] = [
  {
    id: '1',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    message: "Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes.",
    date: 'Today, 10:20',
  },
  {
    id: '2',
    title: 'FLASH SALE ALERT - SAVE BIG TODAY!',
    message: "Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices.",
    date: 'Today, 09:05',
  },
  {
    id: '3',
    title: 'GOOD MORNING, RUNNER!',
    message: "It's time to step out and run. Give your best to your body today. Find comfort in every step.",
    date: 'Monday, 18:10',
  },
  {
    id: '4',
    title: 'EXCLUSIVE DISCOUNT JUST FOR YOU',
    message: 'We want to reward you with an exclusive 15% discount on all our shoe products.',
    date: 'July 13, 17:30',
  },
];

export default function NotificationsScreen() {
    const navigation = useNavigation();
  const renderNotification = ({ item }: { item: NotificationItem }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity>
          <Text style={styles.markAsRead}>Mark as read</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
      />

<View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('')}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('wishlist')}>
          <FontAwesome name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('notification')}>
          <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  markAsRead: {
    color: '#FF6347',
    fontWeight: '500',
  },
  notificationList: {
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  notificationContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
 
  scrollContent: {
    paddingBottom: 100, // Extra space for scrolling past bottom navbar
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  searchButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  balanceItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topUpContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  productItem: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
  },
  Nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});
