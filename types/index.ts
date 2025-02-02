import { IProductBacklogItem } from "@/lib/database/models/product_backlog_item.model";
import { ISprint } from "@/lib/database/models/sprint.model";

// Constants
export const taskPriority = ["Low", "Medium", "High", "Urgent"];

export const taskDevelopmentStage = [
  "Planning",
  "Development",
  "Testing",
  "Integration",
];

export const taskStatus = ["Not Started", "In Progress", "Completed"];

export const taskType = ["Story", "Bug"];

export const tags = [
  "Backend",
  "Database",
  "Framework",
  "API",
  "Frontend",
  "Bugfix",
];

// Sprint Params
export type CreateSprintParams = {
  sprint: {
    title: string;
    status: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    totalStoryPoints: number;
    notStartedTasks: IProductBacklogItem[];
    inProgressTasks: IProductBacklogItem[];
    completedTasks: IProductBacklogItem[];
  };
};

export type UpdateSprintTasksParams = {
  sprint?: ISprint;
  notStarted?: string[];
  inProgress?: string[];
  completed?: string[];
};

// Product Backlog Params
export type CreateProductBacklogItemProps = {
  productBacklogItem: {
    title?: string;
    description?: string;
    priority?: string;
    storyPoints?: number;
    status?: string;
    developmentPhase?: string;
    totalLoggedHours?: number;
    loggedHours?: string[];
    taskType?: string;
    createdAt?: Date;
    dateCompleted?: Date | null;
  };
  tags: string[];
  userId: string;
  pathname: string;
};

export type ProductBacklogItem = {
  title: string;
  description: string;
  priority: string;
  storyPoints: number;
  status: string;
  developmentPhase: string;
  totalLoggedHours: number;
  loggedHours: string[];
  taskType: string;
  createdAt: Date;
  assignee: string;
  tags: string[];
};

export type DeleteProductBacklogItemByIdParams = {
  productBacklogItemId: string;
  pathname: string;
};

export type UpdateProductBacklogItemStatusParams = {
  productBacklogItem: {
    _id: string;
    title?: string;
    description?: string;
    priority?: string;
    storyPoints?: number;
    status?: string;
    developmentPhase?: string;
    totalLoggedHours?: number;
    loggedHours?: string[];
    taskType?: string;
    createdAt: Date;
  };
  status?: string;
  dateCompleted?: Date | null;
};

export type UpdateProductBacklogItemParams = {
  productBacklogItem: {
    _id: string;
    title?: string;
    description?: string;
    priority?: string;
    storyPoints?: number;
    status?: string;
    developmentPhase?: string;
    totalLoggedHours: number;
    loggedHours: string[];
    taskType?: string;
    createdAt: Date;
  };
  tags: string[];
  userId: string;
  pathname: string;
};

export type UpdateProductBacklogHoursParams = {
  productBacklogItem: IProductBacklogItem;
  hoursWorked: number;
  dateWorked: string;
  workDescription: string;
  pathname: string;
};

export const defaultProductBacklogItemState = {
  _id: "",
  title: "",
  description: "",
  priority: "Low",
  storyPoints: 0,
  status: "Not Started",
  developmentPhase: "Planning",
  totalLoggedHours: "0",
  loggedHours: [],
  taskType: "Story",
  createdAt: new Date(),
  assignee: {
    _id: "",
    name: "",
  },
  tags: [],
};

// User Params
export type CreateUserParams = {
  user: {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    hoursLogged: number[];
    workDescriptions: string[];
    dateOfWork: Date[];
  };
};

export type UpdateUserParams = {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
  };
};

export type deleteUserByIdParams = {
  _id: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

// Tag Params
export type CreateTagParams = {
  name: string;
};

export type Tag = {
  _id: string;
  name: string;
};

export type logUserHoursParams = {
  userName: string;
  workDescription: string;
  hoursLogged: number;
  dateWorked: Date;
};

export type changeAdminPasswordParams = {
  newPassword: string;
};
