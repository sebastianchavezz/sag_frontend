<template>
  <div class="product-card-gallery-card" v-bind:class="rootClassName">
    <img :alt="imageAlt" :src="imageSrc" class="product-card-image" />
    <h2 class="product-card-text">{{ title }}</h2>
    <span class="product-card-text1">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
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
.product-card-gallery-card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.product-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card-text {
  align-self: flex-start;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.product-card-text1 {
  color: var(--dl-color-gray-500);
  align-self: flex-start;
}






.product-card-root-class-name6 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name7 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name8 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name9 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name10 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name11 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name12 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name13 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name14 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name15 {
  height: 100%;
  align-self: center;
}
.product-card-root-class-name16 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name17 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
.product-card-root-class-name18 {
  width: 30%;
  margin: var(--dl-space-space-unit);
}
@media(max-width: 767px) {
  .product-card-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .product-card-image {
    height: 10rem;
  }
}
</style>
