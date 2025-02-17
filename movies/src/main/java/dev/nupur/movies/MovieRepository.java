package dev.nupur.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository//framework knows it is a repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
}
