package com.fake.real.server.ShoppingCartBackend.repository;

import com.fake.real.server.ShoppingCartBackend.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Item, String>{

}
