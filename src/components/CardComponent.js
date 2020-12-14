import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Card = ({rental}) => {

	/***settings for carousel */
	var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


	return(
   <div className="tile">
			<div className="row">
			   <div className="col-md-3 col-sm-3 col-xs-12">
				    <Slider {...settings}>
						{rental.photos.map(function(photo, index){
							return(<img key={index} alt="rental-image" width="100%" height="100%" className="rental-card"
				   srcSet={photo.m + ' 1x,' + photo.t +' 1.5x,' + photo.l + ' 2x,' + photo.hr + ' 2.5x'}
     				alt="rental" src={photo.hr}/>)
						})}
					 </Slider>
				</div>
			   <div className="col-md-7 col-sm-7 col-xs-12">
				  <h6><a href={'https://www.holidu.com' + rental.internalLink}>{rental.details.name}</a></h6>
				  <p className="rating">{rental.rating.value>0 && 
				  	<span>{rental.rating.value/20}/5 ({rental.rating.count} ratings)</span>}
				  </p>
				  <ul className="extraDetails">
					 <li>{rental.details.shortName[0]}</li>
					 <li>{rental.details.bedroomsCount} bedrooms</li>
					 <li>{rental.details.guestsCount} guests</li>
				  </ul>
			   </div>
			   <div className="col-md-2 col-sm-2 col-xs-12">
				  <div className="wishlist">
					<p title="add to wishlist"><span className="fa fa-heart"></span></p>
					 <p><img alt="provider" className="provide" width="100%" src={rental.provider.logoUrl}/></p>
					 <p><span className="price">${rental.price.daily}/night</span></p>
				  </div>
			   </div>
			</div>
	</div>
	
	)
	
	}
	
export default Card;