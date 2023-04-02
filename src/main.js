import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// element-ui
import {Carousel,CarouselItem} from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)
// vant
import { Form } from 'vant';
import { Field } from 'vant';
import { Image } from 'vant';
import { Tab, Tabs } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import 'vant/lib/index.css';
Vue.use(Form);
Vue.use(Field);
Vue.use(Image);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
