const users = [
  {
    id: "4000",
    name: "KobePerformance",
    cars: ["fb2e92fd-fe50-47b0-a394-b1a30ed56c2c"],
    rating: 4.7,
    location: "Kobe, Japan",
    src: undefined,
    description:
      "High-performance vehicles from Kobe, known for precision and speed.",
    comments: ["400", "401"],
    posts: ["500", "501"],
    questions: ["600", "601"],
    reviews: ["700", "701"],
  },
  {
    id: "4001",
    name: "NagasakiSpeedFactory",
    cars: ["f08c3a34-acef-4131-8d55-b977c28a6106"],
    rating: 4.8,
    location: "Nagasaki, Japan",
    src: undefined,
    description: "Specializing in high-speed performance upgrades and imports.",
    comments: ["402", "403"],
    posts: ["502", "503"],
    questions: ["602", "603"],
    reviews: ["702", "703"],
  },
  {
    id: "4002",
    name: "HiroshimaSpeedWorks",
    cars: ["c6617fe7-fe07-4c1b-8abe-16263fe8e85d"],
    rating: 4.6,
    location: "Hiroshima, Japan",
    src: undefined,
    description: "Performance tuning and customization from Hiroshima.",
    comments: ["404", "405"],
    posts: ["504", "505"],
    questions: ["604", "605"],
    reviews: ["704", "705"],
  },
  {
    id: "4003",
    name: "Skyline Dealer",
    cars: ["3a0b2d71-74f0-4e61-a674-f73a6ffb4e13"],
    rating: 4.9,
    location: "Tokyo, Japan",
    src: undefined,
    description: "Your trusted dealer for all Skyline models.",
    comments: ["406", "407"],
    posts: ["506", "507"],
    questions: ["606", "607"],
    reviews: ["706", "707"],
  },
  {
    id: "4004",
    name: "Performance Imports",
    cars: ["5936e2b6-a5e1-4577-a698-6949c2d5de12"],
    rating: 4.5,
    location: "Nagoya, Japan",
    src: undefined,
    description:
      "Bringing you the best performance imports from around the world.",
    comments: ["408", "409"],
    posts: ["508", "509"],
    questions: ["608", "609"],
    reviews: ["708", "709"],
  },
  {
    id: "4005",
    name: "Skyline Dreams",
    cars: ["61d32c2f-0278-4134-a8c5-741ab17cee5c"],
    rating: 4.7,
    location: "Osaka, Japan",
    src: undefined,
    description: "Making your Skyline dreams come true with top-notch models.",
    comments: ["410", "411"],
    posts: ["510", "511"],
    questions: ["610", "611"],
    reviews: ["710", "711"],
  },
  {
    id: "4006",
    name: "Classic Motors",
    cars: [
      "3460eaac-465e-46d1-ba9d-94153b8b11f9",
      "b4381d72-6e5f-4ac6-935e-76742b5c4dc5",
    ],
    rating: 4.4,
    location: "Berlin, Germany",
    src: undefined,
    description: "Specialists in classic and vintage car sales.",
    comments: ["412", "413"],
    posts: ["512", "513"],
    questions: ["612", "613"],
    reviews: ["712", "713"],
  },
  {
    id: "4007",
    name: "Elite Auto",
    cars: ["8747ef94-c7d4-4c1e-94f7-aa57346bd709"],
    rating: 4.8,
    location: "Munich, Germany",
    src: undefined,
    description: "High-end automobiles for discerning customers.",
    comments: ["414", "415"],
    posts: ["514", "515"],
    questions: ["614", "615"],
    reviews: ["714", "715"],
  },
  {
    id: "4008",
    name: "High Performance Motors",
    cars: ["ea681719-9c0c-402e-a341-5decae739102"],
    rating: 4.7,
    location: "Frankfurt, Germany",
    src: undefined,
    description: "Delivering high-performance vehicles with unmatched service.",
    comments: ["416", "417"],
    posts: ["516", "517"],
    questions: ["616", "617"],
    reviews: ["716", "717"],
  },
  {
    id: "4009",
    name: "JDM Classics",
    cars: ["d73ed0c8-e0d7-49e6-a9dc-dbe89c08e831"],
    rating: 4.9,
    location: "Hamburg, Germany",
    src: undefined,
    description: "Classic Japanese cars, restored to their former glory.",
    comments: ["418", "419"],
    posts: ["518", "519"],
    questions: ["618", "619"],
    reviews: ["718", "719"],
  },
  {
    id: "4010",
    name: "Premium Auto",
    cars: ["207109d8-5e97-4508-bc70-20e01a54cb60"],
    rating: 4.8,
    location: "Cologne, Germany",
    src: undefined,
    description: "Premium cars for premium customers, unmatched quality.",
    comments: ["420", "421"],
    posts: ["520", "521"],
    questions: ["620", "621"],
    reviews: ["720", "721"],
  },
  {
    id: "4011",
    name: "Skyline Elite",
    cars: ["75471b02-698d-4980-a272-cd34a7177f0d"],
    rating: 4.7,
    location: "Dusseldorf, Germany",
    src: undefined,
    description: "Exclusive Skyline models, delivered with elite service.",
    comments: ["422", "423"],
    posts: ["522", "523"],
    questions: ["622", "623"],
    reviews: ["722", "723"],
  },
  {
    id: "4012",
    name: "Skyline Enthusiasts",
    cars: [
      "6e56f20d-5dc6-43b0-a9cb-7e37fe95a53e",
      "48e24c58-6c52-4fdc-a645-5c8a540c15e2",
    ],
    rating: 4.9,
    location: "Tokyo, Japan",
    src: undefined,
    description: "Dedicated to maintaining the legacy of Skylines.",
    comments: ["424", "425"],
    posts: ["524", "525"],
    questions: ["624", "625"],
    reviews: ["724", "725"],
  },
  {
    id: "4013",
    name: "Canadian Car Classics",
    cars: [
      "f1eceb03-f079-4c65-82b2-bc10f3b9c0ba",
      "f3316dad-f14d-42c7-b7bc-2a0d093e126f",
    ],
    rating: 4.8,
    location: "Toronto, Canada",
    src: undefined,
    description: "Classic car imports with a Canadian touch.",
    comments: ["426", "427"],
    posts: ["526", "527"],
    questions: ["626", "627"],
    reviews: ["726", "727"],
  },
  {
    id: "4014",
    name: "Vancouver Speed Shop",
    cars: ["78eaf404-c5ee-4538-a439-f086b995737e"],
    rating: 4.7,
    location: "Vancouver, Canada",
    src: undefined,
    description: "High-speed performance and tuning specialists.",
    comments: ["428", "429"],
    posts: ["528", "529"],
    questions: ["628", "629"],
    reviews: ["728", "729"],
  },
  {
    id: "4015",
    name: "Classic Motors Canada",
    cars: ["b4381d72-6e5f-4ac6-935e-76742b5c4dc5"],
    rating: 4.6,
    location: "Montreal, Canada",
    src: undefined,
    description: "Preserving the legacy of classic cars in Canada.",
    comments: ["430", "431"],
    posts: ["530", "531"],
    questions: ["630", "631"],
    reviews: ["730", "731"],
  },
  {
    id: "4016",
    name: "Auto Experts",
    cars: ["961ed13a-9fb1-4107-9f49-09890efd1a16"],
    rating: 4.6,
    location: "Ottawa, Canada",
    src: undefined,
    description: "Experts in the field of automotive sales and service.",
    comments: ["432", "433"],
    posts: ["532", "533"],
    questions: ["632", "633"],
    reviews: ["732", "733"],
  },
  {
    id: "4017",
    name: "Elite Auto Sales",
    cars: ["2060d2a6-a1da-4295-9821-95dca6c328a2"],
    rating: 4.9,
    location: "Calgary, Canada",
    src: undefined,
    description: "Providing elite vehicles with exceptional service.",
    comments: ["434", "435"],
    posts: ["534", "535"],
    questions: ["634", "635"],
    reviews: ["734", "735"],
  },
  {
    id: "4018",
    name: "Skyline Legends",
    cars: ["50e42b55-fb97-45bd-89f6-1f40df9dbc44"],
    rating: 4.7,
    location: "Edmonton, Canada",
    src: undefined,
    description: "Legendary Skylines, brought to you with care.",
    comments: ["436", "437"],
    posts: ["536", "537"],
    questions: ["636", "637"],
    reviews: ["736", "737"],
  },
  {
    id: "4019",
    name: "Canadian Muscle Cars",
    cars: ["bdb63a49-8075-4a4a-ac92-7fd0d12544a9"],
    rating: 4.5,
    location: "Winnipeg, Canada",
    src: undefined,
    description: "Bringing you the best of Canadian muscle cars.",
    comments: ["438", "439"],
    posts: ["538", "539"],
    questions: ["638", "639"],
    reviews: ["738", "739"],
  },
  {
    id: "4020",
    name: "Top Gear Autos",
    cars: ["44d81301-34ee-4312-a71b-73356c8f26d5"],
    rating: 4.8,
    location: "Quebec City, Canada",
    src: undefined,
    description: "Top gear automobiles with top-notch service.",
    comments: ["440", "441"],
    posts: ["540", "541"],
    questions: ["640", "641"],
    reviews: ["740", "741"],
  },
  {
    id: "4021",
    name: "Canadian Car Legends",
    cars: ["5853dc7a-4b54-400c-b879-19c9d35e4f43"],
    rating: 4.9,
    location: "Victoria, Canada",
    src: undefined,
    description: "Legendary cars with a Canadian heritage.",
    comments: ["442", "443"],
    posts: ["542", "543"],
    questions: ["642", "643"],
    reviews: ["742", "743"],
  },
];

export default users;
