<template>
  <div class="left-canvas-left-canvas" v-bind:class="rootClassName">
    <div class="left-canvas-container">
      <div class="left-canvas-messenger">
        <div class="left-canvas-profile">
          <div class="left-canvas-container1"></div>
        </div>
        <svg viewBox="0 0 1024 1024" class="left-canvas-icon">
          <path d="M101.803 350.336c-10.069 7.851-16.469 20.011-16.469 33.664v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-469.333c-0.043-12.8-5.717-25.301-16.469-33.664l-384-298.667c-15.275-11.733-36.736-12.16-52.395 0zM682.667 896v-384c0-23.552-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667v384h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-448.469l341.333-265.472 341.333 265.472v448.469c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM426.667 896v-341.333h170.667v341.333z"
          ></path>
        </svg>
        <span @click="r_toHome" class="left-canvas-text">{{ text }}</span>
      </div>
      <div class="left-canvas-messenger1">
        <div class="left-canvas-profile1">
          <div class="left-canvas-container2"></div>
        </div>
        <svg viewBox="0 0 1024 1024" class="left-canvas-icon2">
          <path
            d="M642 250q14-14 14-36t-14-38l-68-68 46-46 68 68q34 38 34 84 0 44-34 82l-154 154-44-46zM728 506q38-34 82-34 46 0 84 34l68 70-44 44-70-68q-16-16-38-16-20 0-36 16l-68 68-46-46zM430 294q14-14 14-38t-14-38l-26-24 46-46 24 24q34 38 34 84 0 44-34 82l-24 26-46-46zM620 534l-46-44 240-240q38-34 82-34 46 0 84 34l24 26-44 46-26-26q-16-16-38-16t-38 16zM86 938l212-596 384 384z"
          ></path>
        </svg>
        <span @click="r_toParty" class="left-canvas-text01">{{ text1 }}</span>
      </div>
      <div class="left-canvas-messenger2">
        <div class="left-canvas-profile2">
          <div class="left-canvas-container3"></div>
        </div>
        <svg viewBox="0 0 1024 1024" class="left-canvas-icon4">
          <path
            d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"
          ></path>
        </svg>
        <span @click="r_toMarket" class="left-canvas-text02">{{ text2 }}</span>
      </div>
      <div class="left-canvas-messenger2">
        <div class="left-canvas-profile2">
          <div class="left-canvas-container3"></div>
        </div>
      <svg viewBox="0 0 1097.142857142857 1024" class="left-canvas-icon6">
          <path
            d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
          ></path>
        </svg>
        <span @click="r_toMessages" class="left-canvas-text02">{{ text3 }}</span>
      </div>
    </div>
    <div class="left-canvas-container5">
    <h3 class="left-canvas-text06">
      <span>Friends</span>
      <br />
    </h3>
    <app-messenger1 rootClassName="messenger1-root-class-name"></app-messenger1>
    <div class="left-canvas-messenger4">
      <div class="left-canvas-profile4">
        <div class="left-canvas-container6">
          <!-- Loop through friends and display usernames as clickable links -->
          <div v-for="friend in friends" :key="friend.id">
            <a @click="visitUserProfile(friend.id)" class="username-link">{{ friend.username }}</a>
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
    text: {
      type: String,
      default: 'Home',
    },
    rootClassName: String,
    text2: {
      type: String,
      default: 'Market Place',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1: {
      type: String,
      default: 'Parties',
    },
    text3: {
      type: String,
      default: 'Messages',
    }
  },
  created(){
    this.fetchFriends();
  },

  data() {
    return{
      friends : []
    }
  },
  computed: {
    ...mapState(['userId', 'accessToken', 'name', 'lastname']),
  },  

  methods:{
    visitUserProfile(userid) {
      // Navigate to the user's profile page using the userid
      this.$router.push({name: 'UserProfile', params: {other_userid: userid}});
    },
    async fetchFriends(){
      try{
        const response = await axios.get(`http://localhost:3001/all-friends/${this.userId}`);
        this.friends = response.data.map(user => ({
          id: user.id,
          username: user.username,
        }));
      }catch(error){

      }
    },
    r_toHome(){
      if(this.$route.path != '/home'){
        this.$router.push('/home');
      }
    },
    r_toMarket(){
      if(this.$route.path != '/marketplace'){
        this.$router.push('/marketplace');
      }
    },
    r_toParty(){
      if(this.$route.path != '/party'){
        this.$router.push('/party');
      }
    },
    r_toMessages(){
      if(this.$route.path != '/messages'){
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
.left-canvas-icon {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
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
.left-canvas-icon2 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
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
.left-canvas-icon4 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
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
.left-canvas-profile3 {
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
.left-canvas-icon6 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.left-canvas-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.left-canvas-text06 {
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  margin-left: var(--dl-space-space-oneandhalfunits);
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
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
}
</style>
