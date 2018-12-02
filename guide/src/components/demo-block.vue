<template>
  <div
      class="demo-block"
      :class="[blockClass, { 'hover': hovering }]"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false">
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="source"></slot>
      <header class="code-fold-btn" ref="foldBtn" :class="{show:showCodeBox}" @click="foldCodeBox">
        <i class="fa fa-caret-down"></i>  {{codeBoxText}}
      </header>
      <div class="code-box"
         ref="codeBox"
         :style="codeBoxStyle"
      >
        <slot name="highlight"></slot>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  .demo-block {
    font-size: 12px;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }

  .code-fold-btn{
    border-top: solid 1px #ebebeb;
    cursor: pointer;
    user-select: none;
    text-align: center;
    height: 28px;
    line-height: 28px;
    background-color: #fafafa;
    color: #ff6f6f;

    .fa{
      display: inline-block;
      width: 14px;
      height: 14px;
      transform: rotate(0deg);
      transition: transform .5s ease;
    }

    &.show{
      background-color: #fafafa;

      .fa{
        transform: rotate(-180deg);
      }
    }
  }

  .code-box{
    overflow: hidden;
    transition: height .5s ease;
  }
</style>

<script type="text/babel">

export default {
  data () {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null,

      codeBoxRect: null,
      showCodeBox: true,
      taggleCodeBox: false,
      codeBoxCache: 0,
      codeBoxH: 0
    }
  },

  props: {
    jsfiddle: Object,
    default () {
      return {}
    }
  },

  methods: {
    foldCodeBox () {
      this.showCodeBox = !this.showCodeBox
      this.showCodeBox ? (this.codeBoxH = this.codeBoxCache + 1) : (this.codeBoxH = 0)
    },
    scrollHandler () {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect()
      this.fixedControl = bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : '0'
    },

    removeScrollHandler () {
      this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    }
  },

  computed: {
    codeBoxStyle () {
      return {
        height: this.taggleCodeBox ? this.codeBoxH + 'px' : 'auto'
      }
    },
    codeBoxText () {
      return this.showCodeBox ? '折叠代码' : '查看代码'
    },
    lang () {
      return this.$route.path.split('/')[1]
    },

    blockClass () {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path.split('/').pop()}`
    },

    iconClass () {
      return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },

    controlText () {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },

    codeArea () {
      return this.$el.getElementsByClassName('meta')[0]
    },

    codeAreaHeight () {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    }
  },

  watch: {
    isExpanded (val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
        this.removeScrollHandler()
        return
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
        this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler)
        this.scrollHandler()
      }, 200)
    }
  },

  mounted () {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName('highlight')[0]
      if (this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%'
        highlight.borderRight = 'none'
      }

      this.codeBoxCache = this.$refs.codeBox.getBoundingClientRect().height
      this.codeBoxH = this.codeBoxCache
      this.taggleCodeBox = true
      this.foldCodeBox()
    })
  },

  beforeDestroy () {
    this.removeScrollHandler()
  }
}
</script>
