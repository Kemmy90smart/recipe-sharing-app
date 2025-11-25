import sqlite3
import functools

# Decorator to log SQL queries
def log_queries(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Extract the 'query' keyword argument or first positional argument
        query = kwargs.get('query') if 'query' in kwargs else args[0]
        print(f"Executing SQL query: {query}")
        return func(*args, **kwargs)
    return wrapper

# Function to fetch all users
@log_queries
def fetch_all_users(query):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute(query)
    results = cursor.fetchall()
    conn.close()
    return results

# Example usage: fetch users while logging the query
users = fetch_all_users(query="SELECT * FROM users")
print(users)
