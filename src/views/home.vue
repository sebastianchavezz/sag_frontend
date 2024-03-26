<template>
  <div class="home-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <div class="home-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name14"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name14"></right-canvas>
      <div class="home-container1">
        <!-- Display user data -->
        <div class="home-infinite-scroll">
          <div class="home-post-canvas">
            <div class="home-what-is-on-your-mind">
              <div class="home-pic">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  class="home-image"
                />
              </div>
              <input
                type="text"
                placeholder="Whatsuup bro, say something"
                class="home-input input"
              />
            </div>
            <div class="home-container2">
              <button type="button" class="button">
                <span>
                  <span>Add Picture</span>
                  <br />
                </span>
              </button>
              <button type="button" class="button">
                <span>
                  <span>Post</span>
                  <br />
                </span>
              </button>
            </div>
          </div>
          <div class="home-post">
            <profilepic-and-name-time
              rootClassName="profilepic-and-name-time-root-class-name2"
            ></profilepic-and-name-time>
            <div class="home-photocommentpost">
              <div class="home-comment">
                <span class="home-text06">
                  Lorem ipsum dolor sit amet. Quo doloribus aspernatur et
                  repellendus vitae et commodi nihil
                  <span v-html="raw0xum"></span>
                </span>
              </div>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                class="home-image1"
              />
              <div class="home-container3">
                <button type="button" class="button">Like</button>
                <button type="button" class="button">
                  <span>
                    <span>Go to post</span>
                    <br />
                  </span>
                </button>
              </div>
              <div class="home-comments">
                <span class="home-text10">Sebastian Chavez</span>
                <div class="home-container4"></div>
                <span class="home-text11">
                  Lorem ipsum dolor sit amet. Quo doloribus aspernatur et
                  repellendus vitae et commodi nihil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import ProfilepicAndNameTime from '../components/profilepic-and-name-time'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
    ProfilepicAndNameTime,
  },
  computed:{
    ...mapState(['userId', 'accessToken', 'name']),
  },

  data() {
    return {
      user: null,
      raw0xum: ' ',
    }
  },
  async mounted() {
    console.log("userid: ", this.userId);
    console.log("token: ", this.accessToken);
    console.log("name: ",this.name );
    if(this.userId && this.accessToken){
      try {
        // Fetch user data using stored userId and token for verification
        console.log("id inside try", this.userId);
        //TODO DELETE THIS
        const response = await axios.get(`http://localhost:3001/get-user/${this.userId}`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        });
        console.log('response: ',response.data)

        this.user = response.data.naam; // Assuming the response contains user data
        //store the email and lastname in store vuex
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    }
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-end;
  justify-content: center;
}
.home-container1 {
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
.home-infinite-scroll {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 543px;
  height: 815px;
  margin: auto;
  display: flex;
  z-index: 100;
  position: absolute;
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.home-post-canvas {
  flex: 0 0 auto;
  width: 95%;
  height: 25%;
  display: flex;
  padding: var(--dl-space-space-unit);
  box-shadow: 5px 5px 20px 0px #635d5d;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
}
.home-what-is-on-your-mind {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-pic {
  flex: 0 0 auto;
  width: 20%;
  height: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
}
.home-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin: var(--dl-space-space-twounits);
  padding: 0px;
  align-self: center;
  object-fit: cover;
  border-radius: 50px;
}
.home-input {
  width: 70%;
  height: 60%;
  margin: var(--dl-space-space-unit);
  position: relative;
  align-self: flex-end;
  border-radius: 50px;
}
.home-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-post {
  width: 95%;
  height: 70%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  box-shadow: 5px 5px 20px 0px #635d5d;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: center;
}
.home-photocommentpost {
  flex: 1;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  height: 86%;
  margin: 0px;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.home-comment {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text06 {
  margin: var(--dl-space-space-halfunit);
}
.home-image1 {
  width: 100%;
  height: 60%;
  object-fit: cover;
}
.home-container3 {
  width: 100%;
  height: var(--dl-size-size-small);
  display: flex;
  align-self: center;
  align-items: flex-start;
}
.home-comments {
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 95%;
  bottom: 0px;
  height: 25%;
  margin: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text10 {
  top: 0px;
  margin: var(--dl-space-space-unit);
  position: absolute;
  align-self: flex-start;
}
.home-container4 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.home-text11 {
  left: 0px;
  bottom: 0px;
  margin: var(--dl-space-space-unit);
  padding: var(--dl-space-space-unit);
  position: absolute;
  font-size: 14px;
}
@media(max-width: 1600px) {
  .home-main-canvas {
    width: 100%;
  }
  .home-infinite-scroll {
    left: 0px;
    right: 0px;
    width: 537px;
    margin: auto;
  }
}
</style>
