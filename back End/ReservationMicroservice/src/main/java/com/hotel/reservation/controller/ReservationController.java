package com.hotel.reservation.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.reservation.details.ReservationDetails;
import com.hotel.reservation.repo.ReservationRepo;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/reservation")
public class ReservationController{
	
	
		    @Autowired
		    private ReservationRepo reservationRepository;
		    
		    
		    

		    @GetMapping(value = "/list")
		    public List<ReservationDetails> getAllReservation()
		    {
		        return  reservationRepository.findAll();
		    }
		    
		    
		    
		    @PostMapping(value = "/add")
		    public ReservationDetails addNewReservationDetails(@RequestBody ReservationDetails up)
		    {
		        return  reservationRepository.save(up);
		    }
		    
		  
		    
		    @DeleteMapping(value = "/delete/{guestId}")
		    public String  deletereservation(@PathVariable String guestId) 
		    {
		        System.out.println("Delete method called");
		        reservationRepository.deleteById(guestId);
		        return "reservationdeleted";
		    }
		    
		    
		    

		    @PutMapping("update")
		    public ResponseEntity<?> updpass(@RequestBody ReservationDetails res)
			{
				
		    	Optional<ReservationDetails> opt=reservationRepository.findById(res.getRoomId());
		    	System.out.println(opt);
		    	if(opt.isPresent())
		    	{
		    		ReservationDetails reservation = opt.get();
		    				reservation.setCheckindate(res.getCheckindate());
		    				reservation.setCheckoutdate(res.getCheckoutdate());
		    				reservation.setNoofadults(res.getNoofadults());
		    				reservation.setNoofchildrens(res.getNoofchildrens());
		    				reservation.setNoofnights(res.getNoofnights());
		    				reservation.setStatus(res.getStatus());
		    				reservation.setGuestId(res.getGuestId());
//		    				reservation.setRoomId(res.setRoomId());
		    				reservationRepository.save(reservation);
		    				return new ResponseEntity<ReservationDetails>(reservation,HttpStatus.OK);
		    	}
		    	else
		    	{
		    		return new ResponseEntity<String>("notmodified",HttpStatus.CONFLICT);
		    	}
			}
}
	