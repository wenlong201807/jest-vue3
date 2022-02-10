<template>
  <div>
    <CHeader @add="addTodoItem" />
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="changeStatus"
      @reset="resetStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CHeader from '../TodoList/components/Header';
import UndoList from '../TodoList/components/UndoList';
export default {
  name: 'TodoList',
  props: {},
  components: {
    CHeader, UndoList
  },
  data () {
    return {
      undoList: []
    };
  },
  mounted () {
    /**
     * 前端只关注正确的数据怎么处理
     * 错误监测即可，后端处理
     * {
     *   success: true,
     *   data: [
     *     { statue: 'div', value: 'wenlong' },
     *     { statue: 'div', value: 'wenlong3' },
     *   ]
     * }
    */
    // axios.get('/getUndoList.json').then((res) => {
    //   this.undoList = res.data;
    //   console.log(666);
    // }).catch(e => {
    //   console.log('错误');
    // });

    setTimeout(() => {
      axios.get('/getUndoList.json').then((res) => {
        this.undoList = res.data;
        console.log(666);
      }).catch(e => {
        console.log('错误');
      });
    }, 4000);
  },
  methods: {
    addTodoItem (inputValue) {
      this.undoList.push({ status: 'div', value: inputValue });
    },
    handleItemDelete (ind) {
      this.undoList.splice(ind, 1);
    },
    changeStatus (ind) {
      const newList = [];
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === ind) {
          newList.push({ status: 'input', value: item.value });
        } else {
          newList.push(item);
        }
      });
      this.undoList = newList;
    },
    resetStatus () {
      const newList = [];
      this.undoList.forEach((item) => {
        newList.push({ status: 'div', value: item.value });
      });
      this.undoList = newList;
    },
    changeItemValue ({ value, index }) {
      this.undoList[index].value = value;
    }
  }
};
</script>
