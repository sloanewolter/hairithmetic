package com.hairithmetic.app.Data;

import com.hairithmetic.app.Models.Goals;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalsRepository extends CrudRepository<Goals, Integer> {
}
