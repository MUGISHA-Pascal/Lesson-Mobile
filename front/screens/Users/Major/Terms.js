import React from 'react';
import { View, Text, ScrollView, StyleSheet,TouchableOpacity,Image } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign'

const Terms = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#F5F9FF",flex:1}}>
           <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                    <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                    <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Terms & Conditions</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                    {/* <Image style={{ width: 30, height: 30 }} source={require("../../../assets/search.jpeg")} /> */}
                </TouchableOpacity>
            </View>
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Condition & Attending</Text>
      <Text style={styles.text}>
      At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?
      </Text>
      <Text style={styles.text}>
      Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.
Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.
      </Text>

      <Text style={styles.heading}>Terms & Use</Text>
      <Text style={styles.text}>
      Ut proverbia non nulla veriora sint quam vestra dogmata. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Omnes enim iucundum motum, quo sensus hilaretur. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Quibusnam praeteritis? Portenta haec esse dicit, quidem hactenus; Si id dicis, vicimus. Qui ita affectus, beatum esse numquam probabis; Igitur neque stultorum quisquam beatus neque sapientium non beatus.

Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dolor ergo, id est summum malum, metuetur semper, etiamsi non ader.
      </Text>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F9FF',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
});

export default Terms;
