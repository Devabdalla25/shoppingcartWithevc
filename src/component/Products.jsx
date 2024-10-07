import Product from "./Product";

const products=[{
    id:1,
    name:"lin macan",
    urlImage: "https://plus.unsplash.com/premium_photo-1664391797270-9451ed0426b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3dlYXQlMjBsZW1vbnxlbnwwfHwwfHx8MA%3D%3D",
    price:0.1
},
{
    id:2,
    name:"Moos",
    urlImage:"https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y_aG0-O7ncSbd0PojxBl3zlih_gSYW4w62xsakcb6qs=",
    price:0.2
},
{
    id:3,
    name:"Tufax",
    urlImage:"https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KkV1NhDBE6ITWxiiWJ7fOgK4ahT_sbs3u3S2UfzFQcE=",
    price:0.25
},
{
    id:4,
    name:"babay",
    urlImage:"https://media.istockphoto.com/id/2090596133/photo/fresh-tropical-cut-papaya-fruit-over-orange-table-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KzIda6JXmPC9lZluL7Nkh-LBAGvnoxYzjwmUAkANk1o=",
    price:0.5
},
{
    id:5,
    name:"canbo",
    urlImage:"https://media.istockphoto.com/id/1417819877/photo/beautiful-delicious-mango-isolated-on-white-table-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KpMw4QEdTgbFrRnijpTmNjEJ02E1i9yY7lEfayFHkes=",
    price:1
},
{
    id:6,
    name:"qare",
    urlImage:"https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=lHQhApP5p8Sc4H7MK1DotnaQiq-MBUdTsgQrZc04OSA=",
    price:3
},
];

const Products=()=>{
    return <div className="grid">
        {products.map((product)=>(
            <Product key={product.id} product={product}/>
        ))}
    </div>
}

export default Products;