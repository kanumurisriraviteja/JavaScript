import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { CreateEmloyeeComponent } from './create-emloyee/create-emloyee.component';

@Injectable()
export class CanDeactiveCreateEmployeeGuard implements CanDeactivate<CreateEmloyeeComponent> {

  canDeactivate(component: CreateEmloyeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('Are you sure to discard your changes');
    }
    return true;
  }
}
