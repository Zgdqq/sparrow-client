<!--
 * @Date: 2024-01-15 16:43:33
 * @Author: Lv
 * @LastEditors: Lv
 * @LastEditTime: 2024-01-15 19:37:30
-->
<script setup></script>
<template>
  <!--  -->
  <div class="banner">
    <img src="../assets/bj4.jpeg" alt="" srcset="" />
    <div class="dhTitle">
      <a href="">Home</a>
      &nbsp;/&nbsp;
      <a href="">Contact</a>
    </div>
    <div class="banBoxMax">
      <div class="banBox">
        <h2>How to reach Toleezy.</h2>
        <section class="bannerCon">
          <p>· 1 hour from Wuxi Airport by car</p>
          <p>· 1 hour from Shanghai Hongqiao Airport by train</p>
          <p>· 1 hour from Changzhou by car</p>
          <p>· 4 hours from Ningbo Airport by train</p>
          <p>· 3 hours from Hangzhou by train</p>
        </section>
        <p>
          There are many railways from SHANGHAI， HANGZHOU，BEIJING， <br />
          to SUZHOU & ZHANGJIAGANG station everyday.
        </p>
      </div>
    </div>
  </div>

  <!--  -->

  <div class="lxCon">
    <div class="lxConLeft">
      <h2>SUZHOU TOLEEZY INDUSTRIAL CO., LTD.</h2>
      <!-- <h3>
                <img src="../assets/titleImg.jpeg" alt="" sizes="" srcset="">
            </h3> -->
      <div class="lxConBox">
        <p>
          <span><img src="../assets/email.jpeg" alt="" /><b>Email</b></span>
          <span><a href="">january@toleezy.com</a></span>
        </p>
        <p>
          <span><img src="../assets/tel.jpeg" alt="" /><b>Tel.</b></span>
          <span
            ><a href=""
              >+86 13962278929<br />
              Fax.:(0086 512) 58119602</a
            ></span
          >
        </p>
        <p>
          <span><img src="../assets/dw.jpeg" alt="" /><b>Add.</b></span>
          <span
            ><a href=""
              >20/F Build 2, Jiyanghu Crown, Yangshe Town Zhangjiagang, Suzhou
              City, Jiangsu Prov., China</a
            ></span
          >
        </p>
      </div>
    </div>
    <div class="ditu">
      <img src="../assets/dtu.png" alt="" srcset="" />
    </div>
  </div>
  <!-- <div class="lxConB">
    <h2>Welcome to be a partner of us</h2>
    <p>
      Let us grow together, work together, and succeed together!If you are
      interested in becoming a sales partner of WUFU, please let us know your
      situation.Our team will resolve your request within a few days.
    </p>
    <a href="javascript:void(0)" class="showBtn" id="">view more</a>
  </div> -->
</template>
<style scoped>
/*  */
.banner {
  width: 100%;
  height: 700px;
  position: relative;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lxCon {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.lxCon > div {
  flex: 1;
}

.lxConLeft {
  padding: 130px 50px 130px 100px;
}

.lxConLeft h2 {
  font-size: 34px;
}

.lxConLeft h3 {
  padding-bottom: 40px;
  border-bottom: 1px solid gray;
}

.lxConLeft h3 img {
  width: 100%;
}

.lxConBox p {
  padding-top: 45px;
}

.lxConBox p span {
  display: block;
  font-size: 18px;
  color: #424242;
  font-weight: 500;
  margin-top: 10px;
  line-height: 40px;
}

.lxConBox p span img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 20px;
}

.lxConBox p span b {
  display: inline-block;
  line-height: 40px;
}

.lxConBox p span a {
  color: #424242;
  font-weight: 500;
  font-size: 14px;
}

.lxConB {
  height: 320px;
  background-color: #eceff1;
  padding: 20px 0;
}

.lxConB h2 {
  color: #424242;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.lxConB p {
  color: #424242;
  width: 720px;
  margin: auto;
  line-height: 36px;
  font-size: 24px;
}

.lxConB a {
  display: block;
  color: #fff;
  width: 220px;
  padding: 15px 0;
  background: #1565c0;
  transition: all 0.4s;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 18px;
  text-transform: uppercase;
}

.lxConB a:hover {
  background: #e60012;
  color: white;
}

/*  */
.dhTitle {
  width: 1400px;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

.dhTitle a {
  color: white;
}

.banBoxMax {
  width: 1400px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 200px;
  display: flex;
  justify-content: right;
}

.banBox h2 {
  margin: 0;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: white;
}

.banner .banBox section.bannerCon {
  margin-top: 40px;
  margin-bottom: 30px;
}

section.bannerCon p {
  font-style: italic;
  font-size: 16px;
  line-height: 28px;
  color: white;
  text-align: right;
}

.banBoxMax > .banBox > p {
  font-size: 16px;
  line-height: 28px;
  color: white;
}

/*  */

.ditu {
  padding: 150px;
  box-sizing: border-box;
}

.ditu img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.address {
  width: 90%;
  height: 600px;
  background-color: #1565c0;
}

#allmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
}
</style>
