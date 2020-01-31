<template>
  <div class="text-center my-16">
    <a v-bind:href="`https://frogogo.ru/users/sign_up${params}`"
       :data-user-action="this.userAction"
       @click="setAnalyticsEvent"
       class="bg-primary text-white hover:bg-secondary font-bold px-10 py-3 rounded uppercase">
       Зарегистрироваться
     </a>
  </div>
</template>

<script>
export default {
  name: 'RegistrationButton',
  components: {},
  props: {
    userAction: String
  },
  data() {
    return {
      promocode: 'BONUS',
      params: '',
    }
  },
  created() {
    this.setUrlParamsToRegistrationButtonUrl()
  },
  methods: {
    setUrlParamsToRegistrationButtonUrl() {
      // Get params from window location URL and set it to registration URL
      const urlParams = new URLSearchParams(window.location.search)

      if (Array.from(urlParams).length < 0) return

      let index = 0, symbol

      for (const [key, value] of urlParams.entries()) {
        index ==  0 ? symbol = '?' : symbol = '&'
        this.params +=`${symbol}${key}=${value}`
        index++
      }
    },
    setAnalyticsEvent(event) {
      const analyticsEvents = {
        promoPageRegisterUp: {
          eventName: 'RegisterFromPromoUp',
          category: 'PromoRegistration',
          action: 'RegisterUp',
          label: window.location.href
        },
        promoPageRegisterDown: {
          eventName: 'RegisterFromPromoDown',
          category: 'PromoRegistration',
          action: 'RegisterDown',
          label: window.location.href
        }
      }


      const userAction = event.target.dataset.userAction

      Object.entries(analyticsEvents).map(([eventKey, eventValue]) => {
        if (eventKey === userAction) {
          window.dataLayer.push({
            event: eventValue.eventName,
            eventCategory: eventValue.category,
            eventAction: eventValue.action,
            eventLabel: eventValue.label
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="css">
</style>
