import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import Counter from "./Counter.vue";

test("initial count", () => {
  const wrapper = mount(Counter);
  expect(wrapper.text()).toContain("Count: 0");
});

test("increments count", async () => {
  const wrapper = mount(Counter);
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});