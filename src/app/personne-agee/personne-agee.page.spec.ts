import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonneAgeePage } from './personne-agee.page';

describe('PersonneAgeePage', () => {
  let component: PersonneAgeePage;
  let fixture: ComponentFixture<PersonneAgeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneAgeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonneAgeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
