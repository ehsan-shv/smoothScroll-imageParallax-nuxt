import Vue from 'vue'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

Object.defineProperty(Vue.prototype, '$gsap', { value: gsap })
Object.defineProperty(Vue.prototype, '$ScrollTrigger', { value: ScrollTrigger })
