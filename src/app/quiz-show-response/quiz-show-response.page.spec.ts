import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizShowResponsePage } from './quiz-show-response.page';

describe('QuizShowResponsePage', () => {
  let component: QuizShowResponsePage;
  let fixture: ComponentFixture<QuizShowResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizShowResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizShowResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
