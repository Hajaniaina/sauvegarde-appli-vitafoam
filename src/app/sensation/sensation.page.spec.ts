import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensationPage } from './sensation.page';

describe('SensationPage', () => {
  let component: SensationPage;
  let fixture: ComponentFixture<SensationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
