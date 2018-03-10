var PlayLayer11 = PlayLayerBase.extend({

    animalTalk : ["     这是一处街道的拐角，\n现在正在拍摄研究一中使用的“车祸” 视频。\n请你把视频中出现的事物拖放到相应的位置吧。",
                 "观看了视频后，研究者为\n两组被试分发了不同的问卷。\n正如你所看到的，这些问卷缺了一部分，\n你可以把它们补全吗？",
                 "当被问到是否见过一个停车标志时，\n哪一组的被试更可能回答见过？\n请把停车标志拖到相应的问卷下吧。"],

    onEnter:function () {
        var self = this;
        self._super();

        self.hasGoods = false;

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length != 9){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
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
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 2 && self.res[1][0] === 1){
                    return true;
                }
            }
            return false;

        }else if(self.now_step === 1){
            for(var i = 0; i < 5;i++){
                if(self.res[i].length !== 1){
                    return false;
                }
            }

            if(self.res[0][0] === 2  && self.res[3][0] === 5  ){
                if(self.res[1][0] === 2 || self.res[1][0] === 5 )
                    return false;
                if(self.res[2][0] === 2 || self.res[2][0] === 5 )
                    return false;
                if(self.res[4][0] === 2 || self.res[4][0] === 5 )
                    return false;

                return true;
            }

            return false;

        }else if(self.now_step === 2){
            if(self.res[1].length === 1){
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
        self.movePosArr = [cc.p(383,-17),cc.p(383,158),cc.p(383,-171)];
        self.res = [[],[]];

        var market_1_3 = new cc.Sprite(res.market1_1_3);
        market_1_3.setPosition(383,-17);
        self._content.addChild(market_1_3,1,1);
        self.addListeners(market_1_3);


        var market_1_5 = new cc.Sprite(res.market1_1_5);
        market_1_5.setPosition(383,158);
        self._content.addChild(market_1_5,1,2);
        self.addListeners(market_1_5);

        var market_1_9 = new cc.Sprite(res.market1_1_9);
        market_1_9.setPosition(383,-171);
        self._content.addChild(market_1_9,1,3);
        self.addListeners(market_1_9);

        var game_1_1 = new cc.Sprite(res.game1_1_1);
        game_1_1.setPosition(-107,-20);
        self._content.addChild(game_1_1);


        var f = [cc.p(-281,-88),cc.p(-81,-136)];
        for (var i = 0; i< 2; i++){
            var r1 = new cc.LayerColor(cc.color(255,255,255,200),60,60);
            r1.setPosition(f[i]);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [];
        self.res = [[],[],[],[],[]];

        var name = [res.market1_1_2,res.market1_1_4,res.market1_1_6,res.market1_1_7,res.market1_1_8];
        for(var i = 0 ; i < 5; i++){
            self.movePosArr.push(cc.p(350,132 - i*54));
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            m.setScale(0.5,0.5);
            self._content.addChild(m,1,i + 1);
            self.addListeners(m);
        }

        var game1_1_2 = new cc.Sprite(res.game1_1_2);
        game1_1_2.setPosition(98,16);
        game1_1_2.setScale(1.5,1.5);
        self._content.addChild(game1_1_2);

        game1_1_2 = new cc.Sprite(res.game1_1_2);
        game1_1_2.setPosition(-278,18);
        game1_1_2.setScale(1.5,1.5);
        self._content.addChild(game1_1_2);

        var f = [cc.p(-325,164),cc.p(-238,164),cc.p(-197,-116),cc.p(82,164),cc.p(175,-116)];
        var s = [[80,40],[50,40],[80,40],[80,40],[80,40]];

        for(var i = 0; i < 5; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,255),s[i][0],s[i][1]);
            r1.setPosition(f[i]);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep2 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(447,45)];
        self.res = [[],[]];



        var game1_1_3_1 = new cc.Sprite(res.game1_1_3_1);
        game1_1_3_1.setPosition(167,42);
        self._content.addChild(game1_1_3_1);

        var game1_1_3_2 = new cc.Sprite(res.game1_1_3_2);
        game1_1_3_2.setPosition(-190,42);
        self._content.addChild(game1_1_3_2);

        var market_1_5 = new cc.Sprite(res.market1_1_5);
        market_1_5.setPosition(447,45);
        self._content.addChild(market_1_5,1,1);
        self.addListeners(market_1_5);

        var f = [cc.p(-199,-166),cc.p(185,-166)];

        for(var i = 0; i < 2; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,255),100,100);
            r1.setPosition(f[i]);
            r1.setAnchorPoint(0.5,0.5);
            r1.ignoreAnchorPointForPosition(false);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    }
});