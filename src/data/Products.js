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
    short_description: "it is liburary of JS",
  },
  {
    title: "Vue",
    price: "16",
    image: vueImage,
    productId: "vue",
    description: `Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only.[4] Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.[12]

    Vue.js allows for extending HTML with HTML attributes called directives.[13] The directives offer functionality to HTML applications, and come as either built-in or user defined directives.
    `,
    short_description: "it is Framework for JS",
  },

  {
    title: "Mountain View",
    price: "16",
    image: vueImage,
    productId: "mountain-view",
    description: `A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges.
    `,
    btn: "interesting facts",
    short_description: "Interesting things",
  },
  {
    title: "Kyrgyz Mountain",
    price: "16",
    image: vueImage,
    productId: "kyrgyz-mountain",
    description: `Kyrgyzstan, officially the Kyrgyz Republic (Kyrgyz: Кыргыз Республикасы, Russian: Кыргызская Республика) is a former Soviet republic located in South-Central Asia. The country is known for its incredible natural beauty and proud nomadic traditions. Landlocked and mountainous, it borders Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the southwest and China to the southeast. What would become modern Kyrgyzstan was annexed by Russia in 1876 and became an independent country with the collapse of the Soviet Union in 1991. It has the most liberal tourist visa policy in Central Asia and one of the more progressive post-Soviet governments in the region.
    `,
    btn: "more information",
    short_description: "This mountian in Natural Country (Kyrgyzstan)",
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
