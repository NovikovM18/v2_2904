<template>
  <div class="container">
    <a href="#">
      <div class="logo"></div>
    </a>
    <div class="series-selector">
      <button
        class="series-selector__item"
        :class="{'active': series === 'Breaking+Bad'}"
        @click="chancheSeries('Breaking+Bad')"
      >
        Breaking Bad
      </button>
      <button
        class="series-selector__item"
        :class="{'active': series === 'Better+Call+Saul'}"
        @click="chancheSeries('Better+Call+Saul')"
      >
        Better Call Saul
      </button>
    </div>
    <div>
      <CharactersList
        :characters="characters"
        v-if="!isLoading"
      />
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CharactersList from './CharactersList.vue';

export default {
  components: {
    CharactersList
  },

  data() {
    return {
      BASE_URL: 'https://www.breakingbadapi.com/api/',
      characters: [],
      isLoading: false,
      series: 'Breaking+Bad'
    }
  },

  methods: { 
    async fetchCharacters() {
      try {
        this.isLoading = true;
        const response = await axios.get(`${this.BASE_URL}characters?category=${this.series}`);
        this.characters = await response.data;
      } catch (e) {
        alert(e)
      } finally {
        this.isLoading = false;
      }
    },

    chancheSeries(series) {
      this.series = series;
      this.fetchCharacters();
    }
  },

    mounted() {
    this.fetchCharacters();
  }
}
</script>