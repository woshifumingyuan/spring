package com.example.demo.blog;

import com.example.demo.payroll.Employee;
import org.springframework.data.repository.CrudRepository;

public interface BlogItemRepository extends CrudRepository<BlogItem, Long> {
}
