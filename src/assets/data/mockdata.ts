export interface IBrandData {
  brand: string,
  name: string,
  price: string,
  image_link: string,
  product_link: string,
  category: string,
  product_type: string,
  description: string
}

export const testFentyData: IBrandData[] = [
  {
    "brand": "fenty",
    "name": "MATTEMOISELLE - Plush Matte Lipstick",
    "price": "18.0",
    "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dwc8c6d1b8/hi-res/FB40005_FB4014.jpg?sw=550 550w",
    "product_link": "https://www.fentybeauty.com/mattemoiselle/plush-matte-lipstick/FB40005.html?dwvar_FB40005_color=FB4014",
    "description": "An ultra slim lipstick with a longwearing, petal-soft matte finish, created in a rainbow of 14 weightless, color-intense shades each designed to flatter all skin tones.",
    "category": "lipstick",
    "product_type": "lipstick"
  }, 
  {
    "brand": "fenty",
    "name": "ECLIPSE - 2-in-1 Glitter Release Eyeliner",
    "price": "20.0",
    "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw361a8ee8/hi-res/FB40002_FB4006.jpg?sw=550 550w",
    "product_link": "https://www.fentybeauty.com/eclipse/2-in-1-glitter-release-eyeliner/FB40002.html?dwvar_FB40002_color=FB4006",
    "description": "A limited-edition liquid eyeliner with a transforming metallic-to-glitter formula that lets you choose your own finish.",
    "category": "liquid",
    "product_type": "eyeliner"
  }, 
  {
    "brand": "fenty",
    "name": "COSMIC GLOSS - Lip Glitter",
    "price": "19.0",
    "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dwc6450206/hi-res/FB40001_FB4001.jpg?sw=550 550w",
    "product_link": "https://www.fentybeauty.com/cosmic-gloss/lip-glitter/FB40001.html?dwvar_FB40001_color=FB4001",
    "description": "A limited-edition glitter-packed lip gloss that delivers the ultimate triple-threat of creamy color, glitter, and shine.",
    "category": "lip_gloss",
    "product_type": "lipstick"
  }, 
  {
    "brand": "fenty",
    "name": "MATCH STIX - Matte Skinstick",
    "price": "25.0",
    "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw50617083/hi-res/FB30003_FB3009.jpg?sw=550 550w",
    "product_link": "https://www.fentybeauty.com/match-stix/matte-skinstick/FB30003.html?dwvar_FB30003_color=FB3009",
    "description": "A magnetized makeup stick in a longwear, light-as-air matte formula to conceal, correct, contour, and touch up in 20 shades.",
    "category": "concealer",
    "product_type": "foundation"
  }, 
  {
    "brand": "fenty",
    "name": "PRO FILT'R - Soft Matte Longwear Foundation",
    "price": "34.0",
    "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw6a5f14c4/hi-res/FB30006_FB0320.jpg?sw=550 550w",
    "product_link": "https://www.fentybeauty.com/pro-filtr/soft-matte-longwear-foundation/FB30006.html",
    "description": "A soft matte, longwear foundation with buildable, medium to full coverage, in a boundary-breaking range of 40 shades.",
    "category": null,
    "product_type": "foundation"
  }
];

