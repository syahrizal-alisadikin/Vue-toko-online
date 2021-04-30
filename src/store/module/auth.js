import Api from "../../api/Api";

const auth = {
  // set namespace true
  namespaced: true,

  // state
  state: {
    // state untuk token, pakai localStorage, untuk menyimpan informasi tentang token JWT
    token: localStorage.getItem("token") || "",
    // state user, pakai localStorage, untuk menyoimpan data user yang sedang login
    user: JSON.parse(localStorage.getItem("user")) || {},
  },

  // Mutation
  mutations: {
    //   update state token dan state user dari hasil response
    AUTH_SUCCESS(state, token, user) {
      state.token = token; // <-- assign state token dengan response token
      state.user = user; // <-- assign state token dengan response data user
    },
  },

  // Action
  actions: {
    // action register
    register({ commit }, user) {
      // Define callback promise
      return new Promise((resolve, reject) => {
        // send data ke server
        Api.post("/register", {
          // data yang dikirim ke server untuk proses register
          name: user.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation,
        })
          .then((response) => {
            // define variabel dengan isi hasil response server
            const token = response.data.token;
            const user = response.data.user;

            // set localStorage untuk menyimpan token dan data user
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // Set default header axios dengan token
            Api.defaults.headers.common["Authorization"] = "Bearer " + token;

            // commit auth success ke mutation
            commit("AUTH_SUCCESS", token, user);

            // resolve ke component dengan hasil response
            resolve(response);
          })
          .catch((error) => {
            // jika gagal , remove localStorage dengan key token
            localStorage.removeItem("token");
            // reject ke component dengan hasil response
            reject(error.response.data);
          });
      });
    },
  },

  // Getters
  getters: {
    //get current user
    currentUser(state) {
      return state.user; // <-- return dengan data user
    },

    //loggedIn
    isLoggedIn(state) {
      return state.token; // return dengan data token
    },
  },
};

export default auth;
