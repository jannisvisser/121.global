import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ValidateIdentityComponent } from './validate-identity.component';
import { of } from 'rxjs';
import { ProgramsServiceApiService } from 'src/app/services/programs-service-api.service';

describe('ValidateIdentityComponent', () => {
  let component: ValidateIdentityComponent;
  let fixture: ComponentFixture<ValidateIdentityComponent>;

  const storageIonicMock: any = {
    set: () => new Promise<any>((resolve, reject) => resolve('1')),
    get: () => new Promise<any>((resolve, reject) => resolve('1')),
  };

  beforeEach(async(() => {

    const programsServiceApiService = jasmine.createSpyObj('ProgramsServiceApiService', ['getPrefilledAnswers']);
    const prefilledAnswersSpy = programsServiceApiService.getPrefilledAnswers.and.returnValue(of({}));


    TestBed.configureTestingModule({
      declarations: [ValidateIdentityComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ProgramsServiceApiService,
          useValue: programsServiceApiService,
        },
        {
          provide: Storage,
          useValue: storageIonicMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
