<template>
  <div class="smoothLayer">
    <div class="container">
      <h1>Smooth Scroll & Image Parallax</h1>
      <h2>Nuxt app</h2>
      <div class="gallery">
        <figure v-for="(item, i) in gallery" :key="i" class="gallery__fig" data-parallax>
          <img class="gallery__fig__img" :src="item" alt="Smooth Scroll & Image Parallax">
        </figure>
      </div>
      <figure class="banner" data-parallax>
        <img class="banner__img" src="/smoothScroll-imageParallax-Nuxt/img-4.jpg" alt="Smooth Scroll & Image Parallax">
      </figure>
      <a href="https://github.com/ehsan-shv/smoothScroll-imageParallax-Nuxt">github</a>
    </div>
  </div>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
import parallax from '~/mixins/parallax'

export default {
  mixins: [smoothScroll, parallax],
  data () {
    return {
      gallery: ['/smoothScroll-imageParallax-Nuxt/img-1.jpg', '/smoothScroll-imageParallax-Nuxt/img-2.jpg', '/smoothScroll-imageParallax-Nuxt/img-3.jpg']
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 1200vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  margin: 0 auto;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  //

  &__fig {
    display: flex;
    width: 100%;
    margin-bottom: 120px;

    &:nth-of-type(1) {
      justify-content: flex-start;
    }

    &:nth-of-type(2) {
      justify-content: center;
    }

    &:nth-of-type(3) {
      justify-content: flex-end;
    }

    &__img {
      display: block;
      object-fit: cover;
      object-position: center;
      max-width: 100%;
      height: auto;
    }
  }
}

.banner {
  width: 100%;

  &__img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}

</style>
