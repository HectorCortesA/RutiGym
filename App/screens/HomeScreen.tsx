import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React, { useState } from "react";
import { Button, Text } from "@rneui/themed";
import Navigation from "../components/nav";
import { View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mainContainer: {
    flex: 1,
  },
});

const contenedorToday = StyleSheet.create({
  container: {
    marginTop: 17,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "#000",

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#555555",
    borderColor: "#28989E",
    borderWidth: 1,
    borderRadius: 33,
    padding: 20,
    height: 194,
    width: "90%",
  },
});
const navItems = [
  { label: "Inicio", icon: "home" },
  { label: "Historial", icon: "calendar" },
  { label: "Progreso", icon: "bar-chart" },
  { label: "Perfil", icon: "person" },
];
export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#299E9E", "#0F3536"]}
        locations={[0.0, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Text
          style={{
            color: "white",
            fontSize: 28,
            paddingTop: 100,
            paddingLeft: 20,
          }}
        >
          Hola Hector!
        </Text>
        <View style={contenedorToday.container}>
          <Text style={{ color: "white", fontSize: 20 }}>Hoy toca pierna</Text>
          <Text style={{ color: "white", fontSize: 13, paddingTop: 8 }}>
            Prepárate para fortalecer tus piernas con sentadillas, zancadas y
            más.
          </Text>
          <Button
            title="Empezar rutina"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "#28989E",
              borderRadius: 10,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 16 }}
            containerStyle={{
              paddingTop: 52,
              paddingBottom: 10,
              width: 200,
            }}
            onPress={() => console.log("funcionando btn")}
          />
        </View>
        <Navigation
          items={navItems}
          activeIndex={activeTab}
          onPress={setActiveTab}
        />
      </LinearGradient>
    </View>
  );
}
