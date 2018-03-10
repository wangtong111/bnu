var PlayLayer62 = PlayLayerBase.extend({

    animalTalk : ["首先，研究者们又为学生们\n进行了一次测验。\n这次又测了什么呢？\n请把相应的测验拖给学生们吧。",
                 "研究的结果出来了。\n下面这张图描述了两次测验之间一、\n二年级学生们智力分数的提高程度。\n图中两种柱子分别表示了哪些学生呢？\n请把对学生群体的正确描述\n拖放到相应柱子的图示上吧。",
                 "研究者们还统计了一、二年级中，\n智力测验分数增加10分、20分、30分的\n人数占一群学生人数的百分比。\n你知道这两个柱子分别指哪两群学生吗？\n请把对学生们的正确描述\n拖放到相应柱子的图示上吧。"],

    onEnter:function () {
        var self = this;
        self._super();
        self.hasGoods = false;
        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length != 6){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] === 0 || selectGoods[i] === 5 || selectGoods[i] === 6){
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
            if(self.res[0].length === 1 && self.res[0][0] === 1){
                return true;
            }

            return false;

        }else if(self.now_step === 1){

            if(self.res[0].length === 1 && self.res[1].length === 1){

                if(self.res[0][0] == 1 && self.res[1][0] == 2){
                    return true;
                }

            }
            return false;

        }else if(self.now_step === 2){

            if(self.res[0].length === 1 && self.res[1].length === 1){

                if(self.res[0][0] == 1 && self.res[1][0] == 2){
                    return true;
                }

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
        self.movePosArr = [cc.p(162,0),cc.p(370,0)];
        self.res = [[]];

        var name = [res.market6_1_1,res.market6_1_9];
        for(var i = 0 ; i< 2 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            m.setScale(1.5,1.5);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }

        var game6_1_1 = new cc.Sprite(res.game6_1_1);
        game6_1_1.setPosition(-223,0);
        self._content.addChild(game6_1_1);

        var market6_1_5 = new cc.Sprite(res.market6_1_5);
        market6_1_5.setPosition(-330,-31);
        self._content.addChild(market6_1_5);

        var market6_1_6 = new cc.Sprite(res.market6_1_6);
        market6_1_6.setPosition(-244,0);
        self._content.addChild(market6_1_6);

        var market6_1_7 = new cc.Sprite(res.market6_1_7);
        market6_1_7.setPosition(-178,-23);
        self._content.addChild(market6_1_7);
        var market6_1_8 = new cc.Sprite(res.market6_1_8);
        market6_1_8.setPosition(-85,0);
        self._content.addChild(market6_1_8);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),200,200);
        r1.setPosition(-223,0);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    },

    addStep1 : function() {

        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(213, 0), cc.p(210, -97), cc.p(211, -50), cc.p(212, -142)];
        self.res = [[],[]];

        var game6_2_2_1 = new cc.Sprite(res.game6_2_2_1);
        game6_2_2_1.setPosition(-232, 0);
        self._content.addChild(game6_2_2_1);
        var game6_2_2_2 = new cc.Sprite(res.game6_2_2_2);
        game6_2_2_2.setPosition(0, 204);
        self._content.addChild(game6_2_2_2);
        var game6_2_2_3 = new cc.Sprite(res.game6_2_2_3);
        game6_2_2_3.setPosition(0, 144);
        self._content.addChild(game6_2_2_3);
        var game6_2_2_4 = new cc.Sprite(res.game6_2_2_4);
        game6_2_2_4.setPosition(233, 205);
        self._content.addChild(game6_2_2_4);
        game6_2_2_4 = new cc.Sprite(res.game6_2_2_4);
        game6_2_2_4.setPosition(233, 146);
        self._content.addChild(game6_2_2_4);

        var name = [res.market6_2_3, res.market6_2_8, res.market6_2_4, res.market6_2_5];

        for (var i = 0; i < 4; i++) {
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m, 1, 1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(181,216),cc.p(181,157)];
        for(var i = 0; i< 2 ; i++){
            var r1 = new cc.LayerColor(cc.color(196, 200, 235, 125), 200, 50);
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
        self.movePosArr = [cc.p(213, 0), cc.p(210, -97), cc.p(211, -50), cc.p(212, -142)];
        self.res = [[],[]];

        var game6_2_2_1 = new cc.Sprite(res.game6_2_3_1);
        game6_2_2_1.setPosition(-236, -80);
        self._content.addChild(game6_2_2_1);
        var game6_2_2_2 = new cc.Sprite(res.game6_2_2_2);
        game6_2_2_2.setPosition(0, 204);
        self._content.addChild(game6_2_2_2);
        var game6_2_2_3 = new cc.Sprite(res.game6_2_2_3);
        game6_2_2_3.setPosition(0, 144);
        self._content.addChild(game6_2_2_3);
        var game6_2_2_4 = new cc.Sprite(res.game6_2_2_4);
        game6_2_2_4.setPosition(233, 205);
        self._content.addChild(game6_2_2_4);
        game6_2_2_4 = new cc.Sprite(res.game6_2_2_4);
        game6_2_2_4.setPosition(233, 146);
        self._content.addChild(game6_2_2_4);

        var name = [res.market6_2_3, res.market6_2_8, res.market6_2_4, res.market6_2_5];

        for (var i = 0; i < 4; i++) {
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m, 1, 1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(181,216),cc.p(181,157)];
        for(var i = 0; i< 2 ; i++){
            var r1 = new cc.LayerColor(cc.color(196, 200, 235, 125), 200, 50);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    }
});