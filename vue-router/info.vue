<template>
  <div id="info"
       class="body">
    <div class="container">
      <h3 align="center">收货地址</h3>
      <hr>
      <template>
        <!--构建表头-->
        <div v-cloak
             v-for="(item, index) of slist"
             :key="index"
             style="height:74.1px;font-size:15px; padding:10px 0;">
          <div style="width:5%; float:left; height:100%">{{ index + 1 }} </div>
          <div>
            {{ item.username }}&nbsp;&nbsp; {{ item.number }} {{ item.def }}
          </div>
          <div>
            <div style="width:80%; float:left; height:100%">{{ item.address }} {{ item.desc }}</div>
            <div style="width:15%; float:right; height:100%">
              <a href="javascript:;"
                 @click="showOverlay(index)"
                 style="color: rgba(218, 165, 32, 0.678);">
                <svg class="octicon octicon-pencil"
                     viewBox="0 0 14 16"
                     version="1.1"
                     width="14"
                     height="16"
                     aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                  </path>
                </svg>
              </a>
              &nbsp;
              <a href="javascript:;"
                 @click="del(index)">
                <svg class="octicon octicon-trashcan"
                     viewBox="0 0 12 16"
                     version="1.1"
                     width="12"
                     height="16"
                     aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <hr style="width:100%">
        </div>
      </template>
    </div>

    <nut-button block
                style="position:fixed; bottom:0px;margin: 0 auto;width: 375px;background: rgba(218, 165, 32, 0.678);"
                class="add"
                @click="$router.push('/curd/add')"
                >
  新建地址
    </nut-button>

  </div>
</template>

<!-- 引入样式 --> 
<style link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.5/dist/nutui.min.css"></style>
<!-- 引入Vue --> 
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
 <!--  引入组件库 --> 
<script src="https://cdn.jsdelivr.net/npm/@nutui/nutui@2.1.5/dist/nutui.min.js"></script>

<script>
export default {
  name: "info",
  //el: '#info',
  data () {
    return {
      isActive: false, // 是否显示弹窗
      selected: -1, // 选择了哪条记录
      selectedlist: {}, // 选中的信息
      slist: [],
      searchlist: [],
      list: [
        {
          username: '王缺钱',
          number: '13501023847',
          address: ' ',
          desc: '中坝东路 奥林匹克嘉园 2期 206号楼 3单元 1101号',
          def: ''
        },
        {
          username: '王发财',
          number: '13501023847',
          address: ' ',
          desc: '中坝 嘉园 2期 206号楼 3单元 1101号',
          def: ''
        }
      ]
    }
  },
  created () {
    this.setSlist(this.list);
  },
  methods: {
    // 修改数据
    showOverlay (index) {
      this.selected = index;
      this.selectedlist = this.list[index];
      this.changeOverlay();
    },
    // 点击保存按钮
    modify (arr) {
      if (this.selected > -1) {
        Vue.set(this.list, this.selected, arr);
        this.selected = -1;
      } else {
        this.list.push(arr);
      }
      this.setSlist(this.list);
      this.changeOverlay();
    },
    add: function () {

      window.open('add.html')
      this.selectedlist = {
        return: {
          username: '',
          number: '',
          address: '',
          desc: '',
          def: ''

        }
      };
      this.selected = -1;
      this.isActive = true;
    },
    // delete list in index location
    del (index) {
      this.list.splice(index, 1);
      this.setSlist(this.list);
    },
    changeOverlay () {
      this.isActive = !this.isActive;
    },
    // 获取需要渲染到页面中的数据
    setSlist (arr) {
      this.slist = JSON.parse(JSON.stringify(arr));
    }
  },
  watch: {}
}
</script>

<style>
.body {
  margin: 0 auto;
  width: 375px;
  height: 667px;
}
</style>



