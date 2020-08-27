<template>
    <div>
        <!-- 头部开始 -->
        <mt-header>
            <div slot="left">
                <router-link to="/me" style="color:#000">
                    <mt-button icon="back" >支付</mt-button>
                </router-link>
            </div>
            <div slot="right">
                <router-link to="" style="color:#000">
                    <mt-button icon="more" ></mt-button>
                </router-link>
            </div>
        </mt-header>
        <!-- 头部结束 -->
        <!-- 支付区域开始 33行-->
        <div class="box">
            <!-- 支付图标 40行-->
            <div class="box_left">
                <img src="../../assets/img/shoufukuan.png" alt="">
                <p>首付款</p>
            </div>
            <!-- 钱包 51行-->
            <div class="box_right">
                <img src="../../assets/img/钱包.png" alt="">
                <p>钱包</p>
                <p style="font-size:11px">￥0.00</p>
            </div>
        </div>
        <!-- 支付区域结束 -->
        <!-- 选项区域开始 option  70行-->
        <div class="option">
            <div class="option_1"><span style="margin-left:10px">腾讯服务</span> </div>
            <!-- 选项卡一楼 92行-->
            <div class="option_one">
                <div class="option_one_left">
                    <img src="../../assets/img/xinyongka.png" alt="">
                    <p class="font_size">信用卡还款</p>
                </div>
                <div class="option_one_center">
                    <img src="../../assets/img/chongzhi.png" alt="">
                    <p class="font_size">手机充值</p>
                </div>
                <div class="option_one_right">
                    <img src="../../assets/img/licai.png" alt="">
                    <p class="font_size">理财通</p>
                </div>
            </div>
            <!-- 选项卡一楼结束 -->
            <!-- 选项卡二楼开始 -->
            <div class="option_one">
                <div class="option_one_left">
                    <img src="../../assets/img/shenghuo.png" alt="">
                    <p class="font_size">生活交费</p>
                </div>
                <div class="option_one_center">
                    <img src="../../assets/img/Q币.png" alt="">
                    <p class="font_size">Q币充值</p>
                </div>
                <div class="option_one_right">
                    <img src="../../assets/img/fuwu.png" alt="">
                    <p class="font_size">城市服务</p>
                </div>
            </div>
            <!-- 选项卡二楼结束 -->
            <!-- 选项卡三楼开始 -->
            <div class="option_three">
                <div class="option_three_left">
                    <img src="../../assets/img/gongyi.png" alt="">
                    <p class="font_size">腾讯公益</p>
                </div>
                <div class="option_three_center">
                    <img src="../../assets/img/yiliao.png" alt="">
                    <p class="font_size">医疗健康</p>
                </div>
                <!-- <div class="option_one_right">
                    <img src="../../assets/img/fuwu.png" alt="">
                    <p class="font_size">城市服务</p>
                </div> -->
            </div>
            <!-- 选项卡三楼结束 -->
        </div>
        <!-- 选项区域结束 -->
    </div>
</template>
<style scoped>
    /* 头部 */
    .mint-header{
        background-color: #FFFFFF;
    }
    /* 支付区域 17行 */
    .box{
        width: 95%;
        margin: 0 auto;
        height: 150px;
        background: rgb(35, 194, 35);
        display: flex;
        border-radius: 10px;
        justify-content: space-around;
        align-items: center;
    }
    /* 支付图标 19行 */
    .box_left{
        width: 20%;
        text-align: center;
        height: 60px;
        /* height: 20%; */
        /* background: red; */
    }
    /* 钱包 24行 */
    .box_right{
        width: 20%;
        height: 70px;
        text-align: center;
        /* background: turquoise; */
    }
    /* 选项区域开始 32行*/
    .option{
        width: 95%;
        height: 400px;
        margin:0 auto;
        border-radius: 10px;
        background: whitesmoke;
        border: 1px solid gray;
        margin-top: 10px;
    }
    /* 腾讯服务 */
    .option_1{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #DADCE0;
        /* margin-left: 10px; */
        /* background: red; */
    }
    /* 选项卡一楼  35行*/
    .option_one{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #DADCE0;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }
    .option_one_left{
        width: 33.33%;
        height: 50px;
        text-align: center;
        border-right: 1px solid #DADCE0;
        line-height: 25px;
        
    }
    .option_one_center{
        width: 33.33%;
        height: 50px;
        text-align: center;
        border-right: 1px solid #DADCE0;
        line-height: 25px;
    }
    .option_one_right{
        width: 33.33%;
        height: 50px;
        text-align: center;
        line-height: 25px;
        /* background: forestgreen; */
    }
    /* 所有的字体大小 */
    .font_size{
        font-size: 14px;
    }
    /* 选项卡三楼 */
    .option_three{
        width: 66.66%;
        height: 100px;
        border-bottom: 1px solid #DADCE0;
        display: flex;
        justify-content: space-around;
        align-items: center
    }
    .option_three_left{
        width: 50%;
        height: 50px;
        text-align: center;
        border-right: 1px solid #DADCE0;
        line-height: 25px;
    }
    .option_three_center{
        width: 50%;
        height: 50px;
        text-align: center;
        border-right: 1px solid #DADCE0;
        line-height: 25px;
    }
</style>