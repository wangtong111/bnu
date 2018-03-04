var PlayLayer22 = PlayLayerBase.extend({

    animalTalk : ["第1小关","第2小关","第3小关","第4小关","第5小关","第6小关"],

    onEnter:function () {
        var self = this;
        self._super();

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length != 6){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] === 0 || selectGoods[i] === 6 || selectGoods[i] === 7){
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
            if(self.res[0].length === 1 && self.res[1].length === 0){
                if(self.res[0][0] === 3){
                    return true;
                }
            }
            return false;

        }else if(self.now_step === 1){

            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 3 && self.res[1][0] === 1){
                    return true;
                }
            }
            return false;


        }else if(self.now_step === 2){
            if(self.res[0].length === 1 && self.res[1].length === 1 && self.res[2].length === 1  ){
                if(self.res[0][0] === 5 && self.res[1][0] === 3 && self.res[2][0] === 1){
                    return true;
                }
            }

            return false;

        }else if(self.now_step === 3){
            if(self.res[0].length === 1 && self.res[1].length === 1 && self.res[2].length === 1  ){
                if(self.res[0][0] === 4 && self.res[1][0] === 3 && self.res[2][0] === 5){
                    return true;
                }
            }

            return false;

        }else if(self.now_step === 4){
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 1 && self.res[1][0] === 2){
                    return true;
                }
            }

            return false;

        }else if(self.now_step === 5){
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 2 && self.res[1][0] === 1){
                    return true;
                }
            }
            return false;
        }
    },


    checkNextStep : function () {

        if(this.now_step < 5){
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
        }else if(self.now_step === 5){
            self.addStep5();
        }

        self.addSpeak(self.now_step);
    },

    addStep0 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(422,238),cc.p(424,89),cc.p(434,-68),cc.p(435,-204)];
        self.res = [[],[]];

        var game2_2_1_1 = new cc.Sprite(res.game2_2_1_1);
        game2_2_1_1.setPosition(-280,0);
        self._content.addChild(game2_2_1_1);

        var game2_2_1_2 = new cc.Sprite(res.game2_2_1_2);
        game2_2_1_2.setPosition(158,26);
        self._content.addChild(game2_2_1_2);

        var name = [res.market2_2_3,res.market2_2_6,res.market2_2_9,res.market2_2_4];

        for(var i = 0; i < 4; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(68,-193),cc.p(251,-191)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep1 : function(){

        this.addStep0();
    },

    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(422,238),cc.p(424,89),cc.p(434,-68),cc.p(435,-204),cc.p(284,-204),cc.p(168,-202)];
        self.res = [[],[],[]];

        var game2_2_1_1 = new cc.Sprite(res.game2_2_1_1);
        game2_2_1_1.setPosition(-280,0);
        self._content.addChild(game2_2_1_1);

        var game2_2_1_2 = new cc.Sprite(res.game2_2_1_2);
        game2_2_1_2.setPosition(158,139);
        self._content.addChild(game2_2_1_2);

        var game2_2_3 = new cc.Sprite(res.game2_2_3);
        game2_2_3.setPosition(27,-197);
        self._content.addChild(game2_2_3);

        var name = [res.market2_2_3,res.market2_2_6,res.market2_2_9,res.market2_2_4,res.market2_1_7,res.market2_2_1];
        for(var i = 0; i < 6; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(-296,118),cc.p(68,-80),cc.p(251,-78)];

        for(var i = 0 ; i < 3; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep3 : function () {
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(281,205),cc.p(472,204),cc.p(270,-8),cc.p(446,0),cc.p(364,-175)];
        self.res = [[],[],[]];

        var game2_2_4 = new cc.Sprite(res.game2_2_4);
        game2_2_4.setPosition(-68,0);
        self._content.addChild(game2_2_4);

        var name = [res.market2_2_9,res.market2_2_4,res.market2_2_6,res.market2_2_3,res.market2_2_2];

        for(var i = 0; i < 5; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(-174,227),cc.p(10,226),cc.p(-70,-253)];

        for(var i = 0 ; i < 3; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }

    },

    addStep4 : function(){

        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(281,205),cc.p(472,204),cc.p(364,-175)];
        self.res = [[],[]];

        var game2_2_4 = new cc.Sprite(res.game2_2_4);
        game2_2_4.setPosition(-68,0);
        self._content.addChild(game2_2_4);

        var market2_2_6 = new cc.Sprite(res.market2_2_6);
        market2_2_6.setPosition(20,224);
        self._content.addChild(market2_2_6);

        var market2_2_3 = new cc.Sprite(res.market2_2_3);
        market2_2_3.setPosition(-162,221);
        self._content.addChild(market2_2_3);

        var name = [res.market2_2_9,res.market2_2_4,res.market2_2_2];

        for(var i = 0; i < 3; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(-174,-239),cc.p(10,-241)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }

    },

    addStep5 : function () {

        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(413,90),cc.p(406,-48)];
        self.res = [[],[]];

        var  name = [res.market2_2_1,res.market2_2_8];
        for(var i = 0; i < 2; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }


        var game2_2_4 = new cc.Sprite(res.game2_2_4);
        game2_2_4.setPosition(-68,0);
        self._content.addChild(game2_2_4);

        var market2_2_6 = new cc.Sprite(res.market2_2_6);
        market2_2_6.setPosition(20,224);
        self._content.addChild(market2_2_6);

        var market2_2_3 = new cc.Sprite(res.market2_2_3);
        market2_2_3.setPosition(-162,221);
        self._content.addChild(market2_2_3);

        var market2_2_2 = new cc.Sprite(res.market2_2_2);
        market2_2_2.setPosition(35,-231);
        self._content.addChild(market2_2_2);

        market2_2_2 = new cc.Sprite(res.market2_2_2);
        market2_2_2.setPosition(-183,-228);
        self._content.addChild(market2_2_2);

        var f = [cc.p(-108,-250),cc.p(108,-252)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),50,50);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    }
});