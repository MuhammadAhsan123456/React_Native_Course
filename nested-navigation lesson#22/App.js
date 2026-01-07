import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home'
import Chat from './screens/Chat'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "My Chat App",
            headerStyle: { backgroundColor: '#4F46E5' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        <Stack.Screen
          name="chat"
          component={Chat}
          options={{
            title: "Chat",
            headerStyle: { backgroundColor: '#4F46E5' },
            headerTintColor: '#fff',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
