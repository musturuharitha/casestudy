package com.hotel.receptionist.reservation;

import org.springframework.data.mongodb.repository.MongoRepository;
public interface ReservationRepo extends  MongoRepository<ReservationDetails, String> {
	
}
