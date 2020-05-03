package com.example.demo.controller;

import com.example.demo.blog.BlogItem;
import com.example.demo.blog.BlogItemRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/blog")
public class BlogController {
    @Autowired
    private BlogItemRepository blogItemRepository;

    @PostMapping(path = "/add")
    @ResponseBody
    public String addBlog(@RequestBody String payload) throws JsonProcessingException {
        System.out.println(payload);
        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, String> jsonMap = objectMapper.readValue(payload,
            new TypeReference<Map<String,String>>(){});
        String title = jsonMap.get("title");
        String description = jsonMap.get("description");
        BlogItem item = BlogItem.builder()
            .title(title)
            .description(description)
            .build();
        blogItemRepository.save(item);
        return "Saved";
    }

    @PostMapping(path = "/update")
    @ResponseBody
    public String updateBlog(@RequestParam Long id,
        @RequestParam String title,
        @RequestParam String content,
        @RequestParam String description){
        BlogItem item = BlogItem.builder()
                                .id(id)
                                .title(title)
                                .content(content)
                                .description(description)
                                .build();
        blogItemRepository.save(item);
        return "Updated";
    }

    @GetMapping(path = "/findAll")
    @ResponseBody
    public Iterable<BlogItem> getAllItem(){
        return blogItemRepository.findAll();
    }

}
