import vueImage from "../assets/vue.jpg";




const products = [
  {
    title: "React",
    price: "10",
    image: vueImage,
    productId: "react",
    description: `On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.
    Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.
    `,
  },
  {
    title: "Vue",
    price: "16",
    image: vueImage,
    productId: "vue",
    description: `Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only.[4] Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.[12]

    Vue.js allows for extending HTML with HTML attributes called directives.[13] The directives offer functionality to HTML applications, and come as either built-in or user defined directives.
    `,
  },
];


export function getProducts() {
  return products;
}

export function getProduct(productId) {
  return products [
    products.findIndex( product => product.productId === productId)
  ];
}
