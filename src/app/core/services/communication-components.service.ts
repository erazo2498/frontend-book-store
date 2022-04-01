import { Injectable , EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationComponentsService {
  
  eventEmit = new EventEmitter<any>();
  constructor() { }
}
