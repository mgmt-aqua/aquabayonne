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
export const subText = "Luxury Meets Comfort";
export const quote = "Luxury Meets Serenity";
export const filterOptions = ['Studio', '1 Bed', '2 Bed'];
export const floorplanMap = {
    'Studio':  {
        startingPrice: "$1,850",
        filterOptions: {
            bedrooms: '0'
        },
        matterportUrl: "https://my.matterport.com/show/?m=iSFz2FGEQVH",
        floorplans: [{
            type: "Studio 1",
            floorplan: Studio1
        },{
            type: "Studio 2",
            floorplan: Studio2
        },{
            type: "Studio 3",
            floorplan: Studio3
        },{
            type: "Studio 4",
            floorplan: Studio4
        }]
    },
    '1 Bed': {
        startingPrice: "$2,450",
        filterOptions: {
            bedrooms: '1'
        },
        matterportUrl: "https://my.matterport.com/show/?m=2kDZPP1coSo",
        floorplans: [{
            type: "One Bed 1",
            floorplan: OneBed1
        },{
            type: "One Bed 2",
            floorplan: OneBed2
        },{
            type: "One Bed 3",
            floorplan: OneBed3
        },{
            type: "One Bed 4",
            floorplan: OneBed4
        }]
    },
    '2 Bed': {
        startingPrice: "$2,950",
        filterOptions: {
            bedrooms: '2'
        },
        matterportUrl: "https://my.matterport.com/show/?m=4QLAkwfoWwa",
        floorplans: [{
            type: "Two Bed 1",
            floorplan: TwoBed1
        },{
            type: "Two Bed 2",
            floorplan: TwoBed2
        },{
            type: "Two Bed 3",
            floorplan: TwoBed3
        },{
            type: "Two Bed 4",
            floorplan: TwoBed4
        }]
    }
}
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
        title: "Interiors",
        description: "At AQUA, interiors are more than just beautiful—they’re intentional. Every layout and finish is thoughtfully curated to enhance how you live, relax, and connect. Whether you’re savoring a quiet sunrise, entertaining guests, or simply unwinding at the end of the day, these spaces are designed to elevate every moment.",
        img: livingRoom2Bed
    },
    {
        title: "Chef Inspired Elegance",
        description: "This chef-inspired kitchen is the perfect fusion of form and function, crafted for both everyday elegance and elevated entertaining. The striking quartz island offers a central gathering point, ideal for morning coffee, casual dining, or hosting with style. Matte cabinetry paired with sleek stainless steel appliances creates a bold yet balanced aesthetic. Every detail has been thoughtfully selected to inspire creativity, comfort, and culinary moments worth savoring.",
        img: resideneces2
    },
    {
        title: "Your Personal Spa Retreat",
        description: "Step into your own private sanctuary where everyday routines feel like rituals. This beautifully designed full bath offers more than just functionality—it delivers a sense of serenity with clean lines, warm wood finishes, and soft, neutral tones. Whether you’re soaking in a long bath with a glass of wine or letting your favorite fragrance drift through the steam, this is your space to pause, reset, and indulge in the simple luxury of feeling at home.",
        img: resideneces3
    },
    {
        title: "Spacious Living, Thoughtfully Designed",
        description: "At AQUA, generous living rooms provide the perfect canvas for entertaining, relaxing, or simply enjoying the view, while intelligently planned closets offer abundant space to keep life beautifully organized. It’s a harmonious blend of openness and order, where comfort meets convenience in every square foot.",
        img: resideneces4
    }
];