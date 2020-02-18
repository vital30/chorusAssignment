import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DatabaseService', () => {
  let httpTestingController: HttpTestingController;
  let service: DatabaseService;
  let staticId = "4d79041e-f25f-421d-9e5f-3462459b9934";
  ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DatabaseService);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse getTranscript() response', () => {
    service.getTranscript(staticId).subscribe(result => expect(result).toEqual({
      'data' : [
        {
            "snippet": "Mm-hmm",
            "speaker": "Cust",
            "time": 1.92
        }]
    }));
    const requestUrl = DatabaseService.GET_Static_URL+staticId+".json";
    const req = httpTestingController.expectOne(requestUrl);
    expect(req.request.method).toEqual('GET');

  });

});
