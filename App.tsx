import React from "react";
import { Image, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import { AntDesign, FontAwesome, Feather, Fontisto } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Header}>
          <Feather name="menu" style={styles.menu} />
          <Text style={styles.title}>Any Ecommerce</Text>
          <Feather name="shopping-cart" style={styles.car} />
        </View>
        <View style={styles.sms}>
          <Text style={styles.smsOne}>Shop for</Text>
          <Text style={styles.smsTwo}> AED 75 more free shippinig</Text>
        </View>
        <Text style={styles.Mycar}>My Cart</Text>
        <View style={styles.products}>

          <Image source={require('./src/zapato.png')}
            style={{ height: 100, width: 175 }} />
          <View style={styles.detalle}>
            <Text style={styles.txt1}>Aldo</Text>
            <Text style={styles.txt2}>Almond Toe</Text>
            <Text style={styles.txt3}>Size: 39 us</Text>
            <Text style={styles.t4}>AED 45</Text>
          </View>
          <View style={styles.btn}>
            <AntDesign name="plus" style={styles.plus} />
            <Text style={styles.num}>1</Text>
            <Ionicons name="remove-outline" style={styles.Less} />
          </View>
        </View>

        <View style={styles.products}>
          <Image source={require('./src/zapato.png')} style={{ height: 100, width: 155 }} />
          <View style={styles.detalle}>
            <Text style={styles.txt1}>Aldo</Text>
            <Text style={styles.txt2}>Almond Toe</Text>
            <Text style={styles.txt3}>Size: 39 us</Text>
            <View style={styles.price}>
              <Text style={styles.AED1}>AED 50</Text>
              <Text style={styles.AD}>AED 45</Text>
            </View>
          </View>
          <View style={styles.btn}>
            <AntDesign name="plus" style={styles.plus} />
            <Text style={styles.num}>1</Text>
            <Ionicons name="remove-outline" style={styles.Less} />
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.imput}
            placeholderTextColor="#B4ADB7"
            placeholder="Cupon code"
          />
          <TouchableOpacity style={styles.button}>
            <Text>APPLY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.facture}>
          <View style={styles.info}>
            <Text style={styles.Info}>Subtotal:</Text>
            <Text style={styles.Info}>Discount:</Text>
            <Text style={styles.Info}>VAT:</Text>
            <Text style={styles.Info}>Total:</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.Dat}>AED 126.57</Text>
            <Text style={styles.Dat}>-AED 21.31</Text>
            <Text style={styles.Dat}>AED 5.26</Text>
            <Text style={styles.Dat}>AED 125.52</Text>
          </View>
        </View>
        <View style={styles.mesage}>
          <Text style={styles.messaggeT}>PROCEED TO PAYMENT</Text>
        </View>
        <View style={styles.footer}>
          <Ionicons name="md-home" style={styles.icon} />
          <AntDesign name="search1" style={styles.icon} />
          <Fontisto name="star" style={styles.icon} />
          <FontAwesome name="user" style={styles.icon} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    flexDirection: "row",
    paddingTop: 50,
  },
  menu: {
    paddingEnd: 80,
    fontSize: 27,
    paddingLeft: 20,
  },
  car: {
    paddingLeft: 80,
    fontSize: 27,
  },
  smsOne: {
    fontStyle: "normal",
    fontSize: 18,
    color: "white",
  },
  sms: {
    marginTop: 12,
    padding: 10,
    paddingRight: 87,
    paddingLeft: 87,
    backgroundColor: "#333333",
    flexDirection: "row",
    fontSize: 25,
  },
  title: {
    fontSize: 27,
  },

  smsTwo: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  products: {
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    flexDirection: "row",
    margin: 10,
    padding: 20,
  },
  Mycar: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 30,
  },

  detalle: {
    marginLeft: 20,
  },
  btn: {
    marginLeft: 40,
  },
  txt1: {
    color: '#606167',
  },
  txt2: {
    fontSize: 20,
  },
  txt3: {
    color: '#606167',
    fontSize: 15,
  },
  t4: {
    marginTop: 15,
    fontSize: 25,
  },
  price: { flexDirection: 'row' },
  AED1: {
    color: '#606167',
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginTop: 15,
  },
  AD: {
    marginLeft: 5,
    marginTop: 15,
    fontSize: 20,
    color: '#FD7575',

  },

  plus: {
    fontSize: 18,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    paddingTop: 5,
    paddingBottom: 2,
  },
  num: {
    fontSize: 18,
    padding: 13,
  },
  input: {
    marginTop: 15,
    flexDirection: "row",
  },
  Less: {
    fontSize: 17,
    paddingTop: 5,
    paddingBottom: 2,
    borderRadius: 5,
    paddingLeft: 7,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  imput: {
    paddingRight: 181,
    marginLeft: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    fontSize: 17,
    color: "white",
    paddingLeft: 10,
    flexDirection: "row",

  },
  button: {
    marginLeft: 15,
    padding: 20,
    borderWidth: 1,
  },
  facture: {
    padding: 8,
    flexDirection: "row",
    margin: 15,
    backgroundColor: "#F5F5F5",
  },
  info: {
    marginTop: 12,
    marginRight: 100,
  },
  data: {
    marginTop: 12,
    marginLeft: 110,
  },
  Info: {
    color: "#606167",
    paddingBottom: 2,
    fontSize: 17,
    marginLeft: 12,
  },
  Dat: {
    paddingBottom: 2,
    fontSize: 17,
  },
  mesage: {
    marginTop: 12,
    alignItems: "center",
    backgroundColor: "#333333",
    flexDirection: "row",
    padding: 15,
    paddingLeft: 110,

  },
  messaggeT: {
    fontSize: 20,
    color: "white",
  },
  icon: {
    fontSize: 35,
    color: "#A0A0A0",
    marginLeft: 5,
    padding: 30,
  },
  footer: {
    flexDirection: "row",
  },
});
