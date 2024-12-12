import { Injectable, Scope } from '@nestjs/common';
import { User } from './dto/users.dto';
import { mockUsersData } from './mock/user.mock';
import { ApiResponse } from '../models/response.model';
import { HttpStatus } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ scope: Scope.TRANSIENT })
export class UserService {
  private users: User[] = [...mockUsersData];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  createUser(user: User) {
    const newUser = { ...user, id: uuidv4() };
    this.users.push(newUser);
    return new ApiResponse(
      'User created successfully',
      HttpStatus.CREATED,
      newUser
    );
  }

  updateUser(id: string, user: User) {
    const existingUserIndex = this.users.findIndex(u => u.id === id);
    if (existingUserIndex === -1) {
      throw new Error('User not found');
    }
    const updatedUser = { ...this.users[existingUserIndex], ...user };
    this.users[existingUserIndex] = updatedUser;
    return new ApiResponse(
      'User updated successfully',
      HttpStatus.OK,
      updatedUser
    );
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    this.users.splice(userIndex, 1);
    return new ApiResponse(
      'User deleted successfully',
      HttpStatus.OK,
      { id }
    );
  }
}
