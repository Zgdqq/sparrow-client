<template>
  <div class="foot">
            <div class="footer">
                <div class="footitem footitem1">
                    <strong>CONTACT US</strong>
                    <ul>
                        <li>
                            <i class="fa fa-location-arrow"></i>
                            <span>Nantong Science and Technology Park, No. 58</span>
                        </li>
                        <li>
                            <i class="fa fa-phone"></i>
                            <span>0513-88888888</span>
                        </li>
                        <li>
                            <i class="fa fa-fax"></i>
                            <span>00000</span>
                        </li>
                    </ul>
                </div>
                <div class="footitem footitem2">
                    <strong>QUICKLINK</strong>
                    <ul>
                        
                        <li>
                            <a href="">HOME</a>
                        </li>
                        
                        <li>
                            <a href="">ABOUT US</a>
                        </li>
                        
                        <li>
                            <a href="">PRODUCTS</a>
                        </li>
                        
                        <li>
                            <a href="">CASE</a>
                        </li>
                        
                        <li>
                            <a href="">NEWS</a>
                        </li>
                        
                        <li>
                            <a href="">CONTACT US</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="footitem">
                    <div class="footitem footitem3">
                        <strong>FEEDBACK</strong>
                        <input type="text" id="a1" placeholder="Name">
                        <input type="text" id="a2" placeholder="Email">
                        <input type="text" id="a3" placeholder="Phone">
                        <textarea name="" id="a4" placeholder="Message"></textarea>
                        <a href="javascript:checkSearch2()" class="sub">SEND</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>

    /*  */
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