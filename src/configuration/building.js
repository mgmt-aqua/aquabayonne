import lobbyImage from '../img/building/Lobby.png'
import buildingGif from '../img/building/building.gif'

import amenitiesGridImg from '../img/amemities/Coworking.png'
import residencesGridImg from '../img/residences/Living Room 2 Bed.png'
import neighborhoodGridImg from '../img/neighborhood/neighborhood_golf.jpg'
import foodHallGridImg from '../img/neighborhood/food_hall_bar.jpg'
import contactUsGridImg from '../img/Leasing Office.png'
import bookTourGridImg from '../img/building/front_desk.png'


export const buildingInformationData = [{
    title: "Our Story",
    content: ["Nestled near the picturesque shores of the Hudson River in Bayonne, NJ, AQUA offers an unparalleled living experience that redefines luxury. AQUA is thoughtfully designed to provide residents with a harmonious blend of comfort, elegance, and modernity.", "Our apartment units range from comfortable studios to expansive two-bedroom layouts, our units feature large windows that boast breathtaking views of the Hudson River, the iconic New York City skyline, and the beautiful Bayonne golf course."],
    image: lobbyImage,
    imageAlt: 'Our Story Image'
}, {
    title: "Our Journey",
    content: ["Aqua has been a true labor of love—born from a desire to create more than just a place to live. We set out to build a home that brings people together, where design meets purpose, and every space invites both comfort and connection. From the earliest sketches to the finishing touches, we carefully considered how residents would live, gather, and unwind here. The result is a building that feels warm, welcoming, and deeply rooted in its surroundings—an everyday retreat on the Bayonne waterfront, made for real life and shared moments."],
    image: buildingGif,
    imageAlt: 'Our Journey Image'
}]

export const buildingGridBlocksContent = [{
    title: "Amenities",
    description: "Experience the comfort and luxury.",
    img: amenitiesGridImg,
    link: '/amenities'
},
{
    title: "Residences",
    description: "Find your perfect home here.",
    img: residencesGridImg,
    link: '/residences'
},
{
    title: "Neighborhood",
    description: "A vibrant community awaits you.",
    img: neighborhoodGridImg,
    link: '/neighborhood'
},
{
    title: "Food Hall",
    description: "Savor the Art of Our Kitchen.",
    img: foodHallGridImg,
    link: '/explore'
},
{
    title: "Book A Tour",
    description: "See the space in person, schedule now!",
    img: bookTourGridImg,
    link: '/inquire'
},
{
    title: "Contact Us",
    description: "We're here to help you anytime.",
    img: contactUsGridImg,
    link: '/contact'
}]