import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

constructor() { }

functionFromLoggingService(){
  console.log("I am being called from Service file injected in user component")
}
}
