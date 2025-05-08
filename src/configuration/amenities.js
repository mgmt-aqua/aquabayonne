import amenitiesClubRoom from "../img/amemities/amenities_club_room.png";
import amenitiesGym from "../img/amemities/amenities_gym.png";
import amenitiesRendering from "../img/amemities/amenities_cover.png";

import coworkingSpace from '../img/amemities/Coworking.png'
import mailRoom from '../img/amemities/Mailroom upscale.png'
import clubRoom from '../img/amemities/Clubroom.png'
import clubRoomBar from '../img/amemities/club_room_bar.jpg'
import roofDeck1 from '../img/amemities/Roofdeck.png'
import roofDeck2 from '../img/amemities/Roofdeck (1).png'
import roofDeck3 from '../img/amemities/Roofdeck (2).png'
import roofDeckRender from '../img/amemities/Roofdeck Render.png'
import pedestrianWalkwayRender from '../img/amemities/Walkway Render.png'
import pickleball from '../img/amemities/pickleball.jpg'
import basketball from '../img/amemities/basketball.jpg'
import foodHall from '../img/neighborhood/food_hall_bar.jpg'

export const amenitiesList = ["24/7 Concierge Service", "Fitness Center / Gym", "Rooftop Terrace", "Pet-Friendly", "Clubroom"]
export const amenitiesList2 = ["Outdoor BBQ Grills / Picnic Area", "Wellness Center", "Co-working Space", "On-Site Parking", "EV Charging Stations"]
export const amenitiesList3 = ["Package Room", "Bike Storage", "Food Hall", "Pedestrian Walkway", "Rentable Event Space"]
export const amenitiesList4 = ["Community Garden", "Shuttle Service", "Outdoor Fire Pits", "Resident’s Events", "Pickleball Courts"]
export const allAmenities = [amenitiesList, amenitiesList2, amenitiesList3, amenitiesList4]

