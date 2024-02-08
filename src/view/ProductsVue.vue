<!--
 * @Date: 2024-01-15 16:43:33
 * @Author: Lv
 * @LastEditors: Lv
 * @LastEditTime: 2024-01-15 19:33:51
-->
<template>
  <div class="inbanner">
    <strong>Product</strong>
  </div>
  <!--  -->

  <!--  -->
  <div class="ml_bread_inner">
    <a href="/">Home</a>
    <span>&gt;</span>
    <a>Products</a>
    <span>&gt;</span>
    <a>{{ productsName }}</a>
  </div>
  <!--  -->
  <div class="conAll">
    <div v-for="item in productList" :key="item.id" @click="gotoDetails(item.id)">
      <div><img :src="item.img_link" alt="" srcset="" /></div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { reqLevel2Products } from '@/api'
import { useRoute,useRouter } from 'vue-router'

let productsName = ref('')


onMounted(()=>{
  console.log(routes.query,'query');
  productsName.value = routes.query.titleMax

})



const routes = useRoute()
const router = useRouter()

function gotoDetails(id){
  router.push({
    path:`/details/${id}`,
    query:{
      title:productsName.value
    }
  })
  
}
let productList = ref([])

watch(
  () => routes.params.id,
  (val) => {
  productsName.value = routes.query.titleMax
    getProductList(val)
  }
)
const getProductList = async (id) => {
  if (id == '' || id == null || id == undefined) {
    id = routes.params.id
  }
  let { data: res } = await reqLevel2Products(id)
  console.log(res.data);
  res.data.forEach(item => {
    item.p_img = JSON.parse(item.p_img)
    item.img_link = item.p_img[0]
  })
  productList.value = res.data
}
getProductList()
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

.propage_sec_fir {
  height: 45px;
  line-height: 45px;
  margin: 0 20px;
  display: block;
  border-bottom: 3px solid transparent;
  color: #303133;
  /* width: 120px; */
  text-align: center;
}

.ml_inner_nav_con a:hover {
  color: var(--main-color) !important;
  border-bottom: 3px solid var(--main-color) !important;
}

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

/*  */
.conAll {
  width: 1400px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: auto;
}

.conAll > div {
  width: 320px;
  height: 280px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
  overflow: hidden;
  margin-right: 10px;
}

.conAll > div > div {
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.conAll > div > div img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: var(--main-transition);
}

.conAll > div > div:hover img {
  transform: scale(1.2);
}

.conAll > div p {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
