<template>
  <div class="register">
    <MainPhoto></MainPhoto>
    <RoadMap></RoadMap>
    <About @clicked="routeAbout"></About>
    <Reviews></Reviews>
  </div>
</template>

<script>
import RoadMap from '@/components/Map.vue';
import TrailMap from '@/components/TrailMap.vue';
import MainPhoto from '@/components/MainPhoto.vue';
import Reviews from '@/components/Reviews.vue';
import About from '@/components/About.vue';

export default {
  name: 'register',
  data() {
    return {
    };
  },
  components: {
    RoadMap,
    TrailMap,
    MainPhoto,
    Reviews,
    About
  },
  methods: {
    routeAbout(event) {
      this.$router.push('About');   
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    background-color: green;
  }
</style>
