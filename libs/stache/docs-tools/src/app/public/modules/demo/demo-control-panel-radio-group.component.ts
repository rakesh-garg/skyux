import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Subject
} from 'rxjs';

import {
  SkyDocsDemoControlPanelChange
} from './demo-control-panel-change';

@Component({
  selector: 'sky-docs-demo-control-panel-radio-group',
  templateUrl: './demo-control-panel-radio-group.component.html',
  styleUrls: ['./demo-control-panel-radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDocsDemoControlPanelRadioGroupComponent implements OnInit, OnDestroy {

  @Input()
  public choices: { label: string; value: any; }[];

  @Input()
  public heading: string;

  @Input()
  public name: string;

  @Input()
  public initialValue: any;

  /**
   * @internal
   */
  public selectionChange = new Subject<SkyDocsDemoControlPanelChange>();

  /**
   * @internal
   */
  public value: any;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.value = this.cloneValue(this.initialValue);
  }

  public ngOnDestroy(): void {
    this.selectionChange.complete();
  }

  public onModelChange(): void {
    this.selectionChange.next({
      [this.name]: this.value
    });
  }

  public resetValue(): void {
    this.value = this.cloneValue(this.initialValue);
    this.changeDetector.markForCheck();
  }

  private cloneValue(value: any): any {
    if (typeof value === 'object') {
      return JSON.parse(JSON.stringify(value));
    }

    return value;
  }

}
