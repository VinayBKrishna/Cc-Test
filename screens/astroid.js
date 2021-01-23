import {StatusBar} from "expo-status-bar";
import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {startGetUser} from "../redux/action/action";

function Astroid(props) {
  const id = props.navigation.getParam("id");

  useEffect(() => {
    props.dispatch(startGetUser(id));
  }, []);
  console.log(props.test, "astroid");
  return (
    <View style={styles.info}>
      <Text>Astroid</Text>
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
});

export default connect(mapStateToProps)(Astroid);
