<template>
<div class="navbar">
    <div class="bar">
        <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      msg: 'News'
    };
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

.navbar {
    width: 100%;
    position: absolute; left: 0%; top: 0%;
    background-color: brown;
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
