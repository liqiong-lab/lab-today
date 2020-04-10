
<template>
  <div id="add"
       class="add">
    <header>
    <h3 align="center">添加地址</h3>
</header>
    <!-- @submit.prevent 阻止事件的默认行为，当前阻止的是action行为 -->
    <form action="#"
          @submit.prevent="submitForm">

      <br><br> 收货人
      <nut-textinput v-model="name"
                     placeholder="请输入"
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
      <!--<nut-switch :active.sync="swActive">
      </nut-switch>-->
      <br><br>
      <nut-button block
                  :type="submit()">
        保存
      </nut-button>
    </form>
  </div>
</template>

<script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
<script src="./node_modules/vue/dist/vue.js"></script> <!--貌似可以没有-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>

<script>
    import Vue from "vue";
    import {mapActions} from "vuex";
    import {Toast} from "vant";

export default {
  name: "curd-add",

  //el: '#add',
  data () {
    return {
       name:"",
       number:"",
       area:"",
       desc:""
    }
  },
  created(){
            this.isSubmit=true;
        },
          mounted(){
            document.title=this.$route.meta.title;
        },

          methods:{
            ...mapActions({
                addAddress:"address/addAddress"
            }),
            submit(){
                if(this.name.match(/^\s*$/)){
                    Toast("请输入收货人姓名");
                    return;
                }
                if(this.isSubmit){
                    this.isSubmit=false;
                    this.addAddress({name:this.name,number:this.number,area:this.area,desc:this.desc,success:(res)=>{
                            if(res.code===200){
                                Toast({
                                    duration:2000,
                                    message:"添加成功！",
                                    onClose:()=>{
                                        this.$router.go(-1);
                                    }
                                })
                            }
                        }})
                }

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



