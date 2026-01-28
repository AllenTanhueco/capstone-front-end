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
    { name: 'Construction contract', class: 'Proposal', dueDate: '20.05.2023', owner: 'Chris Green', status: 'pending' },
    { name: 'Application for leave', class: 'Application', dueDate: '16.04.2023', owner: 'Paul Benn', status: 'completed' },
    { name: 'Suggestion for improvement', class: 'Proposal', dueDate: '13.04.2023', owner: 'Chris Green', status: 'pending' },
    { name: 'Offer for sale', class: 'Proposal', dueDate: '04.02.2023', owner: 'Mike Prino', status: 'completed' }
  ];


  // Button click handlers
  markPending(record: any) {
    alert(`Marked as pending: ${record.name}`);
  }

  markRecorded(record: any) {
    alert(`Recorded: ${record.name}`);
  }

  markCompleted(record: any) {
    alert(`Marked as completed: ${record.name}`);
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
