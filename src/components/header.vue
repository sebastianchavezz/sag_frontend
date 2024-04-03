<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <div @click="redirectToHome" class="header-nav">
      <h1 class="header-text">{{ heading }}</h1>
    </div>
    <img @click="redirectToProfile" :alt="imageAlt" :src="imageSrc" class="header-image" />
    <div data-role="MobileMenu" class="header-mobile-menu">
      <div class="header-nav1">
        <div class="header-container">
          <img :alt="imageAlt1" :src="imageSrc1" class="header-image1" />
        </div>
      </div>
    </div>
    <app-input rootClassName="input-root-class-name" @search="handleSearch"></app-input>
    <div class="search-results">
      <ul v-if="searchResults.length">
        <li v-for="result in searchResults" :key="result.userid">
          <a @click="visitUserProfile(result.userid)" class="username-link">{{ result.username }}</a>
        </li>
      </ul>
      <p v-else>No users found.</p>
    </div>
  </header>
</template>

<script>
import AppInput from './input'
import axios from 'axios';

export default {
  name: 'Header',
  props: {
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    heading: {
      type: String,
      default: 'Share A Gift',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    imageAlt1: {
      type: String,
      default: 'image',
    },
    imageSrc1: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
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
.header-text {
  color: var(--dl-color-gray-black);
}
.header-icon-group {
  top: 30px;
  right: 50px;
  width: 281px;
  height: 45px;
  margin: auto;
  position: absolute;
  align-self: center;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius4);
}
.header-icon {
  left: 115px;
  width: 36px;
  bottom: 4px;
  height: 36px;
  position: absolute;
}
.header-image {
  top: 0px;
  right: 0px;
  width: var(--dl-size-size-small);
  bottom: 0px;
  height: var(--dl-size-size-small);
  position: absolute;
  margin-top: auto;
  object-fit: cover;
  margin-left: auto;
  margin-right: var(--dl-space-space-twounits);
  border-radius: 50px;
  margin-bottom: auto;
}
.header-icon02 {
  width: 36px;
  height: 36px;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-halfunit);
}
.header-burger-menu {
  display: none;
}
.header-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  display: none;
}
.header-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.header-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.header-image1 {
  height: 2rem;
}
.header-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.header-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon10 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.header-icon12 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

.header-root-class-name {
  align-self: center;
}
@media(max-width: 1600px) {
  .header-root-class-name1 {
    align-self: center;
  }
  .header-root-class-name6 {
    align-self: center;
  }
  .header-root-class-name7 {
    align-self: center;
  }
  .header-root-class-name9 {
    align-self: center;
  }
}
@media(max-width: 991px) {
  .header-icon04 {
    display: flex;
  }
}
@media(max-width: 767px) {
  .header-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .header-nav {
    display: none;
  }
  .header-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: var(--dl-space-space-unit);
  }
  .header-icon-group {
    display: none;
  }
  .header-mobile-menu {
    padding: 16px;
  }
}
</style>
