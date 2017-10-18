<template>
  <div class="register">
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
export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: ''
    };
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
