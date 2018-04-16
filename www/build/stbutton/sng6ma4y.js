/*! Built with http://stenciljs.com */
const{h:t}=window.stbutton;class e{constructor(){this.options={size:"small",type:"primary"}}buttonClickedHandler(t){this.buttonClicked.emit({buttonSize:t})}render(){return t("button",{type:"button",class:`st-button st-button--${this.options.size} st-button--${this.options.type}`,onClick:()=>this.buttonClickedHandler(this.options.size)},t("slot",null))}static get is(){return"st-button"}static get encapsulation(){return"shadow"}static get properties(){return{options:{type:"Any",attr:"options"}}}static get events(){return[{name:"buttonClicked",method:"buttonClicked",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--fb-color-white:#fff;--fb-color-black:#000;--fb-primary-color:#00b0db;--fb-primary-text-color:var(--fb-color-white);--fb-primary-color-hover:var(--fb-primary-color);--fb-primary-color-active:var(--fb-primary-color);--fb-secondary-color:var(--fb-color-white);--fb-secondary-text-color:#77787b;--fb-secondary-color-hover:var(--fb-secondary-color);--fb-secondary-color-active:var(--fb-secondary-color);--fb-warn-text-color:#d50000;--fb-disabled-color:rgba(var(--fb-color-black), .12);--fb-disabled-text-color:rgba(var(--fb-color-black), .26);--fb-border-color:#dddedd}.st-button{display:inline-block;background-color:var(--fb-primary-color);border:none;color:var(--fb-primary-text-color);outline:0;text-decoration:none;box-shadow:0 1px 1px 0 rgba(var(--fb-color-black),.2),inset 0 -1px 0 0 rgba(var(--fb-color-black),.2);transition:background-color .2s ease-out;box-sizing:border-box;text-align:center;cursor:pointer}.st-button:hover{background-color:var(--fb-primary-color-hover)}.st-button:active{background-color:var(--fb-primary-color-active)}.st-button:disabled{background-color:var(--fb-disabled-color);color:var(--fb-disabled-text-color)}.st-button--small{height:28px;line-height:28px;font-size:14px;font-weight:700;border-radius:14px;padding:0 16px;min-width:48px}.st-button--medium{height:36px;line-height:36px;font-size:16px;font-weight:700;border-radius:18px;padding:0 24px;min-width:88px}.st-button--large{width:100%;height:48px;line-height:48px;font-size:16px;font-weight:700;border-radius:24px;padding:0 24px}.st-button--secondary,.st-button--warn{background-color:var(--fb-secondary-color);color:var(--fb-secondary-text-color);border:1px solid var(--fb-border-color);box-shadow:0 1px 1px 0 rgba(var(--fb-color-black),.2)}.st-button--warn:hover{background-color:var(--fb-secondary-color-hover)}.st-button--warn:active{background-color:var(--fb-secondary-color-active)}.st-button--warn{color:var(--fb-warn-text-color)}"}}export{e as StButton};