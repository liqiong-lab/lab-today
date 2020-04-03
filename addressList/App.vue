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



<template>
  <div id="add">
 <ul>
      <add :model="data"></add>
    </ul>
  </div>
</template>

<script>
import add from "./components/address/add.vue"
export default {
  name:'APP',
  components:{
    add
  },  data(){
    return{
      data:data
    }
  }
}
</script>


<template>
  <div id="info">
 <ul>
      <info :model="data"></info>
    </ul>
  </div>
</template>

<script>
import info from "./components/address/info.vue"
export default {
  name:'APP',
  components:{
    info
  },  data(){
    return{
      data:data
    }
  }
}
</script>