import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import store Vuex
import store from "./store";

const app = createApp(App);

// Use Router
app.use(router);

// use Store
app.use(store);

app.mixin({
  methods: {
    // money thousands
    moneyFormat(number) {
      let reserve = number
          .toString()
          .split("")
          .reverse.join(""),
        thousands = reserve.match(/\d{1,3}/g);
      thousands = thousands
        .join(".")
        .split("")
        .reserve()
        .join("");
      return thousands;
    },

    // Calculate discount
    calculateDiscount(product) {
      return product.price - (product.price * product.discount) / 100;
    },
  },
});
app.mount("#app");
