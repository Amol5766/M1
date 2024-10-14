import React, { useState, useRef, useEffect } from 'react';
import './Menu.css'; // Updated to link to menu.css
import { FiX } from "react-icons/fi"; // Importing close icons
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaPepperHot, FaLeaf, FaDrumstickBite, FaEgg } from 'react-icons/fa'; // Importing required icons
import { GiHeartburn } from 'react-icons/gi'; // Correct import for GiHeartburn
import video from '../../assets/Untitled v.mp4';
import CardH from '../../components/horizontalMenuItem/HorizontalMenuItem'; // Import the horizontal menu card

const Menu = () => {
  const [showVeg, setShowVeg] = useState(false);
  const [showNonVeg, setShowNonVeg] = useState(false);
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);
  const [showSection4, setShowSection4] = useState(false);
  const [showSection5, setShowSection5] = useState(false);
  const [showSection6, setShowSection6] = useState(false);
  const [showSection7, setShowSection7] = useState(false);
  const [showSection8, setShowSection8] = useState(false);
  const [showSection9, setShowSection9] = useState(false);
  const [showSection10, setShowSection10] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [vegVisible, setVegVisible] = useState(false);
  const [nonVegVisible, setNonVegVisible] = useState(false);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [section7Visible, setSection7Visible] = useState(false);
  const [section8Visible, setSection8Visible] = useState(false);
  const [section9Visible, setSection9Visible] = useState(false);
  const [section10Visible, setSection10Visible] = useState(false);


  const dropdownRef = useRef(null);
  const vegSectionRef = useRef(null);
  const nonVegSectionRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);



  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === vegSectionRef.current) setVegVisible(true);
          if (entry.target === nonVegSectionRef.current) setNonVegVisible(true);
          if (entry.target === section1Ref.current) setSection1Visible(true);
          if (entry.target === section2Ref.current) setSection2Visible(true);
          if (entry.target === section3Ref.current) setSection3Visible(true);
          if (entry.target === section4Ref.current) setSection4Visible(true);
          if (entry.target === section5Ref.current) setSection5Visible(true);
          if (entry.target === section6Ref.current) setSection6Visible(true);
          if (entry.target === section7Ref.current) setSection7Visible(true);
          if (entry.target === section8Ref.current) setSection8Visible(true);
          if (entry.target === section9Ref.current) setSection9Visible(true);
          if (entry.target === section10Ref.current) setSection10Visible(true);
        }
      });
    }, { threshold: 0.1 });
  
    if (vegSectionRef.current) observer.observe(vegSectionRef.current);
    if (nonVegSectionRef.current) observer.observe(nonVegSectionRef.current);
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);
    if (section6Ref.current) observer.observe(section6Ref.current);
    if (section7Ref.current) observer.observe(section7Ref.current);
    if (section8Ref.current) observer.observe(section8Ref.current);
    if (section9Ref.current) observer.observe(section9Ref.current);
    if (section10Ref.current) observer.observe(section10Ref.current);
  
    return () => {
      if (vegSectionRef.current) observer.unobserve(vegSectionRef.current);
      if (nonVegSectionRef.current) observer.unobserve(nonVegSectionRef.current);
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
      if (section5Ref.current) observer.unobserve(section5Ref.current);
      if (section6Ref.current) observer.unobserve(section6Ref.current);
      if (section7Ref.current) observer.unobserve(section7Ref.current);
      if (section8Ref.current) observer.unobserve(section8Ref.current);
      if (section9Ref.current) observer.unobserve(section9Ref.current);
      if (section10Ref.current) observer.unobserve(section10Ref.current);
    };
  }, []);

  const toggleVegetarian = () => setShowVeg((prev) => !prev);
  const toggleNonVegetarian = () => setShowNonVeg((prev) => !prev);
  const toggleSection1 = () => setShowSection1((prev) => !prev);
  const toggleSection2 = () => setShowSection2((prev) => !prev);
  const toggleSection3 = () => setShowSection3((prev) => !prev);
  const toggleSection4 = () => setShowSection4((prev) => !prev);
  const toggleSection5 = () => setShowSection5((prev) => !prev);
  const toggleSection6 = () => setShowSection6((prev) => !prev);
  const toggleSection7 = () => setShowSection7((prev) => !prev);
  const toggleSection8 = () => setShowSection8((prev) => !prev);
  const toggleSection9 = () => setShowSection9((prev) => !prev);
  const toggleSection10 = () => setShowSection10((prev) => !prev);

  return (
    <div className="menu-page">
      {/* Hero Video */}
      <div className="hero-video-container">
        <video autoPlay loop >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="hero-title">Our Menu</h1>
      </div>

      {/* Categories Header */}
      <div className="categories-header">
        <h1>CATEGORIES</h1>
      </div>

      {/* Fixed Dropdown Button */}
      <div className="fixed-menu-button" onClick={() => setShowDropdown(!showDropdown)}>
        {showDropdown ? <FiX size={40} /> : <BiSolidFoodMenu size={40} />}
      </div>

      {showDropdown && (
  <div className="dropdown-menu scrollable-dropdown">
    <div className="dropdown-item" onClick={() => { toggleVegetarian(); scrollToSection(vegSectionRef); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Hot Beverages {showVeg ? '▲' : '▼'} (8)
    </div>
    <div className="dropdown-item" onClick={() => { toggleNonVegetarian(); scrollToSection(nonVegSectionRef); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Special Hot Beverages {showNonVeg ? '▲' : '▼'} (5)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection1(); scrollToSection(section1Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Fresh lemon {showSection1 ? '▲' : '▼'} (3)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection2(); scrollToSection(section2Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Snacks {showSection2 ? '▲' : '▼'} (13)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection3(); scrollToSection(section3Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      F & M Special {showSection3 ? '▲' : '▼'} (3)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection4(); scrollToSection(section4Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Mojito {showSection4 ? '▲' : '▼'} (2)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection5(); scrollToSection(section5Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Fresh Fruit Juice (Seasonable) {showSection5 ? '▲' : '▼'} (10)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection6(); scrollToSection(section6Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Fruit Milkshake (Seasonable) {showSection6 ? '▲' : '▼'} (13)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection7(); scrollToSection(section7Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Lassi {showSection7 ? '▲' : '▼'} (2)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection8(); scrollToSection(section8Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Ice Cream Scoop {showSection8 ? '▲' : '▼'} (8)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection9(); scrollToSection(section9Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Ice cream shake with scoops {showSection9 ? '▲' : '▼'} (19)
    </div>
    <div className="dropdown-item" onClick={() => { toggleSection10(); scrollToSection(section10Ref); setShowDropdown(false); }} style={{ cursor: 'pointer' }}>
      Special & Natural Ice Cream (Seasonable) {showSection10 ? '▲' : '▼'} (10)
    </div>
  </div>
)}


      {/* Horizontal Icon Buttons - Infinite Slider */}
      <div className="infinite-slider-wrapper">
        <div className="infinite-slider">
          <button className="icon-button">
            <FaPepperHot size={30} color='#e63946' />
            <span>Spicy</span>
          </button>
          <button className="icon-button">
            <FaLeaf size={30} color='#4caf50'/>
            <span>Vegetarian</span>
          </button>
          <button className="icon-button">
            <FaDrumstickBite size={30} color='#ea7900'/>
            <span>Non-Veg</span>
          </button>
          <button className="icon-button">
            <FaEgg size={30} color='#ffeb3b'/>
            <span>Eggs</span>
          </button>
          <button className="icon-button">
            <GiHeartburn size={30} color='#b52cbf'/>
            <span>Bestseller</span>
          </button>
        </div>
      </div>

      {/* Vegetarian Section */}
      <div className={`menu-category-1 ${vegVisible ? 'visible' : ''}`} ref={vegSectionRef}>
        <h2 onClick={toggleVegetarian} style={{ cursor: 'pointer' }}>Hot Beverages {showVeg ? '▲' : '▼'}</h2>
        {showVeg && (
           <div className="menu-items">
           <CardH title="Tea" description="A soothing cup of traditional Indian tea brewed to perfection." price="₹20" imageUrl="https://i.pinimg.com/474x/57/39/3d/57393ddb6aa413ab46b7966d54a26d5b.jpg" iconType="veg" />
           <CardH title="Coffee" description="Rich and aromatic filter coffee to give you that perfect start." price="₹25" imageUrl="https://i.pinimg.com/736x/f2/a6/42/f2a642297be40509dc016f2db2edb6ed.jpg" iconType="veg" />
           <CardH title="Boost" description="A classic chocolate-flavored malt beverage, loved by all." price="₹30" imageUrl="https://i.pinimg.com/736x/9e/6f/9c/9e6f9cd2ea08cf1001e31b5c6dc0a906.jpg" iconType="veg" />
           <CardH title="Horlicks" description="A malt-based drink to give you energy and nutrition." price="₹30" imageUrl="https://i.pinimg.com/736x/71/c7/80/71c7800ac99e7f9f2cf46cd3a80696a8.jpg" iconType="veg" />
           <CardH title="Badam" description="A warm almond-flavored milk drink, full of goodness." price="₹20" imageUrl="https://i.pinimg.com/236x/3f/2a/3e/3f2a3efc902ab0f48aab34672eec7cc8.jpg" iconType="veg" />
           <CardH title="Black Tea" description="A robust and flavorful black tea to awaken your senses." price="₹25" imageUrl="https://i.pinimg.com/236x/4c/f1/0d/4cf10db3838f0e0180909c5425830b61.jpg" iconType="veg" />
           <CardH title="Lemon Tea" description="Refreshing lemon-infused tea, perfect for any time of day." price="₹20" imageUrl="https://i.pinimg.com/736x/d9/f2/2c/d9f22ca2536e9df00612b2c22c3f5cfb.jpg" iconType="veg" />
           <CardH title="Black Coffee" description="A strong, bold black coffee for true coffee lovers." price="₹20" imageUrl="https://i.pinimg.com/736x/41/a8/7e/41a87e58174145151e789ba8b490636f.jpg" iconType="veg" />
         </div>
        )}
      </div>

      {/* Non-Vegetarian Section */}
      <div className={`menu-category-2 ${nonVegVisible ? 'visible' : ''}`} ref={nonVegSectionRef}>
        <h2 onClick={toggleNonVegetarian} style={{ cursor: 'pointer' }}>Special Hot Beverages {showNonVeg ? '▲' : '▼'}</h2>
        {showNonVeg && (
          <div className="menu-items">
          <CardH title="Pineapple Tea" description="A unique blend of tea and pineapple for a tropical twist." price="₹30" imageUrl="https://i.pinimg.com/736x/df/15/03/df1503f641213161cf3b5db95052e9cf.jpg" iconType="veg" />
          <CardH title="Pomegranate Tea" description="Sweet and tangy pomegranate infused into a refreshing tea." price="₹30" imageUrl="https://i.pinimg.com/236x/0e/8f/09/0e8f09f48ae124b495924cd6d6995037.jpg" iconType="veg" />
          <CardH title="Chocolate Coffee" description="Indulge in this rich chocolate-flavored coffee treat." price="₹100" imageUrl="https://i.pinimg.com/236x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg" iconType="veg" />
          <CardH title="Caramel Coffee" description="Smooth and sweet caramel flavor blended into your coffee." price="₹100" imageUrl="https://i.pinimg.com/236x/86/50/a2/8650a2e29ec10a92a53af08f6928ec4a.jpg" iconType="veg" />
          <CardH title="Butterscotch Coffee" description="A delicious mix of coffee and butterscotch for a sweet kick." price="₹50" imageUrl="https://i.pinimg.com/236x/c8/fc/61/c8fc616cf76a13234f4eba68658fe0d2.jpg" iconType="veg" />
        </div>
        )}
      </div>

      {/* Section 1 */}
      <div className={`menu-category-3 ${section1Visible ? 'visible' : ''}`} ref={section1Ref}>
        <h2 onClick={toggleSection1} style={{ cursor: 'pointer' }}>Fresh lemon {showSection1 ? '▲' : '▼'}</h2>
        {showSection1 && (
         <div className="menu-items">
         <CardH title="Lemon Soda" description="A fizzy, refreshing lemon soda to quench your thirst." price="₹70" imageUrl="https://i.pinimg.com/236x/2a/80/3d/2a803db9c63dd34cae5013a94b048111.jpg" iconType="veg" />
         <CardH title="Lemon Water" description="Simple and refreshing lemon-infused water." price="₹60" imageUrl="https://i.pinimg.com/236x/ff/02/5b/ff025bc01db3a954679604c06cd73b00.jpg" iconType="veg" />
         <CardH title="Plain Soda" description="Classic soda to refresh your palate." price="₹30" imageUrl="https://i.pinimg.com/236x/ef/cd/2f/efcd2ff4393fcba158fb092b2dc5bfb5.jpg" iconType="veg" />
       </div>
        )}
      </div>

      {/* Section 2 */}
      <div className={`menu-category-4 ${section2Visible ? 'visible' : ''}`} ref={section2Ref}>
        <h2 onClick={toggleSection2} style={{ cursor: 'pointer' }}>Snacks {showSection2 ? '▲' : '▼'}</h2>
        {showSection2 && (
          <div className="menu-items">
          <CardH title="Veg Fingers" description="Crispy and delicious vegetable fingers, a perfect snack." price="₹99" imageUrl="https://i.pinimg.com/236x/8b/5e/92/8b5e92fa744a4b9c888df48f6f44a5e3.jpg" iconType="veg" />
          <CardH title="Aloo Tikki" description="Golden fried potato patties served hot and crisp." price="₹99" imageUrl="https://i.pinimg.com/736x/13/a0/c0/13a0c06b95a93a097f6075056cbb4361.jpg" iconType="veg" />
          <CardH title="Smilies" description="Fun, crispy potato smilies to brighten your day." price="₹99" imageUrl="https://i.pinimg.com/236x/4b/a7/1c/4ba71cee87aaeef71afe0b9ad77957f8.jpg" iconType="veg" />
          <CardH title="Veg Spring Roll" description="Crispy rolls filled with seasoned vegetables." price="₹99" imageUrl="https://i.pinimg.com/236x/bf/e6/b2/bfe6b294628511d53cbc3553b55ba652.jpg" iconType="veg" />
          <CardH title="Veg Nuggets" description="Bite-sized nuggets packed with vegetable goodness." price="₹99" imageUrl="https://i.pinimg.com/236x/51/38/af/5138affd6ca315b1e8c294971618b62d.jpg" iconType="veg" />
          <CardH title="Cheese Ball" description="Crispy on the outside, gooey cheese inside." price="₹99" imageUrl="https://i.pinimg.com/236x/8f/86/2d/8f862d78f1b00559ad0b5e32a95b92f4.jpg" iconType="veg" />
          <CardH title="French Fries" description="Golden and crispy fries to complement any meal." price="₹89" imageUrl="https://i.pinimg.com/236x/7d/00/7a/7d007af9a8c4c200cd5baed0fbc5a616.jpg" iconType="veg" />
          <CardH title="Maggi" description="Classic Maggi noodles, a quick and satisfying snack." price="₹50" imageUrl="https://i.pinimg.com/236x/8f/e2/39/8fe23995179c846e0a90d89dc1b0e462.jpg" iconType="veg" />
          <CardH title="Corn Maggi" description="Maggi noodles topped with sweet corn for extra flavor." price="₹60" imageUrl="https://i.pinimg.com/videos/thumbnails/originals/bf/75/e9/bf75e918d01d2e0db0427d76e360ccdc.0000000.jpg" iconType="veg" />
          <CardH title="Cheese Maggi" description="Maggi noodles enriched with melted cheese." price="₹70" imageUrl="https://i.pinimg.com/236x/d5/e1/cd/d5e1cd59f5bcf562aae201bc53756606.jpg" iconType="veg" />
          <CardH title="Bread Omelette" description="A simple yet delicious bread omelette to start your day." price="₹60" imageUrl="https://i.pinimg.com/236x/77/60/3e/77603e84a75829105bf08f2df81bd4f2.jpg" iconType="egg" />
          <CardH title="Chips Omelette" description="A delicious omelette served with crispy chips for a perfect snack." price="₹70" imageUrl="https://i.pinimg.com/236x/11/1d/46/111d46a981623235396b76bc08899427.jpg" iconType="egg" />
          <CardH title="Bread Roast" description="Golden roasted bread slices, lightly buttered and served crispy." price="₹60" imageUrl="https://i.pinimg.com/236x/2a/bb/b8/2abbb84609751a03492cb3159351da70.jpg" iconType="veg" />

        </div>
        )}
      </div>

      {/* Section 3 */}
      <div className={`menu-category-5 ${section3Visible ? 'visible' : ''}`} ref={section3Ref}>
        <h2 onClick={toggleSection3} style={{ cursor: 'pointer' }}>F & M Special {showSection3 ? '▲' : '▼'}</h2>
        {showSection3 && (
          <div className="menu-items">
          <CardH title="Gud Bud" description="A delightful combination of ice cream, fruits, and nuts, perfect for satisfying your sweet tooth." price="₹479" imageUrl="https://i.pinimg.com/736x/fb/30/55/fb3055f4f96089cd5caa915d3dc8a0f8.jpg" iconType="veg" />
          <CardH title="Fruit Salad" description="A refreshing mix of seasonal fruits, served fresh and chilled." price="₹119" imageUrl="https://i.pinimg.com/236x/5b/ff/ac/5bffac669831bd31617a83ad04c04b2c.jpg" iconType="veg" />
          <CardH title="Fruit Salad With Ice Cream" description="A delicious fruit salad topped with a scoop of ice cream." price="₹179" imageUrl="https://i.pinimg.com/236x/64/36/c4/6436c489d7bb07a5ffcd3f06e4baf71a.jpg" iconType="veg" />
        </div>
        )}
      </div>

            {/* Section 4 */}
            <div className={`menu-category-6 ${section4Visible ? 'visible' : ''}`} ref={section4Ref}>
        <h2 onClick={toggleSection4} style={{ cursor: 'pointer' }}> Mojito {showSection4 ? '▲' : '▼'}</h2>
        {showSection4 && (
           <div className="menu-items">
           <CardH title="Virgin Mojito" description="A classic refreshing mojito with mint, lime, and soda." price="₹169" imageUrl="https://i.pinimg.com/736x/0f/48/10/0f4810c2abccda0f83a42001e0369b36.jpg" iconType="veg" />
           <CardH title="Flavourized Mojito’s" description="A mojito with a twist of exciting flavors like strawberry, pineapple, and more." price="₹169" imageUrl="https://i.pinimg.com/236x/46/d8/a4/46d8a4f078574da9e98faaa1020aa59d.jpg" iconType="veg" />
         </div>
        )}
      </div>

            {/* Section 5 */}
            <div className={`menu-category-7 ${section5Visible ? 'visible' : ''}`} ref={section5Ref}>
        <h2 onClick={toggleSection5} style={{ cursor: 'pointer' }}>Fresh Fruit Juice (Seasonable) {showSection5 ? '▲' : '▼'}</h2>
        {showSection5 && (
           <div className="menu-items">
           <CardH title="Mosambi" description="A refreshing citrus juice, perfect for hot summer days." price="₹99" imageUrl="https://i.pinimg.com/236x/1c/2d/cc/1c2dcca199c028205d70fd3f26ec1c2a.jpg" iconType="veg" />
           <CardH title="Orange" description="Freshly squeezed orange juice packed with vitamin C." price="₹99" imageUrl="https://i.pinimg.com/236x/bb/71/fe/bb71fe7ebf1979ee93488bddc95de816.jpg" iconType="veg" />
           <CardH title="Mango" description="Sweet and thick mango juice, made from ripe seasonal mangoes." price="₹99" imageUrl="https://i.pinimg.com/236x/7b/b3/3f/7bb33f4149df29b815250928ccd6b549.jpg" iconType="veg" />
           <CardH title="Watermelon" description="A hydrating watermelon juice, ideal for cooling off." price="₹99" imageUrl="https://i.pinimg.com/236x/ab/4d/bf/ab4dbf38511651da712fb3f85d4d11f5.jpg" iconType="veg" />
           <CardH title="Pineapple" description="Tropical pineapple juice with a sweet and tart flavor." price="₹99" imageUrl="https://i.pinimg.com/236x/ad/1c/7e/ad1c7ec572f3047b2c3e48b292f94b49.jpg" iconType="veg" />
           <CardH title="Grapes" description="Juicy grape juice with a bold flavor." price="₹99" imageUrl="https://i.pinimg.com/236x/b0/51/95/b051950fa93c1812fefc7144fbfb7633.jpg" iconType="veg" />
           <CardH title="Apple" description="Fresh apple juice full of natural sweetness and crisp flavors." price="₹99" imageUrl="https://i.pinimg.com/236x/38/f6/97/38f6970091ec922a74584561f930c681.jpg" iconType="veg" />
           <CardH title="Musk Melon" description="A subtly sweet melon juice with a smooth texture." price="₹99" imageUrl="https://i.pinimg.com/236x/9e/80/4d/9e804dda1e6b08ba729b99c9861bd3ae.jpg" iconType="veg" />
           <CardH title="Chiku" description="Rich and creamy sapota juice, made from the best seasonal fruits." price="₹99" imageUrl="https://i.pinimg.com/236x/80/d3/9a/80d39a2f14a6c99a9133c15ac3a88b15.jpg" iconType="veg" />
           <CardH title="Banana" description="A smooth and creamy banana juice, a healthy energy booster." price="₹99" imageUrl="https://i.pinimg.com/236x/63/4c/09/634c09fbd0272d2d002fec6585404410.jpg" iconType="veg" />
         </div>
        )}
      </div>

            {/* Section 6 */}
            <div className={`menu-category-8 ${section6Visible ? 'visible' : ''}`} ref={section6Ref}>
        <h2 onClick={toggleSection6} style={{ cursor: 'pointer' }}>Fruit Milkshake (Seasonable) {showSection6 ? '▲' : '▼'}</h2>
        {showSection6 && (
          <div className="menu-items">
           <CardH title="Apple" description="A creamy apple milkshake with a blend of fresh apples and milk." price="₹129" imageUrl="https://i.pinimg.com/236x/e8/ea/d0/e8ead0ef22c5adcc5a9d7b9ba9ba8cdf.jpg" iconType="veg" />
           <CardH title="Karbuja" description="A refreshing musk melon milkshake with natural sweetness." price="₹129" imageUrl="https://i.pinimg.com/236x/cc/3a/24/cc3a243495f25ef55271dc2818e78d85.jpg" iconType="veg" />
           <CardH title="Chikku" description="A thick chikku (sapota) milkshake, full of rich flavors." price="₹129" imageUrl="https://i.pinimg.com/236x/c7/f2/a7/c7f2a7962cd211e244e781b9292c3b0a.jpg" iconType="veg" />
           <CardH title="Banana" description="A banana milkshake that’s creamy, sweet, and energizing." price="₹129" imageUrl="https://i.pinimg.com/236x/c7/68/87/c76887cc112f7e545f228a3e4fb030fb.jpg" iconType="veg" />
           <CardH title="Strawberry" description="A delightful strawberry milkshake made with real strawberries." price="₹129" imageUrl="https://i.pinimg.com/236x/f3/88/91/f38891ec8c049f04c4e317ff28bd0771.jpg" iconType="veg" />
           <CardH title="Avacado" description="A thick avocado milkshake with a smooth, creamy texture." price="₹129" imageUrl="https://i.pinimg.com/236x/29/65/96/2965961ff6f79f831c974be37e39f7b1.jpg" iconType="veg" />
           <CardH title="Pineapple" description="A tropical pineapple milkshake with a rich and refreshing taste." price="₹129" imageUrl="https://i.pinimg.com/236x/a3/8c/65/a38c652a9de5ebb09e6f96c8e0ab4d7f.jpg" iconType="veg" />
           <CardH title="Watermelon" description="A light and refreshing watermelon milkshake." price="₹129" imageUrl="https://i.pinimg.com/236x/ef/af/40/efaf40606cafa1e8681312b814bd53a2.jpg" iconType="veg" />
           <CardH title="Papaya" description="A healthy papaya milkshake, perfect for a nutritious drink." price="₹129" imageUrl="https://i.pinimg.com/236x/ec/d7/a1/ecd7a1fe955d67e1ac04eb467e3d5cbe.jpg" iconType="veg" />
           <CardH title="Guava" description="A rich guava milkshake with a unique tropical taste." price="₹129" imageUrl="https://i.pinimg.com/236x/d8/fc/2f/d8fc2f6869d3c760699a36c6e0d91615.jpg" iconType="veg" />
           <CardH title="Mango" description="A thick, creamy mango milkshake made with seasonal mangoes." price="₹129" imageUrl="https://i.pinimg.com/236x/5d/33/4e/5d334e83ad838fbdf5c8499df212b548.jpg" iconType="veg" />
           <CardH title="Grape" description="Fresh and juicy grapes, bursting with natural sweetness." price="₹129" imageUrl="https://i.pinimg.com/236x/81/e4/98/81e498be64f089728b39b9457558902f.jpg" iconType="veg" />
           <CardH title="Passion Fruit" description="Tropical passion fruit, offering a perfect blend of tart and sweet flavors." price="₹129" imageUrl="https://i.pinimg.com/236x/3b/96/1b/3b961ba066c3a4e0f95df57e78a8278e.jpg" iconType="veg" />
          </div>
        )}
      </div>

            {/* Section 7 */}
            <div className={`menu-category-9 ${section7Visible ? 'visible' : ''}`} ref={section7Ref}>
        <h2 onClick={toggleSection7} style={{ cursor: 'pointer' }}>Lassi {showSection7 ? '▲' : '▼'}</h2>
        {showSection7 && (
          <div className="menu-items">
          <CardH title="Sweet Lassi" description="A refreshing yogurt-based drink, sweet and creamy." price="₹99" imageUrl="https://i.pinimg.com/236x/5b/47/c9/5b47c93f1ca8e76d53f720ae1472950c.jpg" iconType="veg" />
          <CardH title="Special Lassi" description="A delightful blend of sweetened yogurt with special flavors." price="₹119" imageUrl="https://i.pinimg.com/236x/95/5e/88/955e884e3834bf59d9609a8f4dda6ebc.jpg" iconType="veg" />
        </div>
        )}
      </div>

            {/* Section 8 */}
            <div className={`menu-category-10 ${section8Visible ? 'visible' : ''}`} ref={section8Ref}>
        <h2 onClick={toggleSection8} style={{ cursor: 'pointer' }}>Ice Cream Scoop {showSection8 ? '▲' : '▼'}</h2>
        {showSection8 && (
          <div className="menu-items">
          <CardH title="Vanilla" description="Classic vanilla ice cream, creamy and rich in flavor." price="₹99" imageUrl="https://i.pinimg.com/236x/17/ba/d3/17bad31401c77df38d8ffdc1264ff9d6.jpg" iconType="veg" />
          <CardH title="Strawberry" description="Delicious strawberry ice cream." price="₹99" imageUrl="https://i.pinimg.com/236x/68/5f/72/685f720703c400a030a5a1f55fa523fd.jpg" iconType="veg" />
          <CardH title="Mango" description="Fresh mango ice cream, bursting with tropical flavors." price="₹99" imageUrl="https://i.pinimg.com/236x/ee/e4/e3/eee4e3c063a69f720e44774340405430.jpg" iconType="veg" />
          <CardH title="Chocolate" description="Rich and indulgent chocolate ice cream for all chocolate lovers." price="₹99" imageUrl="https://i.pinimg.com/236x/38/8f/b2/388fb2336d04feffb6edf99056f46b6a.jpg" iconType="veg" />
          <CardH title="Pista" description="Creamy pistachio ice cream with crunchy nut bits." price="₹99" imageUrl="https://i.pinimg.com/236x/47/3f/c9/473fc901e74a1034bae5145966640b43.jpg" iconType="veg" />
          <CardH title="Black Current" description="Tangy and sweet black current ice cream for a fruity treat." price="₹99" imageUrl="https://i.pinimg.com/236x/fb/c1/28/fbc128861e7a74feaf5ad98145bb628b.jpg" iconType="veg" />
        </div>
        )}
      </div>

            {/* Section 9 */}
            <div className={`menu-category-11 ${section9Visible ? 'visible' : ''}`} ref={section9Ref}>
        <h2 onClick={toggleSection9} style={{ cursor: 'pointer' }}>Ice cream shake with scoops {showSection9 ? '▲' : '▼'}</h2>
        {showSection9 && (
          <div className="menu-items">
          <CardH title="Vanilla" description="Classic vanilla ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/cc/0e/a9/cc0ea94c923a2f2c215944dcbaf5dcb6.jpg" iconType="veg" />
          <CardH title="Strawberry" description="Fresh strawberry-flavored ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/17/c3/b9/17c3b99dd8df04df5674e7619abcd807.jpg" iconType="veg" />
          <CardH title="Butterscotch" description="Rich butterscotch ice cream shake with crunchy caramel." price="₹159" imageUrl="https://i.pinimg.com/236x/23/28/77/232877c88643db6d5af3fa9ae80a1e8d.jpg" iconType="veg" />
          <CardH title="Mango" description="Tropical mango ice cream shake with fresh scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/5a/17/6c/5a176c907fd0ff8ab014152fa20328c4.jpg" iconType="veg" />
          <CardH title="Pineapple" description="Refreshing pineapple ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/f3/10/85/f31085af66b5cd61c9ae41b5d0d75449.jpg" iconType="veg" />
          <CardH title="Pista" description="Creamy pistachio ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/49/97/f1/4997f17cdb925be3f4abb7cb5f38bf84.jpg" iconType="veg" />
          <CardH title="Fig & Honey" description="Delicious fig and honey ice cream shake with a natural sweetness." price="₹159" imageUrl="https://i.pinimg.com/236x/3a/29/f9/3a29f9b41b3fc68f58f172eff5b6cfe9.jpg" iconType="veg" />
          <CardH title="Dry Fruit" description="Rich dry fruit ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/474x/b3/9f/bd/b39fbd63e0a76f1ed5db32e2ad269aa6.jpg" iconType="veg" />
          <CardH title="Tender Coconut" description="Refreshing tender coconut ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/20/91/6f/20916fc06db69aa06b426b69f871498b.jpg" iconType="veg" />
          <CardH title="Jack Fruit" description="Exotic jackfruit ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/dc/0b/a7/dc0ba749c5bca1d0212b3e310c8e69d1.jpg" iconType="veg" />
          <CardH title="Spanish Delight" description="A delightful blend of flavors in a Spanish ice cream shake." price="₹159" imageUrl="https://i.pinimg.com/236x/7d/d4/09/7dd409cd2b2d6b2dd95fce700507862a.jpg" iconType="veg" />
          <CardH title="Chikku" description="Delicious chikku (sapota) ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/58/43/ef/5843ef09a7bc4e477bf7322164f3c9fa.jpg" iconType="veg" />
          <CardH title="Chocolate" description="Rich chocolate ice cream shake with a classic flavor." price="₹159" imageUrl="https://i.pinimg.com/236x/70/f2/e4/70f2e45ed4e979dea9cc5e2d92c0b7c6.jpg" iconType="veg" />
          <CardH title="Black Current" description="Fruity blackcurrant ice cream shake with scoops." price="₹159" imageUrl="https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg" iconType="veg" />
          <CardH title="Kulfi" description="Traditional kulfi-flavored ice cream shake." price="₹159" imageUrl="https://i.pinimg.com/236x/83/1f/7a/831f7a7a8ba04ec44cbdcdf7f846ea9f.jpg" iconType="veg" />
          <CardH title="Red Velvet" description="Decadent red velvet ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/1c/ee/24/1cee24f2cf42499930a8f89c278786da.jpg" iconType="veg" />
          <CardH title="Blue Berry" description="Tangy blueberry ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/0e/ae/33/0eae3356c70df2a20c279359909d74be.jpg" iconType="veg" />
          <CardH title="Oreo" description="Classic Oreo-flavored ice cream shake with scoops." price="₹159" imageUrl="https://i.pinimg.com/236x/bc/de/6a/bcde6abe103147575f3ef21949db4387.jpg" iconType="veg" />
          <CardH title="Cold Coffee" description="Chilled cold coffee ice cream shake with a rich flavor." price="₹159" imageUrl="https://i.pinimg.com/236x/81/0b/44/810b44ad90620246b42cd3282c8156d4.jpg" iconType="veg" />
        </div>
        )}
      </div>

            {/* Section 10 */}
            <div className={`menu-category-12 ${section10Visible ? 'visible' : ''}`} ref={section10Ref}>
        <h2 onClick={toggleSection10} style={{ cursor: 'pointer' }}>Special&Natural Ice Cream (Seasonable) {showSection10 ? '▲' : '▼'}</h2>
        {showSection10 && (
         <div className="menu-items">
         <CardH title="Chiku" description="Fresh chikku ice cream made with seasonal fruits." price="₹159" imageUrl="https://i.pinimg.com/236x/43/57/ad/4357ad3302cad467971ac7c15302ca10.jpg" iconType="veg" />
         <CardH title="Kulfi" description="Authentic kulfi-flavored natural ice cream." price="₹159" imageUrl="https://i.pinimg.com/236x/09/aa/20/09aa20a101fbcc509b970f1bc14648ce.jpg" iconType="veg" />
         <CardH title="Fig & Honey" description="A natural blend of fig and honey for a unique ice cream." price="₹159" imageUrl="https://i.pinimg.com/564x/44/4c/e7/444ce7d46852aed141300dad9cd6ad3d.jpg" iconType="veg" />
         <CardH title="Red Velvet" description="Creamy red velvet ice cream with a seasonal twist." price="₹159" imageUrl="https://i.pinimg.com/236x/a4/bb/12/a4bb128a8302bbd513830e332c6fb0b2.jpg" iconType="veg" />
         <CardH title="Spanish Delight" description="Exotic Spanish delight natural ice cream." price="₹159" imageUrl="https://i.pinimg.com/236x/e5/b0/a2/e5b0a2464ed1e4d6058f41b6ec86014f.jpg" iconType="veg" />
         <CardH title="Belgium Chocolate" description="Rich Belgium chocolate natural ice cream." price="₹159" imageUrl="https://i.pinimg.com/236x/5d/04/39/5d04392a8ad0f5c81c2717f3252c0b9e.jpg" iconType="veg" />
         <CardH title="Jack Fruit" description="Unique jackfruit natural ice cream." price="₹159" imageUrl="https://i.pinimg.com/236x/18/5b/cc/185bcc7c4daf0314defe10b9fd2a578a.jpg" iconType="veg" />
         <CardH title="Tender Coconut" description="Refreshing tender coconut ice cream made with fresh coconut." price="₹159" imageUrl="https://i.pinimg.com/236x/ec/17/13/ec1713276987625904ff119f9c1821bd.jpg" iconType="veg" />
         <CardH title="Caramel" description="Creamy caramel-flavored natural ice cream." price="₹159" imageUrl="https://i.pinimg.com/236x/6d/40/d7/6d40d7a73353cd59f9b4cdac10439044.jpg" iconType="veg" />
         <CardH title="Blue Berry" description="Seasonal blueberry natural ice cream." price="₹159" imageUrl="https://i.pinimg.com/236x/fd/f9/ac/fdf9acbc91c52008b260205713c78a59.jpg" iconType="veg" />
       </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
