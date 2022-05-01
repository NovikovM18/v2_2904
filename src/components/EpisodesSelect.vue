<template>
  <div>
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
      <div class="page-selector">
        <div
          v-for="pageNum in totalPages"
          :key="pageNum"
          class="page-selector__item"
          :class="{'active': season === pageNum}"
          @click="chanchePage(pageNum)"
        >
          {{ pageNum }}
        </div>
      </div>
      <div class="list">
        <EpisodesList
          :episodes="filteredEpisodesBySeason"
          :death="filteredDeathBySeason"
          v-if="!isLoading"
        />
        <div v-else>Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EpisodesList from "@/components/EpisodesList";

export default {
  components: {
    EpisodesList
  },

  data() {
    return {
      BASE_URL: 'https://www.breakingbadapi.com/api/',
      episodes: [],
      death: [],
      isLoading: false,
      series: 'Breaking+Bad',
      season: 1,
      totalPages: 5
    }
  },

  methods: {
    async fetchEpisodes() {
      try {
        this.isLoading = true;
        const response = await axios.get(`${this.BASE_URL}episodes?series=${this.series}`);
        this.episodes = await response.data;
      } catch (e) {
        alert(e)
      } finally {
        this.isLoading = false;
      }
    },
    
    async fetchDeaths() {
      try {
        const response = await axios.get(`${this.BASE_URL}deaths`);
        this.death = await response.data;
      } catch (e) {
        alert(e)
      }
    },

    chanchePage(pageNum) {
      this.season = pageNum;
    },

    chancheSeries(series) {
      this.series = series;
      if (series === 'Better+Call+Saul') {
        this.totalPages = 4;
      } else {
        this.totalPages = 5;
      }
      this.fetchEpisodes();
      this.fetchDeaths();
    }
  },

  mounted() {
    this.fetchEpisodes();
    this.fetchDeaths();
  },

  computed: {
    filteredEpisodesBySeason() {
      return this.episodes.filter(e => e.season === this.season.toString());
    },
    filteredDeathBySeason() {
      return this.death.filter(d => d.season === this.season);
    },
  }
}
</script>

<style lang="scss">

</style>
