import vueImage from "../assets/vue.jpg";




const products = [
  {
    title: "React",
    price: "10",
    image: vueImage,
    productId: "react",
  },
  {
    title: "Vue",
    price: "16",
    image: vueImage,
    productId: "vue",
  },
];


export function getProducts() {
  return products;
}

