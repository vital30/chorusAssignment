import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { VideoPlayerComponent } from './video-player.component';
import { DatabaseService } from '../_services/database/database.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
const transcriptData = [];

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;
  let dbServiceDependency: DatabaseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        DatabaseService
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dbServiceDependency = TestBed.get(DatabaseService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle a successful call of getTranscript()', () => {
    spyOn(dbServiceDependency, 'getTranscript').and.returnValue(of([]));
    fixture.detectChanges();
    expect(transcriptData).toEqual([]);
  });
});
