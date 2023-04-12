<script setup>
import SearchBar from './SearchBar.vue';
</script>

<template>
    <aside class="sidebar shadow-medium text-black overflow-y-scroll pb-4" ref="container" @scroll="handleScroll" >
        <SearchBar />

        <div class="countries d-flex flex-column flex-md-row flex-lg-column flex-wrap" >
            <div v-for="card in cards" :key="card.countryId" class="country-card w-100 position-relative mt-3 rounded-3 overflow-hidden indonesia">
                <div class="country-card__text w-100 h-100 d-flex flex-column justify-content-between text-white position-absolute z-3 p-4">
                    <div class="country-card__text__top">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.countryId }}</p>
                    </div>
                    <div class="country-card__text__bottom d-flex align-items-center justify-content-between">
                        <p>Jakarta</p>
                        <a href="/#" class="text-decoration-none fs-5 d-flex align-items-center justify-content-center rounded-circle">></a>
                    </div>
                </div>
                <img :src="card.img" v-lazy="card.img" lazy-placeholder="/loading.gif"  alt="" class="w-100 h-100 object-fit-cover">
            </div>
        </div>
    </aside>
</template>

<script>
    import cardData from '../data';

    export default {
        data() {
            return {
            cards: [],
            startIndex: 0,
            endIndex: 9,
            };
        },
        created() {
            // Load the first batch of cards on component creation
            this.loadCards();
        },
        methods: {
            loadCards() {
            // Add the new cards to the existing ones
            this.cards = [...this.cards, ...cardData.slice(this.startIndex, this.endIndex + 1)];

            // Update the start and end indexes
            this.startIndex = this.endIndex + 1;
            this.endIndex += 10;
            },
            handleScroll(event) {
            // Check if the user has scrolled to the bottom of the container
            const scrollTop = event.target.scrollTop;
            const scrollHeight = event.target.scrollHeight;
            const containerHeight = event.target.clientHeight;

            if (scrollTop + containerHeight >= scrollHeight - 10) {
                // Load the next batch of cards
                this.loadCards();
            }
            },
        },
    }
</script>

<style scoped>
    aside{
        height: auto;
    }
    aside .countries{
        gap: 2%;
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

    @media screen and (min-width: 768px) {
        .countries .country-card{
            width: 49% !important;
        }
    }
    @media screen and (min-width: 1024px) {
        aside{
            height: 100vh;
        }
        .countries .country-card{
            width: 100% !important;
        }
    }
</style>