// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

// export interface IVisitReminderClient {
  
//   getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderDetailsModel[]>;

//   getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderDetailsModel[]>;

//   getTotalCount(): Promise<number>;

//   getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//   get(id?: number | undefined): Promise<UserDetailsModel>;

//   update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//   getHistoryTotalCount(id?: number | undefined): Promise<number>;

//   getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]>;
// }


// export class ClientService {

//   constructor() { }

  
// export default class VisitReminderClient implements IVisitReminderClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderDetailsModel[]> {
//       debugger
//         let url_ = this.baseUrl + "/api/VisitReminder/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<VisitReminderDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(VisitReminderDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<VisitReminderDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/VisitReminder/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<VisitReminderDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(VisitReminderDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<VisitReminderDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/VisitReminder/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/VisitReminder/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<UserDetailsModel> {
//         let url_ = this.baseUrl + "/api/VisitReminder/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<UserDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UserDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserDetailsModel>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/VisitReminder/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/VisitReminder/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/VisitReminder/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<UserHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserHistoryModel[]>(null as any);
//     }
// }

// export interface ICategoryClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<CategoryDetailsModel>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CategoryHistoryModel[]>;
// }

// export class CategoryClient implements ICategoryClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Category/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<CategoryDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CategoryDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CategoryDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Category/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<CategoryDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CategoryDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CategoryDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Category/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Category/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<CategoryDetailsModel> {
//         let url_ = this.baseUrl + "/api/Category/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<CategoryDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = CategoryDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CategoryDetailsModel>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Category/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CategoryHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Category/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<CategoryHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CategoryHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CategoryHistoryModel[]>(null as any);
//     }
// }

// export interface ICompanyCategoryClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<CompanyCategoryDetailsModel>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyCategoryHistoryModel[]>;
// }

// export class CompanyCategoryClient implements ICompanyCategoryClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<CompanyCategoryDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CompanyCategoryDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyCategoryDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<CompanyCategoryDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CompanyCategoryDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyCategoryDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<CompanyCategoryDetailsModel> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<CompanyCategoryDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = CompanyCategoryDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyCategoryDetailsModel>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyCategoryHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/CompanyCategory/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<CompanyCategoryHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CompanyCategoryHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyCategoryHistoryModel[]>(null as any);
//     }
// }

// export interface ICompanyClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<CompanyDetailsModel>;

//     getCompanyByEmail(companyEmail?: string | null | undefined): Promise<CompanyDetailsModel>;

//     registerUser(company: CompanyCreateModel): Promise<number>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyHistoryModel[]>;
// }

// export class CompanyClient implements ICompanyClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Company/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<CompanyDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CompanyDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Company/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<CompanyDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CompanyDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Company/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Company/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<CompanyDetailsModel> {
//         let url_ = this.baseUrl + "/api/Company/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<CompanyDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = CompanyDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyDetailsModel>(null as any);
//     }

//     getCompanyByEmail(companyEmail?: string | null | undefined): Promise<CompanyDetailsModel> {
//         let url_ = this.baseUrl + "/api/Company/GetCompanyByEmail?";
//         if (companyEmail !== undefined && companyEmail !== null)
//             url_ += "companyEmail=" + encodeURIComponent("" + companyEmail) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetCompanyByEmail(_response);
//         });
//     }

//     protected processGetCompanyByEmail(response: Response): Promise<CompanyDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = CompanyDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyDetailsModel>(null as any);
//     }

//     registerUser(company: CompanyCreateModel): Promise<number> {
//         let url_ = this.baseUrl + "/api/Company/RegisterUserAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         const content_ = JSON.stringify(company);

//         let options_: RequestInit = {
//             body: content_,
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processRegisterUser(_response);
//         });
//     }

//     protected processRegisterUser(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Company/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Company/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Company/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<CompanyHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CompanyHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CompanyHistoryModel[]>(null as any);
//     }
// }

// export interface ICustomerClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<CustomerDetailsModel>;

//     getCustomerByEmail(customerEmail?: string | null | undefined): Promise<CustomerDetailsModel>;

//     registerUser(customer: CustomerCreateModel): Promise<number>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CustomerHistoryModel[]>;
// }

// export class CustomerClient implements ICustomerClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Customer/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<CustomerDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CustomerDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CustomerDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Customer/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<CustomerDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CustomerDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CustomerDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Customer/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Customer/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<CustomerDetailsModel> {
//         let url_ = this.baseUrl + "/api/Customer/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<CustomerDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = CustomerDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CustomerDetailsModel>(null as any);
//     }

//     getCustomerByEmail(customerEmail?: string | null | undefined): Promise<CustomerDetailsModel> {
//         let url_ = this.baseUrl + "/api/Customer/GetCustomerByEmail?";
//         if (customerEmail !== undefined && customerEmail !== null)
//             url_ += "customerEmail=" + encodeURIComponent("" + customerEmail) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetCustomerByEmail(_response);
//         });
//     }

//     protected processGetCustomerByEmail(response: Response): Promise<CustomerDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = CustomerDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CustomerDetailsModel>(null as any);
//     }

//     registerUser(customer: CustomerCreateModel): Promise<number> {
//         let url_ = this.baseUrl + "/api/Customer/RegisterUserAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         const content_ = JSON.stringify(customer);

//         let options_: RequestInit = {
//             body: content_,
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processRegisterUser(_response);
//         });
//     }

//     protected processRegisterUser(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Customer/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Customer/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CustomerHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Customer/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<CustomerHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(CustomerHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<CustomerHistoryModel[]>(null as any);
//     }
// }

// export interface IDBClient {

