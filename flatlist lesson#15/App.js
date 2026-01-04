import { Image } from "react-native"
import { FlatList, StyleSheet, Text, View } from "react-native"

const App = () => {
  const data = [
    { id: '1', title: 'Demo Product 1', price: 123, imageUrl: 'https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740&q=80' },
    { id: '2', title: 'Demo Product 2', price: 123, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrm45IT7TPDizgfnHZXQPDqLqTyIxJBt0D4Q&s' },
    { id: '3', title: 'Demo Product 3', price: 123, imageUrl: 'https://img.freepik.com/premium-photo/delicious-food-platter_1199678-476.jpg?semt=ais_hybrid&w=740&q=80 ' },
    { id: '4', title: 'Demo Product 4', price: 123, imageUrl: 'https://images.unsplash.com/photo-1665400808116-f0e6339b7e9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
  ]
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.productwrapper}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.productImage}
            />
          </View>
        )}
        KeyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#eee'
  },
  productwrapper: {
    width: 350,
    // width: '100%',
    height: 200,
    backgroundColor: 'gray',
    // marginBottom: 10,
    marginRight: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5, // shadow ke liye
  },
  productImage: {
    width: 350,
    height: 200,
    resizeMode: 'cover',
  }
})
export default App