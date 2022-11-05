import { io } from "socket.io-client";
import { API_HOST } from ".";

export const socket = io(API_HOST);
