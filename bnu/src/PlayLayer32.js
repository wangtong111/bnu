var PlayLayer32 = PlayLayerBase.extend({

    animalTalk : ["第1小关","第2小关","第3小关","第4小关"],

    onEnter:function () {
        var self = this;
        self._super();

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length !== 1){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] !== 3 ){
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
            if(self.res[2].length === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 1){
            if(self.res[0].length === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 2){
            if(self.res[1].length === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 3){
            if(self.res[1].length === 1){
                return true;
            }

            return false;
        }
    },


    checkNextStep : function () {

        if(this.now_step < 3){
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
        }

        self.addSpeak(self.now_step);
    },

    addStep0 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(356,0)];
        self.res = [[],[],[]];

        var game3_2_1 = new cc.Sprite(res.game3_2_1);
        game3_2_1.setPosition(0,0);
        self._content.addChild(game3_2_1);

        var market3_1_1 = new cc.Sprite(res.market3_1_1);
        market3_1_1.setPosition(84,-48);
        self._content.addChild(market3_1_1);

        var market3_1_7 = new cc.Sprite(res.market3_1_7);
        market3_1_7.setPosition(-263,-79);
        self._content.addChild(market3_1_7);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(356,0);
        self._content.addChild(market3_1_4,1,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-273,-114),cc.p(-48,-154),cc.p(82,-74)];
        for(var i = 0 ; i < 3; i++){
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
        self.movePosArr = [];
        self.res = [[],[]];


        var game3_2_3 = new cc.Sprite(res.game3_2_3);
        game3_2_3.setPosition(0,0);
        self._content.addChild(game3_2_3);

        var market3_1_7 = new cc.Sprite(res.market3_1_7);
        market3_1_7.setPosition(-263,-79);
        self._content.addChild(market3_1_7);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(356,0);
        self._content.addChild(market3_1_4,1,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-277,-114),cc.p(-54,-154)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep3 : function () {
        this.addStep0();
    }
});