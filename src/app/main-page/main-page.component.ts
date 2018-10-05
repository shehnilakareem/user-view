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
public ivar ;
public ivar0 = ["masjid1.jpg","masjid2.jpg"];
public ivar1 = ["mda1.jpg","mda2.jpg"];
public ivar2 = ["screenshots1.jpg","screenshots2.jpg"];
public ilinks = ["http://arrahman.com.pk/","https://www.flashbuz.com/products/listing"];

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
  public refreshPage(){
    location.reload();

  }
  public references(){
    this.router.navigate(["/"]).then(result=>{window.location.href = "https://www.fiverr.com/shehnilakarim";});

  }
  public social(item: number){
    switch(item){
      case 0:
      this.router.navigate(["/"]).then(result=>{window.location.href = "https://www.fiverr.com/shehnilakarim";});
      break;
      case 1:
      break;
      case 2:
      break;
      case 3:
      break;
      case 4:
      break;
    }
  }
  public visitLink(link : number){
    window.open(this.ilinks[link]);

  }
  public visitProject(index : number){
    this.isMiddleDivVisible=false;
    switch(index){
      case 0:
      this.ivar = this.ivar0;
      break;
      case 1:
      this.ivar =this.ivar1;
      break;
      case 2:
      this.ivar = this.ivar2;
      break;
    }
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
