import { BiCart } from "react-icons/bi";


function ProductCard() {
    const products = [
        {
            image: "https://glorianoor.com/public/storage/images/product_thumbnail_img/17241429031.jpg",
            title: "Berry Plus Extra Whitening Cream",
            originalPrice: 1650,
            discountedPrice: 1250,
            discount: 24,
        },
        {
            image: "https://glorianoor.com/public/storage/images/product_thumbnail_img/1724143332435617613a17faa82ec6e0bf74c3c067.jpg",
            title: "P-VILA MELASMA combo pack",
            originalPrice: 1900,
            discountedPrice: 1600,
            discount: 16,
        },
        {
            image: "https://glorianoor.com/public/storage/images/product_thumbnail_img/1724143117combo.jpg",
            title: "CLOBETAMIL G COMBO",
            originalPrice: 1100,
            discountedPrice: 950,
            discount: 14,
        },
        {
            image: "https://glorianoor.com/public/storage/images/product_thumbnail_img/1719903564447901848_423806780493130_310261662533327035_n.jpg",
            title: "Placenta Milk Fruit Gel",
            originalPrice: 1300,
            discountedPrice: 800,
            discount: 38,
        },
        {
            image: "https://glorianoor.com/public/storage/images/product_thumbnail_img/1719903478447862169_423227523884389_2540547617982322149_n.jpg",
            title: "FAIRYPAI HAIR",
            originalPrice: 990,
            discountedPrice: 650,
            discount: 34,
        },
    ];
    return (
        <div className="bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Exclusive Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200  shadow-md">
                        <img className=" w-[164px] lg:w-[280px] lg:h-[280px] h-[164px]" src={product.image} alt={product.title} />
                        <div className="p-4">
                            <h5 className="mb-2 hidden md:block lg:block h-16 lg:text-lg font-bold tracking-tight text-gray-900">{product.title}</h5>
                            <h5 className="mb-2 lg:hidden lg:text-lg font-bold tracking-tight text-gray-900">
                                {product.title.length > 10 ? product.title.substring(0, 10) + "..." : product.title}
                            </h5>

                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold text-green-500">৳{product.discountedPrice}</span>
                                <span className="text-sm text-gray-500 line-through">৳{product.originalPrice}</span>
                            </div>
                            <p className="text-sm text-green-500">Discount: {product.discount}%</p>

                        </div>
                        <button className="lg:mt-4 flex gap-5 justify-center items-center w-full py-2 text-white bg-pink-500  hover:bg-pink-600">
                            <BiCart /> অর্ডার করুন
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard