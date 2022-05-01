<template>
  <div class="episodes">
    <EpisodesItem
      v-for="episode in episodes"
      :key="episode.episode_id"
      :episode="episode"
      :death="death"
    />
  </div>
</template>
<script>
import EpisodesItem from "@/components/EpisodesItem";

export default {
  components: { EpisodesItem },
  props: {
    episodes: [],
    death: []
  },
}
</script>
