<template>
  <div class="create-party-container">
    <app-header rootClassName="header-root-class-name3"></app-header>
    <div class="create-party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name4"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name4"></right-canvas>
      <div class="create-party-container1">
        <div class="create-party-container2"><h1>Create a Party</h1></div>
        <form class="create-party-form" @submit.prevent="submitForm">
          <input type="text" v-model="partyName" placeholder="Name Party" class="create-party-textinput input" />
          <input type="text" v-model="occasion" placeholder="occasion" class="create-party-textinput1 input" />
          <input type="date" v-model="date" placeholder="date" class="create-party-textinput2 input" />
          <textarea placeholder="Description" class="create-party-textarea textarea"></textarea>
          <div v-for="(member, index) in members" :key="index">
            <input type="text" v-model="member.identifier" :placeholder="member.type === 'email' ? 'Friend\'s Email' : 'Friend\'s Username'" class="create-party-textinput input" />
            <button type="button" @click="removeMember(index)" class="button">Remove</button>
          </div>
          <div>
         <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" />
          <button type="button" @click="openFileInput">Select Image</button>
        </div>
          <select v-model="inputType" class="input-type-select">
            <option value="email">Email</option>
            <option value="username">Username</option>
          </select>
          <button type="button" @click="addMember" class="button">Add Friend</button>
          <button type="submit" class="button">Plan a Party</button>
        </form>
        <div>
        <img
            alt="image"
            :src="profileImageData"
            class="create-party-image"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getCurrentUserId, userIsLoggedIn } from '@/auth/auth';
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import { mapState } from 'vuex';

export default {
  name: 'CreateParty',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
  },
  computed: {
    ...mapState(['userId', 'accessToken', 'name']),
  },
  data() {
    return {
      partyName: "",
      occasion: "",
      date: null,
      inputType: 'email', // Default input type
      members: [{ identifier: "", type: 'email' }], // Default member type
      profileImageData : ''
    };
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click(); // Trigger the file input click event
    },
    async handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      if (!file) return; // No file selected
      const reader = new FileReader();
      reader.onload = async () => {
      // Convert the selected file to a Blob object
        this.profileImageData= new Blob([file], { type: "image/jpeg" });
        
      };
      // Set the profileImageData property to the Blob object
      reader.readAsArrayBuffer(file);
    },
    async submitForm() { 
      try {
        if (!this.accessToken) {
          this.$router.push('/login');
          return;
        }

        // Create form data
        const formData = new FormData();
        formData.append('userId', this.userId);
        formData.append('occasion', this.occasion);
        formData.append('date', this.date);
        formData.append('image', this.profileImageData); // Append the Blob

        // Append member data
        this.members.forEach((member, index) => {
          formData.append(`members[${index}][type]`, member.type);
          formData.append(`members[${index}][identifier]`, member.identifier);
        });

        // Send the form data to the backend
        const response = await axios.post('http://localhost:3001/add-party', formData, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'multipart/form-data', // Set content type as multipart/form-data
          },
        });

        console.log('Party added successfully:', response.data);
        //this.$emit('party-added', response.data);
      } catch (error) {
        console.error('Error adding party:', error.message);
        // Handle error
      }

      // Clear the form fields after submission
      this.partyName = "";
      this.occasion = "";
      this.date = null;
      this.members = [{ identifier: "", type: this.inputType }];
    },
    addMember() {
      this.members.push({ identifier: "", type: this.inputType });
    },
    removeMember(index) {
      this.members.splice(index, 1);
    },

  },
};
</script>

<style scoped>
.create-party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.create-party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.create-party-container1 {
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
.create-party-container2 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 98px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.create-party-form {
  left: 0px;
  right: 0px;
  width: 98%;
  bottom: 56px;
  height: 378px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.create-party-textinput {
  width: 80%;
}
.create-party-textinput1 {
  width: 80%;
}
.create-party-textinput2 {
  width: 80%;
}
.create-party-textarea {
  width: 80%;
}
.create-party-image {
  top: 102px;
  left: 0px;
  right: 0px;
  width: 80%;
  height: 352px;
  margin: auto;
  position: absolute;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .create-party-main-canvas {
    width: 100%;
  }
  .create-party-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .create-party-image {
    width: 684px;
    height: 355px;
  }
}
</style>
