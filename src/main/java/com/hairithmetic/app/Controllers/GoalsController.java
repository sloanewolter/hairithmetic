package com.hairithmetic.app.Controllers;
import com.hairithmetic.app.Data.GoalsRepository;
import com.hairithmetic.app.Models.Goals;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/hairithmetic/goals")
public class GoalsController {

    private final GoalsRepository goalsRepository;

    public GoalsController(GoalsRepository goalsRepository) {
        this.goalsRepository = goalsRepository;
    }

    @GetMapping
    public List<Goals> getGoals() {
        return (List<Goals>) goalsRepository.findAll();
    }


    @GetMapping("/{id}")
    public Goals getGoal(@PathVariable int id) {
        return goalsRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createProduct(@RequestBody Goals goals) throws URISyntaxException {
        Goals savedGoal = goalsRepository.save(goals);
        return ResponseEntity.created(new URI("/hairithmetic/goals/" + savedGoal.getId())).body(savedGoal);
    }

    //will allow us to update/edit an activity
    @PutMapping("/{id}")
    public ResponseEntity updateStyleLog(@PathVariable int id, @RequestBody Goals goal) {
        Goals currentGoal = goalsRepository.findById(id).orElseThrow(RuntimeException::new);
        currentGoal.setGoalLength(goal.getGoalLength());
        currentGoal.setCurrentLength(goal.getCurrentLength());
        currentGoal.setHairPorosity(goal.getHairPorosity());
        currentGoal.setHowActive(goal.getHowActive());
        currentGoal.setHowOily(goal.getHowOily());
        currentGoal.setHowOftenWash(goal.getHowOftenWash());
        goalsRepository.save(currentGoal);
        return ResponseEntity.ok(currentGoal);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduct(@PathVariable int id) {
        goalsRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}


