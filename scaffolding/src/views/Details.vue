<template>
    <div class="zhu">
        <div class="ci">
            <mt-header class="hea" title="个人信息" fixed>
                <router-link to="/me" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
            <div class="portrait string">
                <div class="portraitone justifyAlign">
                    <p class="portraitp">头像</p>
                    <div>
                        <img class="portraitmap" src="../assets/head/010-2.png">
                    </div>
                </div>
            </div>
            <div class="matter string">
                <div class="matterone justifyAlign">
                    <div>名字</div>
                    <div>
                        <span class="sicolo">阿荡</span>
                    </div>
                </div>
            </div>
            <div class="matter string">
                <div class="matterone justifyAlign">
                    <div>微信号</div>
                    <div>
                        <span class="sicolo">10086</span>
                    </div>
                </div>
            </div>
            <div class="matter string">
                <div class="matterone justifyAlign">
                    <div>我的二维码</div>
                    <div>
                        <div class="sicolo chatdown">
                            <img src="../assets/head/24_24.png">
                        </div>
                    </div>
                </div>
            </div>

            <div class="matter">
                <div class="matterone justifyAlign">
                    <div>我的地址</div>
                    <div class="chatdown"></div>
                </div>
            </div>
            <div class="lacuna"></div>

            <div class="matter string">
                <div class="matterone justifyAlign">
                    <div>性别</div>
                    <div>
                        <span class="sicolo">男</span>
                    </div>
                </div>
            </div>
            
            <div class="matter string">
                <div class="matterone justifyAlign">
                    <div>地区</div>
                    <div>
                        <span class="sicolo">奥地利 维也纳</span>
                    </div>
                </div>
            </div>

            <div class="matter string">
                <div class="matterone justifyAlign">
                    <div>个性签名</div>
                    <div>
                        <span class="sicolo">未填写</span>
                    </div>
                </div>
            </div>

        </div>
    </div>    
</template>
<style scoped>
    .zhu{
        background-color:#eee;
    }
    .zhu::before{
        content:"";
        display:table;
    }
    .ci{
        background-color: #fff;
    }
    .portrait{
        width: 100%;
        margin-top:60px;
    }
    .portraitone{
        padding: 7px;
    }
    .justifyAlign{
        display:flex;
        width:95%;
        justify-content:space-between;
    }
    .portraitp{
        display: block;
        line-height: 60px;
    }
    .portraitmap{
        border-radius: 6px;
    }
    .string{
        position: relative;
    }
    .string::after{
        content:"";
        position:absolute;
        display:block;
        width:95%;
        height:1px;
        border-top:1px solid #eee;
        left:5%;
    }
    .matter{
        width: 100%;
    }
    .matterone{
        padding: 8px;
        height: 41px;
        line-height: 35px;
    }
    .sicolo{
        color:#999;
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
        margin-top: -11px;
        right: 4%;
    }
    .lacuna{
        width:100%;
        height:25px;
        background-color:#eee;
    }
</style>