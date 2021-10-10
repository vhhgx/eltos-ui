<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">关于</router-link>
      <router-link to="/list">列表</router-link>
			<router-link to="/artists">艺术家列表</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #363636;
  margin: 24px;
}

/* #nav { } */

#nav a {
  /* font-weight: bold; */
  color: #2c3e50;
  font-size: 24px;
  margin-right: 30px;
  font-weight: 300;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: 900;
}
</style>