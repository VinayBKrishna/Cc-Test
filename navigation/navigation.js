import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/home";
import Astroid from "../screens/astroid";
import RandomAstroid from "../screens/randomAstroid";

const Navigate = createStackNavigator({
  Home: Home,
  Astroid: Astroid,
  RandomAstroid: RandomAstroid,
});
export default createAppContainer(Navigate);
