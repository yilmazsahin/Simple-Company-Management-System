package com.smartera.firsttask.repository;

import com.smartera.firsttask.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author yilmazsahin
 * @since 2/13/2024
 */

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
