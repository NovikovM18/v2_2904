<template>
  <div
    class="modal__container"
    tabindex="-1"
    @click.self="close"
    @keydown.esc="close"
  >
    <div class="modal">
      <span class="modal__close" @click="close">X</span>
      <div class="modal__content">
        <div>
          <span class="modal__content__title">
            Characters: 
          </span> 
          <span
            class="modal__content__description"
            v-for="charecter in episode.characters"
            :key="charecter"
            :charecter="charecter"
            @click="$router.push({path: `/characters`})"
          >
          {{ charecter }}
          </span>
        </div>
        
        <div>
          <span class="modal__content__title">
            Death:
          </span>
          <span
            class="modal__content__description"
            @click="$router.push({path: `/characters`})"
          >
          {{ death.death }}
          </span>
        </div>

      </div>
    </div>
  </div>  
</template>
<script>

export default {
  props: {
    episode: {},
    death: {}
  },
  
  mounted () {
    this.$el.focus()
  },

  methods: {
    close () {
      this.$emit('close')
    }
  },
}
</script>
