import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';

describe('Home Page', () => {

  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock }
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {

    expect(comp instanceof HomePage).toBe(true);
  
  });

});