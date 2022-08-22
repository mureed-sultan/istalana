import React from "react";
import Menu from "../../menu";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Marquee from "react-fast-marquee";
import sliderImg1 from "../../Assets/images/turnkeyLogo.jpg";
import sliderImg2 from "../../Assets/images/images.png";
import sliderImg3 from "../../Assets/images/Dell_Logo.svg.png";
import InfoBox from "../../components/infoBox";
import DetailBox from "../../components/detailBox";
import { FaHandshake, FaAward, FaPagelines } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import fcbkLogo from "../../Assets/images/facebook.jpg";
import googleLogo from "../../Assets/images/googler.png";

function Home() {
  const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];

  return (
    <div>
      {/* add menu  */}
      <Menu />
      {/* main slider  */}
      <div className="slide-container">
        <Slider className="slider-wrapper" autoplay="5000">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
      {/* item slider  */}
      <Marquee speed={80}>
        <img className="mr-10" src={sliderImg1} alt="no found" />
        <img className="mr-10" src={sliderImg2} alt="no found" />
        <img className="mr-10" src={sliderImg3} alt="no found" />
        <img className="mr-10" src={sliderImg1} alt="no found" />
        <img className="mr-10" src={sliderImg2} alt="no found" />
        <img className="mr-10" src={sliderImg3} alt="no found" />
      </Marquee>
      {/* story of company   */}
      <InfoBox
        order="1"
        boximage={sliderImg1}
        heading="A little story about our company"
        text="Kingsmen is a 360 marketing and advertising management company based in the UAE. We are one of the best leading marketing management agencies in Dubai with clients & staff worldwide from Dubai to Egypt, Ukraine, Lebanon & UK. Our company provides excellent digital marketing and social media management services to various industries. We create, plan and manage top-performing digital campaigns for any business to aid growth and help achieve their goals efficiently. "
        textButton="Read More..."
      />
      {/* aims and objective section  */}
      <div className="quality-container">
        <DetailBox
          logo={FaHandshake}
          title="Commitment"
          detail="We are fully committed to working and investing all our talents and power to reach results."
        />
        <DetailBox
          logo={RiTeamFill}
          title="Team Work"
          detail="We are fully committed to working and investing all our talents and power to reach results."
        />
        <DetailBox
          logo={FaAward}
          title="Awards"
          detail="We are fully committed to working and investing all our talents and power to reach results."
        />
        <DetailBox
          logo={FaPagelines}
          title="Quality"
          detail="We are fully committed to working and investing all our talents and power to reach results."
        />
      </div>
      <div className="services-container">
        <h6>What do we offer you</h6>
        <h4>Services provided for you</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis natus,
          ducimus aut vel id asperiores nesciunt veritatis minima pariatur quasi
          nam, ex distinctio ullam consequuntur adipisci ut nobis enim
          recusandae ad dolore!
        </p>
      </div>
      <InfoBox
        order="1"
        boximage={sliderImg1}
        heading="A little story about our company"
        text="Kingsmen is a 360 marketing and advertising management company based in the UAE. We are one of the best leading marketing management agencies in Dubai with clients & staff worldwide from Dubai to Egypt, Ukraine, Lebanon & UK. Our company provides excellent digital marketing and social media management services to various industries. We create, plan and manage top-performing digital campaigns for any business to aid growth and help achieve their goals efficiently. "
        textButton="Read More..."
      />
      <InfoBox
        order="2"
        boximage={sliderImg1}
        heading="A little story about our company"
        text="Kingsmen is a 360 marketing and advertising management company based in the UAE. We are one of the best leading marketing management agencies in Dubai with clients & staff worldwide from Dubai to Egypt, Ukraine, Lebanon & UK. Our company provides excellent digital marketing and social media management services to various industries. We create, plan and manage top-performing digital campaigns for any business to aid growth and help achieve their goals efficiently. "
        textButton="Read More..."
      />
      <InfoBox
        order="1"
        boximage={sliderImg1}
        heading="A little story about our company"
        text="Kingsmen is a 360 marketing and advertising management company based in the UAE. We are one of the best leading marketing management agencies in Dubai with clients & staff worldwide from Dubai to Egypt, Ukraine, Lebanon & UK. Our company provides excellent digital marketing and social media management services to various industries. We create, plan and manage top-performing digital campaigns for any business to aid growth and help achieve their goals efficiently. "
        textButton="Read More..."
      />
      {/* Our certificates  */}
      <div className="certificate">
        <h4>Our Certificates</h4>
        <div className="certificate-container">
          <div className="certificate-box">
            <img src={fcbkLogo} alt="fcbk" />
            <p>
              Facebook Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, itaque.
            </p>
            <button>Learn More...</button>
          </div>
          <div className="certificate-box">
            <img src={googleLogo} alt="fcbk" />
            <p>
              google Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, itaque.
            </p>
            <button>Learn More...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
