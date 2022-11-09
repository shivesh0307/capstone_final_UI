import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from '../../models/Branch';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.css']
})
export class CreationPageComponent implements OnInit {

  @Input() branch: Branch = new Branch();

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
  }

  createBranch(branch: Branch) {
    this.branchService.createBranch(branch).subscribe((data) => {alert("New Branch Created!"); this.ngOnInit()});
  }

}
