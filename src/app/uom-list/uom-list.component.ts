import { Component, OnInit } from '@angular/core';
import { UomDetailsComponent } from '../uom-details/uom-details.component';
import { Observable } from "rxjs";
import { UomService } from '../uom.service';
import { Router } from '@angular/router';
import { Uom } from '../uom';

@Component({
  selector: 'app-uom-list',
  templateUrl: './uom-list.component.html',
  styleUrls: ['./uom-list.component.scss']
})
export class UomListComponent implements OnInit {

  uoms: Observable<Uom[]>

  constructor(private uomService: UomService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.uoms = this.uomService.getUomList();
  }

  deleteUom(id: string) {
    this.uomService.deleteUom(id).subscribe();
    this.reloadData();
  }
}
