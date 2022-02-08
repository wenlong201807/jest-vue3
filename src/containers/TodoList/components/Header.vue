<template>
  <div>
    <input data-test="input" v-model="inputValue" @keyup.enter="addTodoItem" />
    <!-- <input data-test="input" :value="inputValue" /> 单向数据流-->
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
