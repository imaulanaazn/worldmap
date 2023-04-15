<template>
    <aside class="sidebar shadow-medium text-black overflow-y-scroll pb-4" ref="container" @scroll="handleScroll" >
        <SearchBar />
        <div class="countries d-flex flex-column flex-md-row flex-lg-column flex-wrap" >
            <div v-for="card in cards" :key="card.countryId" class="country-card w-100 position-relative mt-3 rounded-3 overflow-hidden indonesia">
                <CountryCard :card="card"/>
            </div>
        </div>  
    </aside>
</template>

<script>
    import cardData from '../data';
    import {useSearchStore} from '../stores/search'
    import SearchBar from './SearchBar.vue';
    import CountryCard from './CountryCard.vue';
    import {watch, computed, ref} from 'vue';

    export default {
        setup() {
        const searchStore = useSearchStore();
        const searchedWord = computed(() => searchStore.searchedWord);
        const cards = ref([]);
        const startIndex = 0;
        const endIndex = 2;
        
        watch(searchedWord, (newValue) => {
            if (newValue) {
                cards.value = cardData.filter((country) =>
                country.title.toLowerCase() === newValue.toLowerCase()
                );
            }else{
                cards.value = [...cards.value, ...cardData.slice(startIndex, endIndex + 1)];
            }
        });
        
        return {
            cards,
            startIndex,
            endIndex,
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
            this.endIndex += 1;
            },

            handleScroll(event) {
            // Check if the user has scrolled to the bottom of the container
            const scrollTop = event.target.scrollTop;
            const scrollHeight = event.target.scrollHeight;
            const containerHeight = event.target.clientHeight;

            if (scrollTop + containerHeight >= scrollHeight - 1) {
                // Load the next batch of cards
                this.loadCards();
            }
            },
        },
        components: {
            SearchBar: SearchBar,
            CountryCard: CountryCard
        }
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