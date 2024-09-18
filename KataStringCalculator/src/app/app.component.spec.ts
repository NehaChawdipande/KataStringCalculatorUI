import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'KataStringCalculator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Kata String Calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Kata String Calculator');
  });

  it('should return initialized values', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app.inputValue).toBe('');
    expect(app.sum).toBe(0);
  });

  it('should return 0 when calulate function is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    const value = app.calculate();
    expect(value).toBe(0);
  });

  it('should render input field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('stringInput')).toBeTruthy();
  });

  
it('should call calculate function when button is clicked', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  spyOn(app, 'calculate').and.callThrough();
  const buttonElement =  fixture.debugElement.query(By.css('button'));; 
  buttonElement.triggerEventHandler('click','');
  fixture.detectChanges();
  expect(app.calculate).toHaveBeenCalled();
});

it('should return 0 button is clicked with empty input', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  spyOn(app, 'calculate').and.callThrough();
  const buttonElement =  fixture.debugElement.query(By.css('button'));; 
  buttonElement.triggerEventHandler('click','');
  fixture.detectChanges();
  expect(app.calculate).toHaveBeenCalled();
  const value = app.calculate();
  expect(value).toBe(0);
});

});
