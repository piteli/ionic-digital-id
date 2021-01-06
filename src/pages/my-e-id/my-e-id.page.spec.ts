import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyEIdPage } from './my-e-id.page';

describe('MyEIdPage', () => {
  let component: MyEIdPage;
  let fixture: ComponentFixture<MyEIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyEIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
