<template>
  <div class="lmap" v-on:click="routermap">
      <h2>Directions</h2>
      <vmap class="map" :zoom=13 :center="[47.413220, -1.219482]">
        <vtilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></vtilelayer>
        <vmarker :lat-lng="[47.413220, -1.219482]"></vmarker>
      </vmap>
  </div>
</template>
<script>
import v2l from 'vue2-leaflet';
var vmap = v2l.Map;
var vtilelayer = v2l.TileLayer;
var vmarker = v2l.Marker;

export default {
  name: 'register',
  data() {
    return {
    };
  },
  components: {
    vmap,
    vtilelayer,
    vmarker
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
@import url("https://unpkg.com/leaflet@1.0.3/dist/leaflet.css");
  .lmap {
    background-color: #795548;
    padding: 2%;
    display: grid;
    grid-template-rows: 20% auto;
    margin: 3%;
    color: #212121;
  }

  #imap {
    width: 100%;
    grid-column-start: 0;
  }

  h2 {
    margin: 0%;
  }

  .map {
    width: 80%;
    height: 80%;
    position: inherit;
  }

</style>
