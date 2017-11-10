<template>
  <div class="register">
    <RoadMap></RoadMap>
    <TrailMap></TrailMap>
    <TrailMap></TrailMap>
  </div>
</template>

<script>
import RoadMap from '@/components/Map.vue';
import TrailMap from '@/components/TrailMap.vue';

export default {
  name: 'register',
  data() {
    return {
    };
  },
  components: {
    RoadMap,
    TrailMap
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    background-color: green;
  }
</style>
