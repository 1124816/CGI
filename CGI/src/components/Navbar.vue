<template>
<div class="navbar">
    <div class="bar">
        <h1>
            <button v-on:click="navbar" class="menub"><icon name="bars" class="menu"></icon></button>
            <p>{{ msg }}</p>
        </h1>
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
  props: ['sidebarstat'],
  methods: {
    navbar: function(event) {
      console.log('hello');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: large;
    text-align:center;
    padding: .5%;
    font-size: 1em;
}

h1>p {
    margin:0%;
    position: absolute; left: 45%;
}

.navbar {
    width: 100%;
    position: absolute; left: 0%; top: 0%;
    background-color: brown;
}

.menub {
    float:left;
    padding-left:5%;
    padding-right:5%;
    padding-bottom:5%;
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
