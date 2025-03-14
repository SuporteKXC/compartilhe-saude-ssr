import { isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { first, map, skipWhile, timeout } from 'rxjs';
import { UserGroup } from 'src/app/modules/shared/enums/user-group';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from 'src/environments/environment';

export function authGuard(allowedGroups: UserGroup[]): CanActivateFn {
  const env = environment.name;

  return (route) => {
    const authService = inject(AuthService);
    const platformId = inject(PLATFORM_ID);

    if (!authService.verifyToken()) {
      authService.configure();
    }

    return authService.user$.pipe(
      skipWhile(user => user === null),
      timeout({
        each: 2000,
        with: () => {
          if (env !== 'prod') {
            console.error('Unauthorized access.');
          }
          return [false];
        },
      }),
      map((user) => {
        if (isPlatformServer(platformId)) {
          return false;
        }

        if (!user) {
          return createUrlTreeFromSnapshot(route, ['/']);
        }

        const userHasAllowedGroup = allowedGroups.some((group) => group.includes(group));

        return userHasAllowedGroup ? true : createUrlTreeFromSnapshot(route, ['/']);
      }),
      first()
    );
  };
}
