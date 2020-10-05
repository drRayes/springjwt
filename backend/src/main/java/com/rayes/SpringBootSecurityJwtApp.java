package com.rayes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class SpringBootSecurityJwtApp {
    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(SpringBootSecurityJwtApp.class);
        app.setDefaultProperties(Collections
                .singletonMap("server.port", "8088"));
        app.run(args);
    }
}
