import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const images = [
    "https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg",
    "https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg?semt=ais_country_boost&w=740",
    "https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg",
    "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJD3KSio3sqxXTiChIrfRU5GPwzTMTP_rwoX5JDd4I6nitvSIGmxw_meC4sHQfkVb43h8&usqp=CAU",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gray-200 border border-white">
      <div className="mb-4 mt-1">
        <img
          src="https://img8.hkrtcdn.com/27731/bnr_2773017_o.jpg"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Banner;