//     checkConnection(): Promise<FileResponse | null>;
// }

// export class DBClient implements IDBClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     checkConnection(): Promise<FileResponse | null> {
//         let url_ = this.baseUrl + "/api/v1/DB";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/octet-stream"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processCheckConnection(_response);
//         });
//     }

//     protected processCheckConnection(response: Response): Promise<FileResponse | null> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200 || status === 206) {
//             const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
//             let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
//             let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
//             if (fileName) {
//                 fileName = decodeURIComponent(fileName);
//             } else {
//                 fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
//                 fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
//             }
//             return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<FileResponse | null>(null as any);
//     }
// }

// export interface ILocationClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<LocationDetailsModel>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<LocationHistoryModel[]>;
// }

// export class LocationClient implements ILocationClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Location/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<LocationDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(LocationDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<LocationDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Location/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<LocationDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(LocationDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<LocationDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Location/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Location/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<LocationDetailsModel> {
//         let url_ = this.baseUrl + "/api/Location/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<LocationDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = LocationDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<LocationDetailsModel>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Location/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Location/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<LocationHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Location/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<LocationHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(LocationHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<LocationHistoryModel[]>(null as any);
//     }
// }

// export interface INotesClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<UserDetailsModel>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<NotesHistoryModel[]>;
// }

// export class NotesClient implements INotesClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Notes/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<NotesDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(NotesDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<NotesDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Notes/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<NotesDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(NotesDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<NotesDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Notes/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Notes/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<UserDetailsModel> {
//         let url_ = this.baseUrl + "/api/Notes/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<UserDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UserDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserDetailsModel>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Notes/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Notes/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<NotesHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Notes/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<NotesHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(NotesHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<NotesHistoryModel[]>(null as any);
//     }
// }

// export interface IPasscodeClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<PasscodeDetailsModel>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<PasscodeHistoryModel[]>;
// }

// export class PasscodeClient implements IPasscodeClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Passcode/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<PasscodeDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(PasscodeDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<PasscodeDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Passcode/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<PasscodeDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(PasscodeDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<PasscodeDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Passcode/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Passcode/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<PasscodeDetailsModel> {
//         let url_ = this.baseUrl + "/api/Passcode/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<PasscodeDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = PasscodeDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<PasscodeDetailsModel>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Passcode/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Passcode/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<PasscodeHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Passcode/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<PasscodeHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(PasscodeHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<PasscodeHistoryModel[]>(null as any);
//     }
// }

// export interface IRoleClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<RoleDetailsModel>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<RoleHistoryModel[]>;
// }

// export class RoleClient implements IRoleClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Role/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<RoleDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(RoleDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<RoleDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Role/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<RoleDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(RoleDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<RoleDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Role/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Role/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<RoleDetailsModel> {
//         let url_ = this.baseUrl + "/api/Role/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<RoleDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = RoleDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<RoleDetailsModel>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Role/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Role/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<RoleHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Role/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<RoleHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(RoleHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<RoleHistoryModel[]>(null as any);
//     }
// }

// export interface IUserClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<UserDetailsModel>;

//     getUserByEmail(userEmail?: string | null | undefined): Promise<UserDetailsModel>;

//     registerUser(user: UserCreateModel): Promise<number>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]>;
// }

// export class UserClient implements IUserClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/v1/User/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<UserDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/v1/User/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<UserDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/v1/User/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/v1/User/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<UserDetailsModel> {
//         let url_ = this.baseUrl + "/api/v1/User/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<UserDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UserDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserDetailsModel>(null as any);
//     }

//     getUserByEmail(userEmail?: string | null | undefined): Promise<UserDetailsModel> {
//         let url_ = this.baseUrl + "/api/v1/User/GetUserByEmail?";
//         if (userEmail !== undefined && userEmail !== null)
//             url_ += "userEmail=" + encodeURIComponent("" + userEmail) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetUserByEmail(_response);
//         });
//     }

//     protected processGetUserByEmail(response: Response): Promise<UserDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UserDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserDetailsModel>(null as any);
//     }

//     registerUser(user: UserCreateModel): Promise<number> {
//         let url_ = this.baseUrl + "/api/v1/User/RegisterUserAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         const content_ = JSON.stringify(user);

//         let options_: RequestInit = {
//             body: content_,
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processRegisterUser(_response);
//         });
//     }

//     protected processRegisterUser(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/v1/User/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/v1/User/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/v1/User/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<UserHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserHistoryModel[]>(null as any);
//     }
// }

// export interface IUserRoleClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<UserRoleDetailsModel>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserRoleHistoryModel[]>;
// }

// export class UserRoleClient implements IUserRoleClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/UserRole/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<UserRoleDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserRoleDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserRoleDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/UserRole/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<UserRoleDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserRoleDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserRoleDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/UserRole/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/UserRole/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<UserRoleDetailsModel> {
//         let url_ = this.baseUrl + "/api/UserRole/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<UserRoleDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UserRoleDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserRoleDetailsModel>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/UserRole/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserRoleHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/UserRole/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<UserRoleHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UserRoleHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UserRoleHistoryModel[]>(null as any);
//     }
// }

// export interface IUsersClient {

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersDetailsModel[]>;

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersDetailsModel[]>;

//     getTotalCount(): Promise<number>;

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

//     get(id?: number | undefined): Promise<UsersDetailsModel>;

//     getUserByEmail(userEmail?: string | null | undefined): Promise<UsersDetailsModel>;

//     registerUser(users: UsersCreateModel): Promise<number>;

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

//     getHistoryTotalCount(id?: number | undefined): Promise<number>;

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UsersHistoryModel[]>;
// }

