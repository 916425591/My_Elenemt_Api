<template>
  <div class="table">
    <table id="iTable" :data="list" :stripe="options.stripe" ref="mutipleTable"
           @selection-change="handleSelectionChange">
      <tr>
        <th v-for="(column, index) in columns">{{column.label}}</th>
        <th v-if="operates">
          {{operates.title}}
        </th>
      </tr>
      <tr v-for="(single,index) in list">
        <td v-for="(value, key, index) in single">
          {{ value }}
        </td>
        <td v-if="operates"  class="operates">
          <span v-for="(btn, key) in operates.list"  @click="btn.method(index,single)">
            <i :icon="btn.icon"></i>{{ btn.label }}
          </span>
        </td>
      </tr>
    </table>

  </div>
</template>
<!--endregion-->
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }, // 数据列表
      columns: {
        type: Array,
        default: []
      }, // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽
      operates: {}, // 操作按钮组 === label: 文本，type :类型（primary / success / warning / danger / info / text），show：是否显示，icon：按钮图标，plain：是否朴素按钮，disabled：是否禁用，method：回调方法
      options: {
        type: Object,
        default: {
          stripe: false, // 是否为斑马纹 table
          highlightCurrentRow: false // 是否要高亮当前行
        },
      } // table 表格的控制参数
    },
//组件
    components: {
      expandDom: {
        functional: true,
        props: {
          row: Object,
          render: Function,
          index: Number,
          column: {
            type: Object,
            default: null
          }
        },
        render: (h, ctx) => {
          const params = {
            row: ctx.props.row,
            index: ctx.props.index
          }
          if (ctx.props.column) params.column = ctx.props.column
          return ctx.props.render(h, params)
        }
      }
    },
// 数据
    data() {
      return {
        pageIndex: 1,
        multipleSelection: [] // 多行选中
      }
    },
    mounted() {
    },
    computed: {},
    methods: {
      // 多行选中
      handleSelectionChange(val) {
        this.multipleSelection = val
        this.$emit('handleSelectionChange', val)
      },
      // 显示 表格操作弹窗
      showActionTableDialog() {
        console.log(4444)
        this.$emit('handelAction')
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .table{
    display: flex;
    flex-direction: column;
    table{
      width: 100%;
      border-collapse: collapse;
      tr{
        height: 45px;
        line-height: 44px;
        border-bottom: 1px solid #ddd;

        th{
          text-align: center;
          font-size: 14px;
          color: #000;
          font-weight: normal;
        }
        td{
          text-align: center;
          font-size: 12px;
          color: #aaa;
        }
        .operates{
          text-align: center;
          span{
            padding: 0px 3px;
            cursor: pointer;
            color: #FF762A;
          }
        }
      }
    }
  }
</style>
