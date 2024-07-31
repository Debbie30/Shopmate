import os

class Config:
    # Secret key for session management and security
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your_secret_key')
    
    # JWT secret key for encoding and decoding JWT tokens
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'your_jwt_secret_key')
    
    # Database configuration
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///your_database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable modification tracking to save resources
    
    # CORS settings
    CORS_HEADERS = 'Content-Type'  # Set default headers for CORS
    
    # Optional: You can add other settings as needed for your application
    
    # Logging configuration
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'DEBUG')  # Set default log level
    LOG_FILE = os.environ.get('LOG_FILE', 'app.log')  # Log file path
    
    # Email configuration (if needed)
    MAIL_SERVER = os.environ.get('MAIL_SERVER', 'smtp.example.com')
    MAIL_PORT = int(os.environ.get('MAIL_PORT', 587))
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME', 'your-email@example.com')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD', 'your-email-password')
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS', 'true').lower() in ['true', '1']
    MAIL_USE_SSL = os.environ.get('MAIL_USE_SSL', 'false').lower() in ['true', '1']
    
    # Security settings
    SESSION_COOKIE_SECURE = os.environ.get('SESSION_COOKIE_SECURE', 'true').lower() in ['true', '1']
    REMEMBER_COOKIE_SECURE = os.environ.get('REMEMBER_COOKIE_SECURE', 'true').lower() in ['true', '1']
    
    # Cache settings (if using Flask-Caching or similar extensions)
    CACHE_TYPE = os.environ.get('CACHE_TYPE', 'simple')  # Options: 'simple', 'redis', etc.
    CACHE_DEFAULT_TIMEOUT = int(os.environ.get('CACHE_DEFAULT_TIMEOUT', 300))  # 5 minutes
    
    # Other settings can be added as needed for specific extensions or features
