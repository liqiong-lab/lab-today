
<template>
  <div id="add"
       class="add">
    <h3 align="center">添加地址</h3>
    <!-- @submit.prevent 阻止事件的默认行为，当前阻止的是action行为 -->
    <form action="#"
          @submit.prevent="submitForm">

      <br><br> 收货人
      <nut-textinput v-model="name"
                     placeholder="  请输入"
                     :clearBtn="true"
                     :disabled="false" />
      <br><br> 手机号
      <nut-textinput v-model="number"
                     placeholder="请输入"
                     :clearBtn="true"
                     :disabled="false"
                     color="red" />
      <br><br> 所在地区
      <nut-textinput v-model="area"
                     placeholder="请输入"
                     :clearBtn="true"
                     :disabled="false" />
      <br><br> 详细地址
      <nut-textinput v-model="desc"
                     placeholder="街道 小区 门牌号"
                     :clearBtn="true"
                     :disabled="false" />
      <br><br> 设为默认地址
      <nut-switch :active.sync="swActive">
      </nut-switch>
      <br><br>
      <nut-button block
                  :type="submit">
        保存
      </nut-button>
    </form>
  </div>
</template>

<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
<script src="./node_modules/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>

<script>
export default {
  el: '#add',
  data () {
    return {
      swActive: true
    };
  },
  methods: {
    submitForm: function () { //处理提交表单
      //发送ajax异步处理
      alert(this.name + ', ' + this.number + ', ' + this.area + ', ' + this.desc + ',' + this.swActive)
    }
  }
}
</script>

<style>
.add {
  margin: 0 auto;
  width: 375px;
  height: 667px;
}
</style>



