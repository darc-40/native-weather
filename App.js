import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Landing from "./scr/components /Landing";
import UpcomingWeather from "./scr/components /UpcomingWeather";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/* <Landing /> */}
        <UpcomingWeather/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#092E20",
  },
  main: {
    flex: 1,
    marginLeft: 2,
  },
});
