var PlayLayer14 = PlayLayerBase.extend({

    animalTalk : ["在研究四中，\n研究者让被试们观看了一段视频\n并为三组被试分发了三种不同的问卷。\n除了控制组，直接提问组和\n虚假前提组的问卷都涉及到了一些事物\n（比如，校车）。你可以补全这两份\n问卷关于校车的问题吗？",
                  "一星期后，被试们回来再填写一份问卷。\n这次三个组的被试填写的是同一份问卷。\n你能补全这份问卷中关于校车的问题吗？",
                  "这三个组的被试谁最有可能回忆看到校车呢？\n请把校车拖放到相应的问卷下。\n另外，直接提问组的回忆率更像\n错误假设组和还是控制组呢？\n如果你认为是前者，请再拖一辆校车；\n如果是后者，请不要拖动校车。"],

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
            for(var i = 0 ; i< 8; i++){
                if (self.res[i].length !== 1 ){
                    return false;
                }
            }
            console.log("------------------",JSON.stringify(self.res));
            if((self.res[0][0] === 8 || self.res[0][0] === 11 )  && (self.res[1][0] === 5 || self.res[1][0] === 10 ) && (self.res[2][0] === 9 || self.res[2][0] === 6) ){
                if((self.res[3][0] === 8 || self.res[3][0] === 11 ) && self.res[4][0] === 3 && self.res[5][0] === 1 && (self.res[6][0] === 5 || self.res[6][0] === 10 ) && (self.res[7][0] === 6 || self.res[7][0] === 9)){
                    return true;
                }
            }

            return false;

        }else if(self.now_step === 1){
            if(self.res[0].length === 1 && self.res[1].length === 1 && self.res[2].length === 1  ){
                if( (self.res[0][0] === 8 || self.res[0][0] === 11 ) && (self.res[1][0] === 5 || self.res[1][0] === 10 ) && (self.res[2][0] === 9 || self.res[2][0] === 6) ){
                    return true;
                }
            }

            return false;

        }else if(self.now_step === 2){
            if(self.res[0].length === 0 && self.res[1].length === 1 && self.res[2].length === 0  ){
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
        self.movePosArr = [];
        self.res = [[],[],[],[],[],[],[],[]];

        var game1_4_1_1 = new cc.Sprite(res.game1_4_1_1);
        game1_4_1_1.setPosition(-409,0);
        game1_4_1_1.setScale(1.3,1.2);
        self._content.addChild(game1_4_1_1);

        game1_4_1_1 = new cc.Sprite(res.game1_4_1_1);
        game1_4_1_1.setPosition(-80,0);
        game1_4_1_1.setScale(1.3,1.2);
        self._content.addChild(game1_4_1_1);

        var game1_4_1_2 = new cc.Sprite(res.game1_4_1_2);
        game1_4_1_2.setPosition(251,0);
        game1_4_1_2.setScale(1.3,1.2);
        self._content.addChild(game1_4_1_2);


        var name = [res.market1_4_1,res.market1_4_2,res.market1_4_3,res.market1_4_4,res.market1_4_6,res.market1_4_7,res.market1_4_8,res.market1_4_9,res.market1_4_7,res.market1_4_6,res.market1_4_9];
        for(var i = 0 ; i< 11 ; i++){
            self.movePosArr.push(cc.p(482,257 - 47 * i));
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            m.setScale(0.5,0.5);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);

        }

        var f = [cc.p(-508,34),cc.p(-429,34),cc.p(-350,34),cc.p(-211,36),cc.p(-148,36),cc.p(-81,38),cc.p(-16,36),cc.p(59,34)];

        for(var i = 0; i< 8 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),50,50);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    },

    addStep1 : function(){

        var self = this;

        self.responseArr = [];
        self.movePosArr = [];
        self.res = [[],[],[]];

        var name = [res.market1_4_1,res.market1_4_2,res.market1_4_3,res.market1_4_4,res.market1_4_6,res.market1_4_7,res.market1_4_8,res.market1_4_9,res.market1_4_7,res.market1_4_6,res.market1_4_9];
        for(var i = 0 ; i< 11 ; i++){
            self.movePosArr.push(cc.p(482,257 - 47 * i));
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            m.setScale(0.5,0.5);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);

        }

        var game1_4_2 = new cc.Sprite(res.game1_4_2);
        game1_4_2.setPosition(-52,0);
        game1_4_2.setScale(1.5,1.5);
        self._content.addChild(game1_4_2);

        var f  = [cc.p(-176,36),cc.p(-61,36),cc.p(59,34)];

        for(var i = 0; i< 3 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),50,50);
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
        self.movePosArr = [cc.p(478,105),cc.p(478,-88)];
        self.res = [[],[],[]];

        var game1_4_3_1 = new cc.Sprite(res.game1_4_3_1);
        game1_4_3_1.setPosition(-369,0);
        self._content.addChild(game1_4_3_1);

        var game1_4_3_2 = new cc.Sprite(res.game1_4_3_2);
        game1_4_3_2.setPosition(-62,0);
        self._content.addChild(game1_4_3_2);

        var game1_4_3_3 = new cc.Sprite(res.game1_4_3_3);
        game1_4_3_3.setPosition(248,0);
        self._content.addChild(game1_4_3_3);

        for(var i = 0 ; i < 2 ; i++){
            var m = new cc.Sprite(res.market1_4_5);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1 + i);
            self.addListeners(m);
        }

        var f = [cc.p(-337,-50),cc.p(-30,-52),cc.p(288,-52)];
        for(var i = 0; i< 3 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    }
});