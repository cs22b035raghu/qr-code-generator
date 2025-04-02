# session_manager.py - Manages user sessions
# creates sessions
def create_session(user_id):
    """Creates a session for a logged-in user."""
    return f"Session created for user {user_id}"

def delete_session(user_id):
    """Removes the session for a user."""
    return f"Session deleted for user {user_id}"
