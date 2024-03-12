import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { Meta, Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  let titleService: Title; // Declare the titleService variable
  let metaService: Meta; // Declare the metaService variable
  let component: AppComponent; // Declare the component variable

  // Create a test suite for the AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the RouterTestingModule and LayoutModule
      imports: [RouterTestingModule, LayoutModule],
      // Provide the Meta and Title services as mock objects
      providers: [
        { provide: Meta, useValue: jasmine.createSpyObj('Meta', ['addTags']) },
        {
          provide: Title,
          useValue: jasmine.createSpyObj('Title', ['setTitle']),
        },
      ],
      // Declare the AppComponent as the component under test
      declarations: [AppComponent],
    }).compileComponents();
    // Compile the test suite
    component = TestBed.createComponent(AppComponent).componentInstance;
    metaService = TestBed.inject(Meta);
    titleService = TestBed.inject(Title);
  });

  // Create a test case for the AppComponent
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Create a test case for the title
  it('should set the title correctly', () => {
    expect(titleService.setTitle).toHaveBeenCalledWith('Furs Things First');
  });

  // Create a test case for the meta tags
  it('should add meta tags correctly', () => {
    expect(metaService.addTags).toHaveBeenCalledWith([
      {
        name: 'description',
        content:
          'Furs Things First is a professional dog training business in Waterford, Ireland. We offer a variety of services and techniques to help you and your furry friend.',
      },
      {
        name: 'keywords',
        content:
          'dog, pet, top, classes, trainer, training, waterford, city, south east, ireland, furs things first, obedience, agility, behavior, puppy, clicker, positive, reinforcement, socialization, crate, leash, manners, obedience, tricks, fun, games',
      },
      { name: 'author', content: 'Furs Things First' },
      { rel: 'canonical', href: 'https://fursthingsfirst.ie' },
      {
        name: 'og:title',
        content: 'Furs Things First - Dog Training in Waterford',
      },
      {
        name: 'og:description',
        content:
          'Furs Things First is a professional dog training business in Waterford, Ireland. We offer a variety of services and techniques to help you and your furry friend.',
      },
      { name: 'og:image', content: 'https://fursthingsfirst.ie/logo.png' },
      { name: 'og:url', content: 'https://fursthingsfirst.ie' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_IE' },
      { name: 'fb:app_id', content: '61556219123886' },
      { name: 'fb:pages', content: '61556219123886' },
      { name: 'instagram:creator', content: '@furs_things_first' },
    ]);
  });
});
