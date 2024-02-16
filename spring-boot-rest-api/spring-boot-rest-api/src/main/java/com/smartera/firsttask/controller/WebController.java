package com.smartera.firsttask.controller;

import com.smartera.firsttask.entity.Customer;
import com.smartera.firsttask.service.CustomerService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * @author yilmazsahin
 * @since 2/16/2024
 */
@Controller
public class WebController {
    @GetMapping("/")
    public String login() {
        return "login.html";
    }
}
