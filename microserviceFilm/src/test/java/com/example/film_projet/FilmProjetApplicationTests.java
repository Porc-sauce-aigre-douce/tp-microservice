package com.example.film_projet;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.film_projet.model.film;

@SpringBootTest
class FilmProjetApplicationTests {

	@Test
	void contextLoads() {
		
	}

	@Test
	void testVerifyIdNotEmpty() {
		film film1 = new film();
		film1.setID("");
		film1.verifyNotNull();
 		// Should not be null if the verification passed
		assertEquals(null, film1.getId());
	}

}