// export class UsersClient implements IUsersClient {
//     private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
//     private baseUrl: string;
//     protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

//     constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
//         this.http = http ? http : window as any;
//         this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
//     }

//     getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Users/GetAllAsync?";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAll(_response);
//         });
//     }

//     protected processGetAll(response: Response): Promise<UsersDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UsersDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UsersDetailsModel[]>(null as any);
//     }

//     getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersDetailsModel[]> {
//         let url_ = this.baseUrl + "/api/Users/GetAllBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         if (pageNumber !== undefined && pageNumber !== null)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize !== undefined && pageSize !== null)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetAllBySearch(_response);
//         });
//     }

//     protected processGetAllBySearch(response: Response): Promise<UsersDetailsModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UsersDetailsModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UsersDetailsModel[]>(null as any);
//     }

//     getTotalCount(): Promise<number> {
//         let url_ = this.baseUrl + "/api/Users/GetTotalCountAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCount(_response);
//         });
//     }

//     protected processGetTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Users/GetTotalCountBySearchAsync?";
//         if (columnName !== undefined && columnName !== null)
//             url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
//         if (searchValue !== undefined && searchValue !== null)
//             url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetTotalCountBySearch(_response);
//         });
//     }

//     protected processGetTotalCountBySearch(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     get(id?: number | undefined): Promise<UsersDetailsModel> {
//         let url_ = this.baseUrl + "/api/Users/GetAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGet(_response);
//         });
//     }

//     protected processGet(response: Response): Promise<UsersDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UsersDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UsersDetailsModel>(null as any);
//     }

//     getUserByEmail(userEmail?: string | null | undefined): Promise<UsersDetailsModel> {
//         let url_ = this.baseUrl + "/api/Users/GetUserByEmail?";
//         if (userEmail !== undefined && userEmail !== null)
//             url_ += "userEmail=" + encodeURIComponent("" + userEmail) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetUserByEmail(_response);
//         });
//     }

//     protected processGetUserByEmail(response: Response): Promise<UsersDetailsModel> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             result200 = UsersDetailsModel.fromJS(resultData200);
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UsersDetailsModel>(null as any);
//     }

//     registerUser(users: UsersCreateModel): Promise<number> {
//         let url_ = this.baseUrl + "/api/Users/RegisterUserAsync";
//         url_ = url_.replace(/[?&]$/, "");

//         const content_ = JSON.stringify(users);

//         let options_: RequestInit = {
//             body: content_,
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processRegisterUser(_response);
//         });
//     }

//     protected processRegisterUser(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Users/UpdateAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (roles !== undefined && roles !== null)
//             url_ += "roles=" + encodeURIComponent("" + roles) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processUpdate(_response);
//         });
//     }

//     protected processUpdate(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistoryTotalCount(id?: number | undefined): Promise<number> {
//         let url_ = this.baseUrl + "/api/Users/GetHistoryTotalCountAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistoryTotalCount(_response);
//         });
//     }

//     protected processGetHistoryTotalCount(response: Response): Promise<number> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//                 result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<number>(null as any);
//     }

//     getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UsersHistoryModel[]> {
//         let url_ = this.baseUrl + "/api/Users/GetHistoryAsync?";
//         if (id === null)
//             throw new Error("The parameter 'id' cannot be null.");
//         else if (id !== undefined)
//             url_ += "id=" + encodeURIComponent("" + id) + "&";
//         if (pageNumber === null)
//             throw new Error("The parameter 'pageNumber' cannot be null.");
//         else if (pageNumber !== undefined)
//             url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
//         if (pageSize === null)
//             throw new Error("The parameter 'pageSize' cannot be null.");
//         else if (pageSize !== undefined)
//             url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: RequestInit = {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json"
//             }
//         };

//         return this.http.fetch(url_, options_).then((_response: Response) => {
//             return this.processGetHistory(_response);
//         });
//     }

//     protected processGetHistory(response: Response): Promise<UsersHistoryModel[]> {
//         const status = response.status;
//         let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
//         if (status === 200) {
//             return response.text().then((_responseText) => {
//             let result200: any = null;
//             let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
//             if (Array.isArray(resultData200)) {
//                 result200 = [] as any;
//                 for (let item of resultData200)
//                     result200!.push(UsersHistoryModel.fromJS(item));
//             }
//             else {
//                 result200 = <any>null;
//             }
//             return result200;
//             });
//         } else if (status !== 200 && status !== 204) {
//             return response.text().then((_responseText) => {
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//             });
//         }
//         return Promise.resolve<UsersHistoryModel[]>(null as any);
//     }
// }

// export class VisitReminderDetailsModel implements IVisitReminderDetailsModel {
//     id!: number;
//     customer_id!: number;
//     user_id!: number;
//     reminder!: Date;

//     constructor(data?: IVisitReminderDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.customer_id = _data["customer_id"];
//             this.user_id = _data["user_id"];
//             this.reminder = _data["reminder"] ? new Date(_data["reminder"].toString()) : <any>undefined;
//         }
//     }

//     static fromJS(data: any): VisitReminderDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new VisitReminderDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["customer_id"] = this.customer_id;
//         data["user_id"] = this.user_id;
//         data["reminder"] = this.reminder ? this.reminder.toISOString() : <any>undefined;
//         return data;
//     }
// }

// export interface IVisitReminderDetailsModel {
//     id: number;
//     customer_id: number;
//     user_id: number;
//     reminder: Date;
// }

// export class UserDetailsModel implements IUserDetailsModel {
//     id!: number;
//     userName?: string | undefined;
//     email?: string | undefined;
//     firstName?: string | undefined;
//     lastName?: string | undefined;
//     roles?: string | undefined;
//     lastLoginDateTime!: Date;

