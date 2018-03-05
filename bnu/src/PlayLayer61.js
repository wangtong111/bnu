var PlayLayer61 = PlayLayerBase.extend({

    animalTalk : ["假设我们回到了橡树学校，\n研究进行的时候。\n研究者告知老师这是一项关于\n“未来学业成就”的测试。\n到了正式进行测验的时候，\n应该拿出什么测验给学生施测呢？\n请把相应的测验拖给学生们吧。",
                  "学生们被按照“一般能力测验”\n的得分高低排成名单\n（数字表示名次）。\n研究者们需要选出一些学生给班主任们，\n并告知他们这些选中的学生\n（绿色对勾）有很高的发展潜力。\n作为研究者，应该提供哪份名单呢？"],

    onEnter:function () {
        var self = this;
        self._super();

        var selectGoods = UserDataMgr.getSelectGoods();

        if(selectGoods.length !== 4){
            self._content.runAction(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
                alert("选择物品数目不对，请返回超市重新选择。");
            })));
            return;
        }

        for(var i = 0 ; i< selectGoods.length ; i++){
            if(selectGoods[i] !== 0 && selectGoods[i] !== 1 && selectGoods[i] !== 3 && selectGoods[i] !== 8){
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

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(301,146),cc.p(304,-109)];
        self.res = [[]];

        var name = [res.market6_1_4,res.market6_1_2];

        for(var i = 0 ; i< 2 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            m.setScale(1.5,1.5);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }

        var game6_1_2_2 = new cc.Sprite(res.game6_1_2_2);
        game6_1_2_2.setPosition(0,-119);
        self._content.addChild(game6_1_2_2);
        var game6_1_2_1 = new cc.Sprite(res.game6_1_2_1);
        game6_1_2_1.setPosition(0,118);
        self._content.addChild(game6_1_2_1);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),200,200);
        r1.setPosition(-223,-136);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);
    }
});