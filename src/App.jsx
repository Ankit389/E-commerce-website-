import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Partners from './components/Partners/Partners'
import Products from './components/Products/Products'
import  headphone from "./assets/Hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from './components/Blogs/Blogs'
import Popup from './components/Popup/Popup'
import Footer from './components/Footer/Footer'



const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};



const App = () => {

const [orderPopup,setOrderPopup] =React.useState(false);

const handleOrderPopup=()=>{
  setOrderPopup(!orderPopup);
};

  return <div>
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero  handleOrderPopup={handleOrderPopup}/>
     <Category/>
     <Category2/>
     <Services/>
     <Banner data={BannerData} />
     <Products/>
     <Banner data={BannerData2} />
     <Blogs/>
     <Partners/>
     <Footer/>
     <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup} />


     
  </div>
}

export default App
