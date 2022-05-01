<template>
  <div class="characters">
    <CharactersItem
      v-for="character in characters"
      :key="character.char_id"
      :character="character"
    />
  </div>
</template>
<script>
import CharactersItem from "@/components/CharactersItem";

export default {
  components: { CharactersItem },
  props: {
    characters: []
  },
}
</script>
