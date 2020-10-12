import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  public yearList:number[]=[];
  public filterData:any={
    launch_year:null,
    launch_success:null,
    land_success:null
  };

  public booleanOptions:any[]=[{
    label:'True',
    value:true
  },{
    label:'False',
    value:false
  }];

  public launchList:any[]=[];

  constructor(
    private appService: AppService,
    public spinner: NgxSpinnerService
  ) { 
    this.setFilterData();
  }

  ngOnInit(): void {
    this.getData();
  }

  setFilterData(){
    let currentYear=new Date().getFullYear();
    let year=2006;
    while(year<=currentYear){
      this.yearList.push(year);
      year++;
    }
  }


  selectYear(year){
    this.filterData.launch_year=year;
    this.getData();
  }

  selectLaunchSuccess(option){
    this.filterData.launch_success=option.value;
    this.getData();
  }

  selectLandingSuccess(option){
    this.filterData.land_success=option.value;
    this.getData();
  }


  getData() {
    this.spinner.show();
    let data={};
    data['limit']=100;
    data['launch_success']=this.filterData.launch_success;
    data['land_success']=this.filterData.land_success;
    data['launch_year']=this.filterData.launch_year;
    this.appService.getData(data)
      .subscribe((res) => {
        this.launchList=res;
        this.spinner.hide();
      },(error)=>{
        this.spinner.show();
      })
  }
}
