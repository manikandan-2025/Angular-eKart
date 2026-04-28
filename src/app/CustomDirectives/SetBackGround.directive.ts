import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    standalone:true,
    selector:'[setBackground]'
})
export class SetBackground implements OnInit{
    // private element:ElementRef; //no need since privately initialized inside the constructor.
    // private renderer:Renderer2;



    // @Input('setBackground') backColor:string = '#36454F';
    // @Input() textColor:string = 'white';

    @Input('setBackground') setPropertiesBackgroundAndTextColrs :{
        backColor:string,
        textColor:string

    }
    constructor(private element:ElementRef,private renderer: Renderer2) {
    //   this.element = element; no need 
    // this.renderer = renderer;
    }

    ngOnInit(): void {
        // not a good practise below
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';

        //using renderer2 class;
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.setPropertiesBackgroundAndTextColrs.backColor);
        this.renderer.setStyle(this.element.nativeElement,'color',this.setPropertiesBackgroundAndTextColrs.textColor)
    }
}