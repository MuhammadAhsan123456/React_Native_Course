import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Text, View } from "react-native"

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'royalblue' }}>
            <Text>This is Home Screen</Text>
            <Button onPress={() => {
                navigation.navigate('Notification', {
                    data: {
                        notice: 'demo notification',
                        msg: 'this is demo message'
                    }
                })
            }} title="notification" />
        </View>
    )
}
export default Home;