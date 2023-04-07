<template>
    <div>
        <nav class="navbar bg-body-tertiary mt-4">
            <div class="container-fluid px-0">
                <form class="d-flex gap-3 w-100 justify-content-md-end" role="search">
                <input class="form-control pl-0 w-100" type="search" placeholder="Search" aria-label="Search" v-model="searchTerm" @input="filterResults">
                <button class="btn pr-0 text-white" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                </form>
            </div>
        </nav>

        <ul class="list-group" v-if="searchTerm !== ''">
            <li v-for="result in filteredResults" :key="result" :class="{ active: isActive(result) }" class="list-group-item" @mouseover="setActive(result)" @mouseout="setActive('')">
                {{ result }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        searchTerm: '',
        results: ['india','indonesia','irlandia','japan'],
        activeResult: ''
        }
    },
    computed: {
        filteredResults() {
        return this.results.filter(result => {
            return result.toLowerCase().startsWith(this.searchTerm.toLowerCase())
        })
        }
    },
    methods: {
        filterResults() {
        // do nothing, as the computed property takes care of filtering the results
        },
        setActive(result) {
        this.activeResult = result
        },
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
        background-color: var(--complementary-color);
        color: white;
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
    }
</style>