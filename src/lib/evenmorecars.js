const cars = [
  {
    model: "R32",
    color: "Blue",
    transmission: "Manual",
    price: 29000,
    description:
      "A classic 1993 Nissan Skyline R32 GT-R in blue, known for its raw performance and iconic status among car enthusiasts.",
    year: 1993,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Tokyo, Japan",
    seller: "Skyline Enthusiasts",
    mileage: 76000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "White",
    transmission: "Automatic",
    price: 45000,
    description:
      "A stunning 2001 Nissan Skyline R34 GT-R in white, offering advanced technology and unparalleled performance.",
    year: 2001,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Osaka, Japan",
    seller: "JDM Legends",
    mileage: 42000, // km
    acceleration: 5.0, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Black",
    transmission: "Manual",
    price: 34000,
    description:
      "A sleek 1996 Nissan Skyline R33 GT-R in black, known for its superior handling and balanced performance.",
    year: 1996,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "London, UK",
    seller: "Skyline Imports",
    mileage: 67000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Silver",
    transmission: "Manual",
    price: 47000,
    description:
      "A pristine 1999 Nissan Skyline R34 GT-R in silver, renowned for its cutting-edge technology and exceptional speed.",
    year: 1999,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Los Angeles, CA",
    seller: "Skyline Motors USA",
    mileage: 51000, // km
    acceleration: 4.9, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Red",
    transmission: "Automatic",
    price: 31000,
    description:
      "A 1995 Nissan Skyline R33 GT-R in red, combining aggressive styling with impressive performance.",
    year: 1995,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Birmingham, UK",
    seller: "Skyline Dreams",
    mileage: 78000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Green",
    transmission: "Manual",
    price: 28000,
    description:
      "A rare 1994 Nissan Skyline R32 GT-R in green, admired for its heritage and driving experience.",
    year: 1994,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "New York, NY",
    seller: "Performance Imports USA",
    mileage: 69000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Yellow",
    transmission: "Automatic",
    price: 46000,
    description:
      "A vibrant 2000 Nissan Skyline R34 GT-R in yellow, showcasing advanced features and thrilling speed.",
    year: 2000,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Miami, FL",
    seller: "High Performance Motors",
    mileage: 44000, // km
    acceleration: 5.0, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Blue",
    transmission: "Manual",
    price: 33000,
    description:
      "A 1997 Nissan Skyline R33 GT-R in blue, offering a perfect blend of performance and comfort.",
    year: 1997,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Nagoya, Japan",
    seller: "JDM Classics",
    mileage: 76000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Black",
    transmission: "Automatic",
    price: 29500,
    description:
      "A stylish 1992 Nissan Skyline R32 GT-R in black, known for its aggressive looks and legendary performance.",
    year: 1992,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Osaka, Japan",
    seller: "Skyline Enthusiasts",
    mileage: 85000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Silver",
    transmission: "Manual",
    price: 49000,
    description:
      "A 2002 Nissan Skyline R34 GT-R in silver, featuring cutting-edge technology and unbeatable performance.",
    year: 2002,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Chicago, IL",
    seller: "Skyline Legends",
    mileage: 51000, // km
    acceleration: 4.9, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Red",
    transmission: "Manual",
    price: 31000,
    description:
      "A 1993 Nissan Skyline R32 GT-R in red, a true icon in the world of sports cars, offering an exhilarating driving experience.",
    year: 1993,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "San Francisco, CA",
    seller: "Classic Motors USA",
    mileage: 72000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Green",
    transmission: "Automatic",
    price: 45500,
    description:
      "A 2001 Nissan Skyline R34 GT-R in green, offering advanced technology and a thrilling driving experience.",
    year: 2001,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Seattle, WA",
    seller: "Elite Auto",
    mileage: 49000, // km
    acceleration: 5.0, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Yellow",
    transmission: "Manual",
    price: 33500,
    description:
      "A 1997 Nissan Skyline R33 GT-R in yellow, known for its superior handling and impressive performance.",
    year: 1997,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Manchester, UK",
    seller: "Skyline Imports",
    mileage: 70000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "White",
    transmission: "Automatic",
    price: 32000,
    description:
      "A 1994 Nissan Skyline R32 GT-R in white, a perfect blend of style and performance.",
    year: 1994,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Los Angeles, CA",
    seller: "Skyline Motors USA",
    mileage: 74000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Black",
    transmission: "Manual",
    price: 47000,
    description:
      "A 2000 Nissan Skyline R34 GT-R in black, offering exceptional speed and advanced features.",
    year: 2000,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Birmingham, UK",
    seller: "Skyline Dreams",
    mileage: 45000, // km
    acceleration: 5.0, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Silver",
    transmission: "Manual",
    price: 35000,
    description:
      "A 1995 Nissan Skyline R33 GT-R in silver, a true icon in the automotive world, offering unmatched performance.",
    year: 1995,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Tokyo, Japan",
    seller: "Skyline Legends",
    mileage: 67000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Blue",
    transmission: "Automatic",
    price: 29000,
    description:
      "A 1992 Nissan Skyline R32 GT-R in blue, a perfect blend of classic styling and modern performance.",
    year: 1992,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "New York, NY",
    seller: "Performance Imports USA",
    mileage: 86000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Red",
    transmission: "Manual",
    price: 46000,
    description:
      "A 2001 Nissan Skyline R34 GT-R in red, showcasing advanced technology and thrilling speed.",
    year: 2001,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Seattle, WA",
    seller: "High Performance Motors",
    mileage: 47000, // km
    acceleration: 5.0, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Yellow",
    transmission: "Automatic",
    price: 32000,
    description:
      "A 1996 Nissan Skyline R33 GT-R in yellow, known for its superior handling and comfortable ride.",
    year: 1996,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Nagoya, Japan",
    seller: "JDM Classics",
    mileage: 80000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "White",
    transmission: "Manual",
    price: 31000,
    description:
      "A 1993 Nissan Skyline R32 GT-R in white, a timeless sports car with a rich history.",
    year: 1993,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "San Francisco, CA",
    seller: "Classic Motors USA",
    mileage: 71000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Silver",
    transmission: "Automatic",
    price: 47000,
    description:
      "A 2000 Nissan Skyline R34 GT-R in silver, featuring advanced features and a thrilling driving experience.",
    year: 2000,
    weight: 1560, // kg
    topSpeed: 155, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Los Angeles, CA",
    seller: "Skyline Motors USA",
    mileage: 46000, // km
    acceleration: 5.0, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
];

export default cars;
