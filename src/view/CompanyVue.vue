<!--
 * @Date: 2024-01-15 16:43:33
 * @Author: Lv
 * @LastEditors: Lv
 * @LastEditTime: 2024-01-15 16:47:44
-->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
</script>
<template>
     <div class="inbanner">
            <strong>Product</strong>
    </div>
         <!--  -->
    <div class="ml_bread_inner">
            <a href="/">Home</a>
            <span>&gt;</span>
            <a>ABOUT US</a>
    </div>
    <div class="conC">
        <div class="con3con">
            <div class="con3conleft">
                <img src="../assets/B1.jpeg" alt="">
            </div>
            <div class="con3conright">
                <strong>ABOUT US</strong>
                <p>At Toleezy, we believe in offering not only high-quality products but also exceptional services. We constantly adapt to market changes and provide innovative solutions to meet the evolving needs of our customers. As a result, we have gained the trust and approval of dealers in over 60 countries worldwide. Our primary goal is to ensure long-term profitability for our dealers, and we are dedicated to forging successful partnerships.</p>
                <p>We extend a sincere invitation to you to join us in our pursuit of greater success. Let's collaborate and achieve new heights together.</p>
                <a href="">Learn More</a>
            </div>
        </div>
    </div>
    <div class="aboutMax">
        <img src="../assets/abouts2.png" alt="" srcset="">
        <div class="maxText">
            <p> We carefully select workshops to offer reasonable prices and proper quality.
Our quality inspectors ensure that each product meets customer instructions. </p>
            <p>
               
We prioritize customer inquiries and orders, providing efficient service with prompt quotations and optimal solutions within 1-3 working days. We never delay!
            </p>
        </div>
       
    </div>
    <!-- <div class="xcImg">
        <img src="../assets/bj3.jpeg" alt="" srcset="">
        <div>
            <div class="xcText">
                <p>We select every workshop carefully to produce the reasonable price and proper quality for you. </p>
                <p>Our quality inspectors examine each product to ensure the quality and package be produced according to customers' instruction.</p>
            </div>
        </div>
        <div>
            <img src="../assets/abouts2.png" alt="" srcset="">
            <div class="xcText">
                <p>We take every customer's inquiry and order seriously, we like to enjoy efficiency，so we provide you with the soonest quotation and best solution in 1-3 working days. We refuse to delay!</p>
            </div>
        </div>
    </div> -->
    <!-- <div class="lbList">
        <Swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" :loop="true" :autoplay="true"
            :navigation="true"
            :slides-per-view="3"
            >
            <SwiperSlide>
                <img src="../assets/LB1.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets//LB2.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets/LB1.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets//LB2.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets/LB1.jpeg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets//LB2.jpeg" alt="" srcset="" />
            </SwiperSlide>
        </Swiper>          
    </div> -->
    

</template>
<style scoped>

.aboutMax{
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.aboutMax img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.maxText{
    width: 60%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 40px;
    box-sizing: border-box;
    /* background: #e60012; */
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

}
.maxText p{
    margin: 20px 0;
}


/*  */

.swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

.inbanner {
            width: 100%;
            height: 300px;
            background-image: url(../assets/Tbj.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .inbanner strong {
            display: block;
            font-size: 35px;
            color: var(--main-color-white);
        }
        /*  */

        .ml_inner_nav {
        width: 100%;
        height: 60px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .ml_inner_nav_con {
        max-width: 1200px;
        margin: 0 auto;
        height: 60px;
        /* overflow-x: scroll;
        overflow-y: hidden; */
        position: relative;
    }
    /*滚动条样式*/
    .ml_inner_nav_con::-webkit-scrollbar {
        width: 8px;
        padding-right: 4px;
        height: 5px;
        background-color: transparent;
        position: absolute !important;
        bottom: -15px !important;
    }
  
   

    /*  */
    .ml_bread_inner {
        max-width: 1400px !important;
        margin: 30px auto;
        display: flex;
        align-items: center;
    }
    .ml_bread_inner span {
        display: block;
        padding: 0 10px;
        font-size: 14px;
    }
    .ml_bread_inner a {
        display: block;
        font-size: 14px;
        color: var(--main-color-fontColor);
    }
    .ml_bread_inner a:hover {
        color: var(--main-color);
    }
    /*  */
  


 /* conC */

 .conC{
            width: 100%;
        }

        .con3con {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
        }
        .con3con::before {
            content: "";
            width: 40%;
            height: 120%;
            transform: rotate(20deg);
            position: absolute;
            top: 5%;
            right: 15%;
            background: #e60012;
            z-index: 1;
        }
        .con3conleft {
            width: 55%;
            position: relative;
        }
        .con3conleft::before {
            content: "";
            width: 50%;
            height: 120%;
            transform: rotate(20deg);
            position: absolute;
            top: -20%;
            left: -50%;
            background: #e60012;
            z-index: 2;
        }
        .con3conleft img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .con3conright {
            width: 45%;
            background-color: #151515;
            position: relative;
            z-index: 9;
            padding: 45px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .con3conright::before {
            content: "";
            width: 50%;
            height: 120%;
            transform: rotate(20deg);
            position: absolute;
            top: 0%;
            right: -36%;
            background: #e60012;
            z-index: 1;
        }
        .con3conright strong {
            display: block;
            font-size: 48px;
            margin-bottom: 30px;
            color: var(--main-color-white);
        }
        .con3conright p {
            line-height: 40px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
            color: var(--main-color-white);
            font-size: 16px;
            padding-right:140px;
            box-sizing: border-box;
        }
        .con3conright a {
            display: block;
            width: 160px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            color: var(--main-color-white);
            background-color: var(--main-color);
            border-radius: 50px;
            font-size: 15px;
            margin-top: 30px;
        }
        .con3con::after {
            content: "";
            width: 40%;
            height: 120%;
            transform: rotate(20deg);
            position: absolute;
            top: 5%;
            right: 14%;
            background: #151515;
            z-index: 2;
        }


        .xcImg{
            width: 100%;
            height: 550px;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            
        }
        .xcImg>div{
            flex: 1;
            height: 100%;
            position: relative;
        }

        .xcText{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            color: white ;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .xcText p{
            margin: 20px 0;
            font-size: 30px;
        }
        .xcImg img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /*  */

    .lbList{
        width: 100%;
        height: 360px;
        background-color: black;
        padding: 30px 0;
        box-sizing: border-box;
        position: relative;
    }
    .lbList 

    .lbList .swiper-slide{
        margin-right: 0 !important;
    }

    .lbList .swiper-pagination{
        position: absolute;
        bottom: 10px;
    }

    .lbList .swiper-pagination span{
        width: 20px !important;
        height: 4px !important;
        border-radius: 0 !important;
        background-color: white;

    }

    .lbList .swiper-pagination .swiper-pagination-bullet-active{
        background-color: var(--main-color);
    }

</style>