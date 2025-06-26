import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Skills from "../components/Skills.vue";
import type { Skill } from "../core/Resume";

describe("Skills.vue", () => {
  it("renders skills by category and hobbies from props", () => {
    const skills: Record<string, Skill[]> = {
      "Engineering skills": [{ label: "TDD" }, { label: "DDD" }],
      "Soft skills": [{ label: "Creativity" }, { label: "Communication" }],
    };
    const hobbies = ["Music", "Photography"];
    const wrapper = mount(Skills, {
      props: { skills, hobbies },
    });

    // Assert skills categories and items
    Object.entries(skills).forEach(([category, skillList]) => {
      expect(wrapper.text()).toContain(category);
      skillList.forEach((skill) => {
        expect(wrapper.text()).toContain(skill.label);
      });
    });

    // Assert hobbies
    hobbies.forEach((hobby) => {
      expect(wrapper.text()).toContain(hobby);
    });
  });
});
