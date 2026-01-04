import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { Text, View } from "react-native"

const Notification = ({ route }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'royalblue' }}>
            <Text>This is Notification Screen</Text>
            <Text>{route.params.data.notice}</Text>
            <Text>{route.params.data.msg}</Text>
            <Button onPress={() => { navigation.navigate('Home') }} title="home" />
        </View>
    )
}
export default Notification;