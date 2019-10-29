import { Component, OnInit } from '@angular/core';
import { Uom } from '../uom';
import { UomService } from '../uom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-uom',
  templateUrl: './create-uom.component.html',
  styleUrls: ['./create-uom.component.scss']
})
export class CreateUomComponent implements OnInit {

  uom: Uom = new Uom();

  constructor(private uomService: UomService,
    private router: Router) { }

  ngOnInit() {
  }

  addUom(){
    this.uomService.addUom(this.uom);
    this.router.navigate(['uom-list']);
  }

}
