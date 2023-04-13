<template>
   <main class="text-light w-100 container-fluid row mx-0 px-0 position-relative overflow-y-scroll overflow-x-hidden overflow-lg-hidden">
      
      <MapView :mapScale="mapScale" />

      <div class="zoom-btn w-auto d-flex position-md-absolute m-md-0 my-2">
         <button class="bg-transparent rounded-start-pill me-1 fs-4 fw-semibold lh-1" @click="handleZoom('+')">
            +
         </button>
         <button class="bg-transparent rounded-end-pill fs-4 fw-semibold lh-1" @click="handleZoom('-')">
            -
         </button>
      </div>

      <SidebarCountry class="col-lg-3 col-12"/>
   </main>
</template>

<script>
   import SidebarCountry from '../components/SidebarCountry.vue'
   import MapView from '../components/MapView.vue'
   import { ref } from 'vue'
   export default {

      setup() {
         const mapScale = ref(1)

         const handleZoom = (operation)=>{
            if(operation === '+'){
               mapScale.value += 0.1 
            }else{
               mapScale.value -= 0.1 
            }
         }

         return {
            handleZoom,
            mapScale
         }
      },
      components: {
         SidebarCountry,
         MapView
      },
   }
</script>


<style scoped>
   main{
      height: 100vh;
   }
   .zoom-btn{
      bottom: 2rem;
      left: 2rem;
   }
   .zoom-btn button{
      width: 35px;
      height: 30px;
   }
   .zoom-btn button:hover{
      background-color: var(--complementary-color) !important;
      color: white;
   }


  @media screen and (min-width: 768px) {
     .zoom-btn button{
        width: 45px;
        height: 35px;
      }
   }

   @media screen and (min-width: 1024px) {
      main{
         overflow: hidden !important;
      }
      .zoom-btn{
      position: absolute;
      }
   }
</style>