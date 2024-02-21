<template>
  <div class="foot">
    <div class="footer">
      <div class="footitem footitem1">
        <ul>
          <li>
            <i class="fa fa-location-arrow"></i>
            <p style="color: white; padding: 20px;"
              >Toleezy is located in Suzhou, Jiangsu Province, which is
              conveniently situated near Shanghai, approximately a one and a
              half hour drive to the north. Suzhou is situated at the mouth of
              the Yangtse River (Changjiang River) and boasts its own sea
              harbor, providing excellent transportation facilities.</p
            >
          </li>
        </ul>
      </div>

      <div class="footitem">
        <ul>
          <li>
            <i class="fa fa-phone"></i>
            <strong>+86 13962278929</strong>
          </li>
          <li>
            <i class="fa fa-fax"></i>
            <strong>january@toleezy.com</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.foot {
  width: 100%;
  padding: 100px 0;
  background-image: url(../../public/img/fbj.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.footer {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.footitem {
  flex: 1;
}
.footitem strong {
  color: var(--main-color-white);
  font-size: 22px;
  display: block;
  margin-bottom: 20px;
}
.footitem1 ul li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.footitem1 ul li i {
  font-size: 15px !important;
  color: var(--main-color-white);
  width: 15px !important;
  align-items: center;
  justify-content: center;
  display: block !important;
  display: flex !important;
}
.footitem1 ul li span {
  flex: 1;
  display: block;
  color: var(--main-color-white);
  font-size: 14px;
  margin-left: 10px;
  padding: 0 60px 0 0;
}
.footitem2 {
  display: flex;
  flex-direction: column;
}
.footitem2 ul li a {
  display: block;
  text-align: left;
  width: 100%;
  font-size: 15px;
  color: var(--main-color-white);
}
.footitem2 ul li {
  margin-bottom: 10px;
}
.footitem3 input {
  width: 100%;
  height: 33px;
  margin-bottom: 10px;
  background-color: var(--main-color-white);
  padding-left: 15px;
  outline: none;
}
.footitem3 textarea {
  outline: none;
  width: 100%;
  height: 80px;
  padding-top: 15px;
  margin-bottom: 10px;
  background-color: var(--main-color-white);
  padding-left: 15px;
}
.sub {
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: var(--main-color-white);
  display: block;
  background-color: var(--main-color);
}
</style>
