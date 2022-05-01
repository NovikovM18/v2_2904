<template>
<div>
  <div class="character__container" @click="modalOpen = true">
    <div class="character">
      <div class="character__title">
        <div>
          <img 
            class="character__img"
            v-bind:src="`${character.img}`"
          >
        </div>
        <span>
          {{ character.name }}
        </span>
      </div>
    </div>
  </div>
    <ModalInfo
      :character="character"
      v-if="modalOpen"
      @close="modalOpen = false"
    />
</div>
</template>

<script>
import ModalInfo from './ModalInfo.vue';

export default {
  components: {
    ModalInfo
  },

  props: {
    character: {}
  },
  
  data () {
    return {
      modalOpen: false
    }
  },
}
      
</script>
