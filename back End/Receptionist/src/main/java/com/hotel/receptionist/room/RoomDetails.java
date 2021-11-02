package com.hotel.receptionist.room;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "RoomSearch")
public class RoomDetails {
	@Id
	private String roomId;
	private String period;
	private String checkin;
	private String checkout;
	private String guestName;
	
	public RoomDetails() {
		super();
	}
	
	public String getRoomId() {
		return roomId;
	}
	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
	public String getPeriod() {
		return period;
	}
	public void setPeriod(String period) {
		this.period = period;
	}
	public String getCheckin() {
		return checkin;
	}
	public void setCheckin(String checkin) {
		this.checkin = checkin;
	}
	public String getCheckout() {
		return checkout;
	}
	public void setCheckout(String checkout) {
		this.checkout = checkout;
	}
	public String getGuestName() {
		return guestName;
	}
	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}
	public RoomDetails(String roomId, String period, String checkin, String checkout, String guestName) {
		super();
		this.roomId = roomId;
		this.period = period;
		this.checkin = checkin;
		this.checkout = checkout;
		this.guestName = guestName;
	}
}