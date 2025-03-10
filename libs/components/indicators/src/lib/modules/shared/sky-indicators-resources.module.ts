/**
 * NOTICE: DO NOT MODIFY THIS FILE!
 * The contents of this file were automatically generated by
 * the 'ng generate @skyux/i18n:lib-resources-module lib/modules/shared/sky-indicators' schematic.
 * To update this file, simply rerun the command.
 */
import { NgModule } from '@angular/core';
import {
  SKY_LIB_RESOURCES_PROVIDERS,
  SkyAppLocaleInfo,
  SkyI18nModule,
  SkyLibResources,
  SkyLibResourcesProvider,
  getLibStringForLocale,
} from '@skyux/i18n';

const RESOURCES: { [locale: string]: SkyLibResources } = {
  'EN-US': {
    skyux_alert_close: { message: 'Close the alert' },
    skyux_help_inline_button_title: { message: 'Show help content' },
    skyux_status_indicator_sr_completed: { message: 'Completed:' },
    skyux_status_indicator_sr_error: { message: 'Error:' },
    skyux_status_indicator_sr_important_info: {
      message: 'Important information:',
    },
    skyux_status_indicator_sr_warning: { message: 'Warning:' },
    skyux_tokens_dismiss_button_title: { message: 'Remove item' },
    skyux_wait_aria_alt_text: { message: 'Loading.' },
    skyux_wait_blocking_aria_alt_text: { message: 'Loading. Please wait.' },
    skyux_wait_page_aria_alt_text: { message: 'Page loading.' },
    skyux_wait_page_blocking_aria_alt_text: {
      message: 'Page loading. Please wait.',
    },
  },
};

export class SkyIndicatorsResourcesProvider implements SkyLibResourcesProvider {
  public getString(
    localeInfo: SkyAppLocaleInfo,
    name: string
  ): string | undefined {
    return getLibStringForLocale(RESOURCES, localeInfo.locale, name);
  }
}

/**
 * Import into any component library module that needs to use resource strings.
 */
@NgModule({
  exports: [SkyI18nModule],
  providers: [
    {
      provide: SKY_LIB_RESOURCES_PROVIDERS,
      useClass: SkyIndicatorsResourcesProvider,
      multi: true,
    },
  ],
})
export class SkyIndicatorsResourcesModule {}