//     constructor(data?: IUserDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.userName = _data["userName"];
//             this.email = _data["email"];
//             this.firstName = _data["firstName"];
//             this.lastName = _data["lastName"];
//             this.roles = _data["roles"];
//             this.lastLoginDateTime = _data["lastLoginDateTime"] ? new Date(_data["lastLoginDateTime"].toString()) : <any>undefined;
//         }
//     }

//     static fromJS(data: any): UserDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UserDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["userName"] = this.userName;
//         data["email"] = this.email;
//         data["firstName"] = this.firstName;
//         data["lastName"] = this.lastName;
//         data["roles"] = this.roles;
//         data["lastLoginDateTime"] = this.lastLoginDateTime ? this.lastLoginDateTime.toISOString() : <any>undefined;
//         return data;
//     }
// }

// export interface IUserDetailsModel {
//     id: number;
//     userName?: string | undefined;
//     email?: string | undefined;
//     firstName?: string | undefined;
//     lastName?: string | undefined;
//     roles?: string | undefined;
//     lastLoginDateTime: Date;
// }

// export class HistoryModelBase implements IHistoryModelBase {
//     sysStartTime!: Date;
//     sysEndTime!: Date;

//     constructor(data?: IHistoryModelBase) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.sysStartTime = _data["sysStartTime"] ? new Date(_data["sysStartTime"].toString()) : <any>undefined;
//             this.sysEndTime = _data["sysEndTime"] ? new Date(_data["sysEndTime"].toString()) : <any>undefined;
//         }
//     }

//     static fromJS(data: any): HistoryModelBase {
//         data = typeof data === 'object' ? data : {};
//         let result = new HistoryModelBase();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["sysStartTime"] = this.sysStartTime ? this.sysStartTime.toISOString() : <any>undefined;
//         data["sysEndTime"] = this.sysEndTime ? this.sysEndTime.toISOString() : <any>undefined;
//         return data;
//     }
// }

// export interface IHistoryModelBase {
//     sysStartTime: Date;
//     sysEndTime: Date;
// }

// export class UserHistoryModel extends HistoryModelBase implements IUserHistoryModel {
//     id!: number;
//     userName?: string | undefined;
//     email?: string | undefined;
//     firstName?: string | undefined;
//     lastName?: string | undefined;
//     roles?: string | undefined;
//     lastLoginDateTime!: Date;

//     constructor(data?: IUserHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.userName = _data["userName"];
//             this.email = _data["email"];
//             this.firstName = _data["firstName"];
//             this.lastName = _data["lastName"];
//             this.roles = _data["roles"];
//             this.lastLoginDateTime = _data["lastLoginDateTime"] ? new Date(_data["lastLoginDateTime"].toString()) : <any>undefined;
//         }
//     }

//     static override fromJS(data: any): UserHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UserHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["userName"] = this.userName;
//         data["email"] = this.email;
//         data["firstName"] = this.firstName;
//         data["lastName"] = this.lastName;
//         data["roles"] = this.roles;
//         data["lastLoginDateTime"] = this.lastLoginDateTime ? this.lastLoginDateTime.toISOString() : <any>undefined;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface IUserHistoryModel extends IHistoryModelBase {
//     id: number;
//     userName?: string | undefined;
//     email?: string | undefined;
//     firstName?: string | undefined;
//     lastName?: string | undefined;
//     roles?: string | undefined;
//     lastLoginDateTime: Date;
// }

// export class CategoryDetailsModel implements ICategoryDetailsModel {
//     id!: number;
//     name?: string | undefined;

//     constructor(data?: ICategoryDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.name = _data["name"];
//         }
//     }

//     static fromJS(data: any): CategoryDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CategoryDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["name"] = this.name;
//         return data;
//     }
// }

// export interface ICategoryDetailsModel {
//     id: number;
//     name?: string | undefined;
// }

// export class CategoryHistoryModel extends HistoryModelBase implements ICategoryHistoryModel {
//     id!: number;
//     name?: string | undefined;

//     constructor(data?: ICategoryHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.name = _data["name"];
//         }
//     }

//     static override fromJS(data: any): CategoryHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CategoryHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["name"] = this.name;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface ICategoryHistoryModel extends IHistoryModelBase {
//     id: number;
//     name?: string | undefined;
// }

// export class CompanyCategoryDetailsModel implements ICompanyCategoryDetailsModel {
//     id!: number;
//     company_id!: number;
//     category_id!: number;
//     price!: number;

//     constructor(data?: ICompanyCategoryDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.company_id = _data["company_id"];
//             this.category_id = _data["category_id"];
//             this.price = _data["price"];
//         }
//     }

//     static fromJS(data: any): CompanyCategoryDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CompanyCategoryDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["company_id"] = this.company_id;
//         data["category_id"] = this.category_id;
//         data["price"] = this.price;
//         return data;
//     }
// }

// export interface ICompanyCategoryDetailsModel {
//     id: number;
//     company_id: number;
//     category_id: number;
//     price: number;
// }

// export class CompanyCategoryHistoryModel extends HistoryModelBase implements ICompanyCategoryHistoryModel {
//     id!: number;
//     company_id!: number;
//     category_id!: number;
//     price!: number;

//     constructor(data?: ICompanyCategoryHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.company_id = _data["company_id"];
//             this.category_id = _data["category_id"];
//             this.price = _data["price"];
//         }
//     }

//     static override fromJS(data: any): CompanyCategoryHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CompanyCategoryHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["company_id"] = this.company_id;
//         data["category_id"] = this.category_id;
//         data["price"] = this.price;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface ICompanyCategoryHistoryModel extends IHistoryModelBase {
//     id: number;
//     company_id: number;
//     category_id: number;
//     price: number;
// }

