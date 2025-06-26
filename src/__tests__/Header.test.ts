import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../components/Header.vue";

describe("Header", () => {
  it("renders with the correct props", () => {
    // Arrange
    const fullName = "John Doe";
    const avatarPath = "photo.jpeg";
    const title = "Doing stuff";
    const wrapper = mount(Header, {
      props: {
        avatarPath,
        fullName,
        title,
      },
    });

    // Assert
    const avatar = wrapper.find(".avatar img");
    expect(avatar.attributes("src")).toBe(avatarPath);
    expect(avatar.attributes("alt")).toBe(fullName);
    const name = wrapper.find("h1");
    expect(name.text()).toBe(fullName);
    const titleEl = wrapper.find("h2");
    expect(titleEl.text()).toBe(title);
  });
});
