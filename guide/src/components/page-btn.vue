<template>
  <div class="page-btn">
    <div class="page-btn__left" v-if="leftNav.title" @click="skipTo(leftNav.routePath)">
      <i class="fa fa-chevron-left"></i>
      <span>{{leftNav.title}}</span>
    </div>
    <div class="page-btn__right" v-if="rightNav.title"  @click="skipTo(rightNav.routePath)">
      <span>{{rightNav.title}}</span>
      <i class="fa fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
// import routes from '../base/construction.json'
const routes = []
const GROUPS = ['form', 'card']

export default {
  name: 'foot-nav',
  data: function () {
    return {
      routeList: [],
      index: 0,
      leftNav: '',
      rightNav: ''
    }
  },
  watch: {
    '$route.path': function () {
      this.updatePageIndex()
    }
  },
  beforeMount: function () {
    this.updatePageIndex()
  },
  methods: {
    updatePageIndex: function () {
      // 获取当前route类型
      const path = this.$route.path
      const type = (routes.filter(r => r.routePath === path)[0] || {}).type
      let list = []
      // 获取当前route结构
      this.routeList = routes.filter(r => r.type === type)

      // 对组件进行分组排序
      if (type === 'components') {
        GROUPS.forEach(group => {
          list = list.concat(this.routeList.filter(route => route.group === group))
        })
        this.routeList = list
      }

      // 获取当前索引
      this.routeList.forEach((r, idx) => {
        if (r.routePath === path) {
          this.index = idx
        }
      })

      // 更新左右路由
      this.leftNav = this.routeList[this.index - 1] || {}
      this.rightNav = this.routeList[this.index + 1] || {}
    },
    skipTo: function (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-btn {
    width: 100%;
    overflow: hidden;
    height: 50px;
    padding: 20px;
    color: #ff6f6f;
    font-size: 14px;

    & div {
      cursor: pointer;
    }

    & span {
      padding: 10px;
    }
  }

  .page-btn__left {
    float: left;
  }

  .page-btn__right {
    float: right;
  }
</style>
