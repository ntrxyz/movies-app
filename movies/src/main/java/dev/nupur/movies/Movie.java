package dev.nupur.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")//framework knows that the class represents each doc in movies collection
@Data //takes care of getters and setters and toString methods
@AllArgsConstructor //constructor that takes all private fields as argument
public class Movie {
    @Id //this will let framework know that this property should be treated as the unique identifier for each movie in db
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference//cause db to store only the IDs of the reviews and review will be in separate collection
    private List<Review> reviewIds;

}
