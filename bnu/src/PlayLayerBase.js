var PlayLayerBase = cc.Layer.extend({

    types : 0,
    lev : 0,
    now_step : 0,
    _content : null,
    nowTime : 0,
    responseArr : [],
    res :[],
    movePosArr : [],
    hasGoods : false


    addListeners : function(points){
        var self = this;
        cc.eventManager.addListener({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: self.onTouchBegan.bind(self),
            onTouchMoved: self.onTouchMoved.bind(self),
            onTouchEnded: self.onTouchEnded.bind(self)

        },points);
    },

    canTouch : function () {
        if(this.nowTime == 0){
            // alert("至少阅读10秒，请仔细看下线索哦。");
            return ;
        }

        var startTime = this.nowTime;
        var nowTime = Date.parse(new Date());
        if((nowTime - startTime)/1000 <= 1){
            alert("至少阅读10秒，请仔细看下线索哦。");
            return ;

        }

        var speak = this._content.getChildByTag(5100);
        if(speak){
            speak.removeFromParent(true);
        }

        var speak = this._content.getChildByTag(5200);
        if(speak){
            speak.removeFromParent(true);
        }
    },

    onTouchBegan : function (touch,event) {
        var self = this;

        if(self.canTouch() == false){
            return false;
        }

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var size = target.getContentSize();
        var rect = cc.rect(0,0,size.width,size.height);
        if(cc.rectContainsPoint(rect,location)){
            return true;
        }

        return false;
    },

    onTouchMoved : function (touch,event) {
        var self = this;
        var target = event.getCurrentTarget();
        var delta = touch.getDelta();
        var tag = target.getTag();
        target.x += delta.x;
        target.y += delta.y;

        for(var i = 0 ; i < self.responseArr.length ; i++){
            var rsp = self.responseArr[i];
            // var location = rsp.convertToNodeSpace(target.getPosition());
            var rects = rsp.getBoundingBox();
            if(cc.rectContainsPoint(rects,target.getPosition())){
                var child = rsp.getChildByTag(100);
                if (child){
                    return;
                }
                var size = rsp.getContentSize();
                var r = new cc.LayerColor(cc.color(15,247,15,255),size.width,size.height);
                r.setPosition(0,0);
                rsp.addChild(r,1,100)

                var index =  self.res[i].indexOf(tag);
                if(index <= -1){
                    self.res[i].push(tag);
                }
            }else{
                var index =  self.res[i].indexOf(tag);
                if(index > -1){
                    self.res[i].splice(index,1);
                }
                var child = rsp.getChildByTag(100);
                if (child){
                    child.removeFromParent();
                }
            }
        }
    },


    onTouchEnded : function(touch,event){
        // console.log(JSON.stringify(this.res));
        var self = this;
        var target = event.getCurrentTarget();
        var tag = target.getTag();
        var flag = false;
        for(var i = 0 ; i < self.responseArr.length ; i++){
            var rsp = self.responseArr[i];
            // var location = rsp.convertToNodeSpace(target.getPosition());
            var rects = rsp.getBoundingBox();
            if(cc.rectContainsPoint(rects,target.getPosition())){
                var child = rsp.getChildByTag(100);
                if (child){
                    child.removeFromParent();
                }
                var index =  self.res[i].indexOf(tag);
                if(index <= -1){
                    self.res[i].push(tag);
                }
                // console.log(JSON.stringify(this.res));
                flag = true;
            }else{
                var child = rsp.getChildByTag(100);
                if (child){
                    child.removeFromParent();
                }


            }
        }

        if(flag === false){
            target.setPosition(self.movePosArr[tag - 1]);
        }

        // console.log(JSON.stringify(this.res));
    },

    addSpeak : function(levs,tSize){
        if (tSize == null){
            tSize = 16;
        }

        this.nowTime = Date.parse(new Date());
        var self = this;
        var speak1 = new cc.Sprite(res.play_speak_png);
        speak1.setPosition(-350,0);
        self._content.addChild(speak1,12,5000 + 100);
        speak1.setScale(0);
        speak1.runAction(cc.scaleTo(0.2,1,1));

        var content = new cc.LabelTTF(this.animalTalk[levs],"Arial",tSize);
        content.setColor(cc.color(0,0,0,255));
        content.opacity = 0;
        content.x = 160 + 120;
        content.y = 90 + 125;
        speak1.addChild(content,10);
        content.runAction(cc.sequence(cc.delayTime(0.2),cc.fadeIn(0.2)));

    },

    onEnter : function(){
        var self = this;
        self._super();

        var node = new cc.Node();
        node.x = cc.visibleRect.center.x;
        node.y = cc.visibleRect.center.y;
        self.addChild(node,1);
        //self._content = node;

        var bgLayer = new cc.LayerColor(cc.color(255, 255, 255, 255),1167,660);
        bgLayer.ignoreAnchorPointForPosition(false);
        bgLayer.setPosition(0,-5);
        node.addChild(bgLayer);


        var parent = new cc.Node();
        parent.setPosition(0,-5);
        node.addChild(parent,2);
        self._content = parent;

        var bar = new cc.Sprite(res.play_bar_png);
        bar.setPosition(0,390);
        bar.setName("bar");
        node.addChild(bar,5);

        self.types = UserDataMgr.getSelectRoom();
        self.lev = UserDataMgr.getselectLev();

        self.addBarGoods(node);

        var menu = new cc.Menu();
        menu.setPosition(0,0);
        node.addChild(menu,10);

        var backItem = new cc.MenuItemFont("回超市",self.onBack,self);
        backItem.setFontSize(40);
        // backItem.setFontColor(cc.color(0,0,0,255));
        backItem.setFontName("Arial Black");
        backItem.setPosition(1250 - 800,390);
        menu.addChild(backItem);

        function onOk(){
           self.onOk();
        }

        var spNormal = new cc.Sprite(res.btn_ok_png);
        spNormal.setScale(1.4);
        var spSelect = new cc.Sprite(res.btn_ok_png);
        spSelect.setScale(1.4);

        var buyItem = new cc.MenuItemSprite(spNormal,spSelect);
        buyItem.setPosition(0,-410);
        buyItem.setAnchorPoint(0.5,0.5);
        buyItem.setCallback(onOk,this);
        menu.addChild(buyItem,1);

        var logo = new cc.Sprite(res.play_logo_png);
        logo.setPosition(-550,-230);
        node.addChild(logo,2);

        LogData.setGameStartTime(Date.parse(new Date()));
    },

    addBarGoods :function (node) {
        // var self = this;
        // var selectGoods = UserDataMgr.getSelectGoods();
        // var config = GOODS_CONFIG[self.types][self.lev];
        // for(var i = 0 ; i< selectGoods.length ; i++){
        //     var sp = new cc.Sprite(config[selectGoods[i]]);
        //     sp.setPosition(130*i + 80 - 584,390);
        //     sp.setScale(0.55);
        //     node.addChild(sp,20,100 + i);
        //
        // }
    },

    onBack : function(){
        var self = this;
        var layer = new MarketSelect();
        var scene = cc.director.getRunningScene();
        scene.addChild(layer,5);
        self.removeFromParent();
    },

    checkGame : function(){

    },

    addNextStep : function () {
       
    },

    checkNextStep : function () {
        return false;
    },

    onOk : function(){

        if (this.checkGame() == true){
            var self = this;

            function continueGame(){
                self.now_step += 1;
                self._content.removeAllChildren();
                self.addNextStep();
            }

            if(self.checkNextStep() == true ){
                var cb = continueGame.bind(this);
                var layer = new CompleteTips();
                layer.setData(3);
                layer.setContent("太棒了！操作正确！");
                layer.setCallback(cb);
                self.addChild(layer,100);
                return;
            }

            self.updateData(true);
            return;
        }

        this.updateData(false);
    },

    updateData : function(result) {
        var callback = function (cbData) {
            hideWaitting();
            if (cbData != null && cbData["code"] == 1) {
                LogData.clean();

                if (result == true) {
                    var flagConfig = FLAG_CONFIG[self.types];



                    this.updateLevs();
                    var layer = new CompleteTips();
                    if(flagConfig.length <= self.lev){
                        layer.setData(4);
                        layer.setContent("恭喜你，成功完成本篇文献的全部关卡！\n")
                    }else{
                        layer.setData(1);
                        layer.setContent("恭喜你,解锁下一关！\n")
                    }
        
                    this.addChild(layer, 100);
                    return;
                }

                var layer = new CompleteTips();
                layer.setData(2);
                layer.setContent("太遗憾了，你的操作是错误的！\n回到文献中再看看吧！")
                this.addChild(layer, 100);
                return;
            }

            alert("上传数据出错，请重新点击ok按钮。");
        };

        var cb = callback.bind(this);

        if(result == true){
            LogData.setGamePass(1);
        }
        else{
            LogData.setGamePass(0);
        }

        var sendData = {};
        LogData.setGameEndTime(Date.parse(new Date()));
        sendData["id"] = UserDataMgr.id;
        sendData["data"] = LogData.getAllData();
        sendRequest(sendData,cb);
        showWatting();
    },

    updateLevs : function () {
        var selectRoomId = UserDataMgr.getSelectRoom();
        var selectLevId = UserDataMgr.getselectLev();

        var roomid = UserDataMgr.roomid;
        var levid = UserDataMgr.levid;
        if(selectRoomId < roomid || selectLevId < levid ){
            cc.log("没有完成新的房间");
            return;
        }

        if(levid >= FLAG_CONFIG[roomid].length){
            if (FLAG_CONFIG.hasOwnProperty(roomid)){
                UserDataMgr.roomid += 1;
                UserDataMgr.levid = 1;
            }
        }else{
            UserDataMgr.levid += 1;
        }

        var data = {}
        data["levid"] = UserDataMgr.levid;
        data["roomid"] = UserDataMgr.roomid;
        data["id"] = UserDataMgr.id;

        function callback(cbData){
            if(cbData != null && cbData["code"] == 1){
                return;
            }

            var cb = callback.bind(this);
            sendRequest(data,cb);
        };

        var cb = callback.bind(this);

        sendRequest(data,cb);

    },

    onExit:function(){

        cc.eventManager.removeListener(this);
        this._super();
    }
});