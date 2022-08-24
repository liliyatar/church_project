import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Feedback } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  create(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>('/api/feedback', feedback);
  }
}