<template>
  <div class="map" v-on:click="routermap">
      <img id="avatar" src="../assets/avatar.jpg">
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
    background-color: #795548;
    width: 80%;
    margin: 2% auto;
    padding: 2%;
    display: grid;
    grid-template-columns: 30% auto;
  }

  #avatar {
    grid-column-start: 0;
  }

  p {
    grid-column-start: 2;
  }
</style>
