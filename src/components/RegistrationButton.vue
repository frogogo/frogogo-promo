<template>
  <div class="text-center my-16">
    <a v-bind:href="`https://frogogo.ru/users/sign_up?promo_code=${promocode}${specialParams}`"
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
      specialParams: ''
    }
  },
  created() {
    if (!localStorage.getItem('specialParams')) {
      this.saveSpecialParams()
    }

    this.setSpecialParamsToRegistrationUrl()
  },
  methods: {
    saveSpecialParams() {
      // Get params with special keyword from window location URL and save it to localStorage
      const urlParams = new URLSearchParams(window.location.search)
      const keyword = 'utm_'
      let specialParams = {}

      for (const [key, value] of urlParams.entries()) {
        if (key.includes(keyword)) {
          specialParams[key] = value
        }
      }

      if (!this.isEmptyObject(specialParams)) {
        localStorage.setItem('specialParams', JSON.stringify(specialParams))
      }
    },
    setSpecialParamsToRegistrationUrl() {
      // Set params to registration URL
      if (!localStorage.getItem('specialParams')) return

      const specialParams = JSON.parse(localStorage.getItem('specialParams'))

      for (const [key, value] of Object.entries(specialParams)) {
        this.specialParams +=`?${key}=${value}`
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
