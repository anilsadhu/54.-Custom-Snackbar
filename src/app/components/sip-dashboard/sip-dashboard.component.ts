import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  location:string;
  country:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',location:'hyd',country:'India'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',location:'bng',country:'India'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',location:'chen',country:'India'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',location:'pune',country:'India'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',location:'mi',country:'India'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',location:'krn',country:'India'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',location:'vija',country:'India'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',location:'ker',country:'India'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',location:'guj',country:'India'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',location:'ma',country:'India'},
];

@Component({
  selector: 'app-sip-dashboard',
  templateUrl: './sip-dashboard.component.html',
  styleUrls: ['./sip-dashboard.component.css']
})
export class SipDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location','country'];
  dataSource = ELEMENT_DATA;
  debugger;
}
