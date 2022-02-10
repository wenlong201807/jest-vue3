<template>
  <div class="header">
  <div class="header-content">
    TodoList
    <input
      class="header-input"
      placeholder="TodoItem"
      data-test="header-input"
      data-test0="input"
      :value="inputValue"
      @input="(e) => changeInputValue(e.target.value)"
      @keyup.enter="addTodoItem" />
  </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'C-Header',
  // props: {},
  // data () {
  //   return {
  //     inputValue: ''
  //   };
  // },
  computed: {
    ...mapState({
      inputValue: state => state.inputValue
    })
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue);
        // this.inputValue = '';
        this.changeInputValue('');
      }
    },
    ...mapMutations({
      changeInputValue: 'changeInputValue'
    })
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
