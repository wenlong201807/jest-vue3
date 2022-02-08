import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import UndoList from "../../components/UndoList.vue";
import CHeader from "../../components/Header.vue";

it('TodoList 初始化时，undoList 应该为空', () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([]);
})

it('TodoList 中 addTodoItem 被执行后，内容会加一项', () => {
  // 此为集成测试，集成了两个组件的功能
  // const content = 'dell lee';
  // const wrapper = shallowMount(TodoList);
  // const header = wrapper.findComponent(CHeader)
  // header.vm.$emit('add', content);
  // const undoList = wrapper.vm.$data.undoList;
  // expect(undoList).toEqual([content]);

  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [1, 2, 3],
  });
  wrapper.vm.addTodoItem(4);
  expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4]);
})

it('TodoList 调用 UndoList, 应该传递 list 参数', () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.findComponent(UndoList)
  const list = undoList.props('list');
  expect(list).toBeTruthy();
})

it('TodoList 中handleItemDelete方法被调用时，UndoList列表内容会减少一个', () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [1, 2, 3],
  });
  wrapper.vm.handleItemDelete(1);
  expect(wrapper.vm.$data.undoList).toEqual([1, 3]);
})





