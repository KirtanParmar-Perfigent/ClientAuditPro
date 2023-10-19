import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VisitReminderClient, UserClient, DBClient,UsersClient,CategoryClient,CompanyCategoryClient,CompanyClient,CustomerClient,LocationClient,NotesClient,PasscodeClient,RoleClient, UserRoleClient } from './ClientApi';

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private static readonly DefaultBaseUrl = 'https://localhost:44370/';

  public DB: DBClient;
  public Users: UsersClient;
  public Category: CategoryClient;
  public CompanyCategory: CompanyCategoryClient;
  public Company: CompanyClient;
  public Customer: CustomerClient;
  public Location: LocationClient;
  public Notes: NotesClient;
  public Passcode: PasscodeClient;
  public Role: RoleClient;
  public User: UserClient;
  public UserRole: UserRoleClient;
  public VisitReminder: VisitReminderClient;

  private readonly httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.DB = new DBClient();
    this.Users = new UsersClient();
    this.Category = new CategoryClient();
    this.CompanyCategory = new CompanyCategoryClient();
    this.Company = new CompanyClient();
    this.Customer = new CustomerClient();
    this.Location = new LocationClient();
    this.Notes = new NotesClient();
    this.Passcode = new PasscodeClient();
    this.Role = new RoleClient();
    this.User = new UserClient();
    this.UserRole = new UserRoleClient();
    this.VisitReminder = new VisitReminderClient();
  }
  authorization(apiToken: string): void {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `Bearer ${apiToken}`);
  }
}