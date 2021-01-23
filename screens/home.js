import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import {connect} from "react-redux";
import {startRandomAstroid} from "../redux/action/action";

function Home(props) {
  const [id, setId] = useState();

  console.log(id);

  return (
    <View>
      <Text style={styles.textInput}>Welcome</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Enter Astroid Id"
          value={id}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={() =>
            props.navigation.navigate({
              routeName: "Astroid",
              params: {
                id: id,
              },
            })
          }
          disabled={id ? false : true}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Random Astroid"
          onPress={() =>
            props.navigation.navigate({
              routeName: "RandomAstroid",
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  textInput: {
    padding: 10,
  },
  text: {
    padding: 10,
    fontWeight: "500",
  },
});

export default connect()(Home);
