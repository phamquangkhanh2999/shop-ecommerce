const image_ao_1 = require("../../assets/images/catalog/ao_1.jpg");
const image_ao_2 = require("../../assets/images/catalog/ao_2.jpg");
const image_ao_3 = require("../../assets/images/catalog/ao_3.jpg");
const image_ao_4 = require("../../assets/images/catalog/ao_4.jpg");
const image_ao_5 = require("../../assets/images/catalog/ao_5.jpg");
const image_ao_6 = require("../../assets/images/catalog/ao_6.jpg");
const image_ao_7 = require("../../assets/images/catalog/ao_7.jpg");
const image_ao_8 = require("../../assets/images/catalog/ao_8.jpg");
const image_ao_9 = require("../../assets/images/catalog/ao_9.jpg");

// product new
const image_new_1 = require("../../assets/images/product/product_01.jpg");
const image_new_2 = require("../../assets/images/product/product_02.jpg");
const image_new_3 = require("../../assets/images/product/product_03.jpg");
const image_new_4 = require("../../assets/images/product/product_04.jpg");

const products = [
  {
    title: "ÁO LEN - ALD1207",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_1,
    categorySlug: "ao-thun",
    colors: ["yellow"],
    slug: "ao-thun-dinosaur-01",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO T-SHIRT - TSM65209",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_2,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-02",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO TSHIRT - TS22352",
    price: "256000",
    productCode: "TS22352",
    image01: image_ao_3,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-03",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO T-SHIRT - TS22358",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_4,
    categorySlug: "ao-thun",
    colors: ["orange"],
    slug: "ao-thun-dinosaur-04",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO T-SHIRT - TS22353",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_5,
    categorySlug: "ao-thun",
    colors: ["white", "orange"],
    slug: "ao-thun-dinosaur-05",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO TSHIRT FREESIZE - TS22359",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_6,
    categorySlug: "ao-thun",
    colors: ["white", "red"],
    slug: "ao-thun-dinosaur-06",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO TSHIRT - TS22352",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_7,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-07",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO TSHIRT - TS22360 FREESIZE",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_8,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-08",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
  {
    title: "ÁO TSHIRT - TS22368",
    price: "290000",
    productCode: "TS22352",
    image01: image_ao_9,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-09",
    size: ["s", "m", "l", "xl"],
    description:
      "<ul> <li>Chất liệu: 95% cotton- 5% spandex</li> <li>Áo phông kiểu dáng Body Fit dễ mặc, ứng dụng cao có thể mặc đi làm, đi học, đi chơi,...</li> <li>Chất liệu mềm mại thoáng mát, Tone màu xám trẻ trung, nam tính</li> </ul>",
  },
];
const productNews = [
  {
    title: "ÁO SƠ MI - BA220401NT",
    price: "638000",
    productCode: "TS22352",
    image01: image_new_1,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-01",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo sơ mi ngắn tay, form Body Fit dễ mặc, hợp form dáng.Áo sơ mi trẻ trung, hiện đại, dễ phối đồ.Áo sơ mi bạc hà kháng khuẩn tự nhiên, mát lạnh, mềm mượt, thân thiện với làn da.",
  },
  {
    title: "ÁO SƠ MI - BA220421NT",
    price: "538000",
    productCode: "TS22352",
    image01: image_new_2,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-02",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo sơ mi ngắn tay, form Body Fit dễ mặc, hợp form dáng.Áo sơ mi trẻ trung, hiện đại, dễ phối đồ.Áo sơ mi bạc hà kháng khuẩn tự nhiên, mát lạnh, mềm mượt, thân thiện với làn da.",
  },
  {
    title: "ÁO SƠ MI - AR220418NT",
    price: "438000",
    productCode: "TS22352",
    image01: image_new_3,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-03",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo sơ mi ngắn tay, form Body Fit dễ mặc, hợp form dáng.Áo sơ mi trẻ trung, hiện đại, dễ phối đồ.Áo sơ mi bạc hà kháng khuẩn tự nhiên, mát lạnh, mềm mượt, thân thiện với làn da.",
  },
  {
    title: "ÁO SƠ MI - AR220405NT",
    price: "638000",
    productCode: "TS22352",
    image01: image_new_4,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    slug: "ao-thun-dinosaur-04",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo sơ mi ngắn tay, form Body Fit dễ mặc, hợp form dáng.Áo sơ mi trẻ trung, hiện đại, dễ phối đồ.Áo sơ mi bạc hà kháng khuẩn tự nhiên, mát lạnh, mềm mượt, thân thiện với làn da.",
  },
];
const getAllProducts = () => products;
const getAllProductNews = () => productNews;
const getProducts = (count) => {
  let max = products.length - count;
  let min = 0;
  let start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};
const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
const productData = {
  getAllProducts,
  getAllProductNews,
  getProducts,
  getProductBySlug,
};

export default productData;
