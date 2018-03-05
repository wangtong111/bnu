var PlayLayer51 = PlayLayerBase.extend({

    animalTalk : ["让我们来模拟小阿尔伯特的研究。\n在正式的研究进行前，\n一些毛茸茸的小动物被\n放在了小婴儿面前。\n你认为小婴儿对这些陌生\n的事物会作何反应？\n请把相应的反应拖放到小婴儿的脸上吧。",
                  "趁小婴儿不注意，\n研究者在小婴儿背后用锤子猛击铁条，\n发出了巨大的噪声。\n你认为小婴儿会作何反应？\n请把相应的反应拖放到小婴儿的脸上吧。",
                  "正式的实验开始了。\n在小阿尔伯特的实验中，\n研究者是怎么设置、\n呈现实验材料的？\n请把正确的事物拖放到相应的位置吧。",
                  "刚才的实验情境被研究者重复了多次。\n现在，铁条被敲击的噪音不再被呈现。\n当面对小老鼠时，\n婴儿更可能会作何反应？\n请把相应的反应拖放到婴儿的脸上吧。",
                  "最后，研究者还像探讨泛化的问题。\n呈现给小婴儿的事物被换成了\n和老鼠很像的小兔子，\n这时小婴儿的反应会是什么？\n请把正确的反应拖放到小婴儿的脸上吧。"],

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