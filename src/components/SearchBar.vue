<template>
    <div>
        <nav class="navbar bg-body-tertiary mt-4">
            <div class="container-fluid px-0">
                <form class="d-flex gap-3 w-100 justify-content-md-end" role="search">
                <input class="form-control pl-0 w-100" type="search" placeholder="Search" aria-label="Search" v-model="searchedWord">
                <button @click.prevent="search()" class="btn pr-0 text-white" type="submit" :disabled="!searchedWord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                </form>
            </div>
        </nav>

        <ul class="list-group" v-if="searchedWord !== ''">
            <li v-for="result in filteredResults" 
                :key="result" 
                :class="{ active: isActive(result) }" 
                class="list-group-item" 
                @click="setActive(result)">
                {{ result }}
            </li>
        </ul>
    </div>
</template>

<script>
import { useSearchStore } from '../stores/search.js'
import {ref, watch} from 'vue'
import countries from '../data.js'
export default {
    setup(){
        const searchStore = useSearchStore()
        const searchedWord =  ref('')
        const activeResult =  ref('');

        function search(){
            if(searchedWord.value != activeResult.value){
                const found = countries.some(country => country.title.toLowerCase() == searchedWord.value.toLowerCase());
                if(!found){
                    alert('there is no such country')
                }else{
                    searchStore.addSearchedWord(searchedWord.value)
                    activeResult.value = searchedWord.value
                }
            }else{
                searchStore.addSearchedWord(searchedWord.value)
            }
        }

        function setActive(result) {
            activeResult.value = result
            searchedWord.value = result
            searchStore.addSearchedWord(searchedWord.value)
        }

        watch(searchedWord,()=>{
            if(!searchedWord.value){
                searchStore.clearSearchedWord();
            }
        })

        return{
            search,
            searchedWord,
            activeResult,
            setActive
        }
    },
    data() {
        return {
        results: countries.map(country => country.title.toLowerCase())
        }
    },
    computed: {
        filteredResults() {
            return this.results.filter(result => {
                return result.toLowerCase().startsWith(this.searchedWord.toLowerCase())
            })
        }
    },
    watch:{
        searchedWord(){
            if(!this.searchedWord){
                this.activeResult = ''
            }
        },
    },
    methods: {
        isActive(result) {
            return result === this.activeResult
        }
    }
}
</script>
  
<style scoped>
    nav .container-fluid button, input{
        border: 2px solid var(--complementary-color);
    }
    nav .container-fluid button{
        background-color: var(--complementary-color);
    }
    ul li{
        border-color: var(--complementary-color);
    }
    ul li:hover{
        border-color: var(--complementary-color);
        cursor: pointer;
        color: white;
    }
    ul li.active{
        background-color: var(--complementary-color) !important;
        outline: none !important;
    }
    
    @media screen and (min-width: 768px) {
        .navbar input{
            width: auto !important;
        }
    }
    @media screen and (min-width: 1024px) {
        .navbar input{
            width: 100% !important;
        }
        ul li:hover{
            background-color: var(--complementary-color);
        }
    }
</style>