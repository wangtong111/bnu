var PlayLayer42 = PlayLayerBase.extend({

    animalTalk : ["第1小关","第2小关"],

    onEnter:function () {
        var self = this;
        self._super();

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length !== 3){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] !== 1 && selectGoods[i] !== 5 && selectGoods[i] !== 7){
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
            if(self.res[0].length === 1 && self.res[0][0] === 1){
                return true;
            }

            return false;

        }else if (self.now_step === 1){
            if(self.res[0].length === 1 && self.res[0][0] === 1){
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
        self.movePosArr = [cc.p(456,211),cc.p(478,0),cc.p(480,-194)];
        self.res = [[]];

        var game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(195,0);
        game4_1_1.setScale(1.5,1.5);
        self._content.addChild(game4_1_1);

        var market4_1_4 = new cc.Sprite(res.market4_1_4);
        market4_1_4.setPosition(95,-70);
        market4_1_4.setScale(0.5,0.5);
        self._content.addChild(market4_1_4);

        game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(-221,0);
        game4_1_1.setScale(1.5,1.5);
        self._content.addChild(game4_1_1);

        var market4_1_1 = new cc.Sprite(res.market4_1_1);
        market4_1_1.setPosition(-196,57);
        self._content.addChild(market4_1_1);

        var market4_1_8 = new cc.Sprite(res.market4_1_8);
        market4_1_8.setPosition(-179,-64);
        self._content.addChild(market4_1_8);


        var name = [res.market4_1_8,res.market4_2_6,res.market4_2_2];
        for(var i = 0 ; i< 3 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setPosition(230,-80);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(358,141),cc.p(382,-182),cc.p(381,-28)];
        self.res = [[]];

        var game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(-115,0);
        game4_1_1.setScale(2,2);
        self._content.addChild(game4_1_1);

        var name = [res.market4_1_8,res.market4_2_6,res.market4_2_2];
        for(var i = 0 ; i< 3 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setPosition(-71,-126);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    }
});