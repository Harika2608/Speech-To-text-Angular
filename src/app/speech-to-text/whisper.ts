import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhisperService {
  private apiUrl = 'https://api.openai.com/v1/audio/transcriptions';
  private apiKey = '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'; // replace with your actual API key
  
  constructor(private http: HttpClient) {}
     
  transcribeAudio(audioData: Blob): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'audio/wav', 
      Authorization: `Bearer ${this.apiKey}`,
    });
    
    return this.http.post<string>(this.apiUrl, audioData, { headers })
    .pipe(
      catchError((error) => {
        console.error('Error in API request:', error);
        // Handle the error as needed, e.g., display a user-friendly message
        throw error; // Rethrow the error to propagate it to the subscriber
      })
    );
}
}
