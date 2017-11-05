<template>
<div class="navbar">
    <div class="bar">
        <button v-on:click="navbar" class="menub"><icon name="bars" class="menu"></icon></button>
        <p class="title">{{ msg }}</p>
    </div>


  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'navbar',
  data() {
    return {
      msg: 'News'
    };
  },
  components: {
    Icon
  },
  methods: {
    navbar: function(event) {
      console.log('open');
      this.$emit('clicked', 'open');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
    text-align:center;
    display: grid;
    grid-template-columns: 10% auto 10%;
}

.menu {
    width: auto;
    height: 3.6vh;
}

.title {
    font-size:4vh;
    padding: 0%;
    margin: 15%;
    font-weight: bold;
}

.navbar {
    width: 100%;
    position: absolute; left: 0%; top: 0%;
    background-color: brown;
}

.menub {
    grid-column-start: 0;
    margin-left:2%;
    margin-right:2%;
    margin-bottom:1%;
    background-color: brown;
    border: 0px solid;
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
