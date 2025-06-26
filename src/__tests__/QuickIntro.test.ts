import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import QuickIntro from "../components/QuickIntro.vue";

describe("QuickIntro.vue", () => {
  it("renders each quickIntro entry as a paragraph", () => {
    const quickIntro = [
      "First intro paragraph.",
      "Second intro paragraph.",
      "Third intro paragraph.",
    ];
    const wrapper = mount(QuickIntro, {
      props: { quickIntro },
    });
    const paragraphs = wrapper.findAll("p");
    expect(paragraphs).toHaveLength(quickIntro.length);
    quickIntro.forEach((text, idx) => {
      expect(paragraphs[idx].text()).toBe(text);
    });
  });
});
