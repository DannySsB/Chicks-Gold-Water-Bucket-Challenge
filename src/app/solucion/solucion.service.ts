import { Injectable } from '@angular/core';


export interface Step {
  x:number,
  y:number,
  instruction:string,
  father?:Step
}

@Injectable({
  providedIn: 'root'
})
export class SolucionService {

  constructor() { }

  resolverWaterJug(x:number, y:number, z:number):Step[]{
    if(x + y <= z || (z > x && z > y) || (x == y) ) {
      return [];
    };

    let total:any = {};

    const options:number[] = [1,2,3,4,5,6];

    const queue:Step[] = [];

    let current:any;

    queue.push({x:0, y:0, instruction:"initial state", father:undefined});

    const visited:Step[] = [];

    visited.push(queue[0]);

    while(queue.length > 0) {
        current = {...queue.shift()};

        if(current.x === z || current.y === z) {
          break;
        };

        for(let option of options) {

          if(option === 5 && current.x === x) continue;
          if(option === 6 && current.y === y) continue;

          total = this.operations({...current}, option, x, y);
          total.father = {...current};

          if(total.x < 0 || total.x > x + y || total.y < 0 || total.y > x + y) continue;

          if(visited.filter(element => element.x === total.x && element.y === total.y).length == 0) {
              visited.push(total);
              queue.push(total);
          }
        }
    }

    const order:Step[] = [];

    while(current.father) {
      order.push(current)
      current = {...current.father};
    }

    order.reverse();

    if(order[order.length-1].x !== z && order[order.length-1].y !== z && false) {
    }
    else {
      return order;
    }
  }

  operations(step:Step, direction:number, x:number, y:number):Step{

    switch(direction) {
        case 1:
            step.x = 0;

            step.instruction = "Dump bucket x";
            break;

        case 2:
            step.y = 0;

            step.instruction = "Dump bucket y";
            break;

        case 3:
            step.x = x;

            step.instruction = "Fill bucket x";
            break;

        case 4:
            step.y = y;

            step.instruction = "Fill bucket y";
            break;

        case 5:
            if(step.x + step.y > x) {
                step.y = step.y - (x - step.x);
                step.x = x;
            }

            else {
                step.x = step.x + step.y;
                step.y = 0;
            }

            step.instruction = "Transfer bucket y to bucket x";
            break;

        case 6:
            if(step.y + step.x > y) {
                step.x = step.x - (y - step.y);
                step.y = y;
            }

            else {
                step.y = step.x + step.y;
                step.x = 0;
            }

            step.instruction = "Transfer bucket x to bucket y";
            break;
    }

    return step;
  }
}
