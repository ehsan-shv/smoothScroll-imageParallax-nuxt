import Scrollbar from 'smooth-scrollbar'

export default {
  mounted () {
    this.setSmoothScroll()
  },
  methods: {
    setSmoothScroll () {
      const scrollbar = Scrollbar.init(document.querySelector('.smoothLayer'), {
        alwaysShowTracks: true,
        continuousScrolling: true,
        renderByPixels: true,
        damping: 0.1,
        thumbMinSize: 20
      })

      this.$ScrollTrigger.scrollerProxy('.smoothLayer', {
        scrollTop (value) {
          if (arguments.length) {
            scrollbar.scrollTop = value
          }
          return scrollbar.scrollTop
        }
      })
      scrollbar.addListener(this.$ScrollTrigger.update)
    }

  }
}
