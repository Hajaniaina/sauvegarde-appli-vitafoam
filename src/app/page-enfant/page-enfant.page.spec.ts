import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageEnfantPage } from './page-enfant.page';

describe('PageEnfantPage', () => {
  let component: PageEnfantPage;
  let fixture: ComponentFixture<PageEnfantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEnfantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageEnfantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
