
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Picker } from "@react-native-picker/picker";

// You can import from local files
import AssetExample from "./components/AssetExample";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import response from "./response";

const getMonthlyIncomes = (response) => {
  let monthlyIncomes = response.data.monthly_income;

  const keys = Object.keys(monthlyIncomes);

  return keys.map((key) => {
    let incomeData = monthlyIncomes[key];

    return { value: key, ...incomeData };
  });
};

const getHeights = (response) => {
  let heights = response.data.height;

  const keys = Object.keys(heights);

  return keys.map((key) => {
    let heightData = heights[key];

    return { value: key, ...heightData };
  });
};

const monthlyIncomes = getMonthlyIncomes(response);
const heights = getHeights(response);

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <View style={{ padding: 20 }}>
          <Text style={styles.paragraph}>Monthly Income</Text>
          <Picker>
            {monthlyIncomes.map((income) => {
              return (
                <Picker.Item
                  key={income.value}
                  label={income.en}
                  value={income.value}
                />
              );
            })}
          </Picker>
        </View>
      </Card>

      {/** Heights */}

      <Card style={{ marginTop: 20 }}>
        <View style={{ padding: 20 }}>
          <Text style={styles.paragraph}>Heights</Text>
          <Picker>
            {heights.map((height) => {
              return (
                <Picker.Item
                  key={height.value}
                  label={height.en}
                  value={height.value}
                />
              );
            })}
          </Picker>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});