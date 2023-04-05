<template>
    <div>
        <nav class="navbar bg-body-tertiary mt-4">
            <div class="container-fluid px-0">
                <form class="d-flex gap-3 w-100" role="search">
                <input class="form-control pl-0" type="search" placeholder="Search" aria-label="Search" v-model="searchTerm" @input="filterResults">
                <button class="btn pr-0 text-white" type="submit">O</button>
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
</style>