<template>
  <div class="page-height flex column">
    <PageHead title="Eltos UI" intro="一个美观的css组件库"></PageHead>
    <div class="main-box">
      <EltInput title="用户名" holder="请输入用户名"></EltInput>
      <EltInput title="密码" holder="这是错误状态" :isCorrect="true" type="password"></EltInput>

      <div style="margin: 16px 0; background-color: #F1FAFF; padding: 16px; border-radius: 8px;">
        <span style="font-size: var(--info); color: #8c8c8c; ">
          <code>input</code>输入框，通过<code>isCorrect</code>属性来控制是否变红。<code>type</code>属性来控制状态，默认为<code>text</code><br><br>
          <span style="font-weight: 700">未做：</span><br><br>1. 表单验证<br>2. 右边显示图标与否<br>3. 其他类型的input样式重写<br>4. 前面是否要加固定项目。一个问题，input不会自动撑满。找不到问题出在哪儿
        </span>
      </div>


      <button class="el-button" style="background-color: #5F30E2;">普通按钮</button>
      <button class="el-button" style="background-color: #E25966;">危险按钮</button>
      <button class="el-button" style="background-color: #E6A23C;">警告按钮</button>
      <button class="el-button" style="background-color: #F9F9FB; color: #494B7D;">层级稍弱</button>
      <br><br>

      <button class="el-button" style="background-color: #5F30E2; border-radius: 20px;">普通圆角</button>
      <button class="el-button" style="border: 1px solid #E4E4EB; background-color: #ffff ; color: #000;">普通线框</button>
      

    </div>
  </div>
</template>

<script>
import PageHead from '@/pages/PageHead'
import Navigation from '@/pages/Navigation'
import EltInput from '@/eltos/elt-input'

export default {
  data() {
    return { }
  },
  mounted() { },
  components: {
    PageHead, Navigation, EltInput,
  },
  methods: { }
}
</script>

<style>
.main-box { margin-top: var(--padding); height: calc( 100vh - 16px - 152px ); overflow-y: auto; }
li { font-size: var(--info); color: #8c8c8c }
code { margin: 0 2px;}

.el-button { outline: none; border: none; height: 38px; border-radius: 8px; padding: 4px 20px; color: #ffffff; }
</style>