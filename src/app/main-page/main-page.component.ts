import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('someVar') elementRef:ElementRef;
  // @ViewChild('close') elementRef2:ElementRef;
  isMiddleDivVisible: boolean = false;
  text: string;
// public ivar = [{"hd":"Heading 1","screen":"screenshots1.jpg"},{"hd":"Heading 2","screen":"screenshots2.jpg"}];
public ivar = ["screenshots1.jpg","screenshots2.jpg"];
public myvar : boolean = false;
  public onClick(){
    console.log("clicked");
    this.router.navigate(['contacts']);

  }
  constructor(private router:Router,private rd: Renderer2){
    this.text = "This works\nwith multiple\n\nlines"

  }
  ngAfterContentInit() {
    console.log(this.elementRef.nativeElement.textContent);

  }
  public visitProject(){
    this.isMiddleDivVisible=false;
    console.log("clicked:"+this.ivar);
    console.log(this.rd.setStyle(
      this.elementRef.nativeElement,
      'width',
      '100%'
    ));

  }
  public closeProject(){
    this.myvar=true;
    this.isMiddleDivVisible=false;
    console.log("clicked");
    console.log(this.rd.setStyle(
      this.elementRef.nativeElement,
      'width',
      '0%'
    ));
    
  }
  public pressed(){
    console.log("clicked");
  }
  ngOnInit() {
  }

}
