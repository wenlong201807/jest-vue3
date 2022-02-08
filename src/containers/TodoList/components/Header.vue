<template>
  <div class="header">
  <div class="header-content">
    TodoList
    <input
      class="header-input"
      placeholder="TodoItem"
      data-test="input"
      v-model="inputValue"
      @keyup.enter="addTodoItem" />
  </div>
  </div>
</template>

<script>
export default {
  name: 'C-Header',
  // props: {},
  data () {
    return {
      inputValue: ''
    };
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue);
        this.inputValue = '';
      }
    }
  }
};
</script>

<style lang="scss">
.header {
  line-height: 60px;
  background: #666;
}
.header-content {
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.header-input {
  float: right;
  width: 60%;
  margin-top: 16px;
  line-height: 24px;
  outline: none;
  color: #333;
  text-indent: 10px;
}
</style>
