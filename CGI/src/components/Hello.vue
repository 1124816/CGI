<template>
  <div class="main">
      <Navbar @clicked="openSidebar"></Navbar>
      <transition name="slide">
      <Sidebar v-show="isSidebarOpen"></Sidebar>
      </transition>
    <main></main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
var data = {
  msg: 'Welcome to Your Vue.js App',
  isSidebarOpen: false
};
export default {
  name: 'main',
  data() {
    return data;
  },
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    openSidebar(value) {
      console.log(data.isSidebarOpen);
      data.isSidebarOpen = !data.isSidebarOpen;
    }
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

.slide-leave-active,
.slide-enter-active {
  transition: .4s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
