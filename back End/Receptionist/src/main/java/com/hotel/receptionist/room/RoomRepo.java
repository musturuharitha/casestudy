package com.hotel.receptionist.room;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
public interface RoomRepo extends  MongoRepository<RoomDetails, String> {
	@Query("{guestName:null}")
	public List<RoomDetails>FindByGuestName();
}


