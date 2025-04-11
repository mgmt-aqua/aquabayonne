import amenitiesClubRoom from "../img/amemities/amenities_club_room.png";
import amenitiesGym from "../img/amemities/amenities_gym.png";
import amenitiesRendering from "../img/amemities/amenities_cover.png";
import coverImage from "../img/amemities/amenities_club_room.png";

export const amenitiesList = ["24/7 Concierge Service", "Fitness Center / Gym", "Rooftop Terrace", "Pet-Friendly", "Clubroom"]
export const amenitiesList2 = ["Outdoor BBQ Grills / Picnic Area", "Wellness Center", "Co-working Space", "On-Site Parking", "EV Charging Stations"]
export const amenitiesList3 = ["Package Room", "Bike Storage", "Food Hall", "Pedestrian Walkway", "Rentable Event Space"]
export const amenitiesList4 = ["Community Garden", "Shuttle Service", "Outdoor Fire Pits", "Resident’s Events", "Pickleball Courts"]
export const allAmenities = [amenitiesList, amenitiesList2, amenitiesList3, amenitiesList4]

export const images = [
    { src: amenitiesClubRoom, alt: 'Image 1' },
    { src: amenitiesClubRoom, alt: 'Image 2' },
    { src: amenitiesClubRoom, alt: 'Image 3' },
    { src: amenitiesGym, alt: 'Image 4' },
    { src: amenitiesGym, alt: 'Image 5' },
    { src: amenitiesGym, alt: 'Image 6' },
    { src: amenitiesRendering, alt: 'Image 7' },
    { src: amenitiesRendering, alt: 'Image 8' },
    { src: amenitiesRendering, alt: 'Image 9' }
];
export const amenitiesHighlightData = [{
    title: "Rooftop Terrace with Stunning NYC Skyline Views",
    content: ["Our luxurious rooftop terrace offers an unparalleled experience with breathtaking views of the iconic New York City skyline. Whether you're looking to unwind after a long day or entertain guests, the spacious lounge area provides the perfect setting. With comfortable seating and an inviting atmosphere, you can relax while taking in the sparkling city lights and iconic landmarks that make NYC truly one-of-a-kind. It’s more than just an amenity – it’s your personal retreat in the heart of the city."],
    image: coverImage,
    imageAlt: 'Some Image Alt'
}, {
    title: "Exclusive Club Room with Full-Service Bar",
    content: ["Step into our stylish club room, where sophistication meets relaxation. This inviting space features a full-service bar, perfect for entertaining guests or enjoying a quiet evening with a drink in hand. Whether you're hosting a gathering or simply unwinding after a busy day, the club room offers a cozy and upscale atmosphere. With modern furnishings and a chic design, it’s the ideal spot to relax, socialize, or celebrate in style."],
    image: coverImage,
    imageAlt: 'Some Image Alt'
}, {
    title: "Spacious Courtyard with Lawn, BBQ Grills, and TVs",
    content: ["Our vibrant courtyard offers the ultimate outdoor experience with expansive lawn space, perfect for relaxation or recreational activities. Equipped with BBQ grills and plenty of seating, it's an ideal setting for hosting cookouts and enjoying meals with friends and family. Plus, with strategically placed TVs, you can catch your favorite shows or sports games while soaking up the sun. Whether you're grilling, lounging, or simply enjoying the outdoors, the courtyard provides a welcoming and versatile space for all occasions."],
    image: coverImage,
    imageAlt: 'Some Image Alt'
}, {
    title: "State-of-the-Art Luxury Gym",
    content: ["Our luxury gym is designed to elevate your fitness routine with top-of-the-line equipment and a sleek, modern atmosphere. Featuring a wide range of machines, free weights, and specialized workout areas, it's the perfect space for all fitness levels. Whether you're looking to lift, run, or practice yoga, our gym offers the tools and environment you need to stay active and energized. With clean, spacious facilities and a motivating ambiance, you'll feel inspired to achieve your fitness goals every time you work out."],
    image: coverImage,
    imageAlt: 'Some Image Alt'
}]