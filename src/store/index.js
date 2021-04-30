// import Vuex
import { createStore } from "vuex";

// import module auth
import auth from "./module/auth";

// create store vuex
export default createStore({
  modules: {
    auth,
  },
});