// export class CompanyDetailsModel implements ICompanyDetailsModel {
//     id!: number;
//     name?: string | undefined;
//     email?: string | undefined;
//     address?: string | undefined;
//     contact!: number;
//     country?: string | undefined;
//     createdOn!: Date;
//     createdBy?: string | undefined;
//     updatedOn!: Date;
//     updatedBy?: string | undefined;
//     isDeleted!: boolean;
//     deletdBy?: string | undefined;
//     deletedOn!: Date;

//     constructor(data?: ICompanyDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.name = _data["name"];
//             this.email = _data["email"];
//             this.address = _data["address"];
//             this.contact = _data["contact"];
//             this.country = _data["country"];
//             this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
//             this.createdBy = _data["createdBy"];
//             this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
//             this.updatedBy = _data["updatedBy"];
//             this.isDeleted = _data["isDeleted"];
//             this.deletdBy = _data["deletdBy"];
//             this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
//         }
//     }

//     static fromJS(data: any): CompanyDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CompanyDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["name"] = this.name;
//         data["email"] = this.email;
//         data["address"] = this.address;
//         data["contact"] = this.contact;
//         data["country"] = this.country;
//         data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
//         data["createdBy"] = this.createdBy;
//         data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
//         data["updatedBy"] = this.updatedBy;
//         data["isDeleted"] = this.isDeleted;
//         data["deletdBy"] = this.deletdBy;
//         data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
//         return data;
//     }
// }

// export interface ICompanyDetailsModel {
//     id: number;
//     name?: string | undefined;
//     email?: string | undefined;
//     address?: string | undefined;
//     contact: number;
//     country?: string | undefined;
//     createdOn: Date;
//     createdBy?: string | undefined;
//     updatedOn: Date;
//     updatedBy?: string | undefined;
//     isDeleted: boolean;
//     deletdBy?: string | undefined;
//     deletedOn: Date;
// }

// export class CompanyCreateModel implements ICompanyCreateModel {
//     name?: string | undefined;
//     email?: string | undefined;
//     address?: string | undefined;
//     contact!: number;
//     country?: string | undefined;

//     constructor(data?: ICompanyCreateModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.name = _data["name"];
//             this.email = _data["email"];
//             this.address = _data["address"];
//             this.contact = _data["contact"];
//             this.country = _data["country"];
//         }
//     }

//     static fromJS(data: any): CompanyCreateModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CompanyCreateModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["name"] = this.name;
//         data["email"] = this.email;
//         data["address"] = this.address;
//         data["contact"] = this.contact;
//         data["country"] = this.country;
//         return data;
//     }
// }

// export interface ICompanyCreateModel {
//     name?: string | undefined;
//     email?: string | undefined;
//     address?: string | undefined;
//     contact: number;
//     country?: string | undefined;
// }

// export class CompanyHistoryModel extends HistoryModelBase implements ICompanyHistoryModel {
//     id!: number;
//     name?: string | undefined;
//     email?: string | undefined;
//     address?: string | undefined;
//     contact!: number;
//     country?: string | undefined;
//     createdOn!: Date;
//     createdBy?: string | undefined;
//     updatedOn!: Date;
//     updatedBy?: string | undefined;
//     isDeleted!: boolean;
//     deletdBy?: string | undefined;
//     deletedOn!: Date;

//     constructor(data?: ICompanyHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.name = _data["name"];
//             this.email = _data["email"];
//             this.address = _data["address"];
//             this.contact = _data["contact"];
//             this.country = _data["country"];
//             this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
//             this.createdBy = _data["createdBy"];
//             this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
//             this.updatedBy = _data["updatedBy"];
//             this.isDeleted = _data["isDeleted"];
//             this.deletdBy = _data["deletdBy"];
//             this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
//         }
//     }

//     static override fromJS(data: any): CompanyHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CompanyHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["name"] = this.name;
//         data["email"] = this.email;
//         data["address"] = this.address;
//         data["contact"] = this.contact;
//         data["country"] = this.country;
//         data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
//         data["createdBy"] = this.createdBy;
//         data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
//         data["updatedBy"] = this.updatedBy;
//         data["isDeleted"] = this.isDeleted;
//         data["deletdBy"] = this.deletdBy;
//         data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface ICompanyHistoryModel extends IHistoryModelBase {
//     id: number;
//     name?: string | undefined;
//     email?: string | undefined;
//     address?: string | undefined;
//     contact: number;
//     country?: string | undefined;
//     createdOn: Date;
//     createdBy?: string | undefined;
//     updatedOn: Date;
//     updatedBy?: string | undefined;
//     isDeleted: boolean;
//     deletdBy?: string | undefined;
//     deletedOn: Date;
// }

// export class CustomerDetailsModel implements ICustomerDetailsModel {
//     id!: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     contact_No!: number;
//     email?: string | undefined;
//     dob!: Date;
//     address?: string | undefined;
//     gender?: string | undefined;

//     constructor(data?: ICustomerDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.firstname = _data["firstname"];
//             this.lastname = _data["lastname"];
//             this.contact_No = _data["contact_No"];
//             this.email = _data["email"];
//             this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
//             this.address = _data["address"];
//             this.gender = _data["gender"];
//         }
//     }

//     static fromJS(data: any): CustomerDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CustomerDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["firstname"] = this.firstname;
//         data["lastname"] = this.lastname;
//         data["contact_No"] = this.contact_No;
//         data["email"] = this.email;
//         data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
//         data["address"] = this.address;
//         data["gender"] = this.gender;
//         return data;
//     }
// }

