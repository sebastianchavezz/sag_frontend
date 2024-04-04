<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <div @click="redirectToHome" class="header-nav">
      <button class="logo-button">{{ heading }}</button>
    </div>
    <div data-role="MobileMenu" class="header-mobile-menu"></div>
    <app-input rootClassName="input-root-class-name" @search="handleSearch"></app-input>
    <div class="search-results">
      <ul v-if="searchResults.length">
        <li v-for="result in searchResults" :key="result.userid">
          <a @click="visitUserProfile(result.userid)" class="username-link">{{ result.username }}</a>
        </li>
      </ul>
      <p v-else>No users found.</p>
    </div>
    <button @click="redirectToProfile" class="go-to-profile-button">Go to Profile</button>
  </header>
</template>

<script>
import AppInput from './input'
import axios from 'axios';

export default {
  name: 'Header',
  props: {
    heading: {
      type: String,
      default: 'Share A Gift',
    },
    rootClassName: String,
  },
  components: {
    AppInput,
  },
  data() {
    return {
      searchResults: [],
    };
  },
  methods: {
    redirectToProfile() {
      if (this.$route.path != "/profile") {
        this.$router.push('/profile');
      }
    },
    redirectToHome() {
      if (this.$route.path != "/home") {
        this.$router.push('/home');
      }
    },
    async handleSearch(query) {
      try {
        const response = await axios.get(`http://localhost:3001/search/users?q=${query}`);
        this.searchResults = response.data.map(user => ({ username: user.Username, userid: user.UserID })).filter(user => user.username);
      } catch (error) {
        console.error('Error searching:', error);
      }
    },
    visitUserProfile(userid) {
      // Navigate to the user's profile page using the userid
      this.$router.push({name: 'UserProfile', params: {other_userid: userid}});
    },
  },
}
</script>

<style scoped>
.username-link {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.header-nav {
  display: flex;
}
.logo-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  color: var(--dl-color-gray-black);
}
.logo-button:focus {
  outline: none;
}
.search-results {
  position: absolute;
  top: calc(100% + 5px);
  width: calc(100% - 10px);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.search-results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}

.search-results li:last-child {
  border-bottom: none;
}

.go-to-profile-button {
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  transition: background-color 0.3s;
}

.go-to-profile-button:hover {
  background-color: #0056b3;
}

</style>
