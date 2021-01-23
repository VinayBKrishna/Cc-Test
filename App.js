import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, Platform} from "react-native";
import Navigate from "./navigation/navigation";
import {Provider} from "react-redux";
import configStore from "./redux/store/configStore";

const store = configStore();

store.subscribe(() => {
  console.log(store.getState(), "store");
});

function App() {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
