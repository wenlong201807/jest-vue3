<template>
  <div>
    <CHeader @add="addTodoItem" />
    <UndoList :list="undoList" @delete="handleItemDelete" />
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
      this.undoList.push(inputValue);
    },
    handleItemDelete (ind) {
      this.undoList.splice(ind, 1);
    }
  }
};
</script>
