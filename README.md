# Idbook Hotels - Login and Signup Flow with Role-Based Access Control (RBAC)

## Overview
This project aims to develop a user authentication flow inspired by the Idbook Hotels theme, incorporating role-based access control (RBAC) to manage user access across different pages. The application includes features for both login and signup, with enhanced user validation and error handling.

## Key Features
1. **User Authentication System**:
   - Functional login and signup pages.
   - Input validation for both client-side and server-side.
   - Error handling to display appropriate messages for validation failures and API errors.

2. **Role-Based Access Control (RBAC)**:
   - Definition of user roles (e.g., `admin`, `user`).
   - UI adjustments based on role, with admin capabilities to switch between roles.
   - Restricted access to specific pages based on user role.
   - Redirection of unauthorized users to an error page.

## Project Structure
The application will be structured with a clear separation of concerns:
- **Authentication Module**: Handles login and signup logic.
- **RBAC Module**: Manages user roles and access control.
- **Error Handling**: Displays relevant error messages for both client-side and server-side issues.

## Requirements and Implementation Details

### 1. Login Page
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

## Deliverables
1. **Functional Login and Signup Flow**:
   - Fully working login and signup pages with validation and error handling.

2. **Client-Side RBAC Implementation**:
   - Role-based access control to manage user navigation and access.

3. **Error Pages**:
   - Custom error page for unauthorized access.

## How to Run
1. Clone the repository.
2. Install dependencies with `npm install` or `yarn`.
3. Run the application using `npm run dev` or `yarn run start`.
4. Access the application at `http://localhost:3000`.

## Future Enhancements
- Integration with a backend for persistent role and session management.
- Implementation of password recovery functionality.
- Enhancing security measures such as two-factor authentication (2FA).

## License
This project is licensed under the MIT License.

---
Thank you for reviewing the project details. For any issues or questions, please refer to the project documentation or contact the development team.
