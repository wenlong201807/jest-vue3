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
