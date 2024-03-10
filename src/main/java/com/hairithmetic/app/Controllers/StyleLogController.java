package com.hairithmetic.app.Controllers;

import com.hairithmetic.app.Data.StyleLogRepository;
import com.hairithmetic.app.Models.StyleLog;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hairithmetic/log")
public class StyleLogController {

    private final StyleLogRepository styleLogRepository;

    public StyleLogController(StyleLogRepository styleLogRepository) {
        this.styleLogRepository = styleLogRepository;
    }

    @GetMapping
    public List<StyleLog> getStyleLogs() {
        return (List<StyleLog>) styleLogRepository.findAll();
    }


    @GetMapping("/{id}")
    public StyleLog getStyleLog(@PathVariable int id) {
        return styleLogRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createStyleLog(@RequestBody StyleLog styleLog) throws URISyntaxException {
        StyleLog savedStyleLog = styleLogRepository.save(styleLog);
        return ResponseEntity.created(new URI("/hairithmetic/log/" + savedStyleLog.getId())).body(savedStyleLog);
    }

    //will allow us to update/edit an activity
    @PutMapping("/{id}")
    public ResponseEntity updateStyleLog(@PathVariable int id, @RequestBody StyleLog styleLog) {
        StyleLog currentStyleLog= styleLogRepository.findById(id).orElseThrow(RuntimeException::new);
        currentStyleLog.setDate(styleLog.getDate());
        currentStyleLog.setHairWashed(styleLog.isHairWashed());
        currentStyleLog.setProducts(styleLog.getProducts());
        currentStyleLog.setHeatStyled(styleLog.isHeatStyled());
        currentStyleLog.setDryShampooUsed(styleLog.isDryShampooUsed());
        styleLogRepository.save(currentStyleLog);
        return ResponseEntity.ok(currentStyleLog);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteStyleLog(@PathVariable int id) {
        styleLogRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}

