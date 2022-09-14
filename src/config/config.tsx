import { SortsType } from "../types/types";

const CATEGORIES = ['T-Shirt', 'Sweatshirt', 'Dress', 'Pants and skirt', 'Swimsuit', 'Stuff & Accessories'];
const TYPE_FILTERS = ['Basic', 'Pattern', 'Hoodie', 'Zipper', 'Oversize']
const COLORS = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#ffff00',
    brown: '#a52a2a',
    grey: '#808080',
    multicolor: ''
} 

const SIZES = ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '6xl']

const SORTS: SortsType[] = ['Most Popular', 'Newest', 'Price [Low - High]', 'Price [High - Low]' ]

const DETAILS = ['Regular fit', 'Ribbed cuffs and hem', 'Pullover with hood', 'Supports the Better Cotton Initiative', '77% cotton, 23% recycled polyester fleece', 'Imported', 'Warm and cozy', 'Product color: White', 'Kangaroo pocket', 'Product code: HU1522']

export {
    CATEGORIES,
    TYPE_FILTERS,
    COLORS,
    SIZES,
    SORTS,
    DETAILS
}