import bedRoom1 from '../img/residences/Bedroom 1.png'
import bedRoom2 from '../img/residences/Bedroom 2.png'
import bedRoom3 from '../img/residences/Bedroom Upscale.png'
import bathRoom1 from '../img/residences/Bathroom.png'
import bathRoom2 from '../img/residences/Bathroom 2.png'
import livingRoom1Bed from '../img/residences/Livingroom.png'
import livingRoomStudio from '../img/residences/Livingroom Studio.png'
import livingRoom2Bed from '../img/residences/Living Room 2 Bed.png'
import kitchen from '../img/residences/residences_2.PNG'
import resideneces2 from '../img/residences/residences_2.PNG'
import resideneces3 from '../img/residences/residences_3.PNG'
import resideneces4 from '../img/residences/residences_4.PNG'

// Floor Plans
import Studio1 from '../assets/Floor Plans/S1.jpg'
import Studio2 from '../assets/Floor Plans/S2.jpg'
import Studio3 from '../assets/Floor Plans/S3.jpg'
import Studio4 from '../assets/Floor Plans/S4.jpg'

import OneBed1 from '../assets/Floor Plans/A1.jpg'
import OneBed2 from '../assets/Floor Plans/A2.jpg'
import OneBed3 from '../assets/Floor Plans/A3.jpg'
import OneBed4 from '../assets/Floor Plans/AD1.jpg'

import TwoBed1 from '../assets/Floor Plans/B1.jpg'
import TwoBed2 from '../assets/Floor Plans/B2.jpg'
import TwoBed3 from '../assets/Floor Plans/B3.jpg'
import TwoBed4 from '../assets/Floor Plans/B4.jpg'

export const pageTitle = "Residences";
export const subText = "Your Ideal Living Space Awaits";
export const quote = "Where Luxury Meets Comfort";
export const filterOptions = ['All', 'Studio', '1 Bed', '2 Bed'];
export const inventoryOptions = [{
    id: "S1",
    type: "Studio",
    bedrooms: "Studio",
    bathrooms: "1",
    floorplan: Studio1,
    sqft: "551 sqft.",
    images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
}, {
    id: "S2",
    type: "Studio",
    bedrooms: "Studio",
    bathrooms: "1",
    floorplan: Studio2,
    sqft: "550 sqft.",
    images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
}, {
    id: "S3",
    type: "Studio",
    bedrooms: "Studio",
    bathrooms: "1",
    floorplan: Studio3,
    sqft: "550 sqft.",
    images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
}, {
    id: "S4",
    type: "Studio",
    bedrooms: "Studio",
    bathrooms: "1",
    floorplan: Studio4,
    sqft: "550 sqft.",
    images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
}, {
    id: "A1",
    type: "1 Bed",
    bedrooms: "1",
    bathrooms: "1",
    floorplan: OneBed1,
    sqft: "708-734 sqft.",
    images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
}, {
    id: "A2",
    type: "1 Bed",
    bedrooms: "1",
    bathrooms: "1",
    floorplan: OneBed2,
    sqft: "650-652 sqft.",
    images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
}, {
    id: "A3",
    type: "1 Bed",
    bedrooms: "1",
    bathrooms: "1",
    floorplan: OneBed3,
    sqft: "704 sqft.",
    images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
},
{
    id: "AD1",
    type: "1 Bed",
    bedrooms: "1",
    bathrooms: "1",
    floorplan: OneBed4,
    sqft: "827 sqft.",
    images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
},
{
    id: "B1",
    type: "2 Bed",
    bedrooms: "2",
    bathrooms: "1",
    floorplan: TwoBed1,
    sqft: "1,030-1,054 sqft.",
    images: [Studio1, livingRoom2Bed, bathRoom2, bedRoom1, bedRoom2, kitchen]
},
{
    id: "B2",
    type: "2 Bed",
    bedrooms: "2",
    bathrooms: "1",
    floorplan: TwoBed2,
    sqft: "953 sqft.",
    images: [Studio1, livingRoom2Bed, bathRoom2, bedRoom1, bedRoom2, kitchen]
},
{
    id: "B3",
    type: "2 Bed",
    bedrooms: "2",
    bathrooms: "2",
    floorplan: TwoBed3,
    sqft: "1,063 sqft.",
    images: [Studio1, livingRoom2Bed, bathRoom1, bathRoom2, bedRoom1, bedRoom2, kitchen]
},
{
    id: "B4",
    type: "2 Bed",
    bedrooms: "2",
    bathrooms: "2",
    floorplan: TwoBed4,
    sqft: "1,046 sqft.",
    images: [Studio1, livingRoom2Bed, bathRoom1, bathRoom2, bedRoom1, bedRoom2, kitchen]
}]

export const residencesHighlightData = [
    {
        title: "Spacious Living Rooms",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: livingRoom2Bed
    },
    {
        title: "Modern Kitchen",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: resideneces2
    },
    {
        title: "Luxurious Bathrooms",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: resideneces3
    },
    {
        title: "Private Balconies",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: resideneces4
    }
];