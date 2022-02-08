import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import UndoList from "../../components/UndoList.vue";
// import CHeader from "../../components/Header.vue";

describe('TodoList 组件', () => {
  it('初始化时，undoList 为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  })

  it('addTodoItem 执行后，内容加一项', () => {
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

  it('使用 UndoList 组件, 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.findComponent(UndoList)
    const list = undoList.props('list');
    expect(list).toBeTruthy();
  })

  it('handleItemDelete 方法执行时，UndoList 内容会减少一个', () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3],
    });
    wrapper.vm.handleItemDelete(1);
    expect(wrapper.vm.$data.undoList).toEqual([1, 3]);
  })
});






