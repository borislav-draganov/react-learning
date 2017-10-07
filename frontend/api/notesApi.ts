import * as request from "request-promise-native";
import {Note} from "../models/index";

export const getNotes: Promise<Note[]> = request('http://localhost:8080/api/notes').then((data) => JSON.parse(data) as Note[]);