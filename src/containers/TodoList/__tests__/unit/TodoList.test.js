import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import CHeader from "../../components/Header.vue";

it('TodoList 初始化时，undoList 应该为空', () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([]);
})

it('TodoList 监听到 CHeader 的add事件时，会增加一个内容', () => {
  const content = 'dell lee';
  const wrapper = shallowMount(TodoList);
  const header = wrapper.findComponent(CHeader)
  header.vm.$emit('add', content);
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([content]);
})





