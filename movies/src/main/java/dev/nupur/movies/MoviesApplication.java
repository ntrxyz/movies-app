package dev.nupur.movies; //package definition

import org.springframework.boot.SpringApplication;//SpringApplication class contains a method run() used to start springApp
import org.springframework.boot.autoconfigure.SpringBootApplication;//annotation  used to know what this class does


@SpringBootApplication
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}
}
