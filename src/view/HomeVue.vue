<template>
    <div class="lb">
        <Swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" :loop="true" :autoplay="true"
            :navigation="true">
            <SwiperSlide v-for="item in swiperData" :key="item.id">
                <img :src="item.img_link" alt="" srcset="" />
            </SwiperSlide>
        </Swiper>
    </div>

    <div class="conA">
        <div class="con1con">
            <ul>
                <li>
                    <img src="../assets/A1.jpeg" alt="" />
                    <div class="con1pos">High Quality</div>
                </li>

                <li>
                    <img src="../assets/A2.jpeg" alt="" />
                    <div class="con1pos">High Efficiency</div>
                </li>

                <li>
                    <img src="../assets/A3.jpeg" alt="" />
                    <div class="con1pos">High Credit</div>
                </li>
            </ul>
        </div>
    </div>

    <div class="conB">
        <div class="conB2">
            <div class="contitle">
                <strong>PRODUCTS</strong>
                <p>All best seller products are available. Feel free to order now!</p>
            </div>
            <div class="lbB">
                <Swiper :modules="[Navigation]" :slides-per-view="4" :space-between="30" :loop="true"
                    :centered-slides="true" :navigation="true">
                    <SwiperSlide v-for="item in productSwiperData" :key="item.id">
                        <img :src="item.img_link" alt="" srcset="" />
                        <p>{{ item.name }}</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>

    <div class="conC">
        <div class="con3con">
            <div class="con3conleft">
                <img src="../assets/B1.jpeg" alt="" />
            </div>
            <div class="con3conright">
                <strong>ABOUT US</strong>
                <p>
                    We place great emphasis on meeting the specific requirements of our customers and meticulously attending to every detail. We are committed to providing exceptional service and continuously striving to achieve greater heights. We humbly extend our willingness to engage with both new and existing customers, taking the opportunity to gain a deeper understanding of your enterprise in order to deliver high-quality products, prompt delivery, and professional service.
                </p>
                <a href="">Learn More</a>
            </div>
        </div>
    </div>

    <!-- <div class="conD">
        <div class="con4con">
            <div class="contitle">
                <strong>COMPANY NEWS</strong>
            </div>
            <ul>
                <li>
                    <div class="imgbox">
                        <img src="../assets/C1.png" alt="" />
                        <div class="data">
                            <strong>24</strong>
                            <span>2023-05</span>
                        </div>
                    </div>

                    <div class="newinfo">
                        <a href="">
                            Whose job did AI "rob" this time? Digital people in the live
                            broadcast room
                        </a>
                        <p>Learn More &gt;&gt;</p>
                    </div>
                </li>

                <li>
                    <div class="imgbox">
                        <img src="../assets/C2.png" alt="" />
                        <div class="data">
                            <strong>24</strong>
                            <span>2023-05</span>
                        </div>
                    </div>

                    <div class="newinfo">
                        <a href="">
                            The 2023 Minhang Science and Technology Festival opens, and more
                            than 170 activities are waiting for you
                        </a>
                        <p>Learn More &gt;&gt;</p>
                    </div>
                </li>

                <li>
                    <div class="imgbox">
                        <img src="../assets/C3.png" alt="" />
                        <div class="data">
                            <strong>24</strong>
                            <span>2023-05</span>
                        </div>
                    </div>
                    <div class="newinfo">
                        <a href="">
                            Shenzhou 16 is ready to go, or for the first time will welcome
                            non-pilot-born "astronauts."
                        </a>
                        <p>Learn More &gt;&gt;</p>
                    </div>
                </li>
            </ul>
            <div class="more1" style="cursor: pointer">view all</div>
        </div>
    </div> -->

    <div class="conE">
        <div class="con5con">
            <div class="contitle">
                <strong>PARTNER</strong>
            </div>
            <ul>
                <li v-for="item in friendImgData" :key="item.id">
                    <img :src="item.img_link" alt="" srcset="" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { reqImgList } from "@/api";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

let swiperData = ref([])
const getSwiperImgs = async () => {
    let type = 1;
    let {data:res} = await reqImgList(type)
    // console.log(res);
    swiperData.value = res.data
}
getSwiperImgs()

