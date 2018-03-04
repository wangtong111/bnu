var PlayLayer23 = PlayLayerBase.extend({

    animalTalk : ["第1小关","第2小关"],

    onEnter:function () {
        var self = this;
        self._super();

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

        self.addNextStep();
    },

    checkGame : function(){
        var self = this;

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

        var market2_2_2 = new cc.Sprite(res.market2_2_2);
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