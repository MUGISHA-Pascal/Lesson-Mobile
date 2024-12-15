import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [previousSearches, setPreviousSearches] = useState([]);


  const handleSearch = () => {
    if (search && !previousSearches.includes(search)) {
      setPreviousSearches([search, ...previousSearches]);
    }
    setSearch('');
    navigation.navigate("Online")
  };

  
  const handleDeleteSearch = (item) => {
    const filteredSearches = previousSearches.filter(searchItem => searchItem !== item);
    setPreviousSearches(filteredSearches); 
  };

  return (
    <View style={styles.container}>
    <View style={{ backgroundColor: "#F5F9FF", paddingTop: 0, flexDirection: "row", justifyContent: "space-between",paddingBottom:20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 0 }}>
                    <AntDesign style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                    <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Search</Text>
                </TouchableOpacity>

            </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <AntDesign name="search1" size={20} color="white" />
        </TouchableOpacity>
      </View>

    
      <View style={styles.recentHeader}>
        <Text style={styles.recentText}>Recent Searches</Text>
        {/* <TouchableOpacity>
          <Text style={styles.seeAll}>SEE ALL</Text>
        </TouchableOpacity> */}
      </View>

     
      <FlatList
        data={previousSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.searchItem}>
            <Text style={styles.searchText}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteSearch(item)}>
              <AntDesign name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  searchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 1,
  },
  searchText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Search;
