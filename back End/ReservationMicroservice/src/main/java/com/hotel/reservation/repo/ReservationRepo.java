package com.hotel.reservation.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hotel.reservation.details.ReservationDetails;

public interface ReservationRepo extends  MongoRepository<ReservationDetails, String> {
List<ReservationDetails>findAllByGuestId(String guestId);
}
