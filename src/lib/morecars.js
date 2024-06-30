const cars = [
  {
    model: "R32",
    color: "Night Black",
    transmission: "Manual",
    price: 35000,
    description: "Nissan Skyline R32, known for its speed and handling.",
    year: 1992,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Tokyo",
    seller: "Skyline Dealer",
    mileage: 75000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Cold Black",
    transmission: "Automatic",
    price: 37000,
    description: "Nissan Skyline R33, a balance of power and comfort.",
    year: 1996,
    weight: 1540, // kg
    topSpeed: 175, // mph
    engine: "RB25DET",
    edition: "GT-R",
    engineVariation: "Single-Turbo Inline-6",
    location: "Osaka",
    seller: "Performance Imports",
    mileage: 62000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2498, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Bright Red",
    transmission: "Manual",
    price: 45000,
    description: "Nissan Skyline R34, iconic in both looks and performance.",
    year: 1999,
    weight: 1560, // kg
    topSpeed: 182, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Yokohama",
    seller: "Skyline Dreams",
    mileage: 50000, // km
    acceleration: 4.9, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Sky Blue",
    transmission: "Manual",
    price: 34000,
    description: "Nissan Skyline R32, a classic Japanese sports car.",
    year: 1991,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Nagoya",
    seller: "Classic Motors",
    mileage: 83000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Forest Green",
    transmission: "Automatic",
    price: 36000,
    description: "Nissan Skyline R33, an elegant powerhouse.",
    year: 1995,
    weight: 1540, // kg
    topSpeed: 175, // mph
    engine: "RB25DET",
    edition: "GT-R",
    engineVariation: "Single-Turbo Inline-6",
    location: "Hiroshima",
    seller: "Elite Auto",
    mileage: 71000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2498, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Midnight Blue",
    transmission: "Manual",
    price: 46000,
    description: "Nissan Skyline R34, revered for its performance and design.",
    year: 2000,
    weight: 1560, // kg
    topSpeed: 182, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Fukuoka",
    seller: "High Performance Motors",
    mileage: 54000, // km
    acceleration: 4.9, // 0-60 mph in seconds
    torque: 392, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "White",
    transmission: "Manual",
    price: 33000,
    description: "Nissan Skyline R32, a true JDM legend.",
    year: 1993,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Sapporo",
    seller: "JDM Classics",
    mileage: 80000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Yellow",
    transmission: "Automatic",
    price: 35500,
    description: "Nissan Skyline R33, blending power with luxury.",
    year: 1997,
    weight: 1540, // kg
    topSpeed: 175, // mph
    engine: "RB25DET",
    edition: "GT-R",
    engineVariation: "Single-Turbo Inline-6",
    location: "Kyoto",
    seller: "Premium Auto",
    mileage: 67000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2498, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Silver",
    transmission: "Manual",
    price: 48000,
    description: "Nissan Skyline R34, ultimate performance and style.",
    year: 2001,
    weight: 1560, // kg
    topSpeed: 182, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Nagano",
    seller: "Skyline Elite",
    mileage: 58000, // km
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
    price: 34500,
    description: "Nissan Skyline R32, a timeless sports car.",
    year: 1994,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Sendai",
    seller: "Skyline Enthusiasts",
    mileage: 76000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Red",
    transmission: "Manual",
    price: 34500,
    description:
      "Nissan Skyline R32, a timeless sports car with a turbocharged engine and a rich racing heritage. Perfect for enthusiasts who appreciate classic Japanese performance.",
    year: 1994,
    weight: 1430, // kg
    topSpeed: 180, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Vancouver, Canada",
    seller: "Skyline Enthusiasts",
    mileage: 76000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 353, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Blue",
    transmission: "Automatic",
    price: 32500,
    description:
      "The Nissan Skyline R33 GT-R, known for its refined handling and powerful turbo engine. A great choice for those looking for a balance between performance and comfort.",
    year: 1996,
    weight: 1550, // kg
    topSpeed: 170, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Toronto, Canada",
    seller: "Canadian Car Classics",
    mileage: 88000, // km
    acceleration: 5.2, // 0-60 mph in seconds
    torque: 370, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Black",
    transmission: "Manual",
    price: 42000,
    description:
      "The Nissan Skyline R34 GT-R, a legendary sports car with advanced technology and a powerful turbo engine. Ideal for enthusiasts seeking a high-performance driving experience.",
    year: 1999,
    weight: 1600, // kg
    topSpeed: 190, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Montreal, Canada",
    seller: "Vancouver Speed Shop",
    mileage: 73000, // km
    acceleration: 4.9, // 0-60 mph in seconds
    torque: 388, // Nm
    horsepower: 280,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Silver",
    transmission: "Automatic",
    price: 33000,
    description:
      "The 1993 Nissan Skyline GT-R R32, a classic sports car celebrated for its racing pedigree and advanced technology. A great choice for those who love Japanese performance cars.",
    year: 1993,
    weight: 1420, // kg
    topSpeed: 175, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Calgary, Canada",
    seller: "Classic Motors Canada",
    mileage: 81000, // km
    acceleration: 5.5, // 0-60 mph in seconds
    torque: 355, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Green",
    transmission: "Manual",
    price: 34000,
    description:
      "The 1995 Nissan Skyline R33 GT-R, known for its balanced handling and strong performance. A perfect option for those who enjoy both speed and comfort.",
    year: 1995,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Ottawa, Canada",
    seller: "Auto Experts",
    mileage: 79000, // km
    acceleration: 5.3, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "White",
    transmission: "Automatic",
    price: 46000,
    description:
      "The 2000 Nissan Skyline GT-R R34, a high-performance sports car with advanced technology and a turbocharged engine. Ideal for enthusiasts who seek a top-tier driving experience.",
    year: 2000,
    weight: 1620, // kg
    topSpeed: 200, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Edmonton, Canada",
    seller: "Elite Auto Sales",
    mileage: 68000, // km
    acceleration: 4.8, // 0-60 mph in seconds
    torque: 400, // Nm
    horsepower: 280,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Yellow",
    transmission: "Manual",
    price: 35500,
    description:
      "A 1992 Nissan Skyline GT-R R32 in stunning yellow. Known for its racing success and high-performance capabilities, this car offers a thrilling driving experience.",
    year: 1992,
    weight: 1440, // kg
    topSpeed: 175, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Vancouver, Canada",
    seller: "Skyline Legends",
    mileage: 83000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 357, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Purple",
    transmission: "Automatic",
    price: 32000,
    description:
      "The 1997 Nissan Skyline R33 GT-R in a striking purple. Known for its balance of performance and luxury, it’s a great choice for driving enthusiasts.",
    year: 1997,
    weight: 1560, // kg
    topSpeed: 160, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Toronto, Canada",
    seller: "Canadian Muscle Cars",
    mileage: 86000, // km
    acceleration: 5.6, // 0-60 mph in seconds
    torque: 369, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R34",
    color: "Grey",
    transmission: "Manual",
    price: 43000,
    description:
      "The 2001 Nissan Skyline R34 GT-R in sleek grey. A high-performance sports car with a turbocharged engine and advanced features for the ultimate driving experience.",
    year: 2001,
    weight: 1610, // kg
    topSpeed: 185, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Montreal, Canada",
    seller: "Top Gear Autos",
    mileage: 72000, // km
    acceleration: 4.7, // 0-60 mph in seconds
    torque: 395, // Nm
    horsepower: 280,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R32",
    color: "Orange",
    transmission: "Automatic",
    price: 34000,
    description:
      "A vibrant 1994 Nissan Skyline GT-R R32 in orange. This model is celebrated for its exceptional performance and racing success.",
    year: 1994,
    weight: 1425, // kg
    topSpeed: 170, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Calgary, Canada",
    seller: "Canadian Car Legends",
    mileage: 81000, // km
    acceleration: 5.5, // 0-60 mph in seconds
    torque: 354, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
  {
    model: "R33",
    color: "Silver",
    transmission: "Manual",
    price: 33000,
    description:
      "The 1996 Nissan Skyline R33 GT-R in silver. Known for its superior handling and comfortable ride, this model offers a great balance of performance and everyday usability.",
    year: 1996,
    weight: 1555, // kg
    topSpeed: 165, // mph
    engine: "RB26DETT",
    edition: "GT-R",
    engineVariation: "Twin-Turbo Inline-6",
    location: "Vancouver, Canada",
    seller: "Canadian Car Classics",
    mileage: 85000, // km
    acceleration: 5.4, // 0-60 mph in seconds
    torque: 368, // Nm
    horsepower: 276,
    displacement: 2568, // cc
    src: undefined,
  },
];

export default cars;
