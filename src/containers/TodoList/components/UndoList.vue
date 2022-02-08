<template>
  <div>
    <div data-test="count">{{list.length}}</div>
    <ul>
      <li
        data-test="item"
        v-for="(item, index) in list"
        :key="index"
      >
        {{item}}
        <span data-test="delete-button" @click="() => handleDelete(index)">-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleDelete (ind) {
      this.$emit('delete', ind);
    }
  }
};
</script>

<style lang="scss">

</style>
