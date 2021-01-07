import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdRequestComponent } from './id-request.component';

describe('IdRequestComponent', () => {
  let component: IdRequestComponent;
  let fixture: ComponentFixture<IdRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdRequestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
