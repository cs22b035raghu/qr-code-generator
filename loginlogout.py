# user_auth.py - Handles user authentication

def login(username, password):
    """This function verifies user credentials."""
    if username == "admin" and password == "1234":
        return "Login successful"
    return "Invalid credentials"

def logout(user_id):
    """Logs out the user by removing session data."""
    return f"User {user_id} logged out."

# End of authentication module
