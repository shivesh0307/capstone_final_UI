import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Branch } from '../models/Branch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  public getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${environment.apiUrl}/Branch/GetAllBranches`);
  }
  public createBranch(branch: Branch): Observable<Branch> {
    return this.http.post<Branch>(`${environment.apiUrl}/Branch/Add`, branch);
  }
  public deleteBranch(branch: Branch): Observable<String> {
    return this.http.delete<String>(`${environment.apiUrl}/Branch/Delete/${branch.branchId}`);
  }
}
