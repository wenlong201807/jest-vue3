import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import UndoList from "../../components/UndoList.vue";
// import CHeader from "../../components/Header.vue";

describe("TodoList 组件", () => {
  it("初始化时，undoList 为空", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });

  it("addTodoItem 执行后，内容加一项", () => {
    // 此为集成测试，集成了两个组件的功能
    // const content = 'dell lee';
    // const wrapper = shallowMount(TodoList);
    // const header = wrapper.findComponent(CHeader)
    // header.vm.$emit('add', content);
    // const undoList = wrapper.vm.$data.undoList;
    // expect(undoList).toEqual([content]);

    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        // 此数据格式与业务数据耦合，导致一动全部受到影响
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.addTodoItem(4);
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
      { status: "div", value: 4 },
    ]);
  });

  it("使用 UndoList 组件, 应该传递 list 参数", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.findComponent(UndoList);
    const list = undoList.props("list");
    expect(list).toBeTruthy();
  });

  it("handleItemDelete 方法执行时，UndoList 内容会减少一个", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.handleItemDelete(1);
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 3 },
    ]);
  });

  it("changeStatus 方法执行时，UndoList 内容变化", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.changeStatus(1); // 调用方法，并传入参数
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "input", value: 2 },
      { status: "div", value: 3 },
    ]);
  });

  it("resetStatus 方法执行时，UndoList 内容变化", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.resetStatus(); // 调用方法，并传入参数
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ]);
  });

  it("changeItemValue 方法执行时，UndoList 内容变化", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.changeItemValue({ value: '123', index: 1 }); // 调用方法，并传入参数
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "input", value: '123' },
      { status: "div", value: 3 },
    ]);
  });
});
