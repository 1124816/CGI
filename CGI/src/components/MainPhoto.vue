<template>
  <div class="map" v-on:click="routermap">
    <img id="imap" src="../assets/Foster.jpg">
    <div id="stats">
      <p class="stat"><icon name="car" class="car"></icon> 20 min</p>
      <p class="stat"><icon name="blind" class="car"></icon> 0.5 ml</p>
      <p class="stat"><icon name="star" class="car"></icon> 4.5</p>
      <p class="stat">5.11b</p>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'register',
  data() {
    return {
    };
  },
  components: {
    Icon
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
    display: grid;
    grid-template-columns: 75% 25%;
    margin: 3%;
  }

  #imap {
    width: 100%;
    grid-column-start: 0;
  }

  #stats {
    width: 100%;
    grid-column-start: 2;
    text-align: left;
    color: #212121;
  }

  .car {
    margin: 0%;
  } 

  .stat {
    margin-left: 6%;
    margin-bottom: 0%;
    font-size: 0.8em;
  }

  h2 {
    margin: 0%;
  }

</style>
