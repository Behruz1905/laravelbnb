import moment from "moment";


require('./bootstrap');
//import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
import Index from  "./Index";
import StarRating from  "./shared/components/StarRating";
import FatalError from  "./shared/components/FatalError";
import ValidationErrors from  "./shared/components/ValidationErrors";



window.Vue = require('vue');
//qolobal kampanaentler
// Vue.component('example-component',
//               require('./components/ExampleComponent.vue').default
//               );
// Vue.component('example-2',
//             require('./components/Example2.vue').default
//             );

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());
Vue.component("star-rating",StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("v-errors", ValidationErrors);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index
    }
});
