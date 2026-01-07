
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Notification from './screens/Notification';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'powderblue',
            height: 70,
            paddingTop: 16
          },
          tabBarLabelStyle: { fontSize: 14, marginBottom: 10, color: 'black' }
        }}>
        <Tab.Screen options={{
          title: 'My Home',
          headerStyle: { backgroundColor: 'red' },
          headerTitleStyle: { color: 'white', fontSize: 25 },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                tintColor: focused ? 'blue' : 'black'
              }} source={require('./assets/home.png')} />
              <Text style={{ fontSize: 16, fontWeight: 600, color: focused ? "blue" : "black" }}>Home</Text>
            </View>
          )
        }}
          name="home" component={Home}
        />
        <Tab.Screen
          options={{
            title: 'My Notification',
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                  tintColor: focused ? 'blue' : 'black'
                }} source={require('./assets/notification.png')} />
                <Text style={{ fontSize: 16, fontWeight: 600, color: focused ? "blue" : "black" }}>Notification</Text>
              </View>
            )
          }}
          name="notification"
          component={Notification}

        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
})
export default App