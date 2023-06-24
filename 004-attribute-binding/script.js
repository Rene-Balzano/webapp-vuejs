Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/300/300/",
        alt: "",
      },
    };
  },
}).mount("#app");
