package com.rayes.controller;

import com.rayes.model.ERole;
import com.rayes.model.Role;
import com.rayes.model.User;
import com.rayes.model.UserRoles;
import com.rayes.repository.RoleRepository;
import com.rayes.repository.UserRepository;
import com.rayes.repository.UserRolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/user")
public class UserController {
    public static final Logger LOGGER = Logger.getLogger(UserController.class.getName());

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRolesRepository userRolesRepository;

    @Autowired
    RoleRepository roleRepository;

    @GetMapping("/loadUsers")
    public List<User> loadUsers() {
        LOGGER.info("Load all users.");
        List<User> userList = new LinkedList<>();
        userList = userRepository.findAll();
        for(User user : userList) {
            user.setPassword("");
        }
        return  userList;
    }

    @PostMapping("/addRole")
    public User addRole(@RequestBody User user) {
        LOGGER.info("Adding role to " + user.getUsername());
        UserRoles userRoles = new UserRoles();
        Role role = roleRepository.findByName(ERole.ROLE_ENGINEER)
            .orElseThrow(() -> new RuntimeException("Role is not found."));
        userRoles.setUser(user);
        userRoles.setRole(role);
        userRolesRepository.save(userRoles);
        User newUser = userRepository.findByUsername(user.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        newUser.setPassword("");
        return newUser;
    }
}
