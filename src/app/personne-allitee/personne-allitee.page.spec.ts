import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonneAlliteePage } from './personne-allitee.page';

describe('PersonneAlliteePage', () => {
  let component: PersonneAlliteePage;
  let fixture: ComponentFixture<PersonneAlliteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneAlliteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonneAlliteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
