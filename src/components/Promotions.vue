<template>
  <div class="container pt-16">
    <h2 class="text-2xl md:text-4xl font-semibold mb-12">И это ещё не всё!</h2>
    <div class="flex flex-col md:flex-row items-center mb-20">
      <div class="flex-1 mb-8 md:mb-0">
        <div v-for="promotion in promotions" class="flex items-center mb-8">
          <img :src="promotion.icon" class="w-10 h-10 mr-5">
          <p class="font-semibold text-xl leading-normal">{{ promotion.caption }}</p>
        </div>
      </div>
      <div class="flex-1 mb-8 md:mb-0">
        <img :src="require('@/assets/images/ima-goods-week.png')" class="md:w-4/5 mx-auto">
      </div>
    </div>
    <div class="mb-6 md:mb-10 text-center">
      <h3 class="text-xl md:text-3xl leading-normal mb-5 font-bold">Держите промокод {{ promocode }} на {{ bonusValue }} ₽ на вашу первую покупку</h3>
      <p class="leading-normal text-xl font-light mb-8">Активируйте его при регистрации и деньги моментально зачислятся на личный счет!</p>
      <p class="text-xs text-grey-700">Регистрируясь на сайте, вы соглашаетесь с нашими <a class="text-secondary" href="https://frogogo.ru/docs/ru/offer.pdf" target="_blank">Правилами</a> и <a class="text-secondary" href="https://frogogo.ru/docs/ru/personal-data.pdf" target="_blank">Политикой конфиденциальности</a> и соглашаетесь на информационную рассылку.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promotions',
  components: {},
  data() {
    return {
      promotions: [
        {
          icon: require('@/assets/images/icon-week.svg'),
          caption: 'Каждую неделю новые товары со скидкой до 90%'
        },
        {
          icon: require('@/assets/images/icon-rub.svg'),
          caption: 'Товары всего за 1 ₽'
        },
        {
          icon: require('@/assets/images/icon-gift.svg'),
          caption: 'Ежемесячные розыгрыши призов'
        }
      ],
      promocode: 'BONUS',
      bonusValue: '3 000'
    }
  }
}
</script>

<style scoped lang="css">
</style>
