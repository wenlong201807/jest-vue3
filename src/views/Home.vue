<template>
  <div class="home">
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/containers/TodoList/TodoList';

export default {
  name: 'Home',
  components: {
    TodoList
  }
};
</script>
