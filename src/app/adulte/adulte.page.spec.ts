import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdultePage } from './adulte.page';

describe('AdultePage', () => {
  let component: AdultePage;
  let fixture: ComponentFixture<AdultePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdultePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
