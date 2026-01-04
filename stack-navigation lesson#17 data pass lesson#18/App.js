import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screnns/Home'
import Notification from './screnns/Notifications'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Screen', headerBackVisible: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: 'Notification Screen', headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
