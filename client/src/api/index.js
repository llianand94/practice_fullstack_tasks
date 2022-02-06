import axios from 'axios';
import qs from 'query-string';

const httpClient = axios.create({
  baseURL:'http://localhost:3000/',
});

export const createTask = (data)=> httpClient.post('/tasks', data);

export const getTasks = ({limit, offset})=> 
  httpClient.get(`/tasks?${qs.stringify({limit, offset})}`);

export const patchTask = (taskId,data)=> httpClient.patch(`/tasks/${taskId}`, data);

export const deleteTask = (taskId)=> httpClient.delete(`/tasks/${taskId}`);