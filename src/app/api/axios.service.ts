import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  private BASE_URL = environment.apiUrl;

  // use this if NOT dealing with cookies, jwt, sesstion etc
  public axiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: this.BASE_URL,
  });

  // Ues this if dealing with  cookies, jwt, sesstion etc
  public axiosPrivate = axios.create({
    baseURL: this.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  constructor() {
    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    this.axiosPrivate.interceptors.request.use(
      (config) => {
        console.log('Request sent:', config);
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.axiosPrivate.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Error response:', error);
        return Promise.reject(error);
      }
    );
  }
}
