import Img1 from '../img/products/1.webp';
import Img2 from '../img/products/2.webp';
import Img3 from '../img/products/3.webp';
import Img4 from '../img/products/4.webp';
import Img5 from '../img/products/5.webp';
import Img6 from '../img/products/6.webp';
import Img7 from '../img/products/7.webp';
import Img8 from '../img/products/8.webp';
import Img9 from '../img/products/9.webp';
import Img10 from '../img/products/10.webp';
import Img11 from '../img/products/11.webp';
import Img12 from '../img/products/12.webp';
import Img13 from '../img/products/13.webp';
import Img14 from '../img/products/14.webp';
import Img15 from '../img/products/15.webp';
import Img16 from '../img/products/16.jpg';
import Img17 from '../img/products/17.webp';
import Img18 from '../img/products/18.webp';
import Img19 from '../img/products/19.webp';
import Img20 from '../img/products/20.webp';
import bag1_1 from '../img/products/otherProducts/bag1_1.webp';
import bag1_2 from '../img/products/otherProducts/bag1_2.webp';
import bag2_1 from '../img/products/otherProducts/bag2_1.webp';
import bag2_2 from '../img/products/otherProducts/bag2_2.webp';
import bag3_1 from '../img/products/otherProducts/bag3_1.webp';
import bag3_2 from '../img/products/otherProducts/bag3_2.jpg';
import bag4_1 from '../img/products/otherProducts/bag4_1.webp';
import bag4_2 from '../img/products/otherProducts/bag4_2.webp';
import aroma1_1 from '../img/products/otherProducts/aroma1_1.webp';
import aroma1_2 from '../img/products/otherProducts/aroma1_2.webp';
import aroma2_1 from '../img/products/otherProducts/aroma2_1.webp';
import aroma3_1 from '../img/products/otherProducts/aroma3_1.webp';
import aroma3_2 from '../img/products/otherProducts/aroma3_2.webp';
import skincare1_1 from '../img/products/otherProducts/skincare1_1.webp';
import skincare2_1 from '../img/products/otherProducts/skincare2_1.webp';
import skincare4_1 from '../img/products/otherProducts/skincare4_1.webp';
import skincare4_2 from '../img/products/otherProducts/skincare4_2.webp';
import paper1_1 from '../img/products/otherProducts/paper1_1.webp';
import paper1_2 from '../img/products/otherProducts/paper1_2.webp';
import paper2_1 from '../img/products/otherProducts/paper2_1.webp';
import paper2_2 from '../img/products/otherProducts/paper2_2.webp';
import furniture1_1 from '../img/products/otherProducts/furniture1_1.webp';
import furniture1_2 from '../img/products/otherProducts/furniture1_2.webp';
import furniture2_1 from '../img/products/otherProducts/furniture2_1.webp';
import furniture2_2 from '../img/products/otherProducts/furniture2_2.webp';
import furniture3_1 from '../img/products/otherProducts/furniture3_1.webp';
import furniture4_1 from '../img/products/otherProducts/furniture4_1.webp';
import furniture4_2 from '../img/products/otherProducts/furniture4_2.webp';

export type CartContextType = {
    cartItem: CartItems[]
    addToCart: (item: CartItems, condition?: boolean) => void
    setCartItem: (item: CartItems[]) => void
}

export type Items = {
    id: number
    name: string
    price: number
    description: string
    isAvailable: boolean
    category: string
    material: string
    size: string
    country: string
    img: string
    otherImg: string[]
}

export type CartItems = {
    id: number
    name: string
    price: number
    quantity: number
    img: string
}

