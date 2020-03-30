import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduitsDescPage } from './produits-desc.page';

describe('ProduitsDescPage', () => {
  let component: ProduitsDescPage;
  let fixture: ComponentFixture<ProduitsDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsDescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitsDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
