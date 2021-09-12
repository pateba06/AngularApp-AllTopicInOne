import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logStatus(status:string){
    console.log("Logging the status in the console and the status is " + status)
  }

}
