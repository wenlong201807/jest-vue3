<template>
  <div>
    <h1>TodoList</h1>
    <CHeader></CHeader>
  </div>
</template>

<script>

import CHeader from '../TodoList/components/Header';
export default {
  name: 'TodoList',
  props: {},
  components: {
    CHeader
  }
};
</script>
