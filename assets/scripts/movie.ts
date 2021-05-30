// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


var trai = 0;
var phai = 0;

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:

    onBeginContact(contact, selfCollider, otherCollider){
        if(otherCollider.name == "03-Breakout-Tiles<PhysicsBoxCollider>"){
            otherCollider.getComponent(cc.Sprite).destroy();
            otherCollider.destroy();
        }
    }

    dichuyen(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                trai = 1;
                break;
            case cc.macro.KEY.right:
                phai = 1;
                break;
        }
    }
    stopdichuyen(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                trai = 0;
                break;
            case cc.macro.KEY.right:
                phai = 0;
                break;
        }
    }

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.dichuyen,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.stopdichuyen,this);
    }

    start () {

    }

    update (dt) {
        if(trai == 1){
            this.node.setPosition(this.node.position.x-=450*dt,this.node.position.y);
        }
        if(phai == 1){
            this.node.setPosition(this.node.position.x+=450*dt,this.node.position.y);
        }
    }
}
