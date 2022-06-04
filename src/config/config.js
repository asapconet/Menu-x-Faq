import axios from "axios";
// import { baseUrl } from "./APIs";

export const client = axios.create({
  BaseUrl: "https://localhost:800",
});

export const headers = {
  "Content-Type": "application/json",
};
