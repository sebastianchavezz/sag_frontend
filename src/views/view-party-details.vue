<template>
  <div class="view-party-container">
    <app-header rootClassName="header-root-class-name4"></app-header>
    <div class="view-party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name5"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name5"></right-canvas>
      <div class="view-party-container1">
        <div class="view-party-container2">
          <h1>Party: {{ partyData.name }}</h1>
        </div>
        <form class="view-party-form">
          <input type="text" placeholder="Name Party" class="view-party-textinput input" v-model="partyData.name" />
          <input type="text" placeholder="Occasion" class="view-party-textinput1 input" v-model="partyData.occasion" />
          <input type="text" placeholder="Date" class="view-party-textinput2 input" v-model="partyData.date" />
          <textarea placeholder="Description" class="view-party-textarea textarea"
            v-model="partyData.description"></textarea>
          <div class="members-container">
            <h2>Members</h2>
            <div v-for="(member, index) in partyData.members" :key="index" class="member">
              <span>{{ member }}</span>
              <button type="button" @click="removeMember(index)" class="hover-animation">Delete</button>
            </div>
            <input type="text" placeholder="Add new member" v-model="newMember" />
            <button type="button" @click="addMember" class="hover-animation">Add Member</button>
          </div>
          <button type="button" class="button hover-animation" @click="updateParty">
            <span>
              <span>Update</span>
              <br />
            </span>
          </button>
          <button type="button" class="button hover-animation">
            <span>
              <span>View Presents</span>
              <br />
            </span>
          </button>
          <button type="button" class="button hover-animation" @click="deleteParty">
            <span>
              <span>Delete</span>
              <br />
            </span>
          </button>
          <button type="button" class="button hover-animation">
            <span>
              <span>Go To Group Chat</span>
              <br />
            </span>
          </button>
          <button type="button" class="button hover-animation" @click="openFileInput">
            <span>
              <span>Change Pic</span>
              <br />
            </span>
          </button>
          <!-- Move the image here -->
          <img alt="image" :src="imageSrc" class="view-party-image" />
          <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" style="display: none" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import axios from 'axios'
import { Buffer } from 'buffer'
import {mapState} from "vuex"

export default {
  name: 'ViewPartyDetails',
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
  },
  data() {
    return {
      partyid: null,
      partyData: {
        name: '',
        occasion: '',
        date: '',
        description: '',
        members: [],
        // Initialize image as a Blob object
        image: null
      },
      newMember: ''
    };
  },
  computed: {
    ...mapState(['userId', 'accessToken']),
    imageSrc() {
      console.log('IMAGESRC: ', this.partyData.image);
      if (this.partyData.image && Array.isArray(this.partyData.image.data)) {
        // Create a Uint8Array from the array of integers
        const uint8Array = new Uint8Array(this.partyData.image.data);

        // Create a buffer from the Uint8Array
        const buffer = Buffer.from(uint8Array);

        // Create a Blob from the buffer
        const blob = new Blob([buffer], { type: 'image/jpeg' });

        // Create an object URL from the blob
        return URL.createObjectURL(blob);
      } else {
        console.log('WE IN ELSE');
        return ''; // Return empty string if image data is not available
      }
    }
  },

  mounted() {
    this.partyid = this.$route.params.partyid;
    this.fetchPartyData();
  },
  methods: {
    async fetchPartyData() {
      try {
        const response = await axios.get(`http://localhost:3001/get-party/${this.partyid}`);
        this.partyData = {
          name: response.data.name,
          occasion: response.data.occasion,
          date: response.data.date,
          description: response.data.description,
          members: response.data.members,
          image: response.data.image
        };
        console.log('image: ', this.partyData.image);
      } catch (error) {
        console.error('Error fetching party data:', error);
      }
    },

    openFileInput() {
      this.$refs.fileInput.click();
    },
    async handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      if (!file) return; // No file selected

      // Convert the selected file to binary data (ArrayBuffer)
      const reader = new FileReader();
      reader.onload = async () => {
        const binaryData = reader.result; // Binary data (ArrayBuffer)

        // Send the binary data to the backend
        try {
          console.log('SENDING.. IMAGE');
          await this.sendImageToBackend(binaryData);
          console.log('Image uploaded successfully');
          // Optionally, update the profile image on the frontend
        } catch (error) {
          console.error('Error uploading image:', error);
          // Handle error
        }
      };
      reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
    },

    async deleteParty(){
      try{
        const data= {
          partyid : this.partyid
        }
        console.log('partyid: ',this.partyid);

        const res = await axios.delete( `http://localhost:3001/delete-party/${this.userId}`, data);
        console.log(res);
      }catch(error){
        console.error('ERROR DELETING PARTY: ', error);
      }
    },

    async sendImageToBackend(binaryData) {
      try {
        // Create a FormData object
        const formData = new FormData();

        // Create a Blob object from the binary data  
        const blob = new Blob([binaryData], { type: "image/jpeg" });

        // Append the Blob to the FormData object
        formData.append("image", blob, "image.jpg");

        // Send a POST request to your backend endpoint with the FormData
        const response = await axios.post(
          `http://localhost:3001/update-party-picture/${this.partyid}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'// Set content type as multipart/form-data
            }
          }
        );
        console.log('Image uploaded successfully');
        return response.data;
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error
        throw error;
      }
    },
    async updateParty() {
      try {
        const data = {
          name: this.partyData.name,
          occasion: this.partyData.occasion,
          date: this.partyData.date,
          description: this.partyData.description,
          partyid : this.partyid,
          users: this.partyData.members
        }
        console.log("DATA: ", data);
        const response = await axios.put(`http://localhost:3001/update-party/${this.userId}`, data);
        console.log('Party updated successfully:', response.data);
        // Optionally, you can redirect or show a success message here
      } catch (error) {
        console.error('Error updating party:', error);
        // Handle error: show error message or redirect to error page
      }
    },
    addMember() {
      if (this.newMember.trim() !== '') {
        this.partyData.members.push(this.newMember.trim());
        this.newMember = '';
      }
    },
    removeMember(index) {
      this.partyData.members.splice(index, 1);
    },
  }
}
</script>

<style scoped>
.view-party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.view-party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.view-party-container1 {
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
.view-party-container2 {
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
.view-party-form {
  left: 0px;
  right: 0px;
  width: 98%;
  bottom: 56px;
  height: auto; /* Change height to auto for flexible height */
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.view-party-textinput,
.view-party-textinput1,
.view-party-textinput2,
.view-party-textarea {
  width: 80%;
  margin-bottom: 10px; /* Add margin bottom for spacing between elements */
}
.view-party-image {
  top: 102px;
  left: 0px;
  right: 0px;
  width: 80%;
  height: auto; /* Change height to auto for flexible height */
  margin: auto;
  position: absolute;
  object-fit: cover;
}
.hover-animation:hover {
  transform: scale(1.1); /* Example hover animation: scale */
  transition: transform 0.3s ease; /* Smooth transition effect */
}
@media(max-width: 1600px) {
  .view-party-main-canvas {
    width: 100%;
  }
  .view-party-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .view-party-image {
    width: 684px;
    height: auto; /* Change height to auto for flexible height */
  }
}
</style>