// export interface ICustomerDetailsModel {
//     id: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     contact_No: number;
//     email?: string | undefined;
//     dob: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
// }

// export class CustomerCreateModel implements ICustomerCreateModel {
//     id!: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     contact_No!: number;
//     email?: string | undefined;
//     dob!: Date;
//     address?: string | undefined;
//     gender?: string | undefined;

//     constructor(data?: ICustomerCreateModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.firstname = _data["firstname"];
//             this.lastname = _data["lastname"];
//             this.contact_No = _data["contact_No"];
//             this.email = _data["email"];
//             this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
//             this.address = _data["address"];
//             this.gender = _data["gender"];
//         }
//     }

//     static fromJS(data: any): CustomerCreateModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CustomerCreateModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["firstname"] = this.firstname;
//         data["lastname"] = this.lastname;
//         data["contact_No"] = this.contact_No;
//         data["email"] = this.email;
//         data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
//         data["address"] = this.address;
//         data["gender"] = this.gender;
//         return data;
//     }
// }

// export interface ICustomerCreateModel {
//     id: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     contact_No: number;
//     email?: string | undefined;
//     dob: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
// }

// export class CustomerHistoryModel extends HistoryModelBase implements ICustomerHistoryModel {
//     id!: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     contact_No!: number;
//     email?: string | undefined;
//     dob!: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
//     createdOn!: Date;
//     createdBy?: string | undefined;
//     updatedOn!: Date;
//     updatedBy?: string | undefined;
//     isDeleted!: boolean;
//     deletdBy?: string | undefined;
//     deletedOn!: Date;

//     constructor(data?: ICustomerHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.firstname = _data["firstname"];
//             this.lastname = _data["lastname"];
//             this.contact_No = _data["contact_No"];
//             this.email = _data["email"];
//             this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
//             this.address = _data["address"];
//             this.gender = _data["gender"];
//             this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
//             this.createdBy = _data["createdBy"];
//             this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
//             this.updatedBy = _data["updatedBy"];
//             this.isDeleted = _data["isDeleted"];
//             this.deletdBy = _data["deletdBy"];
//             this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
//         }
//     }

//     static override fromJS(data: any): CustomerHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new CustomerHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["firstname"] = this.firstname;
//         data["lastname"] = this.lastname;
//         data["contact_No"] = this.contact_No;
//         data["email"] = this.email;
//         data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
//         data["address"] = this.address;
//         data["gender"] = this.gender;
//         data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
//         data["createdBy"] = this.createdBy;
//         data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
//         data["updatedBy"] = this.updatedBy;
//         data["isDeleted"] = this.isDeleted;
//         data["deletdBy"] = this.deletdBy;
//         data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface ICustomerHistoryModel extends IHistoryModelBase {
//     id: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     contact_No: number;
//     email?: string | undefined;
//     dob: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
//     createdOn: Date;
//     createdBy?: string | undefined;
//     updatedOn: Date;
//     updatedBy?: string | undefined;
//     isDeleted: boolean;
//     deletdBy?: string | undefined;
//     deletedOn: Date;
// }

// export class LocationDetailsModel implements ILocationDetailsModel {
//     id!: number;
//     user_id!: number;
//     customer_id!: number;
//     longitude?: string | undefined;
//     lattitude?: string | undefined;

//     constructor(data?: ILocationDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.user_id = _data["user_id"];
//             this.customer_id = _data["customer_id"];
//             this.longitude = _data["longitude"];
//             this.lattitude = _data["lattitude"];
//         }
//     }

//     static fromJS(data: any): LocationDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new LocationDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["user_id"] = this.user_id;
//         data["customer_id"] = this.customer_id;
//         data["longitude"] = this.longitude;
//         data["lattitude"] = this.lattitude;
//         return data;
//     }
// }

// export interface ILocationDetailsModel {
//     id: number;
//     user_id: number;
//     customer_id: number;
//     longitude?: string | undefined;
//     lattitude?: string | undefined;
// }

// export class LocationHistoryModel extends HistoryModelBase implements ILocationHistoryModel {
//     id!: number;
//     user_id!: number;
//     customer_id!: number;
//     longitude?: string | undefined;
//     lattitude?: string | undefined;

//     constructor(data?: ILocationHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.user_id = _data["user_id"];
//             this.customer_id = _data["customer_id"];
//             this.longitude = _data["longitude"];
//             this.lattitude = _data["lattitude"];
//         }
//     }

//     static override fromJS(data: any): LocationHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new LocationHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["user_id"] = this.user_id;
//         data["customer_id"] = this.customer_id;
//         data["longitude"] = this.longitude;
//         data["lattitude"] = this.lattitude;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface ILocationHistoryModel extends IHistoryModelBase {
//     id: number;
//     user_id: number;
//     customer_id: number;
//     longitude?: string | undefined;
//     lattitude?: string | undefined;
// }

// export class NotesDetailsModel implements INotesDetailsModel {
//     id!: number;
//     description?: string | undefined;
//     user_id!: number;
//     customer_id!: number;

//     constructor(data?: INotesDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.description = _data["description"];
//             this.user_id = _data["user_id"];
//             this.customer_id = _data["customer_id"];
//         }
//     }

//     static fromJS(data: any): NotesDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new NotesDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["description"] = this.description;
//         data["user_id"] = this.user_id;
//         data["customer_id"] = this.customer_id;
//         return data;
//     }
// }

// export interface INotesDetailsModel {
//     id: number;
//     description?: string | undefined;
//     user_id: number;
//     customer_id: number;
// }

