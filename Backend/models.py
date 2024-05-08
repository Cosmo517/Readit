from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, ForeignKey



class User(Base):
    __tablename__ = 'users'
    username = Column(String(25), primary_key=True, index=True)
    email = Column(String(128), nullable=False)
    password = Column(String(256), nullable=False)
    date_created = Column(Float, nullable=False)

class Community(Base):
    __tablename__ = 'community'
    community_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(30), nullable=False)
    description = Column(String(256), nullable=True)
    private = Column(Boolean, nullable=False)
    date_created = Column(Float, nullable=False)

class UserCommunity(Base):
    __tablename__ = 'user_community'
    username = Column(String(25), ForeignKey('users.username'), primary_key=True, index=True)
    community_id = Column(Integer, ForeignKey('community.community_id'), primary_key=True, index=True)
    join_date = Column(Float, nullable=False)

class UserAdminCommunity(Base):
    __tablename__ = 'user_admin_community'
    username = Column(String(25), ForeignKey('users.username'), primary_key=True, index=True)
    community_id = Column(Integer, ForeignKey('community.community_id'), primary_key=True, index=True)
    admin_role = Column(String(25), nullable=True)
    

class Posts(Base):
    __tablename__ = 'posts'
    post_id = Column(Integer, primary_key=True, index=True)
    username = Column(String(25), ForeignKey('users.username'), nullable=False)
    community_id = Column(Integer, ForeignKey('community.community_id'), nullable=False)
    title = Column(String(64), nullable=False)
    content = Column(String(1024), nullable=False)
    time_stamp = Column(Float, nullable=False)

class Comments(Base):
    __tablename__ = 'comments'
    comment_id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey('posts.post_id'), nullable=False)
    username = Column(String(25), ForeignKey('users.username'), nullable=False)
    content = Column(String(1024), nullable=False)
    time_stamp = Column(Float, nullable=False)