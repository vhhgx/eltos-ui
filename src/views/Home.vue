<template>
  <div class="page-height flex column">
    <PageHead title="Eltos UI" intro="一个美观的css组件库"></PageHead>
    <div class="main-box">
      <elt-input title="用户名" holder="请输入用户名"></elt-input>
      <elt-button @buttonClick="text()"></elt-button>

      <div style="overflow-y: auto; overflow-x: scorll; width: calc( 100vw - 32px )" class="flex">
        <div v-for="item in 10">
          <div style="height: 100px; width: 50px; margin: 0 6px; background-color: #6cf; border-radius: 50px;">{{item}}</div>
        </div>
      </div>

      
    </div>
    
  </div>
</template>

<script>
import PageHead from '@/pages/PageHead'
import Navigation from '@/pages/Navigation'

import EltInput from '@/eltos/elt-input'
import EltButton from '@/eltos/elt-button'
import EltRadio from '@/eltos/elt-radio'

export default {
  components: {
    PageHead, Navigation, EltInput, EltButton,
    EltRadio
  },
  methods: {
    text() {
      console.log('aa')
    }
  },
  mounted() { },
  data() { return { } },
}
</script>

<style>
.main-box { margin-top: var(--padding); height: calc( 100vh - 16px - 152px ); overflow-y: auto; }


</style>