export const images = [
    { src: amenitiesClubRoom, alt: 'Image 1' },
    { src: clubRoom, alt: 'Image 2' },
    { src: clubRoomBar, alt: 'Image 3' },
    { src: roofDeck1, alt: 'Roof Deck Full' },
    { src: roofDeck2, alt: 'Roof Deck Bayonne Bridge' },
    { src: roofDeck3, alt: 'Roof Deck NYC' },
    { src: mailRoom, alt: 'Image 7' },
    { src: coworkingSpace, alt: 'Image 8' },
    { src: amenitiesRendering, alt: 'Image 9' }
];
export const amenitiesHighlightData = [{
    title: "Club Room",
    content: ["AQUA’s club room blends classic style with a modern edge, offering a sophisticated setting curated for both comfort and character. Tufted leather seating, a sleek stone-accented bar, and a pool table anchor the space in timeless elegance, while expansive windows fill it with natural light. Sculptural details, contemporary furnishings, and an iconic red telephone booth add a distinct sense of style—ideal for quiet workdays, intimate gatherings, or unwinding in good company."],
    image: clubRoom,
    imageAlt: 'Club Room'
}, {
    title: "The Co-Working Lounge",
    content: ["AQUA’s sun-drenched coworking lounge is more than just a workspace — it’s a sanctuary for focus and creativity. Natural light pours in through expansive windows, energizing the space and boosting productivity throughout the day. The soft, neutral palette is purposefully chosen to foster calm and clarity, while subtle accents of teal and orange add vibrancy without distraction. With ergonomic seating, ample desk space, and refined design touches, this serene environment supports both collaboration and deep, uninterrupted work."],
    image: coworkingSpace,
    imageAlt: 'The Co-Working Lounge'
}, {
    title: "The Rooftop at AQUA",
    content: ["Overlooking Bayonne and the Manhattan skyline, AQUA’s rooftop deck is a spacious escape designed for both relaxation and gathering.With unobstructed, sweeping views of the Manhattan skyline, the Hudson River, and the dynamic port landscape, this expansive space sets the stage for unforgettable moments—whether you're unwinding with a cocktail or hosting an elegant event under the stars.", "Thoughtfully designed with a full-service wet bar, plush lounge seating, and shaded daybeds, the rooftop invites day-to-night relaxation and celebration. With space for up to 300 guests, it easily transforms into a stunning venue for private events, social gatherings, or community occasions—all set against one of New Jersey’s most iconic backdrops."],
    image: roofDeckRender,
    imageAlt: 'The Rooftop at AQUA'
}, {
    title: "Terrace at AQUA",
    content: ["AQUA’s exclusive second-floor amenity deck is a seamless extension of elevated living, blurring the lines between indoor elegance and outdoor serenity. Connected directly to the resident Club Room, this beautifully landscaped retreat offers an intimate, resort-like escape just steps from home.", "Designed with wellness and community in mind, the deck features lush greenery, cozy lounge seating, social firepit nooks, and entertainment-ready spaces, including game tables and dining zones. For health enthusiasts, a dedicated yoga corner offers the perfect setting to stretch, breathe, and move in the open air—all while enjoying the comfort of privacy. Direct access to the fitness center makes it effortless to transition between indoor workouts and revitalizing outdoor flows, creating a holistic wellness experience unlike any other."],
    image: amenitiesRendering,
    imageAlt: "Terrace at AQUA",
},{
    title: "The Fitness Center",
    content: ["Step into AQUA’s state-of-the-art fitness center, and experience. With its sleek, futuristic design, dynamic lighting, and wall-to-wall equipment, this isn’t just a gym—it’s a catalyst for becoming your best self. Every detail, from the powerful ambiance to the panoramic windows that flood the space with natural light, is designed to motivate, energize, and inspire. The fitness center is also connected to the amenity terrace, where you can practice your yoga or just take in some sun.", "Whether you're powering through cardio, sculpting with strength training, or stretching into a new rhythm, this immersive environment allows you to push yourself to go further, train harder, and stay consistent."],
    image: amenitiesGym,
    imageAlt: "The Fitness Center",
},{
    title: "Pickleball at AQUA",
    content: ["AQUA is proud to offer a rare luxury—the only dedicated pickleball court among neighboring residential communities. Whether you're a seasoned player or a curious beginner, this vibrant and fast-growing sport finds its perfect match in our professionally designed court.", "Set within a beautifully landscaped environment, the court invites residents to engage, connect, and stay active—all just steps from their front door. At AQUA, we care about offering amenities that energize the community and wellness in ways others simply can’t match."],
    image: pickleball,
    imageAlt: "Pickleball at AQUA",
},{
    title: "Basketball at AQUA",
    content: ["Aqua offers the only private half-court basketball court in the area—perfect for solo practice, casual games, or staying fit. Whether you're playing for fun or focused on fitness, this exclusive outdoor amenity brings the game home—no gym required."],
    image: basketball,
    imageAlt: "Basketball at AQUA",
},{
    title: "OT Social – Your All-Day Culinary Lounge",
    content: ["Welcome to OT Social, AQUA’s exclusive on-site food hall and full-service bar—a vibrant social hub just steps from your front door. From morning cappuccinos to evening aperitifs, OT Social is designed to serve your every craving, any time of day.", "Featuring a curated mix of multi-cuisine offerings, artisanal bites, and craft beverages, this stylish space blends convenience with community. Whether you're grabbing a quick coffee before work, meeting friends for wood-fired pizza, or winding down with a signature cocktail at the bar, OT Social brings the energy of a boutique dining experience right to your doorstep."],
    image: foodHall,
    imageAlt: "OT Social – Your All-Day Culinary Lounge",
},{
    title: "The Pedestrian Plaza – Your Everyday Escape",
    content: ["AQUA’s pedestrian plaza is a calm, open-air retreat designed for everyday moments—morning coffee, evening drinks, or casual time with neighbors. Thoughtful landscaping and flowing architecture extend the energy of OT Social outdoors, blending comfort with connection.", "With built-in seating and food hall access, it’s an easy place to unwind, any time of day."],
    image: pedestrianWalkwayRender,
    imageAlt: "The Pedestrian Plaza – Your Everyday Escape",
}]