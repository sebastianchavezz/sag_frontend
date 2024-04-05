<template>
  <div class="add-user-to-party-container">
    <app-header rootClassName="header-root-class-name11"></app-header>
    <div class="add-user-to-party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name12"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name12"></right-canvas>
      <div class="add-user-to-party-container1">
        <div class="add-user-to-party-container2">
          <h1 class="add-user-to-party-text">Add &quot;User&quot; to Party</h1>
        </div>
        <div v-for="(party, index) in parties" :key="index" class="add-user-to-party-party">
          <div class="party-name">{{ party.name }}</div>
          <button type="button" class="add-user-to-party-button button" @click="addToParty(party)">
            <span>Add to Party</span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="responseMessage" class="notification">{{ responseMessage }}</div>

  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import { mapState } from 'vuex'
import axios from "axios"

export default {
  name: 'AddUserToParty',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
  },
  data(){
    return{
      parties: [],
      responseMessage: ''
    }
  },
  computed:{
    ...mapState(['userId','accessToken','name', 'lastname']),
  },
  mounted() {
    this.other_userid = this.$route.params.other_userid;
    this.fetchPartyData();
  },
  methods:{
    async fetchPartyData() {
      try {
        const response = await axios.get(`http://localhost:3001/getParty-by-user/${this.userId}`);
        this.parties = response.data;
        console.log('parties: ', this.parties);

      } catch (error) {
        console.error('Error fetching party data:', error);
      }
    },
    async addToParty(party) {
      try {
        // Implement your logic for adding user to the party here
        const data = {
          partyid : party.partyid,
          other_userid: this.other_userid,
        };
        await axios.post(`http://localhost:3001/add-user-to-party/${this.userId}`, data);
        this.responseMessage = "Player added succesfully";
        console.log('data: ',data);
      } catch (error) {
        console.error('Error adding user to party:', error);
      }
    }
  }
}
</script>

<style scoped>
.add-user-to-party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.add-user-to-party-main-canvas {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.add-user-to-party-container1 {
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
  justify-content: flex-start;
}
.add-user-to-party-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 15%;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.add-user-to-party-text {
  width: 100%;
  align-self: center;
  text-align: center;
  margin-bottom: 20px;
}
.add-user-to-party-party {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.party-name {
  font-size: 18px;
  font-weight: bold;
}
.add-user-to-party-button {
  width: 150px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.add-user-to-party-button:hover {
  background-color: #0056b3;
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
