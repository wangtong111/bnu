var PlayLayer31 = PlayLayerBase.extend({

    animalTalk : ["在实验组中的8只小猴会\n遇到两个代理妈妈。\n现在，其中的一名代理妈妈已经就位了，\n你能找到另一个代理妈妈吗？\n请把它拖到相应的位置。",
                  "在一种实验条件下，\n代理妈妈们被放在幼猴居住的笼中。\n绒妈妈会向幼猴供应乳汁，\n而铁妈妈不会.\n请问幼猴会更多地和谁待在一起呢？\n请把幼猴拖到相应的位置吧。",
                  "在另一种实验条件下，\n提供乳汁的变成了铁妈妈，\n绒妈妈不再提供乳汁。\n这种情况下幼猴会更多地和谁待在一起呢？\n请把幼猴拖到相应的位置。",
                  "“咚咚咚！”笼子中多了一个\n又大又吓人的家伙，\n幼猴对它很害怕。它更可能\n跑向谁去寻找安慰呢？\n请把幼猴拖到它更可能跑去的地方。"],

    onEnter:function () {
        var self = this;
        self._super();
        self.hasGoods = false;
        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length !== 5){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] === 2 || selectGoods[i] === 4 || selectGoods[i] === 6 || selectGoods[i] === 8 ){
                self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                    alert("选择物品有误，请返回超市重新选择。");
                })));
                return;
            }
        }
        self.hasGoods = true;
        self.addNextStep();
    },

    checkGame : function(){
        var self = this;
        if(self.hasGoods == false){
            return false;
        }
        
        if (self.now_step === 0){
            if(self.res[0].length === 1 && self.res[0][0] === 1){
                return true;
            }

            return false;
        }else if(self.now_step === 1){
            if(self.res[1].length === 1){
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
        self.movePosArr = [cc.p(271,64),cc.p(435,62),cc.p(265,-105),cc.p(439,-102)];
        self.res = [[]];

        var name = [res.market3_1_2,res.market3_1_6,res.market3_1_1,res.market3_1_8];
        for(var i = 0; i < 4; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var game3_1_1 = new cc.Sprite(res.game3_1_1);
        game3_1_1.setPosition(-122,5);
        self._content.addChild(game3_1_1);

        var market3_1_1 = new cc.Sprite(res.market3_1_1);
        market3_1_1.setScale(-1,1)
        market3_1_1.setPosition(-15,-32);
        self._content.addChild(market3_1_1);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setAnchorPoint(0.5,0.5);
        r1.ignoreAnchorPointForPosition(false);
        r1.setPosition(-219,-64);
        self._content.addChild(r1);
        self.responseArr.push(r1);

    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(358,-19)];
        self.res = [[],[]];

        var game3_1_1 = new cc.Sprite(res.game3_1_1);
        game3_1_1.setPosition(-122,5);
        self._content.addChild(game3_1_1);

        var market3_1_1 = new cc.Sprite(res.market3_1_1);
        market3_1_1.setScale(-1,1)
        market3_1_1.setPosition(-12,-40);
        self._content.addChild(market3_1_1);

        var market3_1_2 = new cc.Sprite(res.market3_1_2);
        market3_1_2.setPosition(-219,-41);
        self._content.addChild(market3_1_2);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(358,-19);
        self._content.addChild(market3_1_4,1,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-219,-64),cc.p(-2,-64)];

        for(var i = 0; i< 2 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(358,-19)];
        self.res = [[],[]];

        var game3_1_1 = new cc.Sprite(res.game3_1_1);
        game3_1_1.setPosition(-122,5);
        self._content.addChild(game3_1_1);

        var market3_1_6 = new cc.Sprite(res.market3_1_2);
        market3_1_6.setPosition(-224,-31);
        self._content.addChild(market3_1_6);

        var market3_1_1 = new cc.Sprite(res.market3_1_1);
        market3_1_1.setScale(-1,1)
        market3_1_1.setPosition(-12,-40);
        self._content.addChild(market3_1_1);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(358,-19);
        self._content.addChild(market3_1_4,1,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-219,-64),cc.p(-2,-64)];

        for(var i = 0; i< 2 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep3 : function () {
        var self = this;

        self.addStep1();

        var market3_1_5 = new cc.Sprite(res.market3_1_5);
        market3_1_5.setPosition(-119,-213);
        self._content.addChild(market3_1_5);
    }
});