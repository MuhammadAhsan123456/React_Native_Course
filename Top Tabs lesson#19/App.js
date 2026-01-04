import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Notification from './screens/Notification'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const App = () => {
  const Tab = createMaterialTopTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='home'
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tobBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'lightgray' },
        }}
      >
        <Tab.Screen options={{ title: 'My Home' }} name="home" component={Home} />
        <Tab.Screen options={{ title: 'My Notification' }} name="notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App