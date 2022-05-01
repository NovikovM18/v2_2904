<template>
  <div class="episodes__container">
    <div class="episode" @click="modalOpen = true">
      <div class="episode__title">
        <span>
          Episode: {{ episode.episode }}
        </span>
        <span>
          Title: {{ episode.title }}
        </span>
        <span>
          Air Date: {{ episode.air_date }}
        </span>
      </div>
      <span class="episode__title-ch">Characters:</span>
      <div class="episode__description">
        <span
          v-for="character in episode.characters"
          :key="character"
          :character="character"
        >
        {{ character }}
        </span>
      </div>
    </div>

    <ModalItem
      :episode="episode"
      :death="filteredDeathByEpisode"
      v-if="modalOpen"
      @close="modalOpen = false"
    />
  </div>
</template>

<script>
import ModalItem from './ModalItem.vue';

export default {
  components: { ModalItem },
  props: {
    episode: {},
    death: []
  },

  data () {
    return {
      modalOpen: false
    }
  },
  
  computed: {
    filteredDeathByEpisode() {
      return this.death.find(d => d.episode === +this.episode.episode) || {death: 'Sorry, no death)))'};
    },
  }
}
      
</script>
