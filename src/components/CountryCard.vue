<template>
  <div class="country-card__text w-100 h-100 d-flex flex-column justify-content-between text-white position-absolute z-3 p-4">
    <div class="country-card__text__top">
      <h3>{{ card.title }}</h3>
      <p>{{ result ? result.country.capital : ''}}</p>
    </div>
    <div class="country-card__text__bottom d-flex align-items-center justify-content-between">
      <p>{{ result ? result.country.continent.name : ''}}</p>
      <a href="/#" class="text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle">></a>
    </div>
  </div>
  <img :src="card.img" v-lazy="card.img" lazy-placeholder="/loading.gif" alt="" class="w-100 h-100 object-fit-cover">
</template>
  
<script>
  import gql from 'graphql-tag';
  import { useQuery } from '@vue/apollo-composable'
  import { watch, ref, computed } from 'vue';
  
  export default {
    props: ['card'],
    setup(props) {
      const { result, loading, error } = useQuery(gql`
        query {
          country(code: "${props.card.countryId}") {
            name
            capital
            continent {
              name
            }
          }
        }
      `);
  
      const resultValue = ref(result.value);
  
      watch(result, () => {
        resultValue.value = result.value;
      });
  
      return {
        loading,
        error,
        result: computed(() => resultValue.value)
      }
    }
  }
</script>
  

<style scoped>
  .country-card__text{
      background: linear-gradient(90deg, rgba(22, 13, 58, 0.85),rgba(255, 255, 255, 0));
  }
  .country-card__text a{
      color: aquamarine;
      border: 1px solid aquamarine;
      transition: .2s ease-in all;
      width: 50px;
      height: 50px;
  }   
  .country-card__text a:hover{
      transform: scale(1.5);
  }
  img{
      filter: brightness(.4);
  }
</style>