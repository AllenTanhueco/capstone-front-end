import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mainadmin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatTableModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.css']
})
export class MainadminComponent {
  // Define columns to display for users, documents, and admin users
  userDisplayedColumns: string[] = ['name', 'action'];
  documentDisplayedColumns: string[] = ['documentName', 'status', 'action'];
  adminDisplayedColumns: string[] = ['name', 'role', 'action'];

  // Sample data for user requests
  userRequests = [
    { name: 'Sam Fisher' },
    { name: 'Jim Boni' },
    { name: 'Tom Jinom' },
    { name: 'Mia Park' },
  ];

  // Sample data for completed documents
  documents = [
    { name: 'Construction Confirmation.pdf', status: 'Approved' },
    { name: 'Cost Calculation.pdf', status: 'Rejected' },
    { name: 'Purchase Order.docx', status: 'Approved' },
    { name: 'Equipment Purchase.pdf', status: 'Pending' }
  ];

  // Sample data for admin users
  adminUsers = [
    { name: 'Admin 1', role: 'Super Admin' },
    { name: 'Admin 2', role: 'Editor' },
    { name: 'Admin 3', role: 'Viewer' }
  ];

  // Document Approve Reject Pending
  approveDocument(doc: any): void {
    doc.status = 'Approved';
    console.log(`${doc.name} approved`);
  }

  rejectDocument(doc: any): void {
    doc.status = 'Rejected';
    console.log(`${doc.name} rejected`);
  }

  pendingDocument(doc: any): void {
    doc.status = 'Pending';
    console.log(`${doc.name} set to pending`);
  }

  // Admin User Actions
  editAdmin(admin: any): void {
    console.log(`${admin.name} edited`);
  }

  deleteAdmin(admin: any): void {
    console.log(`${admin.name} deleted`);
  }

  // isAdmin flag controls sidebar admin access
  isAdmin: boolean = true; // Set this to true/false as needed

  // Accept user request
  acceptUser(user: any): void {
    console.log(`${user.name} has been accepted.`);
  }

  // Reject user request
  rejectUser(user: any): void {
    console.log(`${user.name} has been rejected.`);
  }
}
