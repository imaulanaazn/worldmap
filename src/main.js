import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const apolloClient = new ApolloClient({
  uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'edcc300743mshcbf51717b28b971p189912jsnc40500853b8d',
    'X-RapidAPI-Host': 'geodb-cities-graphql.p.rapidapi.com'
  },
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
  
app.mount('#app')
