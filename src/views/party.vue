<template>
  <div class="party-container">
    <app-header rootClassName="header-root-class-name2"></app-header>
    <div class="party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name3"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name3"></right-canvas>
      <div class="party-container1">
        <button @click="addParty" type="button" class="party-button button">Add Party</button>
        <view-party rootClassName="view-party-root-class-name" :parties="parties"></view-party>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import ViewParty from '../components/view-party'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Party',
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
    ViewParty,
  },
  data() {
    return {
      parties: []
    }
  },
  computed:{
    ...mapState(['userId','accessToken','name', 'lastname']),
  },
  mounted() {
    this.fetchPartyData();
  },
  methods:{
    addParty(){
      this.$router.push("/create-party");
    },
    async fetchPartyData() {
      // Assuming you have axios or similar HTTP client installed
      await axios.get(`http://localhost:3001/getParty-by-user/${this.userId}`)
        .then(response => {
          this.parties = response.data;
          console.log('parties: ', this.parties);
        })
        .catch(error => {
          console.error('Error fetching party data:', error);
        });
    }
  }
}
</script>

<style scoped>
.party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.party-container1 {
  top: 0px;
  flex: 1;
  left: 0px;
  right: 0px;
  width: 58%;
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.party-button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px 4px 2px; /* Added margin-top */
  cursor: pointer;
  border-radius: 5px;
}
.party-button:hover {
  background-color: #333;
}
@media(max-width: 1600px) {
  .party-main-canvas {
    width: 100%;
  }
}
</style>
