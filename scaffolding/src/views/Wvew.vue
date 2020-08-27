<template>
    <div class="major">
        <mt-header class="hea" title="聊天详细" fixed>
            <router-link to="/wveuie" slot="left">
                <mt-button icon="back">
                    <span class="salter">返回</span>
                </mt-button>
            </router-link>
        </mt-header>
        <ul class="iner tinct">
            <li>
                <div><img class="inerimg" src="../assets/head/010-2.png"></div>
                <p class="inertext">阿荡</p>
            </li>
            <li><img class="inerimg" src="../assets/head/0033.png"></li>
        </ul>
        <div class="over tinct">
            <div class="overhead">
                <div class="overheadone">置顶聊天</div>
                <div class="overheadonetwo">
                    <mt-switch ></mt-switch>
                </div>
            </div>
            <div class="string"></div>
            <div class="overhead">
                <div>消息免打扰</div>
                <div class="overheadonetwo">
                    <mt-switch ></mt-switch>
                </div>
            </div>
        </div>
        <div class="chat tinct">
            <div class="chatdown">聊天文件</div>
            <div class="string"></div>
        </div>
        <div class="chat tinct">
            <div class="chatdown">设置当前聊天背景</div>
            <div class="string"></div>
            <div class="chatdown">查找聊天内容</div>
        </div>
        <div class="chat tinct">
            <div class="chatdown">清空聊天记录</div>
        </div>
        <div class="chat tinct">
            <div class="chatdown">投诉</div>
        </div>
        <div class="Tobemodified">
        </div>
    </div>
</template>
<style>
    .major{
        background-color:#eee;
    }
    .tinct{
        background-color: #fff;
    }
    .iner{
        margin-top: 40px;
        padding: 15px 10px 5px;
        display:flex;
    }
    .iner>li{
        padding: 10px 14px 0 15px;
    }
    .inerimg{
        border-radius: 4px;
    }
    .inertext{
        width: 65px;
        text-align: center;
        padding-top: 5px;
    }
    .over{
        width: 100%;
        margin-top: 20px;
    }
     .overhead{
        display:flex;
        width:90%;
        margin:0 auto;
        line-height: 36px;
        padding: 8px;
        justify-content:space-between;
    }
    .overheadonetwo{
        margin-top:4px;
    }
    .string{
        position: relative;
    }
    .string::before{
        content:"";
        position:absolute;
        display:block;
        width:95%;
        height:1px;
        border-top:1px solid #eee;
        left:5%;
    }
    .chat{
        margin-top:20px;
    }
    .chatdown{
        padding: 10px 15px 10px 15px;
        position: relative;
    }
    .chatdown::after{
        content:"";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: matrix(.71, .71, -.71, .71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 4%;
    }
    .Tobemodified{
        width:100%;
        height: 1px;
        margin-top: 124px;
        position:relative;
    }
</style>