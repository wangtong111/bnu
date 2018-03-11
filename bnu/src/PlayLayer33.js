var PlayLayer33 = PlayLayerBase.extend({

    animalTalk : ["在开阔的场地中，\n有绒妈妈和一些玩具。\n和绒妈妈分离了一段时间的\n幼猴被放进了场地。\n请问接下来它会去哪里？\n请把幼猴拖到相应的位置吧。",
                  "幼猴再次和绒妈妈重聚时，\n发现绒妈妈被一个透明的罩子挡住了。\n一段时间之后，\n幼猴适应了这个事实。\n请把幼猴拖到合适的位置吧。",
                  "控制组的幼猴没有和任何\n代理妈妈生活在一起。\n当幼猴250天大时，\n两个代理妈妈被放进了笼中。\n幼猴一开始的反应会是什么样的呢？\n请把幼猴拖到合适的位置吧。",
                  "过了一段时间后，\n控制组的幼猴对代理\n妈妈的态度有了变化。\n现在，它更可能去什么地方呢？\n请把幼猴拖到合适的位置吧。"],

    onEnter:function () {
        var self = this;
        self._super();
        self.hasGoods = false;
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
            if(self.res[2].length === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 1){
            if(self.res[2].length === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 2){
            if(self.res[1].length === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 3){
            if(self.res[2].length === 1){
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
        market3_1_1.setScale(-1,1)
        market3_1_1.setPosition(84,-48);
        self._content.addChild(market3_1_1);

        var market3_1_7 = new cc.Sprite(res.market3_1_7);
        market3_1_7.setPosition(-263,-79);
        self._content.addChild(market3_1_7);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(356,0);
        self._content.addChild(market3_1_4,2,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-273,-114),cc.p(-48,-154),cc.p(82,-74)];
        for(var i = 0 ; i < 3; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1,1);
            self.responseArr.push(r1);
        }
    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(356,0)];
        self.res = [[],[],[]];

        var game3_2_1 = new cc.Sprite(res.game3_2_1);
        game3_2_1.setPosition(0,0);
        self._content.addChild(game3_2_1);

        var game3_3_2 = new cc.Sprite(res.game3_3_2);
        game3_3_2.setPosition(81,-21);
        self._content.addChild(game3_3_2);

        var market3_1_7 = new cc.Sprite(res.market3_1_7);
        market3_1_7.setPosition(-263,-79);
        self._content.addChild(market3_1_7);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(356,0);
        self._content.addChild(market3_1_4,2,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-273,-114),cc.p(-48,-154),cc.p(82,-74)];
        for(var i = 0 ; i < 3; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1,1);
            self.responseArr.push(r1);
        }
    },

    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(358,-19)];
        self.res = [[],[],[]];


        var game3_1_1 = new cc.Sprite(res.game3_1_1);
        game3_1_1.setPosition(-122,5);
        self._content.addChild(game3_1_1);

        var market3_1_8 = new cc.Sprite(res.market3_1_8);
        market3_1_8.setScale(-1,1)
        market3_1_8.setPosition(0,-29);
        self._content.addChild(market3_1_8);

        var market3_1_2 = new cc.Sprite(res.market3_1_2);
        market3_1_2.setPosition(-219,-41);
        self._content.addChild(market3_1_2);

        var market3_1_4 = new cc.Sprite(res.market3_1_4);
        market3_1_4.setPosition(358,-19);
        self._content.addChild(market3_1_4,2,1);
        self.addListeners(market3_1_4);

        var f = [cc.p(-219,-64),cc.p(-119,-221),cc.p(-2,-64)];
        for(var i = 0 ; i < 3; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1,1);
            self.responseArr.push(r1);
        }
    },

    addStep3 : function () {
        this.addStep2();

    }
});