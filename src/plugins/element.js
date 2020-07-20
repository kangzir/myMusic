import Vue from 'vue'
import { 
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Form,
  Input,
  FormItem,
  Message,
  Carousel,
  CarouselItem,
  Pagination,
  Table,
  TableColumn,
  Tabs,
  TabPane
 } from 'element-ui'

 Vue.prototype.$msg = Message
 
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Header)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Form)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Button)
