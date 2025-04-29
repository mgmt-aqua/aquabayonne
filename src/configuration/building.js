import lobbyImage from '../img/building/Lobby.png'
import buildingGif from '../img/building/building.gif'

import amenitiesGridImg from '../img/amemities/Clubroom.png'
import residencesGridImg from '../img/residences/Livingroom.png'
import neighborhoodGridImg from '../img/neighborhood/neighborhood_golf.jpg'
import foodHallGridImg from '../img/neighborhood/neighborhood_food_hall.jpg'
import contactUsGridImg from '../img/Leasing Office.png'
import bookTourGridImg from '../img/building/front_desk.png'


export const buildingInformationData = [{
    title: "Our Story",
    content: ["Nestled near the picturesque shores of the Hudson River in Bayonne, NJ, AQUA offers an unparalleled living experience that redefines luxury. AQUA is thoughtfully designed to provide residents with a harmonious blend of comfort, elegance, and modernity.", "Our apartment units range from comfortable studios to expansive two-bedroom layouts, our units feature large windows that boast breathtaking views of the Hudson River, the iconic New York City skyline, and the beautiful Bayonne golf course."],
    image: lobbyImage,
    imageAlt: 'Our Story Image'
}, {
    title: "Our Journey",
    content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta."],
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