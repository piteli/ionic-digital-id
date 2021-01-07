import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProofEligibilityComponent } from './proof-eligibility.component';

describe('ProofEligibilityComponent', () => {
  let component: ProofEligibilityComponent;
  let fixture: ComponentFixture<ProofEligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofEligibilityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProofEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
