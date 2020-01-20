<template>
  <header class="bg-primary">
    <div class="container">
      <div class="flex flex-col md:flex-row items-center pt-10 lg:py-20 relative">
        <div class="flex-1 md:mb-20 xl:mb-10">
          <a :href="logoUrl" class="block mb-8 w-12 h-12 md:w-32 md:h-32" target="_blank">
            <picture>
              <source :srcset="require('@/assets/images/logo-frogogo-b-w.svg')" media="(min-width: 768px)">
              <img :src="require('@/assets/images/logo-frogogo-header.svg')" class="w-full">
            </picture>
          </a>
          <h1 class="font-bold text-white text-xl md:text-3xl leading-snug md:max-w-lg mb-8">
            Покупайте на frogogo.ru и оплачивайте до 90% стоимости бонусными рублями.
          </h1>
          <a href="#details"
             class="smooth-scroll hidden lg:inline bg-white text-primary font-bold px-10 py-3 rounded uppercase">
            Узнать больше
          </a>
        </div>
        <div class="md:w-1/2 md:absolute md:bottom-0 md:right-0">
          <img :src="require('@/assets/images/ima-header.png')">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      logoUrl: 'https://frogogo.ru'
    }
  }
}
</script>

<style scoped lang="css">
</style>
