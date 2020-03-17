export default {
  methods: {
    getParamsFromUrl() {
      const urlParams = new URLSearchParams(window.location.search)

      if (Array.from(urlParams).length < 0) return

      let index = 0, params = '', symbol

      for (const [key, value] of urlParams.entries()) {
        index ==  0 ? symbol = '?' : symbol = '&'
        params +=`${symbol}${key}=${value}`
        index++
      }

      return params
    }
  }
};
