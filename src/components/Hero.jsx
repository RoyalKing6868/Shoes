const HeroSection = ()=>{
    return (
        <div className="container">
        <main className="hero">
            
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Step into comfort and style—where your feet deserve the best! Explore our curated collection for fashion-forward and meticulously crafted footwear, from casual elegance to athleisure vibes. Enjoy enduring comfort and trendsetting designs, with free shipping and hassle-free returns. Elevate your every step with us!</p>
                <div className="hero-btn">
                <button>Shop Now</button>
                <button className="ctg">Category</button>
                </div>
                <div className="shopping">
                <p>Also Available on</p>
                <div className="shopping-images">
                <img src="../public/Images/amazon.png" alt="" />
                <img src="../public/Images/flipkart.png" alt="" />
                </div>
                </div>
            </div>
            <div className="image-shoes">
                <img src="../public/Images/shoe_image.png" alt="" />
            </div>
            
        </main>
        </div>
    );
};
export default HeroSection;