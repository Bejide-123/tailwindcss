import House1 from './osapa1.jpeg'
import House2 from './osapa2.jpeg'
import House3 from './osapa3.jpeg'
import House4 from './osapa4.jpeg'
import House5 from './osapa5.jpeg'
import House6 from './osapa6.jpeg'
import House8 from './House 8.jpg';
import House9 from './2bed 1.jpg';
import House10 from './2bed 2.jpg';
import House11 from './2bed 3.jpg';
import House12 from './2bed 4.jpg';
import House13 from './2bed 5.jpg';
import House14 from './lekki1.jpg';
import House15 from './lekki2.jpg';
import House16 from './lekki3.jpg';
import House17 from './lekki4.jpg';
import House18 from './surulere1.jpg';
import House19 from './lere2.jpg';
import House20 from './lere3.jpg';
import House21 from './lere4.jpg';
import House22 from './Eko1.webp';
import House23 from './Eko2.webp';
import House24 from './Eko3.webp';
import House25 from './Eko4.webp';
import House26 from './ikeja1.jpeg';
import House27 from './ikeja2.jpeg';
import House28 from './ikeja3.jpeg';
import House29 from './ikeja4.jpeg';
import House30 from './ikeja5.jpeg';
import House31 from './Eko5.jpg';
import avatar1 from './avatar1.jpg';
import avatar2 from './avatar 2.jpg';
import avatar3 from './avatar 3.avif';
import avatar4 from './avatar 4.avif';
import logo from './logo.webp';

export const assets = {
  House1,
  House2,
  House3,
  House4,
  House5,
  House6,
  House8,
  House9,
  House10,
  House11,
  House12,
  House13,
  House14,
  House15,
  House16,
  House17,
  House18,
  House19,
  House20,
  House21,
  House22,
  House23,
  House24,
  House25,
  House26,
  House27,
  House28,
  House29,
  House30,
  avatar1,
  avatar2,
  avatar3,
  avatar4
  , logo
};

export const properties = [
  {
    title: "Modern Family Duplex",
    price: "$350000",
    location: "Lekki, Lagos",
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "Duplex",
    status: "For Sale",
    image: House14,
    images: [House14, House15, House16, House17],
    description:
      "A stylish duplex offering spacious rooms, a private garden, and modern finishes. Perfect for a growing family looking to settle in a serene neighborhood."
  },
  {
    title: "Luxury 4-Bedroom Villa",
    price: "$720000",
    location: "Banana Island, Lagos",
    bedrooms: 4,
    bathrooms: 5,
    propertyType: "Villa",
    status: "For Sale",
    image: House1,
    images: [House1, House2, House3, House4, House5, House6],
    description:
      "An exquisite villa with state-of-the-art interiors, a swimming pool, and panoramic ocean views. Designed for ultimate comfort and luxury living."
  },
  {
    title: "Cozy 2-Bedroom Apartment",
    price: "$180000",
    location: "Victoria Island, Lagos",
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Apartment",
    status: "For Sale",
    image: House9,
    images: [House9, House10, House11, House12, House13],
    description:
      "A comfortable and well-finished apartment located in the heart of the city. Ideal for young professionals seeking convenience and style."
  },
  {
    title: "Contemporary Smart Home",
    price: "$450000",
    location: "Ikeja GRA, Lagos",
    bedrooms: 3,
    bathrooms: 4,
    propertyType: "Smart Home",
    status: "For Sale",
    image: House26,
    images: [House26, House27, House28, House29, House30],
    description:
      "A cutting-edge smart home equipped with advanced automation systems, spacious interiors, and sleek contemporary design."
  },
  {
    title: "Seaside Penthouse Suite",
    price: "$900000",
    location: "Eko Atlantic, Lagos",
    bedrooms: 5,
    bathrooms: 5,
    propertyType: "Penthouse",
    status: "For Sale",
    image: House31,
    images: [House31, House22, House23, House24, House25],
    description:
      "A lavish penthouse boasting breathtaking sea views, expansive terraces, and top-class amenities for a truly luxurious experience."
  },
  {
    title: "CityLine Flats",
    price: "$280000",
    location: "Surulere, Lagos",
    bedrooms: 3,
    bathrooms: 3,
    propertyType: "Townhouse",
    status: "For Rent",
    image: House18,
    images: [House18, House19, House20, House21],
    description:
      "A contemporary townhouse offering comfortable living spaces and easy access to schools, shopping, and public transport."
  }
];

export const testimonials = [
  // {
  //   name: "Chiamaka Okoye",
  //   image: avatar4, // use the imported variable, not a string
  //   role: "Interior Designer",
  //   rating: 5,
  //   comment: "Finding our dream home was so easy with this company. Their service was professional and fast! They listened to our needs, showed us several beautiful options, and handled all the paperwork without stress. I couldn’t be happier with the entire experience."
  // },
  {
    name: "Tunde Adeyemi",
    image: avatar2,
    role: "Software Engineer",
    rating: 4,
    comment: "They guided me through every step of the buying process. I’m really happy with my new home. The team was transparent, gave me honest advice, and always responded quickly whenever I had questions or concerns. They made everything simple and smooth."
  },
  {
    name: "Fatima Bello",
    image: avatar3,
    role: "Banker",
    rating: 5,
    comment: "Amazing experience! The team was patient, honest, and helped me find exactly what I wanted. They paid attention to every detail, from the location to the design, and even helped negotiate the best deal possible. I truly felt supported throughout."
  },
  {
    name: "Emeka Uzo",
    image: avatar1,
    role: "Entrepreneur",
    rating: 4,
    comment: "Smooth and stress-free. I got a great deal on my apartment and I recommend them to everyone. Their agents are knowledgeable, polite, and genuinely care about helping you find the right place. It felt like they were part of my journey, not just selling."
  }
];