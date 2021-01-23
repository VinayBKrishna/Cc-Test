import axios from "axios";

const key = "knnDQ8FCBlTuJJUAubjrbwbub4SzIwu82drbwzAE";

export const addAstroid = (astroid) => {
  return {
    type: "ADD_ASTROID",
    payload: astroid,
  };
};

export const startGetUser = (id) => {
  return (dispatch) => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`)
      .then((response) => {
        const astroid = response.data;
        console.log(astroid, "from action");
        dispatch(addAstroid(astroid));
      });
  };
};

export const startRandomAstroid = () => {
  return (dispatch) => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
      .then((response) => {
        const randomAstroid = response.data;
        console.log(randomAstroid, "action");
        const randomAstroidId =
          randomAstroid.near_earth_objects[
            Math.floor(Math.random() * randomAstroid.near_earth_objects.length)
          ].id;
        dispatch(startGetUser(randomAstroidId));
      });
  };
};
