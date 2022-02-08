<template>
  <div>
    <CHeader @add="addTodoItem" />
    <hr />
    <ul>
      <li v-for="item of undoList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import CHeader from '../TodoList/components/Header';
export default {
  name: 'TodoList',
  props: {},
  components: {
    CHeader
  },
  data () {
    return {
      undoList: []
    };
  },
  methods: {
    addTodoItem (inputValue) {
      this.undoList.push(inputValue);
    }
  }
};
</script>
