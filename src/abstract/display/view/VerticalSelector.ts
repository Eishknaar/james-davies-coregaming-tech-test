import {AbstractView} from "./AbstractView";
import {Factory} from "../../factory/Factory";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {VerticalSelectorProperties} from "../properties/VerticalSelectorProperties";
import {Panel} from "./Panel";
import {Sprite} from "./Sprite";
import {RadioButton} from "./RadioButton";
import { gsap } from "gsap";

export class VerticalSelector extends AbstractView {

    protected properties: VerticalSelectorProperties;
    protected factory: Factory;
    protected selectionHandler: Function;
    protected selectionScope: any;
    protected textValues: string[]
    protected dataValues: any[]

    protected selectorPanel: Panel;
    protected selectorBackground: Sprite;
    protected selectorButtons: RadioButton[];
    protected triggerButton: RadioButton;

    protected isOpen: boolean;
    protected openPos: PIXI.Point;
    protected closePos: PIXI.Point;

    constructor(factory: Factory, properties: AbstractViewProperties, textValues: string[], dataValues: any[], handler: Function, scope: any){
        super(properties);
        this.createFactory(factory);
        this.selectionHandler = handler;
        this.selectionScope = scope;
        this.textValues = textValues;
        this.dataValues = dataValues;
        this.create();
    }

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <VerticalSelectorProperties> properties;
    }

    protected createFactory(factory: Factory): void {
        this.factory = factory;
    }

    protected create() {
        this.createSelectorBackground();
        this.createSelectorPanel();
        this.createSelectorButtons();
        this.createTriggerButton();
        this.createMask();
        let posY: number = -this.selectorBackground.height - this.triggerButton.position.y;
        this.openPos = new PIXI.Point(0, posY);
        this.closePos = new PIXI.Point(0, 0);
    }

    protected createSelectorBackground(): void {
        this.selectorBackground = new Sprite(this.properties.selectorBackgroundProperties);
        this.addChild(this.selectorBackground);
    }

    protected createSelectorPanel(): void {
        this.properties.selectorPanelProperties.columns = 1
        this.properties.selectorPanelProperties.rows = this.textValues.length;
        this.selectorPanel = new Panel(this.properties.selectorPanelProperties);
        this.selectorBackground.addChild(this.selectorPanel);
    }

    protected createSelectorButtons(): void {
        this.selectorButtons = [];
        for(let i: number = 0; i < this.textValues.length; i++){
            let text: string = this.textValues[i];
            let data: any = this.dataValues[i];
            let button: RadioButton = new RadioButton(this.factory, this.properties.selectorButtonProperties, this.onSelection, this);
            button.setText(text);
            button.data = data;
            this.selectorButtons.push(button);
            this.selectorPanel.addToPanel(button);
        }
        this.selectorPanel.refresh();
    }

    protected createMask(): void {
        let size: PIXI.Point = new PIXI.Point(this.selectorBackground.width, this.selectorBackground.height);
        let posY: number = this.position.y - size.y - this.triggerButton.position.y;
        this.selectorBackground.mask = new PIXI.Graphics()
        .beginFill(0xffffff, 1)
        .drawRect(0, posY, size.x, size.y)
        .endFill();
    }

    protected createTriggerButton(): void {
        this.triggerButton = new RadioButton(this.factory, this.properties.triggerButtonProperties, this.handleTriggerSelected, this);
        this.addChild(this.triggerButton);
    }

    protected handleTriggerSelected(): void {
        if(this.isOpen){
            this.close();
        }
        else{
            this.open();
        }
    }

    protected close(): void {
        this.isOpen = false;
        this.triggerButton.deselect();
        gsap.to(this.selectorBackground,{
            pixi: {
                x: this.closePos.x,
                y: this.closePos.y
            },
            duration: 1
        });
    }

    protected open(): void {
        this.isOpen = true;
        this.triggerButton.select();
        gsap.to(this.selectorBackground,{
            pixi: {
                x: this.openPos.x,
                y: this.openPos.y
            },
            duration: 1
        });
    }

    public setDefaultOption(index: number): void {
        let button: RadioButton = this.selectorButtons[index];
        button.select();
        this.onSelection(button);
    }

    protected onSelection(button: RadioButton): void {
        button.disable();
        for(let radioButton of this.selectorButtons){
            if(radioButton.checkIsOn() && radioButton != button){
                radioButton.deselect();
                radioButton.enable();
            }
        }
        this.triggerButton.setText(button.getLang());
        this.close();
        this.selectionHandler.call(this.selectionScope, button);
    }


}