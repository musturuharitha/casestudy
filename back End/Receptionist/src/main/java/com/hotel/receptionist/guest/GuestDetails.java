package com.hotel.receptionist.guest;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "receptionist")



public class GuestDetails {
	
	
	@Id
 	private String guestId;
	private String guestName;
    private String email;
    private String mobileNo;
	private String dateOfBirth;
    private String gender;
    private String company;
    private String address;
	public String getGuestId() {
		return guestId;
	}
	public void setGuestId(String guestId) {
		this.guestId = guestId;
	}
	public String getGuestName() {
		return guestName;
	}
	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public GuestDetails() {
		super();
	}
	public GuestDetails(String guestId, String guestName, String email, String mobileNo, String dateOfBirth,
			String gender, String company, String address) {
		super();
		this.guestId = guestId;
		this.guestName = guestName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.company = company;
		this.address = address;
	}
}