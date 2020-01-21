<template>
  <div class="bg-grey-100">
    <div class="container py-16">
      <h2 class="text-2xl md:text-4xl font-semibold mb-12 md:text-center">Сделайте первый заказ прямо сейчас</h2>
      <div class="md:hidden">
        <div class="flex flex-col md:flex-row mb-6 md:mb-10">
          <div class="flex flex-1 md:items-center mb-6 md:mb-0">
            <span class="w-10 h-10 flex flex-none items-center justify-center text-3xl font-bold bg-primary text-white rounded-full mr-5">1</span>
            <div>
              <p class="font-semibold mb-2">Зарегистрируйтесь на frogogo.ru</p>
              <p class="text-gray-800">И получите приветственный бонус – 500 ₽</p>
            </div>
          </div>
          <div class="flex flex-1 md:items-center">
            <span class="w-10 h-10 flex flex-none items-center justify-center text-3xl font-bold bg-primary text-white rounded-full mr-5">2</span>
            <div>
              <p class="font-semibold mb-2">Пополните бонусный счёт</p>
              <p class="text-gray-800">Активируйте промокод {{ promocode }} и на ваш бонусный счёт поступит {{ bonusValue }} ₽, которые сразу же можно потратить</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row mb-6 md:mb-10">
          <div class="flex flex-1 md:items-center mb-6 md:mb-0">
            <span class="w-10 h-10 flex flex-none items-center justify-center text-3xl font-bold bg-primary text-white rounded-full mr-5">3</span>
            <div>
              <p class="font-semibold mb-2">Покупайте выгодно</p>
              <p class="text-gray-800">Добавьте товар в корзину и выберите, какую часть его стоимости вы хотите оплатить бонусными рублями</p>
            </div>
          </div>
          <div class="flex flex-1 md:items-center">
            <span class="w-10 h-10 flex flex-none items-center justify-center text-3xl font-bold bg-primary text-white rounded-full mr-5">4</span>
            <div>
              <p class="font-semibold mb-2">Ловите кэшбэк</p>
              <p class="text-gray-800">Вся сумма вашего заказа вернётся на бонусный счёт. Потратьте эти деньги на новые покупки 😉</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:flex">
        <div class="flex-1 text-right">
          <div>
            <p class="font-semibold md:text-2xl mb-2">Зарегистрируйтесь на frogogo.ru</p>
            <p class="text-gray-800">И получите приветственный бонус – 500 ₽</p>
          </div>

          <div class="mt-20 xl:mt-32">
            <p class="font-semibold md:text-2xl mb-2">Покупайте выгодно</p>
            <p class="text-gray-800">Добавьте товар в корзину и выберите, какую часть его стоимости вы хотите оплатить бонусными рублями</p>
          </div>
        </div>

        <!-- Steps svg -->
        <svg class="mr-10" xmlns="http://www.w3.org/2000/svg" width="249" height="350" viewBox="0 0 249 350">
          <g fill="none" fill-rule="evenodd">
            <path d="M78.317 23c-.174 23.48 18.72 42.656 42.2 42.83l.315.001h59.239c24.261 0 43.929 19.668 43.929 43.93 0 24.261-19.668 43.93-43.93 43.93h-73.22c-23.806 0-43.105 19.298-43.105 43.105s19.3 43.106 43.106 43.106h42.445c24.11 0 43.655 19.545 43.655 43.655s-19.545" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6" stroke="#4AD9BD"></path>
            <g transform="translate(53)">
              <circle cx="25" cy="25" r="25" fill="#4AD9BD"></circle>
              <text fill="#FFF" font-family="OpenSans-ExtraBold, Open Sans" font-size="33.333" font-weight="600">
                  <tspan x="15.234" y="36">1</tspan>
              </text>
            </g>
            <g transform="translate(199 86)">
              <circle cx="25" cy="25" r="25" fill="#4AD9BD"></circle>
              <text fill="#FFF" font-family="OpenSans-ExtraBold, Open Sans" font-size="33.333" font-weight="600">
                  <tspan x="15.234" y="36">2</tspan>
              </text>
            </g>
            <g transform="translate(37 170)">
              <circle cx="25" cy="25" r="25" fill="#4AD9BD"></circle>
              <text fill="#FFF" font-family="OpenSans-ExtraBold, Open Sans" font-size="33.333" font-weight="600">
                  <tspan x="15.234" y="36">3</tspan>
              </text>
            </g>
            <g transform="translate(170 260)">
              <circle cx="25" cy="25" r="25" fill="#4AD9BD"></circle>
              <text fill="#FFF" font-family="OpenSans-ExtraBold, Open Sans" font-size="33.333" font-weight="600">
                  <tspan x="15.234" y="36">4</tspan>
              </text>
            </g>

            <g transform="translate(135 430)">
              <circle cx="25" cy="25" r="25" fill="#4AD9BD"></circle>
              <text fill="#FFF" font-family="OpenSans-ExtraBold, Open Sans" font-size="33.333" font-weight="600">
                  <tspan x="15.234" y="36">6</tspan>
              </text>
            </g>
          </g>
        </svg>

        <div class="flex-1 mt-24">
          <div>
            <p class="font-semibold md:text-2xl mb-2">Пополните бонусный счёт</p>
            <p class="text-gray-800">Активируйте промокод {{ promocode }} и на ваш бонусный счёт поступит {{ bonusValue }} ₽, которые сразу же можно потратить</p>
          </div>

          <div class="mt-6 lg:mt-20">
            <p class="font-semibold md:text-2xl mb-2">Ловите кэшбэк</p>
            <p class="text-gray-800">Вся сумма вашего заказа вернётся на бонусный счёт. Потратьте эти деньги на новые покупки 😉</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  components: {},
  data() {
    return {
      promocode: 'BONUS',
      bonusValue: '3 000'
    }
  }
}
</script>

<style scoped lang="css">
</style>
