import React from 'react';
import SwiperCore, {Navigation, Pagination, Autoplay, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

import photo from '../img/back.jpeg'
import {connect} from "react-redux";
import FProductsItem from "./f-products-item";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
const FeaturedProducts = ({fProducts}) => {
    const {products} = fProducts
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            loop
            autoplay={{delay:3000}}
        >
            {products.map((item) =>
                <SwiperSlide>
                    <FProductsItem key={item.id} item={item}/>
                </SwiperSlide>
            )}

        </Swiper>
    );
};

const mapStateToProps = ({fProducts}) => {
    return {fProducts}
}

export default connect(mapStateToProps)(FeaturedProducts);