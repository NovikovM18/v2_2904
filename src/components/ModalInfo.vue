<template>
  <div
    class="modalC__container"
    tabindex="-1"
    @click.self="close"
    @keydown.esc="close"
  >
    <div class="modalC">
      <span class="modalC__close" @click="close">X</span>
        <span class="modalC__content__title">
          {{ character.name }} 
        </span>
        <div class="modalC__img__container">
          <img
            class="modalC__img"
            v-bind:src="`${character.img}`"
          >
        </div>
      <div class="modalC__content">
        <div class="modalC__content__description">
          <span>Nickname: {{ character.nickname }}</span>
          <span>Birthday: {{ character.birthday }}</span>
          <span>Status: {{ character.status }}</span>
          <span>Portrayed: {{ character.portrayed }}</span>
          <div>
            Occupation:
            <span
              v-for="occupation in character.occupation"
              :key="occupation"
            >  
            {{ occupation }}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  </div>  
</template>
<script>

export default {
  props: {
    character: {}
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
