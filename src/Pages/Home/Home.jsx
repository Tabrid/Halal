import Category from "../../Components/Category/Category"
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection"
import Footer from "../../Components/Footer/Footer"
import HeaderBanner from "../../Components/HeaderBanner/HeaderBanner"
import Navbar from "../../Components/Navbar/Navbar"
import ProductCard from "../../Components/ProductCard/ProductCard"


function Home() {
    return (
        <div>
            <Navbar/>
            <HeaderBanner/>
            <Category/>
            <ProductCard/>
            <FeaturesSection/>
            <Footer/>
        </div>
    )
}

export default Home