<template>
  <div class="map" v-on:click="routermap">
      <h2>Reviews</h2>
      <Review></Review>
      <Review></Review>
  </div>
</template>

<script>
import Review from '@/components/Sreview.vue';

export default {
  name: 'register',
  data() {
    return {
    };
  },
  components: {
    Review
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
    background-color: #795548;
    padding: 2%;
    margin: 3%;
    color: #212121;
  }

  h2 {
    margin: 0%;
  }

</style>
