package dto;

import lombok.Data;

@Data // Lombok for getters, setters
public class UserRegistrationRequest {
    private String username;
    private String email;
    private String password;
}