import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchedWord: ''
  }),
  actions: {
    addSearchedWord(searchedWord) {
      this.searchedWord = searchedWord
    },
    clearSearchedWord() {
      this.searchedWord = ''
    }
  }
})
