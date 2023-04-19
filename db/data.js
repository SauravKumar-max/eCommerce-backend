const productsData = [
  {
    name: "Hooded Sweatshirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211014/TaJj/61675578f997ddf8f1d107aa/netplay_navy_blue_zip-front_twill_jacket_with_band_collar.jpg",
    price: 2499,
    originalPrice: 3299,
    brand: "Campus Sutra",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Zip-Front Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/he3/h9a/15737449775134/campus_sutra_yellow_abstract_hooded_sweatshirt.jpg",
    price: 799,
    originalPrice: 1299,
    brand: "NETPLAY",
    inStock: true,
    fastDelivery: false,
    quantity: 1,
    ratings: 3.5,
  },

  {
    name: "Biker Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211008/pR00/61607dcaf997ddce890dccb3/justanned_black_zip-front_biker_jacket.jpg",
    price: 3000,
    originalPrice: 5000,
    brand: "JUSTANNED",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 4,
  },
  {
    name: "Hooded Sweatshirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211110/psiI/618c0393f997ddf8f1012a23/campus_sutra_black_&_grey_colourblock_hooded_sweatshirt.jpg",
    price: 1000,
    originalPrice: 1999,
    brand: "Campus Sutra",
    inStock: false,
    fastDelivery: false,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Zip-Front Sweatshirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h8c/h58/11941464539166/campus_sutra_blue_hooded_zip-front_sweatshirt.jpg",
    price: 850,
    originalPrice: 1699,
    brand: "Campus Sutra",
    inStock: true,
    fastDelivery: false,
    quantity: 1,
    ratings: 2,
  },
  {
    name: "Crew-Neck T-shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211203/VALq/61aa274faeb2690110efb7d2/rigo_white_crew-neck_t-shirt_with_contrast_taping.jpg",
    price: 539,
    originalPrice: 799,
    brand: "RIGO",
    inStock: false,
    fastDelivery: true,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Polo T-shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210805/OyzG/610bb3c47cdb8cb824ed5f3c/big_banana_navy_blue_solid_regular_fit_polo_t-shirt.jpg",
    price: 765,
    originalPrice: 1599,
    brand: "BIG BANANA",
    inStock: false,
    fastDelivery: false,
    quantity: 1,
    ratings: 2,
  },
  {
    name: "Fit T-shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211214/CgA4/61b7e956aeb26901100c31e7/paul_street_black_solid_regular_fit_t-shirt.jpg",
    price: 375,
    originalPrice: 599,
    brand: "Paul Street",
    inStock: true,
    fastDelivery: false,
    quantity: 1,
    ratings: 2,
  },
  {
    name: "Hooded Quilted Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/hc8/hf9/11914308223006/campus_sutra_black_hooded_quilted_jacket.jpg",
    price: 1290,
    originalPrice: 2999,
    brand: "Campus Sutra",
    inStock: false,
    fastDelivery: true,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Zip-Front Hoodie",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h84/h17/15216355508254/belle_fille_maroon_zip-front_hoodie_with_pockets.jpg",
    price: 989,
    originalPrice: 1595,
    brand: "Belle Fille",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 2,
  },
  {
    name: "Full Lenght Coat",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211108/UXa2/618910e1f997ddf8f1fb8d6e/fable_street_green_textured_full-lengrh__coat.jpg",
    price: 5199,
    originalPrice: 7699,
    brand: "Fable Street",
    inStock: false,
    fastDelivery: true,
    quantity: 1,
    ratings: 4,
  },
  {
    name: "Padded Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210721/ChGU/60f8404cf997ddb312301518/superdry_navy_blue_luxe_alpine_down_padded_jacket.jpg",
    price: 9999,
    originalPrice: 12999,
    brand: "SUPERDRY",
    inStock: true,
    fastDelivery: false,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Detachable Hood Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211214/7owJ/61b8b3eaaeb26901100c6ea8/fort_collins_olive_green_zip-front_jacket_with_detachable_hood.jpg",
    price: 2950,
    originalPrice: 3599,
    brand: "Fort Collins",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Full Sleeves Coat",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210404/F9Ww/606b349eaeb269a9e36373cf/belle_fille_maroon_button-down_full_sleeves_coat.jpg",
    price: 2950,
    originalPrice: 3599,
    brand: "Belle Fille",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 3,
  },

  {
    name: "Hooded Parka Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211006/SqCf/615c9e6df997ddce8900e187/dnmx_black_hooded_parka_jacket_with_slip_pockets.jpg",
    price: 2000,
    originalPrice: 3000,
    brand: "DNMX",
    inStock: false,
    fastDelivery: true,
    quantity: 1,
    ratings: 4.5,
  },

  {
    name: "Cotton Shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h5c/h2d/13003351883806/netplay_purple_cotton_shirt_with_patch_pocket.jpg",
    price: 719,
    originalPrice: 899,
    brand: "NETPLAY",
    inStock: true,
    fastDelivery: false,
    quantity: 1,
    ratings: 3,
  },
  {
    name: "Linen Cotton Shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210625/AfxH/60d4d4b9f997ddb312ed6ab8/superdry_blue_linen_cotton_shirt_with_patch_pocket.jpg",
    price: 3599,
    originalPrice: 5999,
    brand: "SUPERDAY",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 2,
  },
  {
    name: "Lace-up Sneakers",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210521/0gbi/60a6acfcaeb269a9e3c51824/red_tape_white_low-top_lace-up_sneakers.jpg",
    price: 1410,
    originalPrice: 4099,
    brand: "RED TAPE",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 3,
  },

  {
    name: "Monton Lace-up Sneakers",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210727/DrVN/60ff0811f997ddb312385ec2/u.s._polo_assn._navy_blue_monton_3.0_panelled_lace-up_sneakers.jpg",
    price: 1799,
    originalPrice: 2999,
    brand: "U.S.Polo",
    inStock: true,
    fastDelivery: true,
    quantity: 1,
    ratings: 4.5,
  },

  {
    name: "Mid-Top Casual Shoe",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h4f/h72/13271410147358/go21_white_mid-top_lace-up_casual_shoes.jpg",
    price: 1050,
    originalPrice: 1499,
    brand: "GO21",
    inStock: false,
    fastDelivery: true,
    quantity: 1,
    ratings: 4,
  },
];

module.exports = productsData;
