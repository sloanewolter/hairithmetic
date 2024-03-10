package com.hairithmetic.app.Data;

import com.hairithmetic.app.Models.StyleLog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StyleLogRepository extends CrudRepository<StyleLog, Integer> {
}
