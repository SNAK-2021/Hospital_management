import { Component } from '@angular/core';

@Component({
  selector: 'app-opdqueue',
  templateUrl: './opdqueue.component.html',
  styleUrls: ['./opdqueue.component.css']
})
export class OPDQueueComponent  {
  public ID:string='ID';
  public PatientName:string='PatientName';
  public DoctorId:string='DoctorId';
  public DoctorName:string='DoctorName';
  public PatientDetails:string='PatientDetails';
  public Action:string='Action';
  
  public Data: any=
  [
    {
      ID:"ID",
      PatientName:"PatientName",
      DoctorId:"DoctorId",
      DoctorName:"DoctorName",
      PatientDetails:" PatientDetails",
      Action:"Action",
    }
  ]
  public Data1: any=
  [
    {
      ID1:"ID",
      patientName1:"PatientName",
      DoctorId1:"DoctorId",
      DoctorName1:" DoctorName:",
      PatientDetails1:" PatientDetails",
      Action1:"Action"
    }
  ]
  
  }