package com.hotel.setrates;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SetRatesMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SetRatesMicroserviceApplication.class, args);
	}

}
