<template>
    <div class="pchead">
        <div class="pcheader">
            <a href="" class="pclogo">TOLEEZY</a>
            <ul class="pcnav">
                <!-- 一级导航 -->
                <li class="first_li" v-for="item in menuData" :key="item.id">
                    <router-link :to="{path:item.path}" class="first_a">{{item.title}}</router-link>
                    <!-- 二级导航 -->
                    <ul class="pc_sec_nav" v-if="item.children && item.children.length >= 1">
                        <li class="pc_sec_item " v-for="child in item.children" :key="child.id">
                            <router-link :to="{path:child.path,query:{titleMax:child.title}}"    class="second_a">{{ child.title }}</router-link>
                            <!-- 三级导航 -->
                            <ul v-if="child.children && child.children.length >= 1">
                                <li v-for="sun in child.children" :key="sun.id">
                                    <router-link :to="sun.path">{{sun.title}}</router-link>
                                </li>       
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="pcsearch">
                <input type="text" id="KeyName" placeholder="Search">
                <a href=""><svg t="1703928360507" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4197" width="32" height="32">
                        <path
                            d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"
                            fill="#ffffff" p-id="4198"></path>
                    </svg></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { reqMenuData } from '@/api/index'
let menuData = ref([
    {
        path: '/home',
        title: 'HOME'
    },
    {
        path: '/products',
        title: 'PRODUCTS',
        children: [
            {
                path: '1',
                title: '2',
                
            },
            {
                path: '1',
                title: 'INDUSTRY NEWS'
            }
        ]
    },
    {
        path: '/company',
        title: 'COMPANY',
    },
    {
        path: '/contact',
        title: 'CONTACT',
    }
])
const getMenuData = async () =>{
    let res = await reqMenuData()
    menuData.value = res.data.data
    // console.log(menuData.value);
}
onMounted(()=>{
   getMenuData()
})
</script>

<style scoped>
.pchead {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: white;
    height: 150px;
    border-bottom: 6px solid #e60012;

}

.pcheader {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    padding: 30px 0;
}

.pclogo img {
    height: 80px;
}
.pclogo {
    font-size: 40px;
    color: #000;
}
.pcnav {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 99;
}

.pcnav>li {
    /* position: relative; */
    transition: all ease 0.4s;
}

.pcnav>li>a {
    display: block;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    transition: all ease 0.4s;
    color: #333333;
    padding: 0 20px;
    /* position: relative; */
}

.pcnav>li>a:hover {
    color: #e60012;
}




.pcsearch {
    display: flex;
}

.pc_sec_nav {
    position: absolute;
    /* width: 150px; */
    width: 100%;
    background-color: white;
    display: none;
    z-index: 9999;
    left: 0;
    /* box-shadow: 10px 10px 20px gray; */
}

.first_li:hover ul {
    display: block;
}


.pc_sec_nav .pc_sec_item {
    /* width: 150px; */
    height: 50px !important;
    position: relative;
}

.pc_sec_nav .pc_sec_item>ul {
    position: absolute;
    width: 100%;
    background-color: white;
    right: -100%;
    display: none;
    top: 0;
}

.pc_sec_nav .pc_sec_item>ul>li {
    height: 50px;
    width: 150px;
    overflow: hidden;
}

.pc_sec_nav .pc_sec_item>ul>li a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: #333333;
}

.pc_sec_item:hover ul {
    display: block;
}

.pc_sec_item>ul>li:hover a {
    color: #e60012;
}

.pc_sec_item:hover a {
    color: #e60012;
}

.second_a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: #333333;
}

.pcsearch input {
    outline: none;
    height: 40px;
    width: 300px;
    padding-left: 15px;
    border: 1px solid #e1e1e1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-sizing: border-box;
}

.pcsearch a {
    display: block;
    width: 40px;
    height: 40px;
    color: white;
    text-align: center;
    line-height: 40px;
    background-color: #000;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.pcsearch svg {
    margin-top: 4px;
}
</style>