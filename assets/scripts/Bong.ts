// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
    
     onLoad () {}

    start () {

    }

    // update (dt) {}
}
