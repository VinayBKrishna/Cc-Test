import {StatusBar} from "expo-status-bar";
import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {startRandomAstroid} from "../redux/action/action";

function Astroid(props) {
  const id = props.navigation.getParam("id");

  useEffect(() => {
    props.dispatch(startRandomAstroid());
  }, []);

  return (
    <View style={styles.info}>
      <View style={styles.borderText}>
        <Text>Random astroid</Text>
        <View>
          <Text>Name- {props.test.name} </Text>
        </View>
        <View>
          <Text>Nasa Jpl Url - {props.test.nasa_jpl_url} </Text>
        </View>
        <View>
          <Text>
            Is Potentially Hazord-
            {props.test.is_potentially_hazardous_asteroid ? "True" : "False"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

const styles = StyleSheet.create({
  info: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  borderText: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
});

export default connect(mapStateToProps)(Astroid);
