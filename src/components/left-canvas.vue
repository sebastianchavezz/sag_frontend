<template>
  <div class="left-canvas-left-canvas" :class="rootClassName">
    <div class="left-canvas-container">
      <div class="left-canvas-messenger">
        <button @click="r_toHome" class="left-canvas-button">Home</button>
      </div>
      <div class="left-canvas-messenger1">
        <button @click="r_toParty" class="left-canvas-button">Party</button>
      </div>
      <div class="left-canvas-messenger2">
        <button @click="r_toMarket" class="left-canvas-button">Market Place</button>
      </div>
      <div class="left-canvas-messenger3">
        <button @click="r_toMessages" class="left-canvas-button">Messages</button>
      </div>
    </div>
    <div class="left-canvas-container5">
      <h3 class="left-canvas-text06">
        <span>Friends</span>
        <br />
      </h3>
      <div class="left-canvas-messenger4">
        <div class="left-canvas-profile4">
          <div class="left-canvas-container6">
            <!-- Loop through friends and display usernames as clickable links -->
            <div v-for="friend in friends" :key="friend.id">
              <button @click="visitUserProfile(friend.id)" class="username-link">{{ friend.username }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'LeftCanvas',
  props: {
    rootClassName: String,
  },
  created() {
    this.fetchFriends();
  },
  data() {
    return {
      friends: []
    }
  },
  computed: {
    ...mapState(['userId', 'accessToken', 'name', 'lastname']),
  },
  methods: {
    visitUserProfile(userid) {
      // Navigate to the user's profile page using the userid
      this.$router.push({ name: 'UserProfile', params: { other_userid: userid } });
    },
    async fetchFriends() {
      try {
        const response = await axios.get(`http://localhost:3001/all-friends/${this.userId}`);
        this.friends = response.data.map(user => ({
          id: user.id,
          username: user.username,
        }));
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    },
    r_toHome() {
      if (this.$route.path != '/home') {
        this.$router.push('/home');
      }
    },
    r_toMarket() {
      if (this.$route.path != '/marketplace') {
        this.$router.push('/marketplace');
      }
    },
    r_toParty() {
      if (this.$route.path != '/party') {
        this.$router.push('/party');
      }
    },
    r_toMessages() {
      if (this.$route.path != '/messages') {
        this.$router.push('/messages');
      }
    }
  }
}
</script>

<style scoped>
.left-canvas-left-canvas {
  width: 17%;
  height: 817px;
  margin: var(--dl-space-space-unit);
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-container {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-messenger {
  flex: 0 0 auto;
  width: 100%;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.left-canvas-button {
  cursor: pointer;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s;
}
.left-canvas-button:hover {
  background-color: darkblue;
}
.left-canvas-profile {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-start;
}
.left-canvas-container1 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-text {
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.left-canvas-messenger1 {
  flex: 0 0 auto;
  width: 100%;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.left-canvas-profile1 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-start;
}
.left-canvas-container2 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-text01 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.left-canvas-messenger2 {
  flex: 0 0 auto;
  width: 100%;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.left-canvas-profile2 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-start;
}
.left-canvas-container3 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-text02 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.left-canvas-messenger3 {
  flex: 0 0 auto;
  width: 100%;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.left-canvas-container4 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-text03 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.left-canvas-messenger4 {
  flex: 0 0 auto;
  width: 100%;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.left-canvas-profile4 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-start;
}
.left-canvas-container6 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin: 0px;
  padding: 0px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: 50px;
}
.left-canvas-text09 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.left-canvas-root-class-name {
  top: 0px;
  left: 0px;
  bottom: 0px;
  position: absolute;
}
.left-canvas-root-class-name1 {
  height: 100%;
}
.left-canvas-root-class-name2 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name3 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name4 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name5 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name6 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name7 {
  height: 100%;
}
.left-canvas-root-class-name8 {
  height: 100%;
}
.left-canvas-root-class-name9 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name10 {
  height: 100%;
}
.left-canvas-root-class-name12 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name13 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.left-canvas-root-class-name14 {
  top: 0px;
  left: 0px;
  position: absolute;
}
@media(max-width: 1600px) {
  .left-canvas-left-canvas {
    width: 363px;
    position: static;
    align-self: flex-start;
    margin-right: 0px;
  }
  .left-canvas-container {
    width: 90%;
    align-self: center;
  }
  .left-canvas-container5 {
    width: 90%;
    align-self: center;
  }
  .left-canvas-root-class-name1 {
    width: 17%;
  }
  .left-canvas-root-class-name2 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name3 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name4 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name5 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name6 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name7 {
    width: 17%;
  }
  .left-canvas-root-class-name8 {
    width: 17%;
  }
  .left-canvas-root-class-name9 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name10 {
    width: 17%;
  }
  .left-canvas-root-class-name12 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name13 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .left-canvas-root-class-name14 {
    top: 0px;
    left: 0px;
    position: absolute;
    align-self: flex-start;
  }
  .username-link {
  cursor: pointer;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 24px; /* Adjust padding as needed */
  margin-bottom: 8px; /* Added margin bottom for spacing between links */
  font-size: 16px;
  transition: background-color 0.3s;
}

.username-link:hover {
  background-color: darkblue;
}

.left-canvas-text06 {
  margin-bottom: 12px; /* Added margin bottom for spacing between "Friends" and the list of friends */
}
}
</style>
