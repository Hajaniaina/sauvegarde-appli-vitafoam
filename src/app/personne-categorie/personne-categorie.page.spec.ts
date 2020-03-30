import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonneCategoriePage } from './personne-categorie.page';

describe('PersonneCategoriePage', () => {
  let component: PersonneCategoriePage;
  let fixture: ComponentFixture<PersonneCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonneCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
