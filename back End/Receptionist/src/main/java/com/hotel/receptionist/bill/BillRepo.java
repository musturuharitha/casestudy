package com.hotel.receptionist.bill;

import org.springframework.data.mongodb.repository.MongoRepository;



public interface BillRepo extends  MongoRepository<BillDetails, String> {
	
}
