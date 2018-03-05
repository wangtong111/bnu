var PlayLayer13 = PlayLayerBase.extend({

    animalTalk : ["照例，我们先来拍摄一段\n小汽车在乡间公路行驶的视频吧。\n请把应该出现在视频中的\n物品拖放到相应的位置吧。",
                  "看过视频后，被试需要完成一份问卷。\n问卷中的关键问题时什么？\n请你补全关键问题的内容。",
                  "除了刚才的问卷，\n被试们还需要填写另一份问卷。\n请你帮助被试安排实验的时间，\n同时补全问卷的内容吧。",
                  "在视频后的问卷中，\n一份问卷使用了轿车经过\n谷仓的错误假设。\n在回忆谷仓时，\n哪一组的被试更容易产生\n见到谷仓的错误记忆呢？\n请把谷仓拖放到相应的错误假设下。"],

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
            if(self.res[0].length === 1 && self.res[1].length === 0){
                if(self.res[0][0] === 3){
                    return true;
                }
            }
            return false;

        }else if(self.now_step === 1){
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 2 && self.res[1][0] === 1){
                    return true;
                }
            }
            return false;

        }else if(self.now_step === 2){
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 1 && self.res[1][0] === 4){
                    return true;
                }
            }
            return false;

        }else if(self.now_step === 3){
            if(self.res[0].length === 1 && self.res[1].length === 0){
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
        self.movePosArr = [cc.p(300,191),cc.p(300,0),cc.p(319,-166)];
        self.res = [[],[]];

        var name = [res.market1_3_7,res.market1_3_8,res.market1_3_3];

        var game1_3_1 = new cc.Sprite(res.game1_3_1);
        game1_3_1.setPosition(-103,0);
        self._content.addChild(game1_3_1);

        for(var i = 0; i < 3; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(-258,-78),cc.p(-101,73)];
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
        var self = this;

        self.responseArr = [];
        self.movePosArr = [];
        self.res = [[],[]];

        var game1_3_2 = new cc.Sprite(res.game1_3_2);
        game1_3_2.setPosition(-270,0);
        game1_3_2.setScale(1.5,1.5);
        self._content.addChild(game1_3_2);

        game1_3_2 = new cc.Sprite(res.game1_3_2);
        game1_3_2.setPosition(109,0);
        game1_3_2.setScale(1.5,1.5);
        self._content.addChild(game1_3_2);

        var name = [res.market1_3_5,res.market1_3_2,res.market1_3_9,res.market1_3_9];
        for(var i = 0 ; i < 4 ;i++){
            self.movePosArr.push(cc.p(430,170 - i*80));

            var m = new cc.Sprite(name[i]);
            m.setAnchorPoint(0.5,0.5);
            m.setPosition(self.movePosArr[i]);
            m.setScale(0.5);
            self._content.addChild(m,1,i + 1);
            self.addListeners(m);
        }

        var f = [cc.p(-204,53),cc.p(-132,53)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),60,50);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [];
        self.res = [[],[]];

        var game1_3_3_2 = new cc.Sprite(res.game1_3_3_2);
        game1_3_3_2.setPosition(-355,172);
        game1_3_3_2.setScale(1.5,1.5);
        self._content.addChild(game1_3_3_2);

        var game1_3_3 = new cc.Sprite(res.game1_3_3_1);
        game1_3_3.setPosition(0,0);
        game1_3_3.setScale(1.5,1.5);
        self._content.addChild(game1_3_3);

        var name = [res.market1_2_6,res.market1_2_7,res.market1_2_8,res.market1_3_5,res.market1_3_9];
        for(var i = 0 ; i < 4 ;i++){
            self.movePosArr.push(cc.p(315,192 - i*75));

            var m = new cc.Sprite(name[i]);
            m.setAnchorPoint(0.5,0.5);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,i + 1);
            self.addListeners(m);
        }

        var f = [cc.p(-410,187),cc.p(62,53)];
        var s = [[100,50],[60,50]];

        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),s[i][0],s[i][1]);
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
        self.movePosArr = [];
        self.res = [[],[]];

        var game1_3_4_1 = new cc.Sprite(res.game1_3_4_1);
        game1_3_4_1.setPosition(-264,0);
        game1_3_4_1.setScale(1.5,1.5);
        self._content.addChild(game1_3_4_1);

        var game1_3_4_2 = new cc.Sprite(res.game1_3_4_2);
        game1_3_4_2.setPosition(130,0);
        game1_3_4_2.setScale(1.5,1.5);
        self._content.addChild(game1_3_4_2);

        var market_1_9 = new cc.Sprite(res.market1_1_9);
        market_1_9.setPosition(439,0);
        self._content.addChild(market_1_9,1,1);
        self.addListeners(market_1_9);

        var f = [cc.p(-231,-89),cc.p(202,-89)];
        for(var i = 0 ; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),120,120);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            r1.setPosition(f[i]);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }

    }
});