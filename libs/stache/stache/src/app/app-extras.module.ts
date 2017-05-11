import { NgModule } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

/* start module hacks */

// We need to import these providers here because Builder automatically registers
// Stache's components. If we imported the StacheModule, each component would have two
// declared modules, which Angular does not allow.

import { StacheConfigService } from './public/src/modules/shared';
import { StacheTitleService } from './public/src/modules/wrapper/title.service';
import { StacheNavService } from './public/src/modules/nav/nav.service';
import { StacheWindowRef } from './public/src/modules/shared';

require('smoothscroll-polyfill').polyfill();
require('style-loader!prismjs/themes/prism.css');

/* end module hacks */

@NgModule({
  providers: [
    {
      provide: StacheConfigService,
      useExisting: SkyAppConfig
    },

    // These services would normally be provided in the StacheModule:
    StacheTitleService,
    StacheNavService,
    StacheWindowRef
  ]
})
export class AppExtrasModule { }
