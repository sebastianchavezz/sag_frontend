<template>
  <div class="login-component-container" v-bind:class="rootClassName">
    <form class="login-component-form input button" @submit.prevent="login">
      <code class="login-component-text">{{ text }}</code>
      <div class="login-component-container1">
        <input
          type="text"
          v-model="username"
          :placeholder="textinputPlaceholder"
          class="login-component-textinput input"
        />
      </div>
      <code class="login-component-text1">{{ text1 }}</code>
      <div class="login-component-container2">
        <input
          type="password"
          v-model="password"
          :placeholder="textinputPlaceholder1"
          class="login1-textinput input"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Vuex from 'vuex';

export default {
  name: 'LoginComponent',
  props: {
    rootClassName: String,
    textinputPlaceholder: {
      type: String,
      default: 'placeholder',
    },
    text1: {
      type: String,
      default: 'Password',
    },
    textinputPlaceholder1: {
      type: String,
      default: 'placeholder',
    },
    text: {
      type: String,
      default: 'Username or email\n',
    },
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        // Send login credentials to the backend
        const response = await axios.post('http://localhost:3001/login', {
          username: this.username,
          password: this.password
        });
        
        console.log(response.data);
        
        // Store the Token and the ID of the User
        this.$store.dispatch('login',{
          token: response.data.accessToken,
          userId: response.data.userId,
          email: response.data.email,
          lastname: response.data.achternaam,
          name: response.data.naam
        });

        // Redirect to another page or update UI as needed
        // For example, redirect to the home page
        this.$router.push('/home');
      } catch (error) {
        console.error('Login failed:', error.message);
        // Handle login error, e.g., show error message to the user
      }
    },
  },
}
</script>

<style scoped>
.login-component-container {
  display: flex;
  position: relative;
}
.login-component-form {
  width: 479px;
  height: 284px;
  display: flex;
  position: relative;
  align-self: center;
  box-shadow: 0px 5px 20px 1px #000000;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.login-component-text {
  padding-bottom: var(--dl-space-space-unit);
}
.login-component-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.login-component-textinput {
  transition: 0.3s;
}

.login-component-text1 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.login-component-container2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.login-component-root-class-name {
  top: 0px;
  flex: 1;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 50%;
  position: static;
}
</style>
