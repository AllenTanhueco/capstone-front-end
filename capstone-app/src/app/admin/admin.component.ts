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

  // Sample data for recent records
  recentRecords = [
    { name: 'Construction Confirmation.pdf', size: '3.2 MB', date: 'Today' },
    { name: 'Cost calculation.xlsx', size: '1.1 MB', date: 'Today' },
    { name: 'Development proposal.pdf', size: '2.7 MB', date: 'Today' },
    { name: 'Purchase of equipment.docx', size: '2.7 MB', date: 'Yesterday' }
  ];

  // Sample data for recent tasks
  recentTasks = [
    { name: '✔ Construction Confirmation.pdf', status: 'approved', note: 'Approved today – Sam Fisher' },
    { name: '✖ Purchase.xlsx', status: 'rejected', note: 'Rejected today – Sam Fisher' },
    { name: '⚠ Sale of equipment.pdf', status: 'pending', note: 'Pending – Jim Boni' },
    { name: '✔ Equipment purchase.xlsx', status: 'approved', note: 'Approved today – Tom Jinom' }
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

  // completed records
  getTotalCompleted() {
    return this.pendingRecords.filter(record => record.status === 'completed').length;
  }

  // pending records
  getTotalPending() {
    return this.pendingRecords.filter(record => record.status === 'pending').length;
  }

  //  total number of records
  getTotalRecords() {
    return this.pendingRecords.length;
  }

  // total number of tasks
  getTotalTasks() {
    return this.recentTasks.length;
  }
}
