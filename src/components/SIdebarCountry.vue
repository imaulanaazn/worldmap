<script setup>
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
    <aside class="sidebar shadow-medium text-black overflow-y-scroll">
        <SearchBar />

        <div class="countries">
            <div class="country-card w-50 w-md-50 w-lg-100 position-relative my-2 rounded-3 overflow-hidden indonesia">
                <div class="country-card__text w-100 h-100 d-flex flex-column justify-content-between text-white position-absolute z-3 p-4">
                    <div class="country-card__text__top">
                        <h3>Indonesia</h3>
                        <p>Asia</p>
                    </div>
                    <div class="country-card__text__bottom d-flex align-items-center justify-content-between">
                        <p>Jakarta</p>
                        <a href="/#" class="text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle">></a>
                    </div>
                </div>
                <img src="/indonesia.jpg" alt="" class="w-100 h-100 object-fit-cover">
            </div>
        </div>
    </aside>
</template>


<style scoped>
    aside{
        height: 100vh;
    }
    aside .countries .country-card {
        height: 240px;
    }
    aside .countries .country-card .country-card__text{
        background: linear-gradient(90deg, rgba(22, 13, 58, 0.85),rgba(255, 255, 255, 0));
    }
    aside .countries .country-card .country-card__text a{
        color: aquamarine;
        border: 1px solid aquamarine;
        transition: .2s ease-in all;
        width: 50px;
        height: 50px;
    }   
    aside .countries .country-card .country-card__text a:hover{
        transform: scale(1.5);
    }
    aside .countries .country-card img{
        filter: brightness(.4);
    }
</style>