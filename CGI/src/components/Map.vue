<template>
  <div class="map" v-on:click="routermap">
      <h2>Directions</h2>
      <img id="imap" src="../assets/Map.png">
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
    routermap(event) {
      this.$emit('clicked', 'map');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    background-color: grey;
    padding: 2%;
    display: grid;
    grid-template-columns: 100%;
    margin: 3%;
  }

  #imap {
    width: 100%;
    grid-column-start: 0;
  }

  h2 {
    margin: 0%;
  }

</style>
