<template>
  <div class="register">
    <Bars></Bars>
    <input 
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <input 
      type="pasword"
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthenticationService.js';
import Bars from '@/components/Hello.vue';
export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  components: {
    Bars
  },
  methods: {
    async register() {
      console.log('click');
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
