<template>
  <ul class="side-nav ">
    <li class="side-nav__head">开发指南</li>
    <router-link
        tag="li"
        class="side-nav__item"
        v-for="{to, title} in introList"
        :key="to"
        :to="to">
      {{title}}
    </router-link>
    <li class="side-nav__head">组件</li>
    <template v-for="(group) in groups">
      <li class="side-nav__group" :key="group">{{group}}</li>
      <router-link
          tag="li"
          class="side-nav__item"
          v-for="{to, title} in cptList[group]"
          :key="to"
          :to="to">
        {{title}}
      </router-link>
    </template>
  </ul>
</template>

<script>
// import construction from '../base/construction.json'
// const GROUPS = ['form', 'card']
const construction = []

export default {
  name: 'side-nav',
  data: function () {
    return {
      groups: [],
      introList: [],
      cptList: []
    }
  },
  methods: {
    // 更新组件二级分类
    updateGroups () {
      let prefixSet = new Set()
      construction.forEach(item => {
        if (item.type === 'components') {
          prefixSet.add(item.filename.match(/(\w+)\./)[1])
        }
      })
      this.groups = [...prefixSet.values()]
    }
  },
  beforeMount: function () {
    this.updateGroups()
    // 获取并计算出左侧导航的全部信息
    construction.forEach(page => {
      if (page.type === 'intro') {
        this.introList.push({
          title: page.title,
          to: `/component/${page.name}`
        })
      } else if (page.type === 'components') {
        this.groups.forEach(group => {
          if (!Array.isArray(this.cptList[page.group])) {
            this.cptList[page.group] = []
          }
          if (group === page.group) {
            this.cptList[page.group].push({
              title: page.title,
              to: `/component/${page.name}`
            })
          }
        })
      }
    })
  },
  mounted: function () {

  }
}
</script>

<style lang="scss" scoped>
  .side-nav {
    width: 180px;
    margin-left: 20px;
    line-height: 30px;
    overflow-y: auto;

    li {
      margin-left: 20px;
    }
  }

  .side-nav__head {
    margin: 20px 0 8px;
    font-size: 18px;
    color: #474747;
  }

  .side-nav__group {
    margin: 10px 0 0;
    font-size: 14px;
    color: #b2b2b2;
  }

  .side-nav__item {
    color: #878787;
    position: relative;
    font-size: 14px;
    cursor: pointer;
    vertical-align: middle;
    padding-left: 25px;
    margin-left: 0 !important;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      transition: transform .5s;
      transform: scaleX(0) scaleY(0);
      transform-origin: 0 0;
      background: rgba(#ff6f6f, .05);
    }

    &:hover {
      color: #ff6f6f;
    }

    &.router-link-active {
      color: #ff6f6f;

      &::after {
        transform: scaleX(1) scaleY(1);
        transform-origin: 100% 0;
      }
    }
  }
</style>
