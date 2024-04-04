<template>
  <header class="header-not-logged-in-header">
    <a @click="redirectToHome" class="logo-link">{{ heading }}</a>
    <div class="header-not-logged-in-btn-group">
      <button class="header-not-logged-in-login button" @click="redirectToLogin">{{ login }}</button>
      <button class="header-not-logged-in-register button" @click="redirectToRegister">{{ register }}</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNotLoggedIn',
  props: {
    heading: {
      type: String,
      default: 'Share A Gift',
    },
    login: {
      type: String,
      default: 'Login',
    },
    register: {
      type: String,
      default: 'Register',
    },
  },
  methods: {
    redirectToHome() {
      if (this.$route.path != '/') {
        this.$router.push('/');
      }
    },
    redirectToLogin() {
      this.$router.push('/login');
    },
    redirectToRegister() {
      this.$router.push('/register');
    }
  },
}
</script>

<style scoped>
.header-not-logged-in-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding: var(--dl-space-space-twounits);
  justify-content: space-between;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 24px; /* Adjust size as needed */
}

.logo-link:hover {
  color: #555;
}

.header-not-logged-in-btn-group {
  display: flex;
  align-items: center;
}

.button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px; /* Adjust padding as needed */
  cursor: pointer;
  transition: background-color 0.3s;
}

.header-not-logged-in-login {
  background-color: #007bff; /* Adjust colors as needed */
  color: #fff;
  margin-right: 8px; /* Adjust margin as needed */
}

.header-not-logged-in-register {
  background-color: #28a745; /* Adjust colors as needed */
  color: #fff;
}

.button:hover {
  filter: brightness(110%); /* Adjust brightness as needed */
}

</style>
