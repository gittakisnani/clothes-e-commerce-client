import { SIZES } from "../config/config";

export default [
    {
        imgSrc: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a98a6e522934d3f964ead2400b45f9f_9366/Adicolor_Essentials_Trefoil_Hoodie_Beige_HE7198_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baa474b49f7b4e6785feae920042dfae_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_Blue_HM7890_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 300,
        bestSeller: false,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/24c280f6e9e14ef2b215ae920042054e_9366/stadium-fleece-badge-of-sport-sweatshirt.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 120,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1bb568ac29414da6a973ae8300896252_9366/Tiro_Track_Jacket_Black_HC1308_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1509289da0a046a28c09ae9300210beb_9366/Designed_for_Movement_AEROREADY_HIIT_Slogan_Training_Tee_Blue_HN8505_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/625621519b48449dad22ae9800b11e6e_9366/Designed_for_Movement_AEROREADY_HIIT_Slogan_Training_Tee_Black_HN8508_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/w_1366,h_1366,f_auto,q_auto,fl_lossy,c_fill,g_auto/51f43f7c88c44ff49eb3aea900a24652_9366/HK9845_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d997046be64b46c490a8ae97007b8c7b_9366/Stadium_Fleece_Badge_of_Sport_Cuffed_Pants_Grey_HP1949_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
    {
        imgSrc: "https://assets.adidas.com/images/w_1366,h_1366,f_auto,q_auto,fl_lossy,c_fill,g_auto/5bb56fc35f164b7e905fae5300dd4658_9366/HC5869_21_model.jpg",
        title: 'Line-Pattern Zipper Sweatshirt',
        price: 200,
        oldPrice: 100,
        bestSeller: true,
        sizes: ['2xs', 'xs', 's', 'm', 'l', '6xl'],
        similars: [
            2,
            3,
            4,
            5
        ],
    },
].map((product, index) => ({ ...product, id: index + 1 }))