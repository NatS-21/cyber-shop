import {Component, EventEmitter, Input, Output, forwardRef} from '@angular/core';
import {booleanAttribute} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgOptimizedImage,
    FormsModule
  ],
  styleUrls: ['./input-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFieldComponent),
    multi: true
  }]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input({transform: booleanAttribute}) isSecure: boolean = false;
  @Input() buttonLabel?: string;
  @Input() errorMessage?: string;
  @Input() size: 'small' | 'large' = 'small';
  @Input() type: 'text' | 'number' = 'text';
  @Input() minValue?: number;
  @Input() maxValue?: number;
  @Input() value: any = '';  // изменено на any для поддержки строковых значений
  @Output() valueChange = new EventEmitter<any>();

  showPassword: boolean = false;

  get inputType() {
    if (this.isSecure) {
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onInputChange(value: any) {
    this.value = this.type === 'number' ? Number(value) : value;
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onChange = (value: any) => {
  };
  onTouched = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // handle disabling the component
  }
}
