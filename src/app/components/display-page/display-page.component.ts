import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from '../../models/Branch';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {

  branches: Branch[] = [];

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branchService.getBranches().subscribe((result: Branch[]) => {this.branches = result; console.log(result);})
  }

  deleteBranch(branch: Branch) {
    this.branchService.deleteBranch(branch).subscribe((data) => {alert("Branch Deleted!"); this.ngOnInit()});
  }

}
