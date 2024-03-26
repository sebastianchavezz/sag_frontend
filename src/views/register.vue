<template>
  <div class="register-container">
    <header-not-logged-in
      rootClassName="header-not-logged-in-root-class-name"
    ></header-not-logged-in>
    <div class="register-container1"></div>
    <form class="register-form input button">
      <code class="register-text">Username</code>
      <input
        type="text"
        placeholder="placeholder"
        class="register-textinput input"
        v-model="username"
      />
      <div class="register-container2"></div>
      <code class="register-text1">Naam</code>
      <div class="register-container3">
        <input type="text" placeholder="placeholder" class="input" v-model="name" /> 
      </div>
      <code class="register-text2">Achternaam</code>
      <input type="text" placeholder="placeholder" class="input" v-model="lastName" />
      <code class="register-text3">Email</code>
      <input type="text" placeholder="placeholder" class="input" v-model="email" /> 
      <code class="register-text4">Password</code>
      <input type="password" placeholder="placeholder" class="input" v-model="password" />
      <code class="register-text5">Confirm Password</code>
      <input type="password" placeholder="placeholder" class="input" v-model="confirmPassword" />
      <code class="register-text6">Tel</code>
      <input type="text" placeholder="placeholder" class="input" v-model="tel" />
      <button @click.prevent="register">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderNotLoggedIn from '../components/header-not-logged-in';

export default {
  name: 'Register',
  components: {
    HeaderNotLoggedIn,
  },
  data() {
    return {
      username: '',
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      tel: '',
    };
  },
  methods: {
    async register() {
      try {
        if (this.password !== this.confirmPassword) {
          throw new Error("Passwords do not match");
        }
        console.log('Resgistering')
        // Make a POST request to the /register endpoint with user data
        const data= {
          username: this.username,
          email: this.email,
          password: this.password,
          naam: this.name,
          achternaam: this.lastName,
          tel: this.tel,
        }
        console.log(data);
        await axios.post('http://localhost:3001/register', data);
        
        // Registration successful, redirect to login page
        this.$router.push('/home');
      } catch (error) {
        // Registration failed, handle error
        console.error('Registration error:', error.message);
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-container1 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
}
.register-form {
  top: 129px;
  left: 0px;
  right: 0px;
  width: 467px;
  height: 788px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: center;
  box-shadow: 0px 5px 20px 1px #000000;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.register-text {
  padding-bottom: var(--dl-space-space-unit);
}
.register-textinput {
  transition: 0.3s;
}

.register-container2 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.register-text1 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.register-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.register-text2 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.register-text3 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.register-text4 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.register-text5 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
.register-text6 {
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
}
</style>
