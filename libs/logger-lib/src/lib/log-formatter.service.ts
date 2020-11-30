import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class LogFormatterService {

  abstract format(message: string): string
}
