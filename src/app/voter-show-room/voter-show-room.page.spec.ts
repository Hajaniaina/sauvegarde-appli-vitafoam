import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoterShowRoomPage } from './voter-show-room.page';

describe('VoterShowRoomPage', () => {
  let component: VoterShowRoomPage;
  let fixture: ComponentFixture<VoterShowRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterShowRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoterShowRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
