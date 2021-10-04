<template>
  <div class="page-height flex column">
    <PageHead title="Eltos UI" intro="一个美观的css组件库"></PageHead>
    <div class="main-box">
      <elt-input title="用户名" holder="请输入用户名"></elt-input>

      <div style="margin: 16px 0; background-color: #F1FAFF; padding: 16px; border-radius: 8px;">
        <span style="font-size: var(--info); color: #8c8c8c; ">
          <code>input</code>输入框，通过<code>isCorrect</code>属性来控制是否变红。<code>type</code>属性来控制状态，默认为<code>text</code><br><br>
          <span style="font-weight: 700">未做：</span><br><br>1. 表单验证<br>2. 右边显示图标与否<br>3. 其他类型的input样式重写<br>4. 前面是否要加固定项目。一个问题，input不会自动撑满。找不到问题出在哪儿
        </span>
      </div>

      <elt-button type="warning" @click="text()"></elt-button>

    </div>
  </div>
</template>

<script>
import PageHead from '@/pages/PageHead'
import Navigation from '@/pages/Navigation'
import EltInput from '@/eltos/elt-input'
import EltButton from '@/eltos/elt-button'

export default {
  data() {
    return { }
  },
  mounted() { },
  components: {
    PageHead, Navigation, EltInput, EltButton
  },
  methods: {
    text() {
      console.log('aa')
    }
  }
}
</script>

<style>
.main-box { margin-top: var(--padding); height: calc( 100vh - 16px - 152px ); overflow-y: auto; }
li { font-size: var(--info); color: #8c8c8c }
code { margin: 0 2px;}


</style>