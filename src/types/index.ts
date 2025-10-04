import { AvatarColor } from "./avatarColor";

// User types
export interface User {
  name: string;
  surname: string;
  avatarColor: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  surname: string;
  email: string;
  dateOfBirth: string;
  avatarColor?: string;
}

// Auth types
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  age: number;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  message?: string;
}

export interface AuthData {
  name: string;
  surname: string;
  avatarColor: string;
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    details?: string;
  };
  message?: string;
}

// Experience types
export interface Experience {
  _id?: string;
  id?: string;
  title: string;
  content: IQuestionAnswer[];
  user?: User;
  userId?: string;
  userName: string;
  userAge: number;
  avatarColor: AvatarColor;
  createdAt: string;
  updatedAt?: string;
}

export interface Question {
  _id?: string;
  isActive: boolean;
  text: string;
}

export interface IQuestionAnswer {
  questionId: string;
  answer: string;
}

// Form error types
export interface FormErrors {
  [key: string]: string;
}
