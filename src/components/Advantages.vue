<template>
  <div id="details" class="container">
    <h2 class="text-2xl md:text-4xl font-semibold mb-10">{{ title }}</h2>

    <div id="advantages">
      <div v-for="advantage in advantages" class="flex md:items-center advantage">
        <img :src="advantage.imageSrc" class="w-20 h-20 md:w-40 md:h-40 mr-5 md:mr-12">
        <div>
          <p class="font-semibold md:text-2xl mb-3">{{ advantage.title }}</p>
          <p class="text-grey-800 text-sm md:text-base leading-normal">{{ advantage.description }}</p>
        </div>
      </div>
    </div>

    <div class="text-center my-16">
      <a v-bind:href="`https://frogogo.ru/users/sign_up?promo_code=${promocode}${utmParams}`"
         class="bg-primary text-white hover:bg-secondary font-bold px-10 py-3 rounded uppercase">
         Зарегистрироваться
       </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
  components: {},
  data() {
    return {
      title: 'frogogo – это клуб выгодных покупок со 100% кэшбэком на бонусный счёт',
      advantages: [
        {
          imageSrc: require('@/assets/images/ima-buysite.png'),
          title: 'Выбирайте из более 40 коллекций товаров от известных брендов',
          description: 'Посуда, электроника, текстиль и даже инструменты – на frogogo большой выбор качественных товаров для каждого.'
        },
        {
          imageSrc: require('@/assets/images/ima-lowprice.png'),
          title: 'Покупайте по лучшей цене',
          description: 'Лучшей – значит самой низкой. Найдёте такой же товар дешевле - мы вернём вам разницу в цене.'
        },
        {
          imageSrc: require('@/assets/images/ima-paybonuses.png'),
          title: 'Платите за товары бонусными рублями',
          description: 'Часть стоимости любого товара на frogogo можно оплатить бонусными рублями.'
        },
        {
          imageSrc: require('@/assets/images/ima-morebonus.png'),
          title: 'Больше покупок — больше бонусных рублей',
          description: 'Сумма любой покупки на frogogo вернётся на ваш бонусный счёт. Участвуйте в акциях наших партнёров и сканируйте чеки, чтобы получить ещё больше бонусных рублей.'
        }
      ],
      promocode: 'BONUS',
      utmParams: ''
    }
  },
  mounted() {
    if (!localStorage.getItem('utmParams')) {
      this.saveUtmParams()
    }

    this.setUtmParamsToRegistrationLink()
  },
  methods: {
    saveUtmParams() {
      const urlParams = new URLSearchParams(window.location.search)
      const keyword = 'utm_'
      let utmParams = {}

      for (const [key, value] of urlParams.entries()) {
        if (key.includes(keyword)) {
          utmParams[key] = value
        }
      }

      if (!this.isEmptyObject(utmParams)) {
        localStorage.setItem('utmParams', JSON.stringify(utmParams))
      }
    },
    setUtmParamsToRegistrationLink() {
      const utmParams = JSON.parse(localStorage.getItem('utmParams'))

      if (!utmParams) return

      for (const [key, value] of Object.entries(utmParams)) {
        this.utmParams +=`?${key}=${value}`
      }
    },
    isEmptyObject(object) {
      return Object.keys(object).length === 0
    }
  }
}
</script>

<style scoped lang="css">
  #advantages .advantage:not(:last-child) {
    @apply pb-5 mb-5 border-b;
  }
</style>
