<template>
  <div class="profile-container">
    <app-header rootClassName="header-root-class-name9"></app-header>
    <div class="profile-main-div">
      <div class="profile-profile">
        <div class="profile-container1">
          <h1 class="profile-text">{{ this.name }} Profile</h1>
        </div>
        <div class="profile-container2">
          <button type="button" class="button">Add Friend</button>
          <button type="button" class="button">Message</button>
          <button type="button" class="button">Add To Party</button>
        </div>
        <div class="profile-product-placement">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            class="profile-image"
          />
        </div>
        <div class="profile-container3">
          <button type="button" class="button">Change Pic</button>
        </div>
        <div class="profile-container4">
          <h1 class="profile-text1">
            <span>Whislist</span>
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
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ProductCard1 from '../components/product-card1'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import {mapState} from 'vuex'

export default {
  name: 'Profile',
  props: {},
  components: {
    AppHeader,
    ProductCard1,
    LeftCanvas,
    RightCanvas,
  },
  computed:{
    ...mapState(['userId','accessToken','name', 'lastname']),
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
.profile-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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
@media(max-width: 1600px) {
  .profile-main-div {
    width: 1600px;
    height: 100%;
  }
  .profile-product-placement {
    height: 100%;
    margin: var(--dl-space-space-halfunit);
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
    justify-content: flex-start;
  }
  .profile-image {
    width: 684px;
    height: 355px;
  }
  .profile-row1 {
    height: auto;
  }
}
@media(max-width: 1200px) {
  .profile-main-div {
    width: 100%;
  }
}
</style>
