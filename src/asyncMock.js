const products = [
    {
        id: '1',
        name: 'Guitarra Gretsch Country Gendleman',
        price: 1200,
        category: 'gretsch',
        img: 'https://www.fmicassets.com/Damroot/GretschVert/10001/2401248892_gre_ins_frt_01_rr.png',
        stock: 5,
        description: 'Descripción de la guitarra Gretsch Country Gendleman'
    },
    {
        id: '2',
        name: 'Guitarra Gibson Les Paul Lucy Ed. 2024',
        price: 2900,
        category: 'gibson',
        img: 'https://www.tomassone.it/media/catalog/product/cache/e30c5c6274c91036a38fe047281bc617/g/i/giblp57agharclacr_01.jpg',
        stock: 3,
        description: 'Descripción de la guitarra Gibson Les Paul Lucy'
    },
    {
        id: '2',
        name: 'Guitarra Rickenbacker Fireglo 12 cuerdas',
        price: 4500,
        category: 'rickenbacker',
        img: 'https://m.media-amazon.com/images/I/81iUtgvsHbL._AC_UF894,1000_QL80_.jpg',
        stock: 1,
        description: 'Descripción de la guitarra Rickenbacker Fireglo 12 cuerdas'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}