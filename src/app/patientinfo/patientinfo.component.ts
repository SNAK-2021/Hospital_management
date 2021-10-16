import { Component } from '@angular/core';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent  {
  public regdate:string='Registration Date';
  public pID:string='ID';
  public pName:string='Name';
  public pBirth:string='Birthdate';
  public pGender:string='Gender';
  public pEmail:string='Email ID';
  public pMobile:string='Mobile number';
  public pAadhar:string='Aadhar number';
  public pCountry:string='Country';
  public pState:string='State';
  public pCity:string='City';
  public pAddress:string='Address';
  public pbloodgroup:string='BloodGroup';
  public pchronicdisease:string='ChronicDisease';
  public pmedicineallergy:string='MedicineAllergy';
  public pdoctorassigned:string='DoctorAssigned';
  
  public Data: any=
  [
    {
      regdate:"Registeration date",
      pID:"ID",
      pName:"Name",
      pBirth:"Birthdate",
      pGender:"Gender",
      pEmail:"Email ID",
      pMobile:"Mobile number",
      pAadhar:"Aadhar number",
      pCountry:"Country",
      pState:"State",
      pCity:"City",
      pAddress:"Address",
      pbloodgroup:"BloodGroup",
      pchronicdisease:"ChronicDisease",
      pmedicineallergy:"MedicineAllergy",
      pdoctorassigned:"DoctorAssigned"
    }
  ]
  
    }
