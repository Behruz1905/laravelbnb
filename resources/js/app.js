import moment from "moment";


require('./bootstrap');
//import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import Index from  "./Index";
import StarRating from  "./shared/components/StarRating";
import FatalError from  "./shared/components/FatalError";
import Success from  "./shared/components/Success";
import ValidationErrors from  "./shared/components/ValidationErrors";
import StoreDefinition from "./store";



window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.filter("fromNow", value => moment(value).fromNow());
Vue.component("star-rating",StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);


const store = new Vuex.Store(StoreDefinition);

window.axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(401 === error.response.status){
            store.dispatch("logout");
        }

        return Promise.reject(error);
    }
);


// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     name: "Sebuhi"
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     },
//     changeName(state, payload) {
//         state.name = payload;
//     }
//   }
// });


const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        "index": Index
    },
    async beforeCreate() {
        this.$store.dispatch("loadStoredState");
        this.$store.dispatch("loadUser");
    }
});
