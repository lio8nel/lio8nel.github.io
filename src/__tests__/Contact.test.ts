import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Contact from "../components/Contact.vue";

describe("Contact.vue", () => {
  it("renders contact info and languages from props", () => {
    // Arrange & Act
    const contact = {
      email: "test@example.com",
      phone: "+1234567890",
      workplace: "Test City",
    };
    const languages = ["English", "French"];
    const wrapper = mount(Contact, {
      props: { contact, languages },
    });

    // Assert
    const contactInformation = wrapper.findAll("dd").map((dd) => dd.text());

    expect(contactInformation).toEqual([
      contact.email,
      contact.phone,
      contact.workplace,
      languages.join(", "),
    ]);
  });
});