// export class NotesHistoryModel extends HistoryModelBase implements INotesHistoryModel {
//     id!: number;
//     description?: string | undefined;
//     user_id!: number;
//     customer_id!: number;

//     constructor(data?: INotesHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.description = _data["description"];
//             this.user_id = _data["user_id"];
//             this.customer_id = _data["customer_id"];
//         }
//     }

//     static override fromJS(data: any): NotesHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new NotesHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["description"] = this.description;
//         data["user_id"] = this.user_id;
//         data["customer_id"] = this.customer_id;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface INotesHistoryModel extends IHistoryModelBase {
//     id: number;
//     description?: string | undefined;
//     user_id: number;
//     customer_id: number;
// }

// export class PasscodeDetailsModel implements IPasscodeDetailsModel {
//     id!: number;
//     user_id!: number;
//     password?: string | undefined;
//     hint?: string | undefined;

//     constructor(data?: IPasscodeDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.user_id = _data["user_id"];
//             this.password = _data["password"];
//             this.hint = _data["hint"];
//         }
//     }

//     static fromJS(data: any): PasscodeDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new PasscodeDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["user_id"] = this.user_id;
//         data["password"] = this.password;
//         data["hint"] = this.hint;
//         return data;
//     }
// }

// export interface IPasscodeDetailsModel {
//     id: number;
//     user_id: number;
//     password?: string | undefined;
//     hint?: string | undefined;
// }

// export class PasscodeHistoryModel extends HistoryModelBase implements IPasscodeHistoryModel {
//     id!: number;
//     user_id!: number;
//     password?: string | undefined;
//     hint?: string | undefined;

//     constructor(data?: IPasscodeHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.user_id = _data["user_id"];
//             this.password = _data["password"];
//             this.hint = _data["hint"];
//         }
//     }

//     static override fromJS(data: any): PasscodeHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new PasscodeHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["user_id"] = this.user_id;
//         data["password"] = this.password;
//         data["hint"] = this.hint;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface IPasscodeHistoryModel extends IHistoryModelBase {
//     id: number;
//     user_id: number;
//     password?: string | undefined;
//     hint?: string | undefined;
// }

// export class RoleDetailsModel implements IRoleDetailsModel {
//     id!: number;
//     type?: string | undefined;

//     constructor(data?: IRoleDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.type = _data["type"];
//         }
//     }

//     static fromJS(data: any): RoleDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new RoleDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["type"] = this.type;
//         return data;
//     }
// }

// export interface IRoleDetailsModel {
//     id: number;
//     type?: string | undefined;
// }

// export class RoleHistoryModel extends HistoryModelBase implements IRoleHistoryModel {
//     id!: number;
//     type?: string | undefined;

//     constructor(data?: IRoleHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.type = _data["type"];
//         }
//     }

//     static override fromJS(data: any): RoleHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new RoleHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["type"] = this.type;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface IRoleHistoryModel extends IHistoryModelBase {
//     id: number;
//     type?: string | undefined;
// }

// export class UserCreateModel implements IUserCreateModel {
//     userName?: string | undefined;
//     email?: string | undefined;
//     firstName?: string | undefined;
//     lastName?: string | undefined;
//     roles?: string | undefined;

//     constructor(data?: IUserCreateModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.userName = _data["userName"];
//             this.email = _data["email"];
//             this.firstName = _data["firstName"];
//             this.lastName = _data["lastName"];
//             this.roles = _data["roles"];
//         }
//     }

//     static fromJS(data: any): UserCreateModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UserCreateModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["userName"] = this.userName;
//         data["email"] = this.email;
//         data["firstName"] = this.firstName;
//         data["lastName"] = this.lastName;
//         data["roles"] = this.roles;
//         return data;
//     }
// }

// export interface IUserCreateModel {
//     userName?: string | undefined;
//     email?: string | undefined;
//     firstName?: string | undefined;
//     lastName?: string | undefined;
//     roles?: string | undefined;
// }

// export class UserRoleDetailsModel implements IUserRoleDetailsModel {
//     id!: number;
//     user_id!: number;
//     role_id!: number;

//     constructor(data?: IUserRoleDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.user_id = _data["user_id"];
//             this.role_id = _data["role_id"];
//         }
//     }

//     static fromJS(data: any): UserRoleDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UserRoleDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["user_id"] = this.user_id;
//         data["role_id"] = this.role_id;
//         return data;
//     }
// }

// export interface IUserRoleDetailsModel {
//     id: number;
//     user_id: number;
//     role_id: number;
// }

// export class UserRoleHistoryModel extends HistoryModelBase implements IUserRoleHistoryModel {
//     id!: number;
//     user_id!: number;
//     role_id!: number;

//     constructor(data?: IUserRoleHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.user_id = _data["user_id"];
//             this.role_id = _data["role_id"];
//         }
//     }

//     static override fromJS(data: any): UserRoleHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UserRoleHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["user_id"] = this.user_id;
//         data["role_id"] = this.role_id;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface IUserRoleHistoryModel extends IHistoryModelBase {
//     id: number;
//     user_id: number;
//     role_id: number;
// }

// export class UsersDetailsModel implements IUsersDetailsModel {
//     id!: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     userName?: string | undefined;
//     contact_No!: number;
//     email?: string | undefined;
//     dob!: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
//     lastLogin!: Date;

//     constructor(data?: IUsersDetailsModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.firstname = _data["firstname"];
//             this.lastname = _data["lastname"];
//             this.userName = _data["userName"];
//             this.contact_No = _data["contact_No"];
//             this.email = _data["email"];
//             this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
//             this.address = _data["address"];
//             this.gender = _data["gender"];
//             this.lastLogin = _data["lastLogin"] ? new Date(_data["lastLogin"].toString()) : <any>undefined;
//         }
//     }

