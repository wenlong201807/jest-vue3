import { shallowMount } from "@vue/test-utils";
import TodoList from "@/containers/TodoList/TodoList.vue";

// 自己写，不够灵活，不够全面
describe("TodoList.vue", () => {
  
  it('组件渲染正常', () => {
    // const msg = "new message";
    const wrapper = shallowMount(TodoList, { // 浅渲染，不考虑子组件； mount当前组件，子组件都渲染【集成测试使用】
      // propsData: { msg },
    });
    // expect(wrapper.text()).toMatch(msg);
  })
});





