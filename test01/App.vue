<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>






/*demo04.vue*/
<template>
  <div id="demo04">
    <ul>
      <demo04 :model="data"></demo04>
    </ul>
  </div>
</template>

<script>
import demo04 from "./components/demo/vue/add.vue"
export default {
  name:'APP',
  components:{
    demo04
  },

  data(){
    return{
      data:data
    }
  }
}
</script>