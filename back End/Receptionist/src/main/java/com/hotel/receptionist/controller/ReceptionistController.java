package com.hotel.receptionist.controller;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.hotel.receptionist.bill.BillDetails;
import com.hotel.receptionist.bill.BillRepo;
import com.hotel.receptionist.guest.GuestDetails;
import com.hotel.receptionist.guest.GuestRepo;
import com.hotel.receptionist.payment.PaymentDetails;
import com.hotel.receptionist.payment.PaymentRepo;
import com.hotel.receptionist.reservation.ReservationDetails;
import com.hotel.receptionist.reservation.ReservationRepo;
import com.hotel.receptionist.room.RoomDetails;
import com.hotel.receptionist.room.RoomRepo;





@RestController
@RequestMapping("/check")
public class ReceptionistController {
	
	
	
	@Autowired
	 RestTemplate restTemplate;
	
	//------------------------------------------receptionist search rooms ---------------------------------------------------------
	
	
   @Autowired
	    private RoomRepo roomRepository;

	 
	 
    @GetMapping(value = "/totalrooms")  
    public List<RoomDetails> getAllRoomDetails()
    {
    	return Arrays.asList(restTemplate.getForObject("http://roommicroservice/roomdetails/listofrooms",RoomDetails[].class));
    }
    
    
    
     @GetMapping(value="/freerooms")
         public List<RoomDetails> getAllFreeRooms()    {
    	 return Arrays.asList(restTemplate.getForObject("http://roommicroservice/roomdetails/listoffreerooms",RoomDetails[].class));
     }   
     
     
     
     
     @DeleteMapping(value = "/deleteroom/{roomId}")
     public String  deleteRoom(@PathVariable String roomId) {
     restTemplate.delete("http://roommicroservice/roomdetails/delete/"+roomId,String.class);
      return("deleted"); 
      }

    
     @PutMapping(value="/updateroom/{roomId}")
     public Boolean updateRoom(@RequestBody RoomDetails Updated,@PathVariable("roomId") String roomId) 
     {
     	 restTemplate.put("http://roommicroservice/roomdetails/update/"+roomId,Updated);
       	  return(true);
   }    
   
     
    
     


  //----------------------------------------receptionist does all crud operation in guest----------------------------------------

    @Autowired
    private GuestRepo guestRepository;

 
 
    @GetMapping(value = "/findallguests")
    public List<GuestDetails> getAllguests()
    {
    	return Arrays.asList(restTemplate.getForObject("http://guestmicroservice/guest/list",GuestDetails[].class));
    }
   
    @PostMapping(value = "/addguest")
    public GuestDetails addNewGuest(@RequestBody GuestDetails up) 
    {
   	return  restTemplate.postForObject("http://guestmicroservice/guest/add",up,GuestDetails.class);
    }
   
    
    @DeleteMapping(value = "/deleteguest/{guestId}")
    public String  deleteGuest(@PathVariable String guestId) {
    restTemplate.delete("http://guestmicroservice/guest/delete/"+guestId,String.class);
     return("deleted"); 
     }

   
    @PutMapping(value="/updateguest/{guestId}")
    public Boolean updateGuest(@RequestBody GuestDetails Updated,@PathVariable("guestId") String guestId) 
    {
    	 restTemplate.put("http://guestmicroservice/guest/update/"+guestId,Updated);
      	  return(true);
  }    
  
//------------------------------------receptionist does all crude operation in reservation------------------------------------------------
    
    
    
    @Autowired
    private ReservationRepo reservationRepository;
    
    @GetMapping(value = "/findallreservation")
    public List<ReservationDetails> getAllReservation()
    {
    	return Arrays.asList(restTemplate.getForObject("http://reservationmicroservice/reservation/list",ReservationDetails[].class));
    }
    
    
    @PostMapping(value = "/addreservation")
    public ReservationDetails addNewReservationDetails(@RequestBody ReservationDetails up) {
    	return  restTemplate.postForObject("http://reservationmicroservice/reservation/add",up,ReservationDetails.class);
    }
    
    @DeleteMapping(value = "/deletereservation/{guestId}")
    public String deletereservation(@PathVariable("guestId") String guestId ) {
    	  restTemplate.delete("http://reservationmicroservice/reservation/delete/"+guestId,String.class);
    	  return("deleted");
    }
    
    @PutMapping(value="/updatereservation/{guestId}")
    public Boolean updateguest(@RequestBody ReservationDetails UpdatedReservation,@PathVariable("guestId") String guestId) {
    	  restTemplate.put("http://reservationmicroservice/reservation/update/"+guestId,UpdatedReservation);
    	  return (true);
    }


//---------------------------------------------------receptionist does all crude operation in payment-----------------------------------------
    @Autowired
    private PaymentRepo PaymentRepository;

    
    
    @GetMapping(value = "/listofpayments")
    public List<PaymentDetails>getAllPayments(){
    	return Arrays.asList(restTemplate.getForObject("http://paymentmicroservice/payment/list",PaymentDetails[].class));
    	
    }
    
    @PostMapping(value = "/addPayment")
    public PaymentDetails addNewPayment(@RequestBody PaymentDetails up){
    	return  restTemplate.postForObject("http://paymentmicroservice/payment/add",up,PaymentDetails.class);
    }
    
    
    
    @DeleteMapping(value = "/deletePayment/{guestId}")
    public String  deletePayment(@PathVariable String guestId) {
    	 restTemplate.delete("http://paymentmicroservice/payment/delete/"+guestId,String.class);
   	  return("deleted");
    }
    
    
    @PutMapping(value="/updatePayment/{guestId}")
    public Boolean updatepayment(@RequestBody PaymentDetails UpdatedPayment,@PathVariable("guestId") String guestId) {
    	  restTemplate.put("http://paymentmicroservice/payment/delete/update/"+guestId,UpdatedPayment);
    	  return (true);
    
    
    }
    

    
    
    
//-------------------------------------------------------  receptionist does all crude operation in issuing bill-------------------------
    
    

    @Autowired
    private BillRepo BillRepository;

    
    @GetMapping(value = "/list")
    public List<BillDetails> getAllBills(){
    	return Arrays.asList(restTemplate.getForObject("http://billmicroservice/billing/list",BillDetails[].class));
    }
    
    
    
    @PostMapping(value = "/add")
    public BillDetails addNewBillDetails(@RequestBody BillDetails up) {
    	return  restTemplate.postForObject("http://billmicroservice/billing/add",up,BillDetails.class);
    }
    
    
    @DeleteMapping(value = "/delete/{billingno}")
    public String  deleteBill(@PathVariable String billingno) 
    {
      restTemplate.delete("http://billmicroservice/billing/delete/"+billingno,String.class);
 	  return("deleted");
  }
    
    
    @PutMapping(value="/update/{billingno}")
    public  Boolean updateBill(@RequestBody BillDetails UpdatedBill,@PathVariable("guestId") String billingno) 
    {
    	  restTemplate.put("http://paymentmicroservice/payment/delete/update/"+billingno,UpdatedBill);
    	  return (true);
    
    }
    
    
    
    
    
    
    
    
    
    
    
}
	