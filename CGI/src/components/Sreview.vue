<template>
  <div class="map" v-on:click="routermap">
      <p>Is cool!</p>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    background-color: darkgrey;
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
