/**
 * NOTICE: DO NOT MODIFY THIS FILE!
 * The contents of this file were automatically generated by
 * the 'ng generate @skyux/i18n:lib-resources-module lib/modules/shared/sky-lists' schematic.
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
    skyux_filter_button_title: { message: 'Filter' },
    skyux_filter_summary_close: { message: 'Remove filter' },
    skyux_filter_summary_header: { message: 'Filter' },
    skyux_infinite_scroll_load_more_button: { message: 'Load more' },
    skyux_paging_label: { message: 'Pagination' },
    skyux_paging_next: { message: 'Next' },
    skyux_paging_previous: { message: 'Previous' },
    skyux_repeater_label: { message: 'List of items' },
    skyux_repeater_item_expand: { message: 'Expand or collapse {0}' },
    skyux_repeater_item_expand_default: { message: 'Expand or collapse' },
    skyux_repeater_item_checkbox_label: { message: 'Select {0}' },
    skyux_repeater_item_checkbox_label_default: { message: 'Select row' },
    skyux_repeater_item_reorder_cancel: {
      message:
        'Item reordering was canceled. The item was returned to its original position.',
    },
    skyux_repeater_item_reorder_finish: {
      message: 'Dropped the item in position',
    },
    skyux_repeater_item_reorder_instructions: {
      message:
        'Item grabbed. Press the up and down arrow keys to change position. Press the spacebar or enter key to drop. And press the escape key to cancel.',
    },
    skyux_repeater_item_reorder_moved: {
      message: 'Moved the item to position',
    },
    skyux_repeater_item_reorder_label_default: { message: 'Reorder' },
    skyux_repeater_item_reorder_label: { message: 'Reorder {0}' },
    skyux_repeater_item_reorder_operation: {
      message: 'Press the spacebar or enter key to reorder.',
    },
    skyux_repeater_item_reorder_top: { message: 'Top' },
    skyux_repeater_item_reorder_top_label: { message: 'Move {0} to top' },
    skyux_repeater_item_reorder_top_label_default: { message: 'Move to top' },
    skyux_sort_button_label: { message: 'Sort' },
    skyux_sort_menu_heading: { message: 'Sort by' },
  },
};

export class SkyListsResourcesProvider implements SkyLibResourcesProvider {
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
      useClass: SkyListsResourcesProvider,
      multi: true,
    },
  ],
})
export class SkyListsResourcesModule {}