const fentyProducts = 
[
  {
      "id": 850,
      "brand": "fenty",
      "name": "MATTEMOISELLE - Plush Matte Lipstick",
      "price": "18.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dwc8c6d1b8/hi-res/FB40005_FB4014.jpg?sw=550 550w",
      "product_link": "https://www.fentybeauty.com/mattemoiselle/plush-matte-lipstick/FB40005.html?dwvar_FB40005_color=FB4014",
      "website_link": "https://www.fentybeauty.com",
      "description": "An ultra slim lipstick with a longwearing, petal-soft matte finish, created in a rainbow of 14 weightless, color-intense shades each designed to flatter all skin tones.",
      "rating": null,
      "category": "lipstick",
      "product_type": "lipstick",
      "tag_list": [],
      "created_at": "2017-12-23T23:53:46.839Z",
      "updated_at": "2017-12-25T23:53:17.595Z",
      "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/850.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/850/original/open-uri20171224-4-w3yj1s?1514073895",
      "product_colors": [
          {
              "hex_value": "#072345",
              "colour_name": "Clapback - True Navy"
          },
          {
              "hex_value": "#437954",
              "colour_name": "Midnight Wasabi - Wicked Green"
          },
          {
              "hex_value": "#894134",
              "colour_name": "Shawty - Warm Chestnut"
          },
          {
              "hex_value": "#D37655",
              "colour_name": "S1ngle - Blushing Nude"
          },
          {
              "hex_value": "#FC8327",
              "colour_name": "Saw-C - Exotic Tangerine"
          },
          {
              "hex_value": "#A7453C",
              "colour_name": "Spanked - Dusty Rose"
          },
          {
              "hex_value": "#631B26",
              "colour_name": "Griselda - Bold Burgundy"
          },
          {
              "hex_value": "#9B7DC1",
              "colour_name": "One of the Boyz - Wild Lilac"
          },
          {
              "hex_value": "#6785B8",
              "colour_name": "Ya Dig?! - Periwinkle Blue"
          },
          {
              "hex_value": "#6D271A",
              "colour_name": "PMS - Moody Brown"
          },
          {
              "hex_value": "#C95E3C",
              "colour_name": "Freckle Fiesta - Spiced Terracotta"
          },
          {
              "hex_value": "#E08F71",
              "colour_name": "Up 2 No Good - Nude Peach"
          },
          {
              "hex_value": "#DC386C",
              "colour_name": "Candy Venom - Electric Pink"
          },
          {
              "hex_value": "#B6232B",
              "colour_name": "Ma'Damn - Royal Red"
          }
      ]
  },
  {
      "id": 849,
      "brand": "fenty",
      "name": "ECLIPSE - 2-in-1 Glitter Release Eyeliner",
      "price": "20.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw361a8ee8/hi-res/FB40002_FB4006.jpg?sw=550 550w",
      "product_link": "https://www.fentybeauty.com/eclipse/2-in-1-glitter-release-eyeliner/FB40002.html?dwvar_FB40002_color=FB4006",
      "website_link": "https://www.fentybeauty.com",
      "description": "A limited-edition liquid eyeliner with a transforming metallic-to-glitter formula that lets you choose your own finish.",
      "rating": null,
      "category": "liquid",
      "product_type": "eyeliner",
      "tag_list": [],
      "created_at": "2017-12-23T23:43:39.529Z",
      "updated_at": "2017-12-25T23:58:45.446Z",
      "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/849.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/849/original/open-uri20171223-4-1sk5zli?1514072784",
      "product_colors": [
          {
              "hex_value": "#122835",
              "colour_name": "Alien Bae - Blue-Black Metallic/Smoky Navy Glitter"
          },
          {
              "hex_value": "#274A45",
              "colour_name": "Nepturnt - Green-Black Metallic/Smoky Emerald Glitter"
          },
          {
              "hex_value": "#C8896E",
              "colour_name": "Later, Crater - Nude Metallic/Nude Gold Glitter"
          }
      ]
  },
  {
      "id": 848,
      "brand": "fenty",
      "name": "COSMIC GLOSS - Lip Glitter",
      "price": "19.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dwc6450206/hi-res/FB40001_FB4001.jpg?sw=550 550w",
      "product_link": "https://www.fentybeauty.com/cosmic-gloss/lip-glitter/FB40001.html?dwvar_FB40001_color=FB4001",
      "website_link": "https://www.fentybeauty.com",
      "description": "A limited-edition glitter-packed lip gloss that delivers the ultimate triple-threat of creamy color, glitter, and shine.",
      "rating": null,
      "category": "lip_gloss",
      "product_type": "lipstick",
      "tag_list": [],
      "created_at": "2017-12-23T23:43:38.786Z",
      "updated_at": "2017-12-25T23:56:53.895Z",
      "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/848.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/848/original/open-uri20171223-4-gjj2xg?1514072782",
      "product_colors": [
          {
              "hex_value": "#5B1525",
              "colour_name": "Astro-Naughty - Glittering Garnet"
          },
          {
              "hex_value": "#EB4077",
              "colour_name": "Plutonic Relationshp - Holographic Hot Pink"
          },
          {
              "hex_value": "#FE7C63",
              "colour_name": "Spacesuit - Glittering Peach"
          },
          {
              "hex_value": "#8E406D",
              "colour_name": "Gal On The Moon - Holographic Pink Orchid"
          }
      ]
  },
  {
      "id": 847,
      "brand": "fenty",
      "name": "MATCH STIX - Matte Skinstick",
      "price": "25.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw50617083/hi-res/FB30003_FB3009.jpg?sw=550 550w",
      "product_link": "https://www.fentybeauty.com/match-stix/matte-skinstick/FB30003.html?dwvar_FB30003_color=FB3009",
      "website_link": "https://www.fentybeauty.com",
      "description": "A magnetized makeup stick in a longwear, light-as-air matte formula to conceal, correct, contour, and touch up in 20 shades.",
      "rating": null,
      "category": "concealer",
      "product_type": "foundation",
      "tag_list": [],
      "created_at": "2017-12-23T23:43:36.178Z",
      "updated_at": "2017-12-25T23:51:22.527Z",
      "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/847.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/847/original/open-uri20171224-4-1se9mcb?1514074989",
      "product_colors": [
          {
              "hex_value": "#D9A877",
              "colour_name": "Maple - Neutral"
          },
          {
              "hex_value": "#EABC95",
              "colour_name": "Bamboo - Neutral"
          },
          {
              "hex_value": "#EAB087",
              "colour_name": "Honey - Warm Peach"
          },
          {
              "hex_value": "#683525",
              "colour_name": "Espresso - Cool"
          },
          {
              "hex_value": "#C59072",
              "colour_name": "Mocha - Cool"
          },
          {
              "hex_value": "#C5885D",
              "colour_name": "Suede - Warm"
          },
          {
              "hex_value": "#CE8E5C",
              "colour_name": "Latte - Warm"
          },
          {
              "hex_value": "#E1AA7F",
              "colour_name": "Caramel - Cool"
          },
          {
              "hex_value": "#DA9F65",
              "colour_name": "Wheat - Warm"
          },
          {
              "hex_value": "#EFAE83",
              "colour_name": "Peach - Cool Peach"
          },
          {
              "hex_value": "#F6D5B6",
              "colour_name": "Linen - Cool"
          },
          {
              "hex_value": "#7C411F",
              "colour_name": "Truffle - Neutral"
          },
          {
              "hex_value": "#B08B72",
              "colour_name": "Amber - Cool Contour"
          },
          {
              "hex_value": "#CF936A",
              "colour_name": "Cocoa - Cool"
          },
          {
              "hex_value": "#CB9064",
              "colour_name": "Walnut - Neutral"
          },
          {
              "hex_value": "#DA9D6F",
              "colour_name": "Almond - Cool"
          },
          {
              "hex_value": "#E2AE83",
              "colour_name": "Sand - Neutral"
          },
          {
              "hex_value": "#F7D2AC",
              "colour_name": "French Vanilla - Warm"
          },
          {
              "hex_value": "#F5DABE",
              "colour_name": "Porcelain - Cool"
          },
          {
              "hex_value": "#C9A074",
              "colour_name": "Maple - Neutral"
          }
      ]
  },
  {
      "id": 780,
      "brand": "fenty",
      "name": "PRO FILT'R - Soft Matte Longwear Foundation",
      "price": "34.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw6a5f14c4/hi-res/FB30006_FB0320.jpg?sw=550 550w",
      "product_link": "https://www.fentybeauty.com/pro-filtr/soft-matte-longwear-foundation/FB30006.html",
      "website_link": "https://www.fentybeauty.com",
      "description": "A soft matte, longwear foundation with buildable, medium to full coverage, in a boundary-breaking range of 40 shades.",
      "rating": null,
      "category": null,
      "product_type": "foundation",
      "tag_list": [],
      "created_at": "2017-12-23T22:44:31.330Z",
      "updated_at": "2017-12-25T23:55:18.683Z",
      "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/780.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/780/original/open-uri20171223-4-13jsgyc?1514069071",
      "product_colors": [
          {
              "hex_value": "#6B391E",
              "colour_name": "470 Neutral"
          },
          {
              "hex_value": "#AC6A3A",
              "colour_name": "420 Neutral"
          },
          {
              "hex_value": "#CB8458",
              "colour_name": "370 Warm"
          },
          {
              "hex_value": "#D49164",
              "colour_name": "320 Warm Peach"
          },
          {
              "hex_value": "#D49C6D",
              "colour_name": "270 Warm"
          },
          {
              "hex_value": "#F0BD96",
              "colour_name": "220 Warm Peach"
          },
          {
              "hex_value": "#E8BFA3",
              "colour_name": "170 Cool"
          },
          {
              "hex_value": "#FEE3CC",
              "colour_name": "120 Neutral"
          },
          {
              "hex_value": "#583218",
              "colour_name": "490 Cool"
          },
          {
              "hex_value": "#995933",
              "colour_name": "440 Cool"
          },
          {
              "hex_value": "#A86B3F",
              "colour_name": "390 Warm"
          },
          {
              "hex_value": "#AC7652",
              "colour_name": "340 Cool"
          },
          {
              "hex_value": "#DCB07D",
              "colour_name": "290 Neutral Olive"
          },
          {
              "hex_value": "#D9A57D",
              "colour_name": "240 Warm"
          },
          {
              "hex_value": "#EAC3A0",
              "colour_name": "190 Neutral"
          },
          {
              "hex_value": "#FBE1C6",
              "colour_name": "140 Warm"
          },
          {
              "hex_value": "#7E462D",
              "colour_name": "460 Cool"
          },
          {
              "hex_value": "#9E5D2D",
              "colour_name": "410 Cool"
          },
          {
              "hex_value": "#BE7B46",
              "colour_name": "360 Neutral Olive"
          },
          {
              "hex_value": "#D39059",
              "colour_name": "310 Warm"
          },
          {
              "hex_value": "#DCA77D",
              "colour_name": "260 Neutral"
          },
          {
              "hex_value": "#E2AD85",
              "colour_name": "210 Neutral"
          },
          {
              "hex_value": "#F5CDAA",
              "colour_name": "160 Warm Peach"
          },
          {
              "hex_value": "#FDE7DA",
              "colour_name": "110 Cool"
          },
          {
              "hex_value": "#693B21",
              "colour_name": "480 Neutral"
          },
          {
              "hex_value": "#8A512A",
              "colour_name": "430 Neutral"
          },
          {
              "hex_value": "#C9875A",
              "colour_name": "380 Cool"
          },
          {
              "hex_value": "#D39157",
              "colour_name": "330 Warm"
          },
          {
              "hex_value": "#E6AD85",
              "colour_name": "280 Warm Peach"
          },
          {
              "hex_value": "#DFAD8A",
              "colour_name": "230 Neutral"
          },
          {
              "hex_value": "#F9D5B8",
              "colour_name": "180 Warm"
          },
          {
              "hex_value": "#F2D3B2",
              "colour_name": "130 Warm"
          },
          {
              "hex_value": "#845031",
              "colour_name": "450 Warm"
          },
          {
              "hex_value": "#A75F24",
              "colour_name": "400 Warm"
          },
          {
              "hex_value": "#B97948",
              "colour_name": "350 Neutral"
          },
          {
              "hex_value": "#CC9363",
              "colour_name": "300 Neutral"
          },
          {
              "hex_value": "#E5AD7E",
              "colour_name": "250 Warm Peach"
          },
          {
              "hex_value": "#EABE9C",
              "colour_name": "200 Cool"
          },
          {
              "hex_value": "#F0D4BA",
              "colour_name": "150 Neutral"
          },
          {
              "hex_value": "#FDE9DE",
              "colour_name": "100 Neutral"
          }
      ]
  }
]