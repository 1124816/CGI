<template>
<div class="navbar">
    <div class="bar">
        <ul id="example-1">
            <li v-for="item in items" class="pagesli">
                <button  v-on:click="move" class="pages" :id="item.link">
                    {{ item.name }}
                </button>
          </li>
        </ul>
    </div>


  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'navbar',
  data() {
    return {
      items: [{name: 'News', link: '/'}, {name: 'Register', link: 'register'}, {name: 'Climbs', link: 'climbs'}, {name: 'Profile', link: 'profile'}, {name: 'Settings', link: 'settings'}]
    };
  },
  components: {
    Icon
  },
  methods: {
    move: function(event) {
      console.log(event);
      this.$emit('clicked', 'open');
      this.$router.push(event.target.id);
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
    float:center;
}

.navbar {
    width: 80%;
    height: 93.2%;
    position: fixed; left: 0%; top: 6.8%;
    background-color: coral;
    z-index:2;
}


.pagesli {
    width: 90%;
}

.pages {
    width: 100%;
    background-color: coral;
    border: 0px solid;
    font-size: 1.5em;
    margin: 2%;
    text-decoration: none;
    color: #2C3E50;
}

.menub {
    float: left;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 1%;
    background-color:  brown;
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

</style>
