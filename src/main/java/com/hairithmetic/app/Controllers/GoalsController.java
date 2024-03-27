package com.hairithmetic.app.Controllers;

import com.hairithmetic.app.Data.GoalsRepository;
import com.hairithmetic.app.Models.Goals;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
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
    public ResponseEntity createGoal(@RequestBody Goals goals) throws URISyntaxException {
        Goals savedGoal = goalsRepository.save(goals);
        return ResponseEntity.created(new URI("/hairithmetic/goals/" + savedGoal.getId())).body(savedGoal);
    }

    //will allow us to update/edit an activity
    @PutMapping("/{id}")
    public ResponseEntity updateGoal(@PathVariable int id, @RequestBody Goals goal) {
        Goals currentGoals= goalsRepository.findById(id).orElseThrow(RuntimeException::new);
        currentGoals.setGoalLength(goal.getGoalLength());
        currentGoals.setAvoidSilicones(goal.isAvoidSilicones());
        currentGoals.setAvoidHeatStyling(goal.isAvoidHeatStyling());
        currentGoals.setUseMoreNaturalProducts(goal.isUseMoreNaturalProducts());
        currentGoals.setFrequencyOfHairWashing(goal.getFrequencyOfHairWashing());
        currentGoals.setImproveFrizz(goal.isImproveFrizz());
        goalsRepository.save(currentGoals);
        return ResponseEntity.ok(currentGoals);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteGoal(@PathVariable int id) {
        goalsRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
