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

