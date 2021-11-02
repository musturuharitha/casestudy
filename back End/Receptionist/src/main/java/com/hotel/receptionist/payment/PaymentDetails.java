package com.hotel.receptionist.payment;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

	@Document(collection = "PaymentDetails")
	public class PaymentDetails {
			@Id
			private String guestId;
			private String total;
			private String paytime;
			private String  creditcardDetails;
			
			
			public PaymentDetails() {
				super();
			}
			
			
		    public String getGuestId() {
					return guestId;
			}
		    public void setGuestId(String guestId) {
					this.guestId = guestId;
			}
			public String getTotal() {
				return total;
			}
			public void setTotal(String total) {
				this.total = total;
			}
			public String getPaytime() {
				return paytime;
			}
			public void setPaytime(String paytime) {
				this.paytime = paytime;
			}
			public String getCreditcardDetails() {
				return creditcardDetails;
			}
			public void setCreditcardDetails(String creditcardDetails) {
				this.creditcardDetails = creditcardDetails;
			}
			
			
			public PaymentDetails(String guestId, String total, String paytime, String creditcardDetails) {
				super();
				this.guestId = guestId;
				this.total = total;
				this.paytime = paytime;
				this.creditcardDetails = creditcardDetails;
			}
			
			
			
			
			
			
	}