<template>
  <div class="profile-container">
    <app-header rootClassName="header-root-class-name9"></app-header>
    <div class="profile-main-div">
      <div class="profile-profile">
        <div class="profile-container1">
          <h1 class="profile-text">{{ this.name }} Profile</h1>
        </div>
        <div class="profile-container2">
          <button type="button" @click="sendFriendRequest" class="button add-friend">Add Friend</button>
          <button type="button" class="button message">Message</button>
          <button type="button" @click="goToParties" class="button add-party">Add To Party</button>
        </div>
        <div class="profile-product-placement">
          <img
            alt="Profile Image"
            :src="profileImageData"
            class="profile-image"
          />
        </div>
        <div class="profile-container4">
          <h1 class="profile-text1">
            <span>Wishlist</span>
            <br />
          </h1>
        </div>
        <div class="profile-row1">
          <product-card1
            rootClassName="product-card1-root-class-name16"
          ></product-card1>
          <product-card1
            rootClassName="product-card1-root-class-name17"
          ></product-card1>
          <product-card1
            rootClassName="product-card1-root-class-name18"
          ></product-card1>
        </div>
      </div>
      <left-canvas rootClassName="left-canvas-root-class-name10"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name10"></right-canvas>
    </div>
    <div v-if="responseMessage" class="notification">{{ responseMessage }}</div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ProductCard1 from '../components/product-card1'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'UserProfile',
  props: {},
  components: {
    AppHeader,
    ProductCard1,
    LeftCanvas,
    RightCanvas,
  },
  data() {
    return {
      other_userid: null,
      name: '',
      profileImageData: '',
      user: {}, // Initialize user object to store user data
      responseMessage: ''
    };
  },
  mounted() {
    this.other_userid = this.$route.params.other_userid;
    this.fetchUserData(); // Fetch user data when the component is mounted
    this.fetchProfileImage();
  },
  computed: {
    ...mapState(['userId', 'accessToken', 'name', 'lastname']),
  },
  methods: {
    goToParties(){
      this.$router.push({name: "AddUserToParty", params:{other_userid: this.other_userid}});
    },
    async sendFriendRequest(){
      try{
        const data = {
          other_user : this.other_userid
        }
        console.log('USERID: ', this.userId)
        await axios.post(`http://localhost:3001/request-friendship/${this.userId}`, data);
        console.log('REQUEST SENT');
        this.responseMessage = "Request Send!";
      }catch(error){
        console.error('Error sending request: ', error);
      }
    },  

    async fetchUserData() {
      try {
        // Make an API call to fetch user data using the other_userid
        console.log('OTHER PROFILE ID: ', this.other_userid);
        const response = await axios.get(`http://localhost:3001/get-profile/${this.other_userid}`);
        this.user = response.data; // Store the user data in the user object
        this.name = response.data.naam;
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error
      }
    },
    async fetchProfileImage() {
      console.log('FETCHING IMAGE!!');
      try {
        // Make an API call to fetch the profile image binary data from the backend
        const response = await axios.get(`http://localhost:3001/otherprofile-image/${this.other_userid}`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}` // Include access token if required
          },
          responseType: 'arraybuffer' // Specify responseType as 'arraybuffer' to receive binary data
        });
        // Create a blob from the binary data
        const blob = new Blob([response.data], { type: 'image/jpeg' }); // Adjust type accordingly
        // Create an object URL from the blob
        this.profileImageData = URL.createObjectURL(blob);
      } catch (error) {
        console.error('Error fetching profile image:', error);
        // Handle error
      }
    },
  }
}
</script>

<style scoped>
.profile-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.profile-main-div {
  gap: 0;
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-profile {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 58%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: absolute;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-container1 {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: flex-start;
}
.profile-text {
  align-self: center;
}
.profile-container2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.profile-product-placement {
  flex: 0 0 auto;
  width: 100%;
  height: 40%;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-image {
  width: 80%;
  height: 100%;
  object-fit: cover;
}
.profile-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.profile-text1 {
  align-self: center;
}
.profile-row1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.button {
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #4CAF50;
  color: #4CAF50;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  padding: 10px 20px;
}

.button:hover {
  background-color: #4CAF50;
  color: white;
}

.add-friend {
  border-color: #1e88e5;
  color: #1e88e5;
}

.message {
  border-color: #9c27b0;
  color: #9c27b0;
}

.add-party {
  border-color: #ff5722;
  color: #ff5722;
}
.notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  z-index: 1000;
  animation: fadeOut 3s ease; /* Animation to fade out after 3 seconds */
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
