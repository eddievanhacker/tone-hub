const products = [
    {
        id: '1',
        name: 'Guitarra Gretsch Country Gendleman',
        price: 3900,
        category: 'gretsch',
        img: 'https://www.fmicassets.com/Damroot/GretschVert/10001/2401248892_gre_ins_frt_01_rr.png',
        stock: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, diam ac fringilla ullamcorper, turpis dui venenatis erat, eget facilisis risus leo a augue. Cras turpis ligula, eleifend posuere eros a, viverra lacinia magna. Phasellus convallis velit non varius luctus. Nulla elementum nunc quam, vitae bibendum diam iaculis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non imperdiet diam, quis dignissim ante. Curabitur venenatis, odio nec tristique ultricies, ex nulla efficitur orci, ultricies ultricies lacus libero at risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
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
        id: '3',
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

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}