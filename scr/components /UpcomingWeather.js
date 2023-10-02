import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
const DATA = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
  },
];

export default function UpcomingWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={require('../../assets/thunderstorm-3441687_1280.jpg')} style={styles.image}>
        <ScrollView style={styles.container}>
          <View>
            {DATA.map((item, i) => (
              <View key={i} style={styles.boder}>
                <Text style={styles.timeDate}>
                  Date and Time: {new Date(item.dt * 1000).toLocaleString()}
                </Text>
                <View style={styles.b1}>
                  <Text style={styles.text}>
                    Temperature: {item.main.temp}°C
                  </Text>
                  <Text style={styles.text}>
                    Feels Like: {item.main.feels_like}°C
                  </Text>
                </View>

                <View style={styles.b1}>
                  <Text style={styles.text}>
                    Weather: {item.weather[0].main}
                  </Text>
                  <Text style={styles.text}>
                    Description: {item.weather[0].description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    color: 'blue'
  },
  container: {
    flex: 1,
  },
  container2: {},

  boder: {
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "white",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  image: {
    flex:1
  }
});
