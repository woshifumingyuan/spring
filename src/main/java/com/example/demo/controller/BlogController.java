package com.example.demo.controller;

import com.example.demo.blog.BlogItem;
import com.example.demo.blog.BlogItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    public String addBlog(@RequestParam String title){
        BlogItem item = BlogItem.builder()
                                .title(title)
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
