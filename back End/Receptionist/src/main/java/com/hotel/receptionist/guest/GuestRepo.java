package com.hotel.receptionist.guest;

import org.springframework.data.mongodb.repository.MongoRepository;



public interface GuestRepo extends  MongoRepository<GuestDetails, String> {

}