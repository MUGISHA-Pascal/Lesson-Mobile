import React from 'react'
import { ScrollView, View,TouchableOpacity ,Text,Image, StyleSheet,TextInput, Dimensions} from 'react-native'
import AntD from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Category, images } from '../DemoData/Datas';
import { FlatList } from 'react-native';

const Cat = ({navigation}) => {

  
  return (
    <View style={{flex:1, backgroundColor:"#F5F9FF"}}>
        <View style={{backgroundColor:"#F5F9FF", paddingVertical:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{  flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>All Category</Text>
            </TouchableOpacity>
        </View>

    
            <View style={{paddingHorizontal:25}}>

          
          <View>
          <FlatList
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 0,gap:10 }}
      data={Category}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
            flex: 1,
          }}
        >
          <View
            style={{
             
              width: Dimensions.get('screen').width / 2 - 40,
              padding: 20,
              borderRadius: 10,
            }}
          >
              <Image
              source={images[item.Image]} // Use the static image mapping
              style={{ width: 100, height: 100 }}
            />
          
            <Text style={{ color: '#202244CC', textAlign: 'center', fontWeight:700 }}>{item.name}</Text>
          </View>
        </View>
      )}

      ListHeaderComponent={
        <View style={{}}>
          <View style={styles.inputContainer}>
            <Image style={{ width: 30, height: 30 }} source={require("../../../assets/sear.jpeg")} />
            <TextInput
              style={styles.input}
              placeholder="Search for.."
              placeholderTextColor="#aaa"


            />
             <TouchableOpacity onPress={() => navigation.navigate("Search")}  style={styles.searchButton}>
          <AntD name="search1" size={20} color="white" />
        </TouchableOpacity>

          </View>

        </View>
      }

      ListFooterComponent={
        <View style={{ marginBottom:100 }}>
          
        </View>
      }

      showsVerticalScrollIndicator={false}
    />
            

          </View>


            </View>
   
    </View>
  )
}

export default Cat


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 18,
    
        height: 60,
        width: "100%",
        marginTop: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    
      },
      icon: {
        marginRight: 10,
        fontSize: 20
      },
      input: {
        flex: 1,
        color: '#000',
      },
      searchButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 10,
      },
    
})