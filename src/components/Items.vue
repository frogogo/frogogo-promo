<template>
  <div class="items-carousel relative overflow-x-hidden">
    <div class="flex justify-center">
      <div v-for="image in images">
        <div class="flex items-center justify-center rounded-lg mr-4 w-24 h-32 md:w-48 md:h-64">
          <img :src="image.src" class="rounded-lg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data() {
    return {
      images: [
        {
          src: require('@/assets/images/items/lenta-item-0.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-1.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-2.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-3.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-4.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-5.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-6.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-7.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-8.png')
        },
        {
          src: require('@/assets/images/items/lenta-item-9.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="css">
  .items-carousel {
    top: -4rem;
  }
</style>
