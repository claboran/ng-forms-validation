import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {InvaildTypeDirective} from '../lib/frvl/directives/invaild-type.directive';
import {InvalidMessageDirective} from '../lib/frvl/directives/invalid-message.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormValidationModule} from '../lib/frvl/form-validation.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        FormValidationModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'frvl'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frvl');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to frvl!');
  }));
});
