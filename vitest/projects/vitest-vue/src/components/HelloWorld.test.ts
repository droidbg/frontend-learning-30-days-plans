import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import HelloWorld from "./HelloWorld.vue";

test("renders HelloWorld", () => {
  const wrapper = mount(HelloWorld, { props: { msg: "Hi Vitest" } });
  expect(wrapper.text()).toContain("Hi Vitest");
});