let productSwiperData = ref([])
const getProductSwiperImgs = async () => {
    let type = 2;
    let {data:res} = await reqImgList(type)
    // console.log(res);
    productSwiperData.value = res.data
}
getProductSwiperImgs()

let friendImgData = ref([])
const getFriendImgData = async () => {
    let type = 3;
    let {data:res} = await reqImgList(type)
    console.log(res);
    friendImgData.value = res.data
}
getFriendImgData()
</script>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.lb {
    width: 100%;
    height: 700px;
}

/*  */

.conA {
    padding: 65px 30px;
}

.con1con {
    width: 100%;
}

.con1con ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.con1con ul li {
    width: 32%;
    overflow: hidden;
    position: relative;
    border: 1px solid #e60012;
    cursor: pointer;
    height: 270px;
}

.con1con ul li img {
    width: 100%;
    transition: var(--main-transition);
    height: 270px;
    object-fit: cover;
}

.con1con ul li:hover img {
    transform: scale(1.1);
}

.con1pos {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--main-color-white);
    font-weight: bold;
    font-size: 30px;
}

/* conB */

.conB {
    padding: 65px 30px;
}

.conB2 {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 40px;
}

.contitle {
    margin-bottom: 45px;
}

.contitle strong {
    display: block;
    text-align: center;
    font-size: 30px;
    color: var(--main-color-222);
    margin-bottom: 20px;
}

.contitle p {
    font-size: 15px;
    text-align: center;
    color: var(--main-color-222);
}

.lbB {
    height: 400px;
    width: 85%;
    margin: auto;
    position: relative;
}

.lbB .swiper-button-next {
    position: absolute;
    right: -100px !important;
}

.lbB .swiper-button-prev {
    position: absolute;
    left: -100px !important;
}

.lbB .swiper-slide {
    position: relative;
    height: 400px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #e9e9e9;
}

.lbB .swiper-slide img {
    height: 350px;
}

.lbB .swiper-slide p {
    height: 40px;
    line-height: 40px;
    text-align: center;
}

/* conC */

.conC {
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
    content: '';
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
    content: '';
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
    content: '';
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
    padding-right: 140px;
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
    content: '';
    width: 40%;
    height: 120%;
    transform: rotate(20deg);
    position: absolute;
    top: 5%;
    right: 14%;
    background: #151515;
    z-index: 2;
}

/*  */
.conD {
    width: 100%;
    padding: 65px 0;
}

.con4con {
    max-width: 1400px;
    margin: 0 auto;
}

.con4con ul {
    display: flex;
    justify-content: space-between;
}

.con4con ul li {
    width: 32%;
    cursor: pointer;
    position: relative;
    border: 1px solid #e9e9e9;
    transition: var(--main-transition);
}

.con4con ul li img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.con4con ul li:hover {
    border: 1px solid var(--main-color);
    box-shadow: var(--main-shadow);
}

.con4con ul li:hover a {
    color: var(--main-color);
}

.newinfo {
    padding: 15px;
}

.newinfo a {
    transition: var(--main-transition);
    font-size: 20px;
    color: var(--main-color-333);
    margin-bottom: 20px;
    display: block;
}

.newinfo p {
    font-size: 15px;
    color: var(--main-color-999);
}

.data {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 80px;
}

.imgbox {
    position: relative;
}

.data strong {
    display: block;
    font-size: 25px;
    color: var(--main-color-white);
    font-weight: normal;
}

.data span {
    color: var(--main-color-white);
    font-size: 14px;
}

.more1 {
    width: 160px;
    height: 40px;
    border-radius: 40px;
    color: var(--main-color-white);
    background-color: var(--main-color);
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    line-height: 40px;
}

/*  */
.conE {
    width: 100%;
    padding: 65px 0;
}

.con5con {
    max-width: 1400px;
    margin: 0 auto;
}

.con5con ul {
    display: flex;
    flex-wrap: wrap;
}

.con5con ul li {
    width: calc((100% - 100px) / 6);
    margin-right: 20px;
    margin-bottom: 20px;
}

.con5con ul li img {
    width: 100%;
    height: 100px;
    object-fit: contain;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
}

.con5con ul li:nth-child(6n) {
    margin-right: 0;
}
</style>