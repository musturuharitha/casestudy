package com.hotel.reservation.details;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "reservation")

public class ReservationDetails {
	@Id
	private String roomId;
 	private String guestId;
	private String noofchildrens;
    private String noofadults;
    private String checkindate;
    private String checkoutdate;
    private String status;
    private String noofnights;
    
    
    public ReservationDetails() {
		super();
	}
    
    
    
	public String getGuestId() {
		return guestId;
	}


	public String getRoomId() {
		return roomId;
	}



	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}



	public void setGuestId(String guestId) {
		this.guestId = guestId;
	}


	public String getNoofchildrens() {
		return noofchildrens;
	}


	public void setNoofchildrens(String noofchildrens) {
		this.noofchildrens = noofchildrens;
	}


	public String getNoofadults() {
		return noofadults;
	}


	public void setNoofadults(String noofadults) {
		this.noofadults = noofadults;
	}


	public String getCheckindate() {
		return checkindate;
	}


	public void setCheckindate(String checkindate) {
		this.checkindate = checkindate;
	}


	public String getCheckoutdate() {
		return checkoutdate;
	}


	public void setCheckoutdate(String checkoutdate) {
		this.checkoutdate = checkoutdate;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getNoofnights() {
		return noofnights;
	}


	public void setNoofnights(String noofnights) {
		this.noofnights = noofnights;
	}



	public ReservationDetails(String roomId, String guestId, String noofchildrens, String noofadults,
			String checkindate, String checkoutdate, String status, String noofnights) {
		super();
		this.roomId = roomId;
		this.guestId = guestId;
		this.noofchildrens = noofchildrens;
		this.noofadults = noofadults;
		this.checkindate = checkindate;
		this.checkoutdate = checkoutdate;
		this.status = status;
		this.noofnights = noofnights;
	}



	
    
	
    
}
