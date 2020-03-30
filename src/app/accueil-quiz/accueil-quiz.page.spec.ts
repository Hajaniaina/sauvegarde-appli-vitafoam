import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilQuizPage } from './accueil-quiz.page';

describe('AccueilQuizPage', () => {
  let component: AccueilQuizPage;
  let fixture: ComponentFixture<AccueilQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilQuizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
