import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permission'
})
export class PermissionPipe implements PipeTransform {
  transform(items: any[], userPermissions: string[]): any[] {
    if (!items || !userPermissions || userPermissions.length === 0) {
      return items;
    }

    return items.filter(item => {
      // Assuming each item has a 'requiredPermissions' property which is an array of permissions
      return item.requiredPermissions.some((permission: string) => userPermissions.includes(permission));
    });
  }
}