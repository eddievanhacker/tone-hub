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
        img: 'https://media.sweetwater.com/m/products/image/592443f0delyx8GFHHGltcaNWIdsh02liKSNWRfq.png?quality=82&height=750&ha=592443f0ded71d17',
        stock: 3,
        description: 'Pellentesque lobortis, metus vitae laoreet egestas, tellus sem cursus neque, eu aliquam lectus magna vel augue. Duis ac felis nunc. Proin neque velit, vehicula at nisi nec, convallis sollicitudin turpis. Donec vitae velit risus. Donec efficitur augue id dapibus interdum. Proin gravida feugiat accumsan. Nullam sodales condimentum lectus, vel pretium libero vestibulum id. Phasellus eleifend lacinia rhoncus. Pellentesque ac lectus ornare metus placerat imperdiet sit amet pharetra justo. Ut rhoncus quis augue non tristique. Integer a scelerisque nibh. Integer tincidunt odio id est bibendum, sed blandit lorem consectetur. In hac habitasse platea dictumst. Phasellus lacinia posuere nunc, a luctus justo venenatis congue. Phasellus id tellus quis enim varius ultricies a aliquet magna.'
    },
    {
        id: '3',
        name: 'Guitarra Rickenbacker 360 Fireglo 6 cuerdas',
        price: 4500,
        category: 'rickenbacker',
        img: 'https://media.sweetwater.com/m/products/image/f61fb64e7abQRUXRveEQJILoiE39R2HpGwJvg8oR.wm-lh.png?quality=82&height=750&ha=f61fb64e7a0bcd1c',
        stock: 1,
        description: 'Phasellus ac mattis augue. Cras placerat a lectus at pharetra. Nullam commodo, urna in lobortis hendrerit, felis odio molestie mauris, eu aliquet sem tortor in diam. Nulla sapien justo, vehicula sit amet turpis in, accumsan sodales ante. Suspendisse cursus, massa id mattis sodales, nisi sapien sodales lorem, non consequat velit risus in libero. Cras leo ante, sagittis sed nisl et, posuere scelerisque elit. Etiam egestas tortor in mi pretium laoreet. Nullam at est at est finibus consequat sit amet eget ante. Sed id feugiat nunc, sit amet fringilla velit. Aliquam vitae laoreet ipsum, non fermentum nisl. Fusce cursus ante nunc, ac suscipit lorem imperdiet vitae. Nulla finibus nibh ipsum, ut placerat arcu iaculis nec. Morbi condimentum sollicitudin nibh vitae bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent gravida suscipit orci sit amet fermentum. Mauris porttitor, purus eget auctor aliquam, dui orci tincidunt libero, in vestibulum sem dolor in justo.'
    },
    {
        id: '4',
        name: 'Bajo Hofner 500/1 Paul McCartney',
        price: 4500,
        category: 'hofner',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/148d4922-fa54-4748-86ce-9d22a67e41b8/dg1u847-00d4ea4a-8591-4704-97e4-d68c4154756b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE0OGQ0OTIyLWZhNTQtNDc0OC04NmNlLTlkMjJhNjdlNDFiOFwvZGcxdTg0Ny0wMGQ0ZWE0YS04NTkxLTQ3MDQtOTdlNC1kNjhjNDE1NDc1NmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QxA5EoI5DM0D-8OeOksx3pBh8mCeFTF2QYHqHsyyP1g',
        stock: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, diam ac fringilla ullamcorper, turpis dui venenatis erat, eget facilisis risus leo a augue. Cras turpis ligula, eleifend posuere eros a, viverra lacinia magna. Phasellus convallis velit non varius luctus. Nulla elementum nunc quam, vitae bibendum diam iaculis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non imperdiet diam, quis dignissim ante. Curabitur venenatis, odio nec tristique ultricies, ex nulla efficitur orci, ultricies ultricies lacus libero at risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
        id: '5',
        name: 'Gretsch G6128T-GH Duo Jet Black',
        price: 3200,
        category: 'gretsch',
        img: 'https://files.ekmcdn.com/projectmusic/images/gretsch-g6128t-gh-george-harrison-duo-jet-black-20849-1-p.png',
        stock: 2,
        description: 'Pellentesque lobortis, metus vitae laoreet egestas, tellus sem cursus neque, eu aliquam lectus magna vel augue. Duis ac felis nunc. Proin neque velit, vehicula at nisi nec, convallis sollicitudin turpis. Donec vitae velit risus. Donec efficitur augue id dapibus interdum. Proin gravida feugiat accumsan. Nullam sodales condimentum lectus, vel pretium libero vestibulum id. Phasellus eleifend lacinia rhoncus. Pellentesque ac lectus ornare metus placerat imperdiet sit amet pharetra justo. Ut rhoncus quis augue non tristique. Integer a scelerisque nibh. Integer tincidunt odio id est bibendum, sed blandit lorem consectetur. In hac habitasse platea dictumst. Phasellus lacinia posuere nunc, a luctus justo venenatis congue. Phasellus id tellus quis enim varius ultricies a aliquet magna.'
    },
    {
        id: '6',
        name: 'Hammond Organ A-3 Reacondicionado',
        price: 5900,
        category: 'hammond',
        img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/68247778/3448546516.jpg',
        stock: 1,
        description: 'Phasellus ac mattis augue. Cras placerat a lectus at pharetra. Nullam commodo, urna in lobortis hendrerit, felis odio molestie mauris, eu aliquet sem tortor in diam. Nulla sapien justo, vehicula sit amet turpis in, accumsan sodales ante. Suspendisse cursus, massa id mattis sodales, nisi sapien sodales lorem, non consequat velit risus in libero. Cras leo ante, sagittis sed nisl et, posuere scelerisque elit. Etiam egestas tortor in mi pretium laoreet. Nullam at est at est finibus consequat sit amet eget ante. Sed id feugiat nunc, sit amet fringilla velit. Aliquam vitae laoreet ipsum, non fermentum nisl. Fusce cursus ante nunc, ac suscipit lorem imperdiet vitae. Nulla finibus nibh ipsum, ut placerat arcu iaculis nec. Morbi condimentum sollicitudin nibh vitae bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent gravida suscipit orci sit amet fermentum. Mauris porttitor, purus eget auctor aliquam, dui orci tincidunt libero, in vestibulum sem dolor in justo.'
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

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category));
        }, 500);
    });
}