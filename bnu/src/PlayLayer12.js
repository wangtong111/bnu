var PlayLayer12 = PlayLayerBase.extend({

    animalTalk : ["这里是《学生革命日记》的拍摄现场。\n你知道一共要请到几名学生参与演出吗？\n请把正确数量的学生拖放到教室里。",
                 "看完视频后被试需要填写一份问卷。\n问卷中的一道题目包含对视频内\n人数的错误假设。\n你可以补全问卷的内容吗？",
                 "第一份问卷做完了。\n第二份问卷该在什么时候填写呢？\n请帮助被试安排他们做实验的时间吧。",
                 "在第一份问卷中包含的错误假设\n会对示威者人数的回忆产生什么影响？\n请把被试更可能估计的人数\n拖放到相应的错误假设下。"],

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
            if (self.res[0].length === 8){
                return true;
            }

            return false;

        }else if(self.now_step === 1){
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 4 && self.res[1][0] === 1){
                    return true;
                }
            }
            return false;

        }else if(self.now_step === 2){
            if(self.res[0].length === 1 && self.res[0][0] === 2){
                return true;
            }

            return false;
        }else if(self.now_step === 3){
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 1 && self.res[1][0] === 2){
                    return true;
                }
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
        self.movePosArr = [];
        self.res = [[]];


        var game1_2_1 = new cc.Sprite(res.game1_2_1);
        game1_2_1.setPosition(-160,6);
        self._content.addChild(game1_2_1);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),300,150);
        r1.setAnchorPoint(0.5,0.5);
        r1.ignoreAnchorPointForPosition(false);
        r1.setPosition(-111,-55);
        self._content.addChild(r1);
        self.responseArr.push(r1);

        for(var i = 0 ; i< 12 ; i++){
            self.movePosArr.push(cc.p(205 + (i%3)*113,170 - Math.floor(i/3)*137));
            var m = new cc.Sprite(res.market1_2_5);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,i + 1);
            self.addListeners(m);
        }
    },

    addStep1 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(436,114),cc.p(411,32),cc.p(415,-36),cc.p(415,-114)];
        self.res = [[],[]];


        var game1_2_2 = new cc.Sprite(res.game1_2_2);
        game1_2_2.setPosition(-251,0);
        game1_2_2.setScale(1.5,1.5);
        self._content.addChild(game1_2_2);

        game1_2_2 = new cc.Sprite(res.game1_2_2);
        game1_2_2.setPosition(133,0);
        game1_2_2.setScale(1.5,1.5);
        self._content.addChild(game1_2_2);

        var market1_2_4 = new cc.Sprite(res.market1_2_4);
        market1_2_4.setPosition(436,114);
        self._content.addChild(market1_2_4,1,1);
        self.addListeners(market1_2_4);

        var market1_2_9 = new cc.Sprite(res.market1_2_9);
        market1_2_9.setPosition(411,32);
        self._content.addChild(market1_2_9,1,2);
        self.addListeners(market1_2_9);

        var market1_2_3 = new cc.Sprite(res.market1_2_3);
        market1_2_3.setPosition(415,-36);
        self._content.addChild(market1_2_3,1,3);
        self.addListeners(market1_2_3);

        var market1_2_2 = new cc.Sprite(res.market1_2_2);
        market1_2_2.setPosition(415,-114);
        self._content.addChild(market1_2_2,1,4);
        self.addListeners(market1_2_2);

        var f = [cc.p(-363,55),cc.p(21,55)];

        for(var i = 0; i< 2 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),60,40);
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
        self.movePosArr = [cc.p(302,163),cc.p(309,66),cc.p(307,-21),cc.p(287,-102)];
        self.res = [[]];

        var name = [res.market1_2_7,res.market1_2_6,res.market1_2_8,res.market1_2_1];

        var game1_2_3 = new cc.Sprite(res.game1_2_3_1);
        game1_2_3.setPosition(0,0);
        self._content.addChild(game1_2_3);

        var game1_2_3_2 = new cc.Sprite(res.game1_2_3_2);
        game1_2_3_2.setPosition(-346,188);
        game1_2_3_2.setScale(2,2);
        self._content.addChild(game1_2_3_2);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,50);
        r1.setPosition(-409,201);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);

        for(var i = 0 ; i< 4 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,i+1);
            self.addListeners(m);
        }
    },
    
    addStep3 : function () {
        var self = this;

        self.responseArr = [];
        self.movePosArr = [];
        self.res = [[],[]];

        var game1_2_4_1 = new cc.Sprite(res.game1_2_4_1);
        game1_2_4_1.setPosition(-286,0);
        self._content.addChild(game1_2_4_1);

        var game1_2_4_2 = new cc.Sprite(res.game1_2_4_2);
        game1_2_4_2.setPosition(0,0);
        self._content.addChild(game1_2_4_2);

        var game1_2_4_3 = new cc.Sprite(res.game1_2_4_3);
        game1_2_4_3.setPosition(335,81);
        self._content.addChild(game1_2_4_3,1,1);
        self.addListeners(game1_2_4_3);

        var game1_2_4_4 = new cc.Sprite(res.game1_2_4_4);
        game1_2_4_4.setPosition(335,-59);
        self._content.addChild(game1_2_4_4,1,2);
        self.addListeners(game1_2_4_4);

        var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r1.setPosition(-294,-50);
        r1.ignoreAnchorPointForPosition(false);
        r1.setAnchorPoint(0.5,0.5);
        self._content.addChild(r1);
        self.responseArr.push(r1);

        var r2 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
        r2.setPosition(5,-49);
        r2.ignoreAnchorPointForPosition(false);
        r2.setAnchorPoint(0.5,0.5);
        self._content.addChild(r2);
        self.responseArr.push(r2);
    }
});