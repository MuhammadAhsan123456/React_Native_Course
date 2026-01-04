
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Notification from './screens/Notification';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'powderblue',
            height: 70
          },
          tabBarLabelStyle: { fontSize: 14, marginBottom: 10, color: 'black' }
        }}>
        <Tab.Screen options={{
          title: 'My Home',
          headerStyle: { backgroundColor: 'red' },
          headerTitleStyle: { color: 'white', fontSize: 25 },
        }}
          name="home" component={Home}
        />
        <Tab.Screen options={{ title: 'My Notification' }} name="notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App