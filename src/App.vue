<template>
  <div id="app">
    <Header/>
    <Items/>
    <Advantages/>
    <RegistrationButton userAction="promoPageRegisterUp" />
    <Steps/>
    <Promotions/>
    <RegistrationButton userAction="promoPageRegisterDown"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Items from './components/Items.vue'
import Advantages from './components/Advantages.vue'
import RegistrationButton from './components/RegistrationButton.vue'
import Steps from './components/Steps.vue'
import Promotions from './components/Promotions.vue'

export default {
  name: 'app',
  components: {
    Header, Items, Advantages, RegistrationButton, Steps, Promotions
  },
  methods: {
    initializeFacebookEvents() {
      const facebookEvents = {
        register: 'Search'
      }

      window.addEventListener('click', ({ target }) => {
        const { userAction } = target.dataset
        const facebookEvent = facebookEvents[userAction]
        facebookEvent && fbq('track', facebookEvent)
      })

       fbq('track', 'ViewContent')
    },
    initializeAnalytics() {
      window.dataLayer = window.dataLayer || []

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

      const targets = document.querySelectorAll('[data-user-action]')

      targets.forEach(target => {
        const userAction = target.dataset.userAction

        Object.entries(analyticsEvents).map(([eventKey, eventValue]) => {
          if (eventKey === userAction) {
            target.addEventListener('click', () => {
              window.dataLayer.push({
                event: eventValue.eventName,
                eventCategory: eventValue.category,
                eventAction: eventValue.action,
                eventLabel: eventValue.label
              })
            })
          }
        })
      })
    }
  },
  mounted() {
    this.initializeFacebookEvents()
    this.initializeAnalytics()
  }
}
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  a {
    transition: all 0.3s ease;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
  }
</style>
