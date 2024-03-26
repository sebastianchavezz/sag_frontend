<template>
  <div class="product-card1-gallery-card" v-bind:class="rootClassName">
    <img :alt="imageAlt" :src="imageSrc" class="product-card1-image" />
    <h2 class="product-card1-text">{{ title }}</h2>
    <span class="product-card1-text1">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductCard1',
  props: {
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    rootClassName: String,
    imageAlt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'Project Title',
    },
    imageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
    },
  },
}
</script>

<style scoped>
.product-card1-gallery-card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.product-card1-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card1-text {
  align-self: flex-start;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.product-card1-text1 {
  color: var(--dl-color-gray-500);
  align-self: flex-start;
}






.product-card1-root-class-name6 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name7 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name8 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name9 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name10 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name11 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name12 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name13 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name14 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name15 {
  height: 100%;
  align-self: center;
}
.product-card1-root-class-name16 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name17 {
  width: 30%;
  margin: 16px;
}
.product-card1-root-class-name18 {
  width: 30%;
  margin: 16px;
}
@media(max-width: 767px) {
  .product-card1-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .product-card1-image {
    height: 10rem;
  }
}
</style>
