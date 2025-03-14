import 'jest-preset-angular/setup-jest';

import { defineGlobalsInjections } from '@ngneat/spectator';
import { ScriptLoaderService } from 'src/app/modules/shared/services/script-loader/script-loader.service';
import { of } from 'rxjs';

// HACK Workaround do erro que envolve o primeng usando `@layer {}` e o jsdom sendo incapaz de entender isso
// Mais informações em:
//  - https://github.com/jsdom/jsdom/issues/2177
//  - https://github.com/thymikee/jest-preset-angular/issues/2194
//  - https://github.com/primefaces/primeng/issues/14085
const originalConsoleError = console.error;
const jsDomCssError = 'Error: Could not parse CSS stylesheet';
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};

const scriptLoaderServiceMock = {
  load: jest.fn(() => of()),
};

defineGlobalsInjections({
  providers: [{ provide: ScriptLoaderService, useValue: scriptLoaderServiceMock }],
});
