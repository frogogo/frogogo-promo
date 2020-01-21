<template>
  <div class="text-center my-16">
    <a v-bind:href="`https://frogogo.ru/users/sign_up?promo_code=${promocode}${utmParams}`"
       class="bg-primary text-white hover:bg-secondary font-bold px-10 py-3 rounded uppercase">
       Зарегистрироваться
     </a>
  </div>
</template>

<script>
export default {
  name: 'RegistrationButton',
  components: {},
  data() {
    return {
      promocode: 'BONUS',
      utmParams: ''
    }
  },
  mounted() {
    if (!localStorage.getItem('utmParams')) {
      this.saveUtmParams()
    }

    this.setUtmParamsToRegistrationUrl()
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
    setUtmParamsToRegistrationUrl() {
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
</style>
