export default {
  mounted () {
    this.setParallax()
  },
  methods: {
    setParallax () {
      const items = document.querySelectorAll('[data-parallax]')

      items.forEach((elm) => {
        const tl = this.$gsap.timeline({
          scrollTrigger: {
            trigger: elm,
            scroller: '.smoothLayer',
            scrub: true,
            pin: false
          }
        })
        tl.from(elm.querySelector('img'), {
          yPercent: -20,
          xPercent: 0,
          ease: 'none'

        }).to(elm.querySelector('img'), {
          yPercent: 20,
          xPercent: 0,
          ease: 'none'
        })
      })
    }
  }
}
