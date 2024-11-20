# Idbook Hotels - Login and Signup Flow with Role-Based Access Control (RBAC)

## Overview
This project aims to develop a user authentication flow inspired by the Idbook Hotels theme, incorporating role-based access control (RBAC) to manage user access across different pages. The application includes features for both login and signup, with enhanced user validation and error handling.


## Requirements and Implementation Details

### 1. Login Page
![Screenshot 2024-11-20 093020](https://github.com/user-attachments/assets/ee837b03-ec02-4ecd-a526-4d69940b2e3d)
- **Input Fields**:

  - Email
  - Password
- **Validation**:
  - Ensure the email is in a valid format.
  - Password must meet a minimum length requirement.
- **Error Handling**:
  - Display client-side validation messages (e.g., invalid email format).
  - Display API errors received from the backend.

### 2. Signup Page
![Screenshot 2024-11-20 093329](https://github.com/user-attachments/assets/3e4bb3cd-98d5-47b1-a9f2-aeb570e72a09)

- **Input Fields**:
  - Name
  - Email
  - Password
  - Confirm Password
- **Validation**:
  - All fields are required.
  - Ensure the password and confirm password fields match.
  - Password should comply with strong password criteria (e.g., minimum length, inclusion of special characters).
- **Error Handling**:
  - Client-side validation errors.
  - API error handling to manage backend responses.

### 3. Role-Based Pages
- **Role Definitions**:
  - `admin`
  - `user`
- **Admin Capabilities**:
  - Ability to switch between admin and user roles.
  - Dynamic UI and navigation changes based on role.
- **Access Restrictions**:
  - Pages restricted by user role.
  - Unauthorized users redirected to a custom error page.


## How to Run
1. Clone the repository.
2. Install dependencies with `npm install` or `yarn`.
3. Run the application using `npm run dev` or `yarn run start`.
4. Access the application at `http://localhost:3000`.


---
Thank you for reviewing the project details.
