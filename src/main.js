import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import VueLazyload from 'vue-lazyload'

const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
})
const app = createApp(App)
app.provide(DefaultApolloClient, apolloClient)

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

app.use(apolloProvider)
app.use(createPinia())
app.use(router)
app.use(VueLazyload,{
  preLoad: 1.3,
  error: '/default.jpg',
  loading: '/loading.gif',
  attempt: 1,
  lazyComponent: true,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})
  
app.mount('#app')
