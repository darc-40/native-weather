import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

function Landing() {
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.temperaturebody}>
      <FontAwesome5 name="cloud-sun" size={100} color="white" />
        <Text style={styles.mainTemp}>21</Text>
        <Text style={styles.tempChange}>Temperature value change</Text>
        <View style={styles.body2}>
          <Text style={styles.tempHigh}>High: 24</Text>
          <Text style={styles.tempLow}>Low: 17</Text>
        </View>
      </View>
      <View style={styles.bodyT}>
        <Text style={styles.templevel}>Its warm cloudy</Text>
        <Text style={styles.tempClothe}>Get a T- shirt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    bodyWrapper: {
        flex:1
    },
  temperaturebody: {
    alignItems: "center",
    padding: 1,
    flex:1,
    justifyContent:'center'
  },
  mainTemp: {
    fontSize: 38,
    color: "#368BC1",
  },
  tempChange: {
    fontSize: 15,
    color: "white",
  },
  body2: {
    flexDirection: "row",
    padding: 6,
  },
  tempHigh: {
    fontSize: 10,
    color: "white",
  },
  tempLow: {
    fontSize: 10,
    color: "white",
  },
  bodyT: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft:20,
    marginBottom: 20
  },
  tempClothe: {
    fontSize: 20,
    color: "white",
  },
  templevel: {
    fontSize: 28,
    color: "white",
  },
});

export default Landing;
