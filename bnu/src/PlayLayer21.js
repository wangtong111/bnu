var PlayLayer21 = PlayLayerBase.extend({

    animalTalk : ["第1小关"],

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
            if(selectGoods[i] !== 3 && selectGoods[i] !== 2 && selectGoods[i] !== 4 && selectGoods[i] !== 7){
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
            if(self.res[0].length === 1 && self.res[1].length === 1){
                if(self.res[0][0] === 1 && self.res[1][0] === 4){
                    return true;
                }
            }
            return false;
        }
    },


    checkNextStep : function () {

        if(this.now_step < 0){
            return true;
        }

        return false;
    },

    addNextStep : function () {
        var self = this;
        if(self.now_step === 0){
            self.addStep0();
        }

        self.addSpeak(self.now_step);
    },

    addStep0 : function(){
        var self = this;

        self.responseArr = [];
        self.movePosArr = [cc.p(141,154),cc.p(366,134),cc.p(126,-97),cc.p(379,-92)];
        self.res = [[],[]];

        var game2_1_1 = new cc.Sprite(res.game2_1_1);
        game2_1_1.setPosition(-181,0);
        self._content.addChild(game2_1_1);

        var name = [res.market2_1_3,res.market2_1_4,res.market2_1_8,res.market2_1_5];

        for(var i = 0 ; i < 4 ; i++){
            var m = new cc.Sprite(name[i]);
            m.setPosition(self.movePosArr[i]);
            self._content.addChild(m,1,1+i);
            self.addListeners(m);
        }

        var f = [cc.p(-283,-219),cc.p(-100,-217)];

        for(var i = 0; i< 2 ; i++){
            var r1 = new cc.LayerColor(cc.color(196,200,235,125),100,100);
            r1.setPosition(f[i]);
            r1.ignoreAnchorPointForPosition(false);
            r1.setAnchorPoint(0.5,0.5);
            self._content.addChild(r1);
            self.responseArr.push(r1);
        }
    }
});