//     static fromJS(data: any): UsersDetailsModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UsersDetailsModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["firstname"] = this.firstname;
//         data["lastname"] = this.lastname;
//         data["userName"] = this.userName;
//         data["contact_No"] = this.contact_No;
//         data["email"] = this.email;
//         data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
//         data["address"] = this.address;
//         data["gender"] = this.gender;
//         data["lastLogin"] = this.lastLogin ? this.lastLogin.toISOString() : <any>undefined;
//         return data;
//     }
// }

// export interface IUsersDetailsModel {
//     id: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     userName?: string | undefined;
//     contact_No: number;
//     email?: string | undefined;
//     dob: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
//     lastLogin: Date;
// }

// export class UsersCreateModel implements IUsersCreateModel {
//     id!: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     userName?: string | undefined;
//     contact_No!: number;
//     email?: string | undefined;
//     dob!: Date;
//     address?: string | undefined;
//     gender?: string | undefined;

//     constructor(data?: IUsersCreateModel) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }

//     init(_data?: any) {
//         if (_data) {
//             this.id = _data["id"];
//             this.firstname = _data["firstname"];
//             this.lastname = _data["lastname"];
//             this.userName = _data["userName"];
//             this.contact_No = _data["contact_No"];
//             this.email = _data["email"];
//             this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
//             this.address = _data["address"];
//             this.gender = _data["gender"];
//         }
//     }

//     static fromJS(data: any): UsersCreateModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UsersCreateModel();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["firstname"] = this.firstname;
//         data["lastname"] = this.lastname;
//         data["userName"] = this.userName;
//         data["contact_No"] = this.contact_No;
//         data["email"] = this.email;
//         data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
//         data["address"] = this.address;
//         data["gender"] = this.gender;
//         return data;
//     }
// }

// export interface IUsersCreateModel {
//     id: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     userName?: string | undefined;
//     contact_No: number;
//     email?: string | undefined;
//     dob: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
// }

// export class UsersHistoryModel extends HistoryModelBase implements IUsersHistoryModel {
//     id!: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     userName?: string | undefined;
//     contact_No!: number;
//     email?: string | undefined;
//     dob!: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
//     lastLogin!: Date;
//     createdOn!: Date;
//     createdBy?: string | undefined;
//     updatedOn!: Date;
//     updatedBy?: string | undefined;
//     isDeleted!: boolean;
//     deletdBy?: string | undefined;
//     deletedOn!: Date;

//     constructor(data?: IUsersHistoryModel) {
//         super(data);
//     }

//     override init(_data?: any) {
//         super.init(_data);
//         if (_data) {
//             this.id = _data["id"];
//             this.firstname = _data["firstname"];
//             this.lastname = _data["lastname"];
//             this.userName = _data["userName"];
//             this.contact_No = _data["contact_No"];
//             this.email = _data["email"];
//             this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
//             this.address = _data["address"];
//             this.gender = _data["gender"];
//             this.lastLogin = _data["lastLogin"] ? new Date(_data["lastLogin"].toString()) : <any>undefined;
//             this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
//             this.createdBy = _data["createdBy"];
//             this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
//             this.updatedBy = _data["updatedBy"];
//             this.isDeleted = _data["isDeleted"];
//             this.deletdBy = _data["deletdBy"];
//             this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
//         }
//     }

//     static override fromJS(data: any): UsersHistoryModel {
//         data = typeof data === 'object' ? data : {};
//         let result = new UsersHistoryModel();
//         result.init(data);
//         return result;
//     }

//     override toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["id"] = this.id;
//         data["firstname"] = this.firstname;
//         data["lastname"] = this.lastname;
//         data["userName"] = this.userName;
//         data["contact_No"] = this.contact_No;
//         data["email"] = this.email;
//         data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
//         data["address"] = this.address;
//         data["gender"] = this.gender;
//         data["lastLogin"] = this.lastLogin ? this.lastLogin.toISOString() : <any>undefined;
//         data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
//         data["createdBy"] = this.createdBy;
//         data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
//         data["updatedBy"] = this.updatedBy;
//         data["isDeleted"] = this.isDeleted;
//         data["deletdBy"] = this.deletdBy;
//         data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
//         super.toJSON(data);
//         return data;
//     }
// }

// export interface IUsersHistoryModel extends IHistoryModelBase {
//     id: number;
//     firstname?: string | undefined;
//     lastname?: string | undefined;
//     userName?: string | undefined;
//     contact_No: number;
//     email?: string | undefined;
//     dob: Date;
//     address?: string | undefined;
//     gender?: string | undefined;
//     lastLogin: Date;
//     createdOn: Date;
//     createdBy?: string | undefined;
//     updatedOn: Date;
//     updatedBy?: string | undefined;
//     isDeleted: boolean;
//     deletdBy?: string | undefined;
//     deletedOn: Date;
// }

// export interface FileResponse {
//     data: Blob;
//     status: number;
//     fileName?: string;
//     headers?: { [name: string]: any };
// }

// export class RestClientException extends Error {
//     override message: string;
//     status: number;
//     response: string;
//     headers: { [key: string]: any; };
//     result: any;

//     constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
//         super();

//         this.message = message;
//         this.status = status;
//         this.response = response;
//         this.headers = headers;
//         this.result = result;
//     }

//     protected isRestClientException = true;

//     static isRestClientException(obj: any): obj is RestClientException {
//         return obj.isRestClientException === true;
//     }
// }

// function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
//     throw new RestClientException(message, status, response, headers, result);
// }
// }
