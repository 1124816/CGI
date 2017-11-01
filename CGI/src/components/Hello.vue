<template>
  <div class="main">
    <Navbar sidebarstat={{}}></Navbar>
    <main></main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  name: 'main',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  components: {
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.main {
  width: 100%;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
