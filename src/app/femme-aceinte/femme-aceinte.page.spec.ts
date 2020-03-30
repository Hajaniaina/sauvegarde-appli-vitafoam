import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FemmeAceintePage } from './femme-aceinte.page';

describe('FemmeAceintePage', () => {
  let component: FemmeAceintePage;
  let fixture: ComponentFixture<FemmeAceintePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemmeAceintePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FemmeAceintePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
