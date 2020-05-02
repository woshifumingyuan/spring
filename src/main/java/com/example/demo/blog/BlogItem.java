package com.example.demo.blog;

import com.example.demo.payroll.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BlogItem {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String content;

    private String description;

    @CreationTimestamp
    private Date createdOn;

    @UpdateTimestamp
    private Date updateOn;
}
