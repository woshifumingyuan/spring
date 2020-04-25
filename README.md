# spring

## springboot project

run project

```sh
./mvnw spring-boot:run
```

## spring maven plugin

<https://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/maven-plugin/index.html>

if we have two main class

```log
[ERROR] Failed to execute goal org.springframework.boot:spring-boot-maven-plugin:2.2.6.RELEASE:run (default-cli) on project demo: Execution default-cli of goal org.springframework.boot:spring-boot-maven-plugin:2.2.6.RELEASE:run failed: Unable to find a single main class from the following candidates [com.example.demo.Application1, com.example.demo.Application] -> [Help 1]
```
