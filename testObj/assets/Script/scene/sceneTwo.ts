// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property(cc.Sprite)
    shan: cc.Sprite = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let self = this;
        cc.loader.loadRes("Texture/title_icon_set", cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.log("load title_icon_set err=====", err)
            }
            console.log("OKOKOKO");
            self.shan.spriteFrame = spriteFrame;
        });

    }

    // update (dt) {}
}
