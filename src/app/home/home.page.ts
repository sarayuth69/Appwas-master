import { Component } from '@angular/core';


declare var microgear;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public temp: any = '25';
public hum: any = '70';
public status: any = 'ON';
public timestring: any = '';

  constructor() {
    this.timer();
    this.microgear() ;
  }

  public timer() {
    setInterval(() => {
      const timer = new Date();
      this.timestring = `${timer.getHours()}:${timer.getMinutes()}: ${timer.getSeconds()}`;
    }, 1000);
  }
  public getTime(time) {
    const dt = new Date(time);

    console.log(dt.getHours() + ' ' + dt.getMinutes());
  }

  public microgear() {
    microgear.on('connected', () => {
        console.log('เชื่อมต่อสำเร็จ');

    });

    microgear.on('present', (event: any) => {
      console.log(event);
    });
    microgear.on('absent', (event: any) => {
      console.log(event);
    });
  }
}
