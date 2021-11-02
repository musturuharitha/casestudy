package com.hotel.receptionist.payment;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface PaymentRepo extends  MongoRepository<PaymentDetails, String> {
	
}