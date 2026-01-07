import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Chatlist from "./Chatlist";
import StatusList from "./StatusList";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#4F46E5' },
                tabBarActiveTintColor: '#fff',
                tabBarIndicatorStyle: { backgroundColor: '#fff' },
                tabBarLabelStyle: { fontWeight: 'bold' },
            }}
        >
            <Tab.Screen name="Chats" component={Chatlist} />
            <Tab.Screen name="Status" component={StatusList} />
        </Tab.Navigator>
    )
}

export default Home
