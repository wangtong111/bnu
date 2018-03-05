var PlayLayer41 = PlayLayerBase.extend({

    animalTalk : ["首先，在进行实验之前需要进行一些设置。\n实验中使用的鸽子和一般的鸽子并不一样，\n你能选择正确的鸽子吗？",
                  "现在，我们要为鸽子设定形成\n“迷信”行为的投喂时间间隔。\n你还记得斯金纳最开始是如何设置的吗？\n请把正确的时间间隔\n（每XX秒投喂一次）\n拖到装置中吧。",
                  "假设你是负责投喂鸽子的人\n（当然，原来的实验中很\n可能不是人工投喂的），\n在下面三种情境中，\n你应该投喂哪只鸽子呢？"],

    onEnter:function () {
        var self = this;
        self._super();

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length != 9){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        self.addNextStep();
    },

    checkGame : function(){
        var self = this;

        if (self.now_step === 0){
            if(self.res[0].length === 1 && self.res[0][0] === 3){
                return true;
            }

            return false;

        }else if(self.now_step === 1){
            if(self.res[0].length === 1 && self.res[0][0] === 5){
                return true;
            }

            return false;

        }else if(self.now_step === 2){
            if(self.res[0].length === 1){
                return true;
            }
            return false;
        }
    },


    checkNextStep : function () {

        if(this.now_step < 2){
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
        }

        self.addSpeak(self.now_step);
    },

    addStep0 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(358,141),cc.p(375,-33),cc.p(373,-201)];
        self.res = [[]];

        var game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(-115,0);
        game4_1_1.setScale(2,2);
        self._content.addChild(game4_1_1);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setPosition(-71,-126);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);

        var name = [res.market4_1_8,res.market4_1_2,res.market4_1_6];
        for(var i = 0 ; i< 3 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }
    },

    addStep1 : function(){

        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(258,136),cc.p(458,145),cc.p(456,-41),cc.p(258,-37),cc.p(258,-220)];
        self.res = [[]];

        var game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(-115,5);
        game4_1_1.setScale(2,2);
        self._content.addChild(game4_1_1);

        var market4_1_6 = new cc.Sprite(res.market4_1_6);
        market4_1_6.setPosition(-64,-125);
        self._content.addChild(market4_1_6);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setPosition(-71,13);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);


        var name = [res.market4_1_9,res.market4_1_3,res.market4_1_5,res.market4_1_7,res.market4_1_1];
        for(var i = 0 ; i< 5 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }
    },

    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(0,227)];
        self.res = [[],[],[]];

        var market4_1_4 = new cc.Sprite(res.market4_1_4);
        market4_1_4.setPosition(0,227);
        self._content.addChild(market4_1_4,1,1);
        self.addListeners(market4_1_4);

        var game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(-358,0);
        game4_1_1.setScale(1.5,1.5);
        self._content.addChild(game4_1_1);

        game4_1_1 = new cc.Sprite(res.game4_1_1);
        game4_1_1.setPosition(10,0);
        game4_1_1.setScale(1.5,1.5);
        self._content.addChild(game4_1_1);

        var game4_1_3 = new cc.Sprite(res.game4_1_3);
        game4_1_3.setPosition(379,0);
        game4_1_3.setScale(1.5,1.5);
        self._content.addChild(game4_1_3);

        var market4_1_1 = new cc.Sprite(res.market4_1_1);
        market4_1_1.setPosition(-337,57);
        self._content.addChild(market4_1_1);

        var market4_1_7 = new cc.Sprite(res.market4_1_7);
        market4_1_7.setPosition(46,57);
        self._content.addChild(market4_1_7);

        var market4_1_3 = new cc.Sprite(res.market4_1_3);
        market4_1_3.setPosition(418,57);
        self._content.addChild(market4_1_3);

        var market4_1_6 = new cc.Sprite(res.market4_1_6);
        market4_1_6.setPosition(-310,-65);
        self._content.addChild(market4_1_6);

        market4_1_6 = new cc.Sprite(res.market4_1_6);
        market4_1_6.setPosition(429,-41);
        self._content.addChild(market4_1_6);

        var market4_1_8 = new cc.Sprite(res.market4_1_8);
        market4_1_8.setPosition(62,-64);
        self._content.addChild(market4_1_8);


        var f = [cc.p(-453,-80),cc.p(-90,-80),cc.p(285,-80)];

        for(var i = 0; i< 3 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,50);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    }
});