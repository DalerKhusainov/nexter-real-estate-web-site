// FROM ASSETS
// HOUSES
import houseImg1 from "./assets/img/house-1.jpeg";
import houseImg2 from "./assets/img/house-2.jpeg";
import houseImg3 from "./assets/img/house-3.jpeg";
import houseImg4 from "./assets/img/house-4.jpeg";
import houseImg5 from "./assets/img/house-5.jpeg";
import houseImg6 from "./assets/img/house-6.jpeg";
// REALTORS
import realtorImg1 from "./assets/img/realtor-1.jpeg";
import realtorImg2 from "./assets/img/realtor-2.jpeg";
import realtorImg3 from "./assets/img/realtor-3.jpeg";

export const homesData = [
  {
    id: 1,
    houseImg: houseImg1,
    houseName: "Beautiful family house",
    location: "USA",
    rooms: 5,
    area: 325,
    price: 1200000,
    realtorId: 1,
  },
  {
    id: 2,
    houseImg: houseImg2,
    houseName: "Moders glass villa",
    location: "Canada",
    rooms: 6,
    area: 450,
    price: 2750000,
    realtorId: 3,
  },
  {
    id: 3,
    houseImg: houseImg3,
    houseName: "Cozy country house",
    location: "UK",
    rooms: 4,
    area: 250,
    price: 850000,
    realtorId: 2,
  },
  {
    id: 4,
    houseImg: houseImg4,
    houseName: "Large rustical villa",
    location: "Portugal",
    rooms: 5,
    area: 480,
    price: 1950000,
    realtorId: 1,
  },
  {
    id: 5,
    houseImg: houseImg5,
    houseName: "Majestic palace house",
    location: "Germany",
    rooms: 18,
    area: 4230,
    price: 9500000,
    realtorId: 2,
  },
  {
    id: 6,
    houseImg: houseImg6,
    houseName: "Modern family apartment",
    location: "Italy",
    rooms: 3,
    area: 180,
    price: 600000,
    realtorId: 3,
  },
];

export const realtorsData = [
  {
    id: 1,
    imgURL: realtorImg1,
    name: "Erik Feinman",
    sold: 245,
  },
  {
    id: 2,
    imgURL: realtorImg2,
    name: "Kim Brown",
    sold: 212,
  },
  {
    id: 3,
    imgURL: realtorImg3,
    name: "Toby Ramsey",
    sold: 198,
  },
];
