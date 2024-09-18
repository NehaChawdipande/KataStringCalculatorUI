import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
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
  const buttonElement =  fixture.debugElement.query(By.css('#submit'));; 
  buttonElement.triggerEventHandler('click','');
  fixture.detectChanges();
  expect(app.calculate).toHaveBeenCalled();
});

it('should return 0 button is clicked with empty input', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  spyOn(app, 'calculate').and.callThrough();
  const buttonElement =  fixture.debugElement.query(By.css('#submit'));; 
  buttonElement.triggerEventHandler('click','');
  fixture.detectChanges();
  expect(app.calculate).toHaveBeenCalled();
  const value = app.calculate();
  expect(value).toBe(0);
});

// it case 2: Single number
it('should return the same number for a single number', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  app.inputValue = '5';
  const value = app.calculate();
  expect(value).toBe(5);
});

// it case 3: Multiple numbers separated by commas
it('should add multiple numbers separated by commas', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;

  app.inputValue = '1,2,3';
  const value = app.calculate();
  expect(value).toBe(6);
});

// it case 4: Numbers separated by newlines
it('should add numbers separated by newlines', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;

  app.inputValue = '1\n2\n3';
  const value = app.calculate();
  expect(value).toBe(6);
});


// it case 6: Numbers separated by custom delimiter
it('should add numbers with a custom delimiter', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;

  app.inputValue = "//:\\n1:2:3:4";
  const value = app.calculate();
  expect(value).toBe(10);
});

// it case 7: Negative numbers
it('should throw an error for negative numbers', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;

  app.inputValue = '-1,2,3'
  expect(() => app.calculate()).toThrowError('Negatives not allowed: -1');
});

// it case 8: Multiple Negative numbers
it('should throw an error for multiple negative numbers', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;

  app.inputValue = '-1,2,3,-4';
  
  expect(() => app.calculate()).toThrowError('Negatives not allowed: -1, -4');
});

// it case 9: Numbers larger than 1000
it('should ignore numbers larger than 1000', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  app.inputValue = '1001,2,3';
  const value = app.calculate();
  expect(value).toBe(5);
});

// it case 10: Multiple Numbers larger than 1000
it('should ignore multiple numbers larger than 1000', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  app.inputValue = '1001,2,3, 2003';
  const value = app.calculate();
  expect(value).toBe(5);
});


// it case 10: custom delimiters of any length
it('should add numbers with a custom delimiter of any length', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.componentInstance;
  app.inputValue = '//**\\n1**2**3';
  const value = app.calculate();
  expect(value).toBe(6);
});
});
