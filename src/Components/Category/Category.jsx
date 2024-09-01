
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const categories = [
    { name: 'Skin Care', image: 'https://glorianoor.com/public/storage/images/category/V4lVQW44lAe54IpkoYGcGYoa5pBpK8ALcGn73g8D.jpg' },
    { name: 'Hair Care', image: 'https://glorianoor.com/public/storage/images/category/RwAd70B4up7eARnuDoS33xc2dmwKlWJPqVBr31cY.jpg' },
    { name: 'Sunglass', image: 'https://glorianoor.com/public/storage/images/category/niRZyFA3hBqsWgkmAxFmKtt9YMBHoiNKzR3EbOtN.jpg' },
    { name: 'Makeup', image: 'https://glorianoor.com/public/storage/images/category/is7dZSKUhZ3SyomewVUTLHLvyuvMsgrPeiRdqd9A.png' },
];

const Category = () => {
    return (
        <div className="py-8 bg-white lg:mx-24">
            <h2 className="text-center text-2xl font-bold mb-8">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((category, index) => (
                    <div key={index} className="lg:w-64 bg-white rounded-lg overflow-hidden shadow-lg m-4">
                        <img src={category.image} alt={category.name} className="w-full h-64 object-cover" />
                        {/* <div className="p-4 text-center">
                            <h3 className="text-lg font-bold">{category.name}</h3>
                            <div className="flex justify-center mt-2 space-x-4 text-black">
                                <a href="#" className="hover:text-green-500">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="hover:text-green-500">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="hover:text-green-500">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
