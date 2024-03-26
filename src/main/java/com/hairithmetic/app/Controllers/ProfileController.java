package com.hairithmetic.app.Controllers;
import com.hairithmetic.app.Data.ProfileRepository;
import com.hairithmetic.app.Models.Profile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hairithmetic/profile")

public class ProfileController {

    private final ProfileRepository profileRepository;

    public ProfileController(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @GetMapping
    public List<Profile> getProfile() {
        return (List<Profile>) profileRepository.findAll();
    }


    @GetMapping("/{id}")
    public Profile getProfile(@PathVariable int id) {
        return profileRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createProfile(@RequestBody Profile profile) throws URISyntaxException {
        Profile savedProfile= profileRepository.save(profile);
        return ResponseEntity.created(new URI("/hairithmetic/profile/" + savedProfile.getId())).body(savedProfile);
    }

    //will allow us to update/edit an activity
    @PutMapping("/{id}")
    public ResponseEntity updateProfile(@PathVariable int id, @RequestBody  Profile profile) {
        Profile currentProfile = profileRepository.findById(id).orElseThrow(RuntimeException::new);
        currentProfile.setGoalLength(profile.getGoalLength());
        currentProfile.setCurrentLength(profile.getCurrentLength());
        currentProfile.setHairPorosity(profile.getHairPorosity());
        currentProfile.setHowActive(profile.getHowActive());
        currentProfile.setHowOily(profile.getHowOily());
        profileRepository.save(currentProfile);
        return ResponseEntity.ok(currentProfile);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProfile(@PathVariable int id) {
        profileRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}


