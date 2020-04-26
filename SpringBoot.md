# Spring Boot Maven Plugin

<https://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/maven-plugin/index.html>

* spring-boot:run runs your Spring Boot application.
* spring-boot:repackage repackages your jar/war to be executable.
* spring-boot:start and spring-boot:stop to manage the * lifecycle of your Spring Boot application (i.e. for integration tests).
* spring-boot:build-info generates build information that can be used by the Actuator.

data-rest -> Spring Data REST是基于Spring Data的repository之上，可以把 repository 自动输出为REST资源

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-rest</artifactId>
</dependency>
```

data-jpa

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

## April 26, 2020

Add mysql

1. add url password

    ```conf
    spring.datasource.url=jdbc:mysql://localhost:3306/db_example
    spring.datasource.username=springuser
    spring.datasource.password=ThePassword
    ```

2. add ddl-auto update

    ```conf
    spring.jpa.hibernate.ddl-auto=create-drop/create/update/none
    ```

3. MySQL8Dialect refer to mysql 8

    ```conf
        spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect
    ```

4. empty constructor for entity

    ```java
    public Employee(){
        super();
    }
    ```

    >Hibernate tries to create a bean, it does it via reflection. It does the object creation by calling the no-arg constructor, and then using the setter methods to set the properties. You can't use a bean that doesn't have a no-arg constructor.

5. GenerationType.IDENTITY for id

```java
    @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String firstName;
```
