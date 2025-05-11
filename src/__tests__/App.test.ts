import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App.vue", () => {
  it("renders properly", () => {
    const wrapper = mount(App);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the header", () => {
    // Arrange
    const wrapper = mount(App);

    // Assert
  });

  it("contains all main components", () => {
    const wrapper = mount(App);

    // Check if main sections are present
    expect(wrapper.find(".layout").exists()).toBe(true);
    expect(wrapper.find(".sidebar").exists()).toBe(true);
    expect(wrapper.find(".content").exists()).toBe(true);

    // Check if main components are rendered
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "Contact" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "Skills" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "QuickIntro" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "WorkHistory" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "Education" }).exists()).toBe(true);
  });
});
