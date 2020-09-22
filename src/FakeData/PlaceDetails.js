import sundarban from "./Image/sundorbon.png";
import sreemangal from "./Image/Sreemongol.png";
import sajek from "./Image/Sajek.png";

import hotelImg1 from "./Image/Rectangle 28.png";
import hotelImg2 from "./Image/Rectangle 26.png";
import hotelImg3 from "./Image/Rectangle 27.png";

export const allPlaces = [
  {
    id: 1,
    placeName: "SUNDARBAN",
    image: sundarban,
    placeDetail:
      "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.It comprises closed and open mangrove forests, agriculturally used land and is intersected by multiple channels.",
    coordinate: {
      lat: 22.476412, 
      lng: 89.581010
    }
  },
  {
    id: 2,
    placeName: "SREEMANGAL",
    image: sreemangal,
    placeDetail:
      "Sreemangal is a hilly area covered with tea estates. There are 47 tea gardens in Sreemangal. A large portion of world’s highest quality tea is grown here. It is also called the city of ‘two leaves and a bud. Sreemangal is famous for nature, forests and wildlife",
    coordinate: {
      lat: 24.301756, 
      lng: 91.764298
    }
  },
  {
    id: 3,
    placeName: "SAJEK",
    image: sajek,
    placeDetail:
      "Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable..",
    coordinate: {
      lat: 23.381779, 
      lng: 92.294385
    }
  }
];

export const hotels = [
  {
    id: 1,
    img: hotelImg1,
    name: "Light Bright Air stylish apt and safe peaceful stay",
    price: 34,
    rating: "4.9(20)",
  },
  {
    id: 1,
    img: hotelImg2,
    name: "Air Lounge and pool (r&r + b&b)",
    price: 44,
    rating: "4.9(25)",
  },
  {
    id: 2,
    img: hotelImg3,
    name: "Apartment in Lost Panoroma",
    price: 52,
    rating: "4.8(10)",
  },
];