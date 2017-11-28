<template>
  <div class="page" v-on:click="routermap">
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
  .page {
    background-color: #D7CCC8;
    width: 100%;
    height: 100%;
  }

  h2 {
    margin: 0%;
    padding: 1%;
  }
</style>
