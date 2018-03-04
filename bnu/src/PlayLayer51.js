var PlayLayer51 = PlayLayerBase.extend({

    animalTalk : ["第1小关","第2小关","第3小关","第4小关","第5小关"],

    onEnter:function () {
        var self = this;
        self._super();

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length !== 7){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] === 0 || selectGoods[i] === 5){
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
            if(self.res[0].length === 1 && self.res[0][0] === 2){
                return true;
            }

            return false;

        }else if (self.now_step === 2){
            console.log("------------------",JSON.stringify(self.res));
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 1 && self.res[1][0] === 3 ){
                    return true;
                }
            }

            return false;

        }else if (self.now_step === 3){
            if(self.res[0].length === 1 && self.res[0][0] === 2){
                return true;
            }

            return false;

        }else if (self.now_step === 4){
            if(self.res[0].length === 1 && self.res[0][0] === 2){
                return true;
            }

            return false;
        }
    },


    checkNextStep : function () {

        if(this.now_step < 4){
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
        }else if(self.now_step === 2){
            self.addStep2();
        }else if(self.now_step === 3){
            self.addStep3();
        }else if(self.now_step === 4){
            self.addStep4();
        }

        self.addSpeak(self.now_step);
    },

    addStep0 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(306,70),cc.p(316,-103)];
        self.res = [[]];



        var game5_1_1 = new cc.Sprite(res.game5_1_1);
        game5_1_1.setPosition(0,-72);
        self._content.addChild(game5_1_1);

        var market5_1_9 = new cc.Sprite(res.market5_1_9);
        market5_1_9.setPosition(136,-182);
        self._content.addChild(market5_1_9);

        var market5_1_7 = new cc.Sprite(res.market5_1_7);
        market5_1_7.setPosition(-123,-181);
        self._content.addChild(market5_1_7);

        var name = [res.market5_1_4,res.market5_1_2];
        for(var i = 0; i < 2; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setAnchorPoint(0.5,0.5);
        r1.ignoreAnchorPointForPosition(false);
        r1.setPosition(6,-33);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(306,70),cc.p(316,-103)];
        self.res = [[]];


        var game5_1_1 = new cc.Sprite(res.game5_1_1);
        game5_1_1.setPosition(0,-72);
        self._content.addChild(game5_1_1);

        var market5_1_8 = new cc.Sprite(res.market5_1_8);
        market5_1_8.setPosition(-239,151);
        self._content.addChild(market5_1_8);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setAnchorPoint(0.5,0.5);
        r1.ignoreAnchorPointForPosition(false);
        r1.setPosition(6,-33);
        self._content.addChild(r1);
        self.responseArr.push(r1);

        var name = [res.market5_1_4,res.market5_1_2];
        for(var i = 0; i < 2; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }
    },
    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(325,247),cc.p(331,85),cc.p(354,-75),cc.p(334,-236)];
        self.res = [[],[]];

        var market5_1_6 = new cc.Sprite(res.market5_1_6);
        market5_1_6.setPosition(0,0);
        market5_1_6.setScale(2,2);
        self._content.addChild(market5_1_6);

        var name = [res.market5_1_8,res.market5_1_3,res.market5_1_9,res.market5_1_5];
        for(var i = 0; i < 4; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(-244,138),cc.p(88,-185)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }

    },
    addStep3 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(306,70),cc.p(316,-103)];
        self.res = [[]];

        var game5_1_1 = new cc.Sprite(res.game5_1_1);
        game5_1_1.setPosition(0,-72);
        self._content.addChild(game5_1_1);

        var market5_1_9 = new cc.Sprite(res.market5_1_9);
        market5_1_9.setPosition(136,-182);
        self._content.addChild(market5_1_9);

        var name = [res.market5_1_4,res.market5_1_2];
        for(var i = 0; i < 2; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setAnchorPoint(0.5,0.5);
        r1.ignoreAnchorPointForPosition(false);
        r1.setPosition(6,-33);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    },
    addStep4 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(306,70),cc.p(316,-103)];
        self.res = [[]];

        var game5_1_1 = new cc.Sprite(res.game5_1_1);
        game5_1_1.setPosition(0,-72);
        self._content.addChild(game5_1_1);

        var name = [res.market5_1_4,res.market5_1_2];
        for(var i = 0; i < 2; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var market5_1_9 = new cc.Sprite(res.market5_1_7);
        market5_1_9.setPosition(136,-182);
        self._content.addChild(market5_1_9);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setAnchorPoint(0.5,0.5);
        r1.ignoreAnchorPointForPosition(false);
        r1.setPosition(6,-33);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    }
});