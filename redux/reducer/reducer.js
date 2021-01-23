const initialReducer = [];

const testReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case "ADD_ASTROID": {
      return {...action.payload};
    }

    default: {
      return [...state];
    }
  }
};
export default testReducer;
