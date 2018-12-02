<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer v-if="!isComponent"></footer>
  </div>
</template>
<script>
import 'highlight.js/styles/atom-one-light.css'
require('babel-core/register')
require('babel-polyfill')

export default {
  name: 'app',
  data: function () {
    return {
      title: 'TITLE'
    }
  },
  watch: {},
  computed: {
    isComponent: function () {
      return /^component-/.test(this.$route.name || '')
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="scss">
  $fa-font-path: "../src/styles/fonts/";
  $assets-path: "../src/styles/assets";
  // TODO normalize
  //@import "../src/styles/theme-sacred.scss";
  //@import "../src/styles/base/normalize.scss";

  html,
  body {
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  a {
    color: #ff6f6f;
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .3);
  }

  code.hljs {
    font-size: 12px;
  }

  .component-container {
    h2 {
      font-size: 24px;
      margin-bottom: 16px;

      a {
        display: none;
      }
    }

    h2 + p {
      margin-bottom: 36px;
    }

    h3 {
      a {
        display: none;
      }

      font-size: 18px;
      margin: 35px 0 20px;
    }

    h3 + p {
      margin-bottom: 1em;
    }

    h4 {
      a {
        display: none;
      }
    }

    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    ol {
      font-size: 14px;
      list-style-type: decimal;
      margin-left: 20px;
      margin-bottom: 30px;
      line-height: 26px;

      code {
        color: #bb5959;
        background-color: #ffeaea;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }

    .meta .description code {
      color: #bb5959;
      background-color: #ffeaea;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }

    section > pre {
      margin-bottom: 30px;
    }

    .demo-block {
      border-radius: 0;
      margin-bottom: 36px;

      .mc-container {
        background: #fff;
      }

      .description {
        p {
          margin: 0;
          font-size: 14px;
          color: #b2b2b2;
        }

        p + p {
          margin-top: 16px;
        }

        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin: 10px;
        background-color: #fff;
      }

      .hljs {
        border-top: solid 1px #ebebeb;
        padding: 20px;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
      }
    }

    table {
      width: 100%;

      th,
      td {
        font-size: 14px;
        padding: 10px;
      }

      th {
        border-bottom: solid 2px #ebebeb;
      }

      td {
        border-bottom: solid 1px #ebebeb;
      }
    }
  }
</style>
