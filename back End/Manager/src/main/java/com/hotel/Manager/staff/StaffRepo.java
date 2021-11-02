package com.hotel.Manager.staff;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface StaffRepo extends  MongoRepository<StaffDetails, String> {
	
}


