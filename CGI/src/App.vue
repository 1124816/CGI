<template>
<div id="app">
    <Navbar @clicked="openSidebar"></Navbar>
    <transition name="slide">
        <Sidebar v-show="isSidebarOpen" @clicked="openSidebar"></Sidebar>
    </transition>
    <router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
var data = {
  msg: 'Welcome to Your Vue.js App',
  isSidebarOpen: false
};
export default {
  name: 'app',
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

<style>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  background-color: blue;
}
</style>
