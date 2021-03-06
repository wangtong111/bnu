///**
// * Created by tingting on 2017/9/10.
// */

var RoomLayer = cc.Layer.extend({
    types : 0,
    lev : 0,
    startPos : cc.p(-1000,-1000),
    _selectLevs : -1,

    setTypes : function(types,lev){

        this.types = types;
        this.lev = lev;
    },

    addListener:function(){
        cc.eventManager.addListener({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded

        },this)
    },

    onEnter : function () {
        cc.log("i am RoomLayer onEnter");
        var self = this;
        self._super();
        this.types = UserDataMgr.getSelectRoom();
        this.lev = UserDataMgr.levid;
        if (this.types < UserDataMgr.roomid){
            this.lev = FLAG_CONFIG[this.types].length;
        }

        self.addListener();

        var node = new cc.Node();
        node.x = cc.visibleRect.center.x;
        node.y = cc.visibleRect.center.y;
        self.addChild(node,3,100);

        var bgName = res.house_bg_jpg;//ROOM_CONFIG[self.types];
        var bg = new cc.Sprite(bgName);
        bg.x = 0;
        bg.y = 0;
        node.addChild(bg,1);

        var menu = new cc.Menu();
        menu.setPosition(0,0);
        node.addChild(menu,10);

        function onOk(){
            cc.director.popScene();
        }

        var spNormal = new cc.Sprite(res.btn_back_png);
        spNormal.setScale(1.4);
        var spSelect = new cc.Sprite(res.btn_back_png);
        spSelect.setScale(1.4);

        var buyItem = new cc.MenuItemSprite(spNormal,spSelect);
        buyItem.setPosition(0,-400);
        buyItem.setAnchorPoint(0.5,0.5);
        buyItem.setCallback(onOk,this);
        menu.addChild(buyItem,1);

        self.initOwnBg(node)
    },

    initOwnBg : function(node){
        var self = this;

        var menu = new cc.Menu();
        menu.setPosition(0,0);
        node.addChild(menu,10);

        function onTouch(tag){
            var scene = new PlayScene(self.types,tag);
            cc.director.pushScene(scene);
        }

        var flagConfig = FLAG_CONFIG[self.types];

        self.lev =  self.lev >  flagConfig.length ? flagConfig.length : self.lev;

        for(var i = 0 ; i< self.lev ; i++){
            var spNormal = new cc.Sprite(res.room_flag_png);
            var spSelect = new cc.Sprite(res.room_flag_png);

            var buyItem = new cc.MenuItemSprite(spNormal,spSelect);
            buyItem.setPosition(flagConfig[i]);
            buyItem.setAnchorPoint(0.5,0.5);
            buyItem.setCallback(onTouch.bind(this,i+ 1),this);
            menu.addChild(buyItem,1);
            buyItem.setOpacity(0);

            buyItem.runAction(cc.sequence(cc.delayTime(i*0.2),cc.fadeIn(0.2)));
        }

    },

    onTouchBegan : function (touch,event) {

        return true;

    },

    onTouchMoved : function (touch,event) {

    },

    onTouchEnded : function(touch,event){

    },

    onExit:function(){

        cc.eventManager.removeListener(this);
        this.removeFromParent(true);
        this._super();
    }


});


var RoomScene = cc.Scene.extend({

    ctor:function(types,lev){
        UserDataMgr.setSelectRoom(types);
        this._types = types
        this._super();
    },

    onEnter : function() {
        this._super();
        var layer = new RoomLayer();
        // var layer = null;
        // if(this._types == 1){
        //     layer = new RoomLayerBrain();
        // }else if(this._types == 2){
        //     layer = new RoomLayerChild();
        // }else if(this._types == 3){
        //     layer = new RoomLayerMouse();
        // }else if(this._types == 4){
        //     layer = new RoomLayerShiYa()
        // }else  if (this._types == 5){
        //     layer = new RoomLayerDream();
        // }

        this.addChild(layer);

    }

});