<!--
 * @Date: 2024-01-15 16:43:33
 * @Author: Lv
 * @LastEditors: Lv
 * @LastEditTime: 2024-01-15 19:54:07
-->
<template>
  <div class="inbanner">
    <strong>Product</strong>
  </div>
  <!--  -->
  <!--  -->
  <div class="ml_bread_inner">
    <router-link to="/home">Home</router-link>
    <span>&gt;</span>
    <a>Products</a>
    <span>&gt;</span>
    <a>{{ sjName }}</a>
    <span>&gt;</span>
    <a>{{productsSwiper.name  }}</a>
  </div>
  <!--  -->

  <div class="inside">
    <!--Content Start-->
    <!-- 产品详情 -->
    <div class="ml_prodetail">
      <div class="ml_prodetailleft">
        <Swiper
          :modules="[Thumbs]"
          style="
            --swiper-navigation-color: #fff;
            --swiper-pagination-color: #fff;
          "
          class="swiper-container mySwiper2"
          :space-between="10"
          :thumbs="{
            swiper: thumbsSwiper,
          }"
        >
          <SwiperSlide v-for="url in productsSwiper.p_img">
            <img :src="url" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          thumbsslider=""
          :modules="[Navigation, Thumbs]"
          :space-between="10"
          :slides-per-view="4"
          :free-mode="true"
          @swiper="setThumbsSwiper"
          :watch-slides-progress="true"
          :navigation="true"
          class="swiper-container mySwiper"
        >
          <SwiperSlide
            v-for="url in productsSwiper.p_img"
            data-aos="fade-up"
            class="swiper-slide"
          >
            <img :src="url" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="ml_prodetailright">
        <strong>{{ productsSwiper.name }} </strong>
        <p>
          {{ productsSwiper.des }}
        </p>
        <!-- 商品属性 -->
        <a href="#" class="query">Online inquiry</a>
        <!-- 在线询价 -->
        <div class="tab_pro">
          <a href="">Previous</a>
          <a href="">Next</a>
        </div>
      </div>
    </div>

    <div class="ml_description">
      <div class="ml_description_tab">
        <strong class="strong_1 tabactive" @click="contentShowClick"
          >Detailed content</strong
        >
        <strong class="strong_1" @click="parameterShowClick"
          >Specification parameter</strong
        >
        <strong class="strong_1" @click="packageShowClick"
          >Product packaging</strong
        >
      </div>
      <div class="ml_descriptioncon">
        <div class="ml_descriptioncon_fy" v-show="contentShow">
          <p v-for="url in productsSwiper.p_content_img">
            <img :src="url" alt="" />
          </p>
        </div>
        <div class="ml_descriptioncon_fy" v-show="parameterShow">
          <p v-for="url in productsSwiper.p_parameter_img">
            <img :src="url" alt="" />
          </p>
        </div>
        <div class="ml_descriptioncon_fy" v-show="packageShow">
          <p v-for="url in productsSwiper.p_package_img">
            <img :src="url" alt="" />
          </p>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="ml_description ml_related">
      <strong class="strong_1">Related products</strong>
      <!-- 热门产品 -->
      <div class="ml_indexpro">
        <div class="conListAll">
          <div class="conListItem" v-for="item in productList" :key="item.id" @click="gotoD(item.id)">
            <div><img :src="item.img_link" alt="" srcset="" /></div>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs } from 'swiper/modules'
import { ref, reactive, watch, onMounted } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { reqProductById, reqLevel2Products ,getParent } from '@/api'
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

onMounted(()=>{
  console.log(routes.query,'query');
  sjName.value = routes.query.title

})
let sjName = ref('')

const routes = useRoute()
watch(
  () => routes.params.id,
  (val) => {
    console.log(val);
    getProductsSwiper(val)
    getProductList(val)
  }
)


let productsSwiper = reactive({
  id: 8,
  name: 'PLIERS AND VICES',
  des: 'PLIERS AND VICES',
  p_img: [
    '/api/images/ffff3f4c446e5177807804201.png',
    '/api/images/ffff3f4c446e5177807804203.png',
  ],
  p_content_img: ['/api/images/ffff3f4c446e5177807804202.png'],
  p_parameter_img: ['/api/images/ffff3f4c446e5177807804204.png'],
  p_package_img: ['/api/images/ffff3f4c446e5177807804205.png'],
})

const getProductsSwiper = async (id) => {
  if (id=='' || id == null || id == undefined) {
    id = routes.params.id
  }
  let { data: res } = await reqProductById(id)

  res.data.p_img = JSON.parse(res.data.p_img)
  res.data.p_content_img = JSON.parse(res.data.p_content_img)
  res.data.p_parameter_img = JSON.parse(res.data.p_parameter_img)
  res.data.p_package_img = JSON.parse(res.data.p_package_img)
//   console.log(res.data)
  Object.assign(productsSwiper, res.data)
}
getProductsSwiper()

let productList = ref([])
const getProductList = async (id) => {
  if (id == '' || id == null || id == undefined) {
    id = routes.params.id
  }
  let {data:res} = await getParent(id);
  let level2Id = res.data
  let { data: res2 } = await reqLevel2Products(level2Id)
  // console.log(res2.data);
  res2.data.forEach(item => {
    item.p_img = JSON.parse(item.p_img)
    item.img_link = item.p_img[0]
  })
  productList.value = res2.data
}
getProductList()

let contentShow = ref(true)
let parameterShow = ref(false)
let packageShow = ref(false)
const contentShowClick = () => {
  contentShow.value = true
  parameterShow.value = false
  packageShow.value = false
}
const parameterShowClick = () => {
  contentShow.value = false
  parameterShow.value = true
  packageShow.value = false
}
const packageShowClick = () => {
  contentShow.value = false
  parameterShow.value = false
  packageShow.value = true
}

const router = useRouter()
// 
function gotoD(id){
  router.push(`/details/${id}`)
}
</script>
<style scoped>
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

.ml_act {
  color: var(--main-color) !important;
  border-bottom: 3px solid var(--main-color) !important;
}

.propage_sec {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: var(--main-color-white);
  display: none;
}

.propage_sec a {
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  display: block;
  color: #303133;
}

.propage_sec a:hover {
  background-color: var(--main-color) !important;
  color: var(--main-color-white) !important;
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

.inside {
  width: 1400px;
  margin: auto;
}

/* A1 */
.ml_prodetail {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  box-sizing: border-box;
}

.ml_prodetailleft {
  width: 49.5%;
  background-color: var(--main-color-white);
  box-sizing: border-box;
}

.swiper-slide-thumb-active {
  background-color: #fff !important;
}

.ml_prodetailleft .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--main-color-white);
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

.ml_prodetailleft .swiper-slide {
  background-size: cover;
  background-position: center;
}

.ml_prodetailleft .mySwiper2 {
  width: 100%;
  border: 1px solid #ccc;
}

.ml_prodetailleft .mySwiper2 img {
  height: 500px;
  object-fit: contain;
}

.ml_prodetailleft .mySwiper {
  box-sizing: border-box;
  padding: 10px 0;
}

.ml_prodetailleft .mySwiper img {
  border: 1px solid #ccc;
  height: 100px;
  object-fit: contain;
}

.ml_prodetailleft .mySwiper .swiper-slide {
  width: 25%;
  opacity: 0.4;
}

.ml_prodetailleft .mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.ml_prodetailleft .swiper-slide img {
  display: block;
  width: 100%;
}

.ml_prodetailright {
  box-sizing: border-box;

  width: 49.5%;
  padding: 15px;
  background-color: var(--main-color-white);
}

.ml_prodetailright strong {
  display: block;
  margin-bottom: 20px;
  font-size: #303133;
  color: #333;
  font-size: 30px;
  font-weight: normal;
}

.ml_prodetailright p {
  font-size: 14px;
  line-height: 25px;
  color: #333;
}

/*  */

.query {
  width: 150px;
  height: 40px;
  line-height: 40px;
  display: block;
  background-color: var(--main-color);
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  color: var(--main-color-white);
  margin-top: 20px;
}

.tab_pro {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tab_pro a {
  text-align: center;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #303133;
  display: block;
}

/*  */
.ml_description {
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  border: 1px solid #ededed;
  background-color: #fafafa;
}

.ml_description_tab {
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
}

.ml_description_tab .strong_1 {
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  font-size: 15px;
}

.ml_description_tab .strong_1 {
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  font-size: 15px;
}

.ml_descriptioncon {
  padding: 15px;
}

.ml_descriptioncon_fy {
  /* display: none; */
}

.ml_descriptioncon_fy img {
  max-width: 100%;
  display: block;
  margin: 20px auto;
}

/*  */
.strong_1 {
  display: block;
  padding: 10px;
  border-bottom: 2px solid var(--main-color);
  font-size: 16px;
  font-weight: normal;
  color: #333;
  cursor: pointer;
}

.ml_related .ml_indexpro {
  margin: 0;
  padding: 0;
  /* padding: 20px; */
}

.conListAll {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.conListItem {
  height: 275px;
  width: 300px;
  padding: 20px;
}

.conListItem > div {
  width: 100%;
  transition: all ease 0.4s;
  display: block;
  height: 230px;
  object-fit: cover;
  margin: 0 auto;
}

.conListItem > div img {
  width: 100%;
  height: 100%;
}

.conListItem p {
  text-align: center;
  height: 45px;
  line-height: 45px;
  background-color: white;
}
</style>
