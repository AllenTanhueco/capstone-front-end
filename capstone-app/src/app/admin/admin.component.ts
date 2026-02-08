import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  isAdmin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
   
    this.isAdmin = this.router.url.includes('admin');
  }

  // Sample data for pending records
  pendingRecords = [
    { 
      name: 'Birth Certificate', 
      release: '20.05.2023',
      registrant: 'Chris Green', 
        status: 'pending' },

    { name: 'Death Certificate',
    release: '16.04.2023',
    registrant: 'Paul Benn',
       status: 'completed' },

    { name: 'Issuance of Marriage Contract',
    release: '13.04.2023',
    registrant: 'Chris Green',
        status: 'pending' },
      
    { name: 'Issuance of Certified True Copy of Birth, Marriage, Death and Other Registry Documents', 
     release: '04.02.2023',
     registrant: 'Mike Prino', 
      status: 'completed' }
  ];


  // Button click handlers
  markPending(record: any) {
    record.status = 'pending';
  }
  
  markCompleted(record: any) {
    record.status = 'completed';
  }
  
  markRecorded(record: any) {
    record.status = 'rejected'; 
  }
  
  markApproved(record: any) {
    record.status = 'approved';
  }
  

  // Get total completed records
  getTotalCompleted() {
    return this.pendingRecords.filter(record => record.status === 'completed').length;
  }

  // Get total pending records
  getTotalPending() {
    return this.pendingRecords.filter(record => record.status === 'pending').length;
  }

  // Get total approved records
  getTotalApproved() {
    return this.pendingRecords.filter(record => record.status === 'approved').length;
  }

  // Get total rejected records
  getTotalRejected() {
    return this.pendingRecords.filter(record => record.status === 'rejected').length;
  }
}