export const items: Items[] = [
    {
        id: 1,
        name: 'Canvas Double Handle Tote Bag',
        price: 19.90,
        description: 'An essential and everyday use cotton tote bag made with thick canvas material.',
        isAvailable: true,
        category: 'bags',
        material: '100% Cotton',
        size: 'L35.0 x W52.0 x D17.0cm',
        country: 'India',
        img: Img1,
        otherImg: [bag1_1, bag1_2],
    },
    {
        id: 2,
        name: '2-Way Water Repellent Shoulder Bag',
        price: 24.90,
        description: 'Water repellent shoulder bag with a small pocket on the back. ',
        isAvailable: false,
        category: 'bags',
        material: '100% Recycled Polyester',
        size: 'L17.0 x W28.0 x T6.0cm',
        country: 'Vietnam',
        img: Img2,
        otherImg: [bag2_1, bag2_2],
    },
    {
        id: 3,
        name: 'Less Tiring Backpack',
        price: 29.90,
        description: 'Designed with a pair of cushion pads to reduce the burden on your shoulders. The inner mesh pocket provides space for PC storage. The rucksack fits neatly on top of the suitcase.',
        isAvailable: true,
        category: 'bags',
        material: '100% Polyester',
        size: '43 x 32 x 14cm',
        country: 'Vietnam',
        img: Img3,
        otherImg: [bag3_1, bag3_2],
    },
    {
        id: 4,
        name: 'IDEE Original Marche Bag',
        price: 34.90,
        description: 'A Marche Bag with two openings, illustrated with an iconic and catchy "human" motif.',
        isAvailable: true,
        category: 'bags',
        material: '100% Cotton',
        size: 'Length 46.0 x Height 42.0 x Width 5.0cm',
        country: 'China',
        img: Img4,
        otherImg: [bag4_1, bag4_2],
    },
    {
        id: 5,
        name: 'Ultrasonic Aroma Diffuser',
        price: 119.00,
        description: 'The diffuser uses ultrasonic waves to effectively diffuse and disperse a fragrant mist around the room.',
        isAvailable: true,
        category: 'aroma-fragrances',
        material: 'Body: PP Resin\nAdapter: ABS Resin',
        size: 'Inner Diameter 16.8 cm x H 12 cm; Capacity 300 mL',
        country: 'China',
        img: Img5,
        otherImg: [aroma1_1, aroma1_2],
    },
    {
        id: 6,
        name: 'Tin Candle - French Lavender',
        price: 29.90,
        description: 'This candle has pure French lavender sourced from Provence, France. It is best used for relaxation, reducing stress and alleviating insomnia. Made of natural ingredients using soy wax and pure essential oils and stored inside a tin for safe lighting. ',
        isAvailable: true,
        category: 'aroma-fragrances',
        material: 'Soy Wax, Lavandula officinalis (Lavender), Cocos nucifera (Coconut Oil)',
        size: 'Inner Diameter 8.4 cm x H 6 cm; Capacity 150 mL',
        country: 'United States of America',
        img: Img6,
        otherImg: [aroma2_1],
    },
    {
        id: 7,
        name: 'Reed Diffuser',
        price: 39.90,
        description: 'Our Reed Diffusers release a steady stream of fragrance into the air - perfect for your bedroom, living room or other common space.  Safe for living spaces with children since this operates without an open flame.',
        isAvailable: true,
        category: 'aroma-fragrances',
        material: 'Coconut Oil, Yuzu, Sweet Orange, Mandarin, Tangerine',
        size: 'Inner Diameter 8.4 cm x H 6 cm; Capacity 150 mL',
        country: 'United States of America',
        img: Img7,
        otherImg: [aroma3_1, aroma3_2],
    },
    {
        id: 8,
        name: 'Mini Tin Candle',
        price: 9.90,
        description: 'Smoky and earthy, cedarwood is great for use in the evenings to ease your mind and help you wind down from the day. Made of natural ingredients using soy wax and pure essential oils and stored inside a tin for safe lighting.',
        isAvailable: true,
        category: 'aroma-fragrances',
        material: 'Soy Wax, Juniperus virginiana (Cedarwood), Cocos nucifera (Coconut Oil)',
        size: 'Inner Diameter 8.4 cm x H 6 cm; Capacity 150 mL',
        country: 'United States of America',
        img: Img8,
        otherImg: [],
    },
    {
        id: 9,
        name: 'Aging Care Toning Water - Light Moisture',
        price: 29.90,
        description: 'Using natural water from Kamaishi, Iwate Prefecture of Japan, Aging Care series provides elasticity and moisture to dry skin or aging skin.',
        isAvailable: true,
        category: 'skincare',
        material: 'PET, PP',
        size: '15cm x 5cm',
        country: 'Japan',
        img: Img9,
        otherImg: [skincare1_1],
    },
    {
        id: 10,
        name: 'Sensitive Care Toning Water',
        price: 12.90,
        description: 'A skincare series that uses natural, alkaline water from Kamaishi, Iwate Prefecture. Gives gentle and refreshing moisture to sensitive skin. ',
        isAvailable: true,
        category: 'skincare',
        material: 'PET, PE',
        size: '15cm x 5cm',
        country: 'Japan',
        img: Img10,
        otherImg: [skincare2_1],
    },
    {
        id: 11,
        name: 'Mild Care Foam Face Soap',
        price: 7.90,
        description: 'A mild foaming face wash for those with sensitive skin. Suitable for everyday use. Comes in a regular and travel size.',
        isAvailable: true,
        category: 'skincare',
        material: 'PE,PP',
        size: '10cm x 4cm',
        country: 'Japan',
        img: Img11,
        otherImg: [],
    },
    {
        id: 12,
        name: 'Skin Moisturizing Cream',
        price: 16.90,
        description: 'The Sensitive Care line is a skincare series that uses natural water from Kamaishi, Japan. Infused with natural grapefruit extract and purslane extract.  Gentle for individuals with sensitive skin.',
        isAvailable: true,
        category: 'skincare',
        material: 'PE,PP',
        size: '10cm x 4cm',
        country: 'Japan',
        img: Img12,
        otherImg: [skincare4_1, skincare4_2],
    },
    {
        id: 13,
        name: '5 Pack Ruled Notebook Set',
        price: 3.00,
        description: 'A 5 piece set of notebooks in B5 size for note taking. Each spine has a different color for designated subjects. Page layout comes in horizontal ruled lines with 6mm spacing in between.',
        isAvailable: true,
        category: 'paper-goods',
        material: 'Paper',
        size: 'B5: 25.2 x 17.9cm',
        country: 'Indonesia',
        img: Img13,
        otherImg: [paper1_1, paper1_2],
    },
    {
        id: 14,
        name: 'Monthly Sticky Note',
        price: 1.90,
        description: 'Sticky notes designed as a weekly planner to organize your thoughts as you go.',
        isAvailable: true,
        category: 'paper-goods',
        material: 'Paper',
        size: '7.5 x 12.0cm',
        country: 'Japan',
        img: Img14,
        otherImg: [paper2_1, paper2_2],
    },
    {
        id: 15,
        name: 'Sticky Note Checklist',
        price: 2.90,
        description: 'A helpful tool to remind you and keep you accountable for your daily, or weekly tasks to complete.',
        isAvailable: true,
        category: 'paper-goods',
        material: 'Body: Adhesive Processed Sheet\nBacking Sheet: Paper',
        size: '45 x 115mm',
        country: 'Japan',
        img: Img15,
        otherImg: [],
    },
    {
        id: 16,
        name: 'Key Ring Memo Block',
        price: 0.90,
        description: 'Key Ring Memo Block is recommended for vocabulary. A great way to memorize words.',
        isAvailable: true,
        category: 'paper-goods',
        material: 'Paper (composed of at least 55% Recycled Paper)',
        size: '6.8 x 3.0cm',
        country: 'China',
        img: Img16,
        otherImg: [],
    },
    {
        id: 17,
        name: 'Beech Coat Stand',
        price: 109.00,
        description: 'A space-optimized 3-leg coat stand made from beech wood. It is also very easy to assemble due to the design that is prefabricated.',
        isAvailable: true,
        category: 'furniture',
        material: 'Beech Wood\nCoating: Lacquer Painting',
        size: 'W48 x D42 x H173.5cm',
        country: 'China',
        img: Img17,
        otherImg: [furniture1_1, furniture1_2],
    },
    {
        id: 18,
        name: 'Body Fit Cushion - Body',
        price: 179.00,
        description: 'Its squared-off shape offers greater support by cushioning where it’s needed most. The micro bead filling offers a high degree of softness, support, and durability, making it the perfect bean bag chair for adults and children.',
        isAvailable: true,
        category: 'furniture',
        material: 'Cover: 100% Polyester\nFilling: Polystyrene Beads',
        size: 'W65 x D65 x H43cm',
        country: 'Japan',
        img: Img18,
        otherImg: [furniture2_1, furniture2_2],
    },
    {
        id: 19,
        name: 'Living Dining Table',
        price: 480.00,
        description: 'Dining table that`s simply designed for everyday use. ',
        isAvailable: true,
        category: 'furniture',
        material: 'Natural Wood, Laminated Plywood',
        size: 'W149.8 x D65.0 x H60.9cm',
        country: 'China',
        img: Img19,
        otherImg: [furniture3_1],
    },
    {
        id: 20,
        name: 'Stainless Unit Shelf',
        price: 349.00,
        description: 'A shelving unit that incorporates wood and metal. Comes in multiple sizes for the best storage solutions. ',
        isAvailable: true,
        category: 'furniture',
        material: 'Board: Medium Density Fiberboard, Oak Veneer, UV Coating\nFrame: Stainless Steel (polished using electropolishing)',
        size: 'W86.0 x D41.0 x H175.5cm',
        country: 'Taiwan',
        img: Img20,
        otherImg: [furniture4_1, furniture4_2],
    }
]