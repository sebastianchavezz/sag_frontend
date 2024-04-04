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
          <input type="text" v-model="description" placeholder="description" class="create-party-textinput2 input" />
          <div v-for="(member, index) in members" :key="index">
            <input type="text" v-model="member.identifier" :placeholder="member.type === 'email' ? 'Friend\'s Email' : 'Friend\'s Username'" class="create-party-textinput input" @input="filterFriends(member)" />
            <button type="button" @click="removeMember(index)" class="button">Remove</button>
            <!-- Display filtered friends -->
            <div v-if="member.filteredFriends.length > 0">
              <ul>
                <li v-for="(friend, idx) in member.filteredFriends" :key="idx" @click="selectFriend(friend, index)">
                  {{ friend.username }}
                </li>
              </ul>
            </div>
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
          <img alt="image" :src="profileImageData" class="create-party-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import AppHeader from '../components/header';
import LeftCanvas from '../components/left-canvas';
import RightCanvas from '../components/right-canvas';

export default {
  name: 'CreateParty',
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
  },
  data() {
    return {
      partyName: '',
      occasion: '',
      date: null,
      description: '',
      inputType: 'username', // Default input type
      members: [{ identifier: '', type: 'username', filteredFriends: [] }], // Default member type with filtered friends array
      profileImageData: '',
      friends: [], // Array to store user's friends
    };
  },
  computed: {
    ...mapState(['userId', 'accessToken']),
  },
  created() {
    this.fetchFriends(); // Fetch user's friends when the component is created
  },
  methods: {
    async fetchFriends() {
      try {
        const response = await axios.get(`http://localhost:3001/all-friends/${this.userId}`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        });
        this.friends = response.data; // Store the user's friends
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    },
    openFileInput() {
      this.$refs.fileInput.click(); // Trigger the file input click event
    },
    handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      if (!file) return; // No file selected
      const reader = new FileReader();
      reader.onload = () => {
        // Convert the selected file to a Blob object
        this.profileImageData = new Blob([file], { type: 'image/jpeg' });
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
        formData.append('name', this.partyName);
        formData.append('occasion', this.occasion);
        formData.append('date', this.date);
        formData.append('description', this.description);
        formData.append('creator', this.userId);
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
      } catch (error) {
        console.error('Error adding party:', error.message);
      }

      // Clear the form fields after submission
      this.partyName = '';
      this.occasion = '';
      this.partyName = '';
      this.date = null;
      this.members = [{ identifier: '', type: this.inputType, filteredFriends: [] }];
    },
    addMember() {
      this.members.push({ identifier: '', type: this.inputType, filteredFriends: [] });
    },
    removeMember(index) {
      this.members.splice(index, 1);
    },
    filterFriends(member) {
      const searchTerm = member.identifier.toLowerCase();
      member.filteredFriends = this.friends.filter(friend =>
        friend.username.toLowerCase().includes(searchTerm)
      );
    },
    selectFriend(friend, memberIndex) {
      this.members[memberIndex].identifier = friend.username;
      this.members[memberIndex].filteredFriends = []; // Clear filtered friends after selection
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
  height: auto;
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
  height: auto;
  margin: auto;
  position: absolute;
  object-fit: cover;
}
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.button:hover {
  background-color: #0056b3;
}
</style>
