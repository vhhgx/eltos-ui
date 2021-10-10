<template>
  <div style="margin: 24px 0;">
    <div class="title">Item List</div>
    <div v-for="(item, index) in ItemList">
      <router-link :to="item.link">
        <div class="item-back">
          <div class="flex main-between">
            <div class="din itemTitle">{{item.title}}</div>
            <div class="din id">{{index + 1}}</div>
          </div>
          <div class="din author">{{item.author}}</div>
        </div>
      </router-link>
    </div>

    <div class="title">Todo List</div>
    <div class="todo-back">
      <ul> <li v-for="item in TodoList">{{item}}</li> </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TodoList: [ 
        "manage2未完成", "因为字体所导致的font-weight失效", "重置路由和组件文件", "全局悬浮按钮", 
        "给列表加一个单独的项目页面", "画一个Logo",
      ],
      ItemList: [
        {title: "File Manager App", author: "Cuberto", link: "/cuberto/file"},
        {title: "File Manager App 2", author: "Cuberto", link: "/cuberto/file2"},
        // {title: "", author: "", link: ""},
      ]
    }
  }
}
</script>

<style>
.item-back { background-color: #f5f5f5; padding: 24px; border-radius: 12px; margin-bottom: 16px; }
.item-back .itemTitle { font-size: 18px; color: #363636; }
.item-back .id { font-size: 18px; color: #0a8a5f; font-weight: 700; }
.item-back .author { margin-top: 8px; color: #707070 }

.todo-back { background-color: #e4efeb; padding: 24px; border-radius: 12px; margin-bottom: 16px; }
.title { font-size: 24px; font-weight: 700; margin-bottom: 16px; }
</style>