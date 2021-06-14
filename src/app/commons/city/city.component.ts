import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Images{
  year:string;
  image:string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})

export class CityComponent implements OnInit {

  constructor(private route:ActivatedRoute) {

   }

  year!:string;
  imageUrl!:string | undefined;
  images : Array<Images>= [
    {year:'1900', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPreyAk6dSPAsbJ8vcs2kf9CYPVtdeMtLfg&usqp=CAU'},
    {year:'1950', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmNvQCjFirPoTY01Jqu39-Rw__ztRYWeO5g&usqp=CAU'},
    {year:'2020', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTiFXNBmEZDnllQG9bT3mgWLgD4TPDOW_LA&usqp=CAU'},
  ];



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.year=params.year;
      this.imageUrl= this.images.find(e => e.year == this.year)?.image;

    });


  }

}
