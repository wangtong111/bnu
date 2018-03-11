var PlayLayer23 = PlayLayerBase.extend({

    animalTalk : ["你一定记得这是在空间定向实验中\n使用的两个迷宫。\n现在，小老鼠们已经熟悉了\n左边的这个迷宫。\n在把小老鼠放进右侧的迷宫前，\n还要为右侧的迷宫做一些布置。\n请用塞子塞住其中的一条通道。",
                  "饥饿的小老鼠被放进了新的迷宫。\n原来的迷宫中食物会出现\n的位置在新的放射状迷宫的右上角\n（用奶酪表示）。\n小老鼠走进原先的通道，却发现它被堵死了。\n请你猜猜接下来小老鼠会走进哪个管道呢？"],

    onEnter:function () {
        var self = this;
        self._super();
        self.hasGoods = false;
        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length !== 2){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] !== 2 && selectGoods[i] !== 4){
                self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                    alert("选择物品有误，请返回超市重新选择。");
                })));
                return;
            }
        }
        self.completeRoom = true;
        self.hasGoods = true;
        self.addNextStep();
    },

    checkGame : function(){
        var self = this;
        if(self.hasGoods == false){
            return false;
        }

        if (self.now_step === 0){
            if(self.res[1].length === 1){
                return true;
            }

            return false;
        }else if (self.now_step === 1){
            if(self.res[0].length === 1 && self.res[0][0] === 6){
                return true;
            }

            return false;
        }
    },


    checkNextStep : function () {

        if(this.now_step < 1){
            return true;
        }

        return false;
    },

    addNextStep : function () {
        var self = this;
        if(self.now_step === 0){
            self.addStep0();
        }else if(self.now_step === 1){
            self.addStep1();
        }

        self.addSpeak(self.now_step);
    },

    addStep0 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(141,154)];
        self.res = [[],[],[]];



        var game2_3_1_1 = new cc.Sprite(res.game2_3_1_1);
        game2_3_1_1.setPosition(-221,0);
        self._content.addChild(game2_3_1_1);

        var game2_3_1_2 = new cc.Sprite(res.game2_3_1_2);
        game2_3_1_2.setPosition(112,0);
        self._content.addChild(game2_3_1_2);

        var market2_1_1 = new cc.Sprite(res.market2_1_1);
        market2_1_1.setPosition(449,0);
        self._content.addChild(market2_1_1,1,1);
        self.addListeners(market2_1_1);

        var f = [cc.p(-83,-51),cc.p(58,70),cc.p(304,-60)];

        for(var i = 0; i< 3 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),50,50);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [];
        self.res = [[]];

        var name = [res.m1,res.m2,res.m3,res.m4,res.m5,res.m6,res.m7,res.m8,res.m9];

        for(var i = 0 ; i < 9 ; i++){
            self.movePosArr.push(cc.p(329 + (i%3)*90,207 - Math.floor(i/3)*150));
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            m.setScale(1.5,1.5);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }

        var game2_3_2 = new cc.Sprite(res.game2_3_2);
        game2_3_2.setPosition(0,0);
        game2_3_2.setScale(1.5,1.5);
        self._content.addChild(game2_3_2);

        var market2_2_2 = new cc.Sprite(res.market2_2_9);
        market2_2_2.setPosition(-107,-112);
        self._content.addChild(market2_2_2);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),50,50);
        r1.setPosition(-40,-125);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    }
});