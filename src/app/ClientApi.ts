export interface IVisitReminderClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderModel[]>;

    getAllDetail(): Promise<VisitReminderView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<UserDetailsModel>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]>;
}

export class VisitReminderClient implements IVisitReminderClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderModel[]> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<VisitReminderModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(VisitReminderModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<VisitReminderModel[]>(null as any);
    }

    getAllDetail(): Promise<VisitReminderView[]> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<VisitReminderView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(VisitReminderView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<VisitReminderView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<VisitReminderModel[]> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<VisitReminderModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(VisitReminderModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<VisitReminderModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<UserDetailsModel> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<UserDetailsModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserDetailsModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserDetailsModel>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/VisitReminder/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]> {
        let url_ = this.baseUrl + "/api/VisitReminder/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<UserHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserHistoryModel[]>(null as any);
    }
}

export interface ICategoryClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryModel[]>;

    getAllDetail(): Promise<CategoryView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<CategoryModel>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CategoryHistoryModel[]>;
}

export class CategoryClient implements ICategoryClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryModel[]> {
        let url_ = this.baseUrl + "/api/Category/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<CategoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CategoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CategoryModel[]>(null as any);
    }

    getAllDetail(): Promise<CategoryView[]> {
        let url_ = this.baseUrl + "/api/Category/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<CategoryView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CategoryView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CategoryView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CategoryModel[]> {
        let url_ = this.baseUrl + "/api/Category/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<CategoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CategoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CategoryModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Category/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Category/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<CategoryModel> {
        let url_ = this.baseUrl + "/api/Category/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<CategoryModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CategoryModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CategoryModel>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Category/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CategoryHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Category/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<CategoryHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CategoryHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CategoryHistoryModel[]>(null as any);
    }
}

export interface ICompanyCategoryClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryModel[]>;

    getAllDetail(): Promise<CompanyCategoryView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<CompanyCategoryModel>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyCategoryHistoryModel[]>;
}

export class CompanyCategoryClient implements ICompanyCategoryClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryModel[]> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<CompanyCategoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyCategoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyCategoryModel[]>(null as any);
    }

    getAllDetail(): Promise<CompanyCategoryView[]> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<CompanyCategoryView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyCategoryView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyCategoryView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyCategoryModel[]> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<CompanyCategoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyCategoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyCategoryModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<CompanyCategoryModel> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<CompanyCategoryModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CompanyCategoryModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyCategoryModel>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/CompanyCategory/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyCategoryHistoryModel[]> {
        let url_ = this.baseUrl + "/api/CompanyCategory/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<CompanyCategoryHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyCategoryHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyCategoryHistoryModel[]>(null as any);
    }
}

export interface ICompanyClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyModel[]>;

    getAllDetail(): Promise<CompanyView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<CompanyModel>;

    getCompanyByEmail(companyEmail?: string | null | undefined): Promise<CompanyModel>;

    registerUser(company: CompanyCreateModel): Promise<number>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyHistoryModel[]>;
}

export class CompanyClient implements ICompanyClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyModel[]> {
        let url_ = this.baseUrl + "/api/Company/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<CompanyModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyModel[]>(null as any);
    }

    getAllDetail(): Promise<CompanyView[]> {
        let url_ = this.baseUrl + "/api/Company/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<CompanyView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CompanyModel[]> {
        let url_ = this.baseUrl + "/api/Company/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<CompanyModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Company/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Company/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<CompanyModel> {
        let url_ = this.baseUrl + "/api/Company/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<CompanyModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CompanyModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyModel>(null as any);
    }

    getCompanyByEmail(companyEmail?: string | null | undefined): Promise<CompanyModel> {
        let url_ = this.baseUrl + "/api/Company/GetCompanyByEmail?";
        if (companyEmail !== undefined && companyEmail !== null)
            url_ += "companyEmail=" + encodeURIComponent("" + companyEmail) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCompanyByEmail(_response);
        });
    }

    protected processGetCompanyByEmail(response: Response): Promise<CompanyModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CompanyModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyModel>(null as any);
    }

    registerUser(company: CompanyCreateModel): Promise<number> {
        let url_ = this.baseUrl + "/api/Company/RegisterUserAsync";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(company);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRegisterUser(_response);
        });
    }

    protected processRegisterUser(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Company/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Company/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CompanyHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Company/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<CompanyHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CompanyHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CompanyHistoryModel[]>(null as any);
    }
}

export interface ICustomerClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerModel[]>;

    getAllDetail(): Promise<CustomerView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<CustomerModel>;

    getCustomerByEmail(customerEmail?: string | null | undefined): Promise<CustomerModel>;

    registerUser(customer: CustomerCreateModel): Promise<number>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CustomerHistoryModel[]>;
}

export class CustomerClient implements ICustomerClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerModel[]> {
        let url_ = this.baseUrl + "/api/Customer/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<CustomerModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CustomerModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerModel[]>(null as any);
    }

    getAllDetail(): Promise<CustomerView[]> {
        let url_ = this.baseUrl + "/api/Customer/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<CustomerView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CustomerView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<CustomerModel[]> {
        let url_ = this.baseUrl + "/api/Customer/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<CustomerModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CustomerModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Customer/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Customer/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<CustomerModel> {
        let url_ = this.baseUrl + "/api/Customer/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<CustomerModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CustomerModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerModel>(null as any);
    }

    getCustomerByEmail(customerEmail?: string | null | undefined): Promise<CustomerModel> {
        let url_ = this.baseUrl + "/api/Customer/GetCustomerByEmail?";
        if (customerEmail !== undefined && customerEmail !== null)
            url_ += "customerEmail=" + encodeURIComponent("" + customerEmail) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCustomerByEmail(_response);
        });
    }

    protected processGetCustomerByEmail(response: Response): Promise<CustomerModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CustomerModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerModel>(null as any);
    }

    registerUser(customer: CustomerCreateModel): Promise<number> {
        let url_ = this.baseUrl + "/api/Customer/RegisterUserAsync";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(customer);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRegisterUser(_response);
        });
    }

    protected processRegisterUser(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Customer/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Customer/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<CustomerHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Customer/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<CustomerHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CustomerHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerHistoryModel[]>(null as any);
    }
}

export interface IDBClient {

    checkConnection(): Promise<FileResponse | null>;
}

export class DBClient implements IDBClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    checkConnection(): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/api/v1/DB";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCheckConnection(_response);
        });
    }

    protected processCheckConnection(response: Response): Promise<FileResponse | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            let fileNameMatch = contentDisposition ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(contentDisposition) : undefined;
            let fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[3] || fileNameMatch[2] : undefined;
            if (fileName) {
                fileName = decodeURIComponent(fileName);
            } else {
                fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
                fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            }
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse | null>(null as any);
    }
}

export interface ILocationClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationModel[]>;

    getAllDetail(): Promise<LocationView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<LocationModel>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<LocationHistoryModel[]>;
}

export class LocationClient implements ILocationClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationModel[]> {
        let url_ = this.baseUrl + "/api/Location/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<LocationModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(LocationModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<LocationModel[]>(null as any);
    }

    getAllDetail(): Promise<LocationView[]> {
        let url_ = this.baseUrl + "/api/Location/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<LocationView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(LocationView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<LocationView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<LocationModel[]> {
        let url_ = this.baseUrl + "/api/Location/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<LocationModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(LocationModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<LocationModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Location/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Location/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<LocationModel> {
        let url_ = this.baseUrl + "/api/Location/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<LocationModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = LocationModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<LocationModel>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Location/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Location/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<LocationHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Location/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<LocationHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(LocationHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<LocationHistoryModel[]>(null as any);
    }
}

export interface INotesClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesModel[]>;

    getAllDetail(): Promise<NotesView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<UserDetailsModel>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<NotesHistoryModel[]>;
}

export class NotesClient implements INotesClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesModel[]> {
        let url_ = this.baseUrl + "/api/Notes/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<NotesModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(NotesModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<NotesModel[]>(null as any);
    }

    getAllDetail(): Promise<NotesView[]> {
        let url_ = this.baseUrl + "/api/Notes/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<NotesView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(NotesView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<NotesView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<NotesModel[]> {
        let url_ = this.baseUrl + "/api/Notes/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<NotesModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(NotesModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<NotesModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Notes/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Notes/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<UserDetailsModel> {
        let url_ = this.baseUrl + "/api/Notes/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<UserDetailsModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserDetailsModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserDetailsModel>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Notes/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Notes/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<NotesHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Notes/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<NotesHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(NotesHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<NotesHistoryModel[]>(null as any);
    }
}

export interface IPasscodeClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeModel[]>;

    getAllDetail(): Promise<PasscodeView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<PasscodeModel>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<PasscodeHistoryModel[]>;
}

export class PasscodeClient implements IPasscodeClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeModel[]> {
        let url_ = this.baseUrl + "/api/Passcode/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<PasscodeModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PasscodeModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PasscodeModel[]>(null as any);
    }

    getAllDetail(): Promise<PasscodeView[]> {
        let url_ = this.baseUrl + "/api/Passcode/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<PasscodeView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PasscodeView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PasscodeView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<PasscodeModel[]> {
        let url_ = this.baseUrl + "/api/Passcode/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<PasscodeModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PasscodeModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PasscodeModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Passcode/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Passcode/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<PasscodeModel> {
        let url_ = this.baseUrl + "/api/Passcode/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<PasscodeModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PasscodeModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PasscodeModel>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Passcode/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Passcode/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<PasscodeHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Passcode/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<PasscodeHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(PasscodeHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PasscodeHistoryModel[]>(null as any);
    }
}

export interface IRoleClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleModel[]>;

    getAllDetail(): Promise<RoleView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<RoleModel>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<RoleHistoryModel[]>;
}

export class RoleClient implements IRoleClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleModel[]> {
        let url_ = this.baseUrl + "/api/Role/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<RoleModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(RoleModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RoleModel[]>(null as any);
    }

    getAllDetail(): Promise<RoleView[]> {
        let url_ = this.baseUrl + "/api/Role/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<RoleView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(RoleView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RoleView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<RoleModel[]> {
        let url_ = this.baseUrl + "/api/Role/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<RoleModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(RoleModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RoleModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Role/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Role/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<RoleModel> {
        let url_ = this.baseUrl + "/api/Role/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<RoleModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = RoleModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RoleModel>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Role/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Role/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<RoleHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Role/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<RoleHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(RoleHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RoleHistoryModel[]>(null as any);
    }
}

export interface IUserClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<UserDetailsModel>;

    getUserByEmail(userEmail?: string | null | undefined): Promise<UserDetailsModel>;

    registerUser(user: UserCreateModel): Promise<number>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]>;
}

export class UserClient implements IUserClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]> {
        let url_ = this.baseUrl + "/api/v1/User/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<UserDetailsModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserDetailsModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserDetailsModel[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserDetailsModel[]> {
        let url_ = this.baseUrl + "/api/v1/User/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<UserDetailsModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserDetailsModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserDetailsModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/v1/User/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/v1/User/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<UserDetailsModel> {
        let url_ = this.baseUrl + "/api/v1/User/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<UserDetailsModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserDetailsModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserDetailsModel>(null as any);
    }

    getUserByEmail(userEmail?: string | null | undefined): Promise<UserDetailsModel> {
        let url_ = this.baseUrl + "/api/v1/User/GetUserByEmail?";
        if (userEmail !== undefined && userEmail !== null)
            url_ += "userEmail=" + encodeURIComponent("" + userEmail) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUserByEmail(_response);
        });
    }

    protected processGetUserByEmail(response: Response): Promise<UserDetailsModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserDetailsModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserDetailsModel>(null as any);
    }

    registerUser(user: UserCreateModel): Promise<number> {
        let url_ = this.baseUrl + "/api/v1/User/RegisterUserAsync";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(user);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRegisterUser(_response);
        });
    }

    protected processRegisterUser(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/v1/User/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/v1/User/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserHistoryModel[]> {
        let url_ = this.baseUrl + "/api/v1/User/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<UserHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserHistoryModel[]>(null as any);
    }
}

export interface IUserRoleClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleModel[]>;

    getAllDetail(): Promise<UserRoleView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<UserRoleModel>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserRoleHistoryModel[]>;
}

export class UserRoleClient implements IUserRoleClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleModel[]> {
        let url_ = this.baseUrl + "/api/UserRole/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<UserRoleModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserRoleModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserRoleModel[]>(null as any);
    }

    getAllDetail(): Promise<UserRoleView[]> {
        let url_ = this.baseUrl + "/api/UserRole/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<UserRoleView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserRoleView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserRoleView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UserRoleModel[]> {
        let url_ = this.baseUrl + "/api/UserRole/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<UserRoleModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserRoleModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserRoleModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/UserRole/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/UserRole/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<UserRoleModel> {
        let url_ = this.baseUrl + "/api/UserRole/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<UserRoleModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserRoleModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserRoleModel>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/UserRole/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UserRoleHistoryModel[]> {
        let url_ = this.baseUrl + "/api/UserRole/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<UserRoleHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserRoleHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UserRoleHistoryModel[]>(null as any);
    }
}

export interface IUsersClient {

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersModel[]>;

    getAllDetail(): Promise<UsersView[]>;

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersModel[]>;

    getTotalCount(): Promise<number>;

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number>;

    get(id?: number | undefined): Promise<UsersModel>;

    getUserByEmail(userEmail?: string | null | undefined): Promise<UsersModel>;

    registerUser(users: UsersCreateModel): Promise<number>;

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number>;

    getHistoryTotalCount(id?: number | undefined): Promise<number>;

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UsersHistoryModel[]>;
}

export class UsersClient implements IUsersClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:44370";
    }

    getAll(pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersModel[]> {
        let url_ = this.baseUrl + "/api/Users/GetAllAsync?";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<UsersModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UsersModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UsersModel[]>(null as any);
    }

    getAllDetail(): Promise<UsersView[]> {
        let url_ = this.baseUrl + "/api/Users/GetAllDetailAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllDetail(_response);
        });
    }

    protected processGetAllDetail(response: Response): Promise<UsersView[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UsersView.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UsersView[]>(null as any);
    }

    getAllBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined, pageNumber?: number | null | undefined, pageSize?: number | null | undefined): Promise<UsersModel[]> {
        let url_ = this.baseUrl + "/api/Users/GetAllBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        if (pageNumber !== undefined && pageNumber !== null)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize !== undefined && pageSize !== null)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAllBySearch(_response);
        });
    }

    protected processGetAllBySearch(response: Response): Promise<UsersModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UsersModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UsersModel[]>(null as any);
    }

    getTotalCount(): Promise<number> {
        let url_ = this.baseUrl + "/api/Users/GetTotalCountAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCount(_response);
        });
    }

    protected processGetTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getTotalCountBySearch(columnName?: string | null | undefined, searchValue?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Users/GetTotalCountBySearchAsync?";
        if (columnName !== undefined && columnName !== null)
            url_ += "columnName=" + encodeURIComponent("" + columnName) + "&";
        if (searchValue !== undefined && searchValue !== null)
            url_ += "searchValue=" + encodeURIComponent("" + searchValue) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetTotalCountBySearch(_response);
        });
    }

    protected processGetTotalCountBySearch(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    get(id?: number | undefined): Promise<UsersModel> {
        let url_ = this.baseUrl + "/api/Users/GetAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<UsersModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UsersModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UsersModel>(null as any);
    }

    getUserByEmail(userEmail?: string | null | undefined): Promise<UsersModel> {
        let url_ = this.baseUrl + "/api/Users/GetUserByEmail?";
        if (userEmail !== undefined && userEmail !== null)
            url_ += "userEmail=" + encodeURIComponent("" + userEmail) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUserByEmail(_response);
        });
    }

    protected processGetUserByEmail(response: Response): Promise<UsersModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UsersModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UsersModel>(null as any);
    }

    registerUser(users: UsersCreateModel): Promise<number> {
        let url_ = this.baseUrl + "/api/Users/RegisterUserAsync";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(users);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRegisterUser(_response);
        });
    }

    protected processRegisterUser(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    update(id?: number | undefined, roles?: string | null | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Users/UpdateAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (roles !== undefined && roles !== null)
            url_ += "roles=" + encodeURIComponent("" + roles) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "PUT",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistoryTotalCount(id?: number | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Users/GetHistoryTotalCountAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistoryTotalCount(_response);
        });
    }

    protected processGetHistoryTotalCount(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    getHistory(id?: number | undefined, pageNumber?: number | undefined, pageSize?: number | undefined): Promise<UsersHistoryModel[]> {
        let url_ = this.baseUrl + "/api/Users/GetHistoryAsync?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetHistory(_response);
        });
    }

    protected processGetHistory(response: Response): Promise<UsersHistoryModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UsersHistoryModel.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UsersHistoryModel[]>(null as any);
    }
}

export class VisitReminderModel implements IVisitReminderModel {
    id!: number;
    customer_id!: number;
    user_id!: number;
    reminder!: Date;

    constructor(data?: IVisitReminderModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.customer_id = _data["customer_id"];
            this.user_id = _data["user_id"];
            this.reminder = _data["reminder"] ? new Date(_data["reminder"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): VisitReminderModel {
        data = typeof data === 'object' ? data : {};
        let result = new VisitReminderModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["customer_id"] = this.customer_id;
        data["user_id"] = this.user_id;
        data["reminder"] = this.reminder ? this.reminder.toISOString() : <any>undefined;
        return data;
    }
}

export interface IVisitReminderModel {
    id: number;
    customer_id: number;
    user_id: number;
    reminder: Date;
}

export class VisitReminderView implements IVisitReminderView {
    id!: number;
    customer_id!: number;
    user_id!: number;
    customerFullName?: string | undefined;
    userFullName?: string | undefined;
    reminder!: Date;

    constructor(data?: IVisitReminderView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.customer_id = _data["customer_id"];
            this.user_id = _data["user_id"];
            this.customerFullName = _data["customerFullName"];
            this.userFullName = _data["userFullName"];
            this.reminder = _data["reminder"] ? new Date(_data["reminder"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): VisitReminderView {
        data = typeof data === 'object' ? data : {};
        let result = new VisitReminderView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["customer_id"] = this.customer_id;
        data["user_id"] = this.user_id;
        data["customerFullName"] = this.customerFullName;
        data["userFullName"] = this.userFullName;
        data["reminder"] = this.reminder ? this.reminder.toISOString() : <any>undefined;
        return data;
    }
}

export interface IVisitReminderView {
    id: number;
    customer_id: number;
    user_id: number;
    customerFullName?: string | undefined;
    userFullName?: string | undefined;
    reminder: Date;
}

export class UserDetailsModel implements IUserDetailsModel {
    id!: number;
    userName?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    roles?: string | undefined;
    lastLoginDateTime!: Date;

    constructor(data?: IUserDetailsModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.userName = _data["userName"];
            this.email = _data["email"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.roles = _data["roles"];
            this.lastLoginDateTime = _data["lastLoginDateTime"] ? new Date(_data["lastLoginDateTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): UserDetailsModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserDetailsModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["userName"] = this.userName;
        data["email"] = this.email;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["roles"] = this.roles;
        data["lastLoginDateTime"] = this.lastLoginDateTime ? this.lastLoginDateTime.toISOString() : <any>undefined;
        return data;
    }
}

export interface IUserDetailsModel {
    id: number;
    userName?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    roles?: string | undefined;
    lastLoginDateTime: Date;
}

export class HistoryModelBase implements IHistoryModelBase {
    sysStartTime!: Date;
    sysEndTime!: Date;

    constructor(data?: IHistoryModelBase) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.sysStartTime = _data["sysStartTime"] ? new Date(_data["sysStartTime"].toString()) : <any>undefined;
            this.sysEndTime = _data["sysEndTime"] ? new Date(_data["sysEndTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): HistoryModelBase {
        data = typeof data === 'object' ? data : {};
        let result = new HistoryModelBase();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sysStartTime"] = this.sysStartTime ? this.sysStartTime.toISOString() : <any>undefined;
        data["sysEndTime"] = this.sysEndTime ? this.sysEndTime.toISOString() : <any>undefined;
        return data;
    }
}

export interface IHistoryModelBase {
    sysStartTime: Date;
    sysEndTime: Date;
}

export class UserHistoryModel extends HistoryModelBase implements IUserHistoryModel {
    id!: number;
    userName?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    roles?: string | undefined;
    lastLoginDateTime!: Date;

    constructor(data?: IUserHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.userName = _data["userName"];
            this.email = _data["email"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.roles = _data["roles"];
            this.lastLoginDateTime = _data["lastLoginDateTime"] ? new Date(_data["lastLoginDateTime"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): UserHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["userName"] = this.userName;
        data["email"] = this.email;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["roles"] = this.roles;
        data["lastLoginDateTime"] = this.lastLoginDateTime ? this.lastLoginDateTime.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IUserHistoryModel extends IHistoryModelBase {
    id: number;
    userName?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    roles?: string | undefined;
    lastLoginDateTime: Date;
}

export class CategoryModel implements ICategoryModel {
    id!: number;
    name?: string | undefined;

    constructor(data?: ICategoryModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): CategoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new CategoryModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ICategoryModel {
    id: number;
    name?: string | undefined;
}

export class CategoryView implements ICategoryView {
    id!: number;
    name?: string | undefined;

    constructor(data?: ICategoryView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): CategoryView {
        data = typeof data === 'object' ? data : {};
        let result = new CategoryView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ICategoryView {
    id: number;
    name?: string | undefined;
}

export class CategoryHistoryModel extends HistoryModelBase implements ICategoryHistoryModel {
    id!: number;
    name?: string | undefined;

    constructor(data?: ICategoryHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static override fromJS(data: any): CategoryHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new CategoryHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        super.toJSON(data);
        return data;
    }
}

export interface ICategoryHistoryModel extends IHistoryModelBase {
    id: number;
    name?: string | undefined;
}

export class CompanyCategoryModel implements ICompanyCategoryModel {
    id!: number;
    company_id!: number;
    category_id!: number;
    price!: number;

    constructor(data?: ICompanyCategoryModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.company_id = _data["company_id"];
            this.category_id = _data["category_id"];
            this.price = _data["price"];
        }
    }

    static fromJS(data: any): CompanyCategoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyCategoryModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["company_id"] = this.company_id;
        data["category_id"] = this.category_id;
        data["price"] = this.price;
        return data;
    }
}

export interface ICompanyCategoryModel {
    id: number;
    company_id: number;
    category_id: number;
    price: number;
}

export class CompanyCategoryView implements ICompanyCategoryView {
    id!: number;
    company_id!: number;
    category_id!: number;
    company?: string | undefined;
    category?: string | undefined;
    price!: number;

    constructor(data?: ICompanyCategoryView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.company_id = _data["company_id"];
            this.category_id = _data["category_id"];
            this.company = _data["company"];
            this.category = _data["category"];
            this.price = _data["price"];
        }
    }

    static fromJS(data: any): CompanyCategoryView {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyCategoryView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["company_id"] = this.company_id;
        data["category_id"] = this.category_id;
        data["company"] = this.company;
        data["category"] = this.category;
        data["price"] = this.price;
        return data;
    }
}

export interface ICompanyCategoryView {
    id: number;
    company_id: number;
    category_id: number;
    company?: string | undefined;
    category?: string | undefined;
    price: number;
}

export class CompanyCategoryHistoryModel extends HistoryModelBase implements ICompanyCategoryHistoryModel {
    id!: number;
    company_id!: number;
    category_id!: number;
    price!: number;

    constructor(data?: ICompanyCategoryHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.company_id = _data["company_id"];
            this.category_id = _data["category_id"];
            this.price = _data["price"];
        }
    }

    static override fromJS(data: any): CompanyCategoryHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyCategoryHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["company_id"] = this.company_id;
        data["category_id"] = this.category_id;
        data["price"] = this.price;
        super.toJSON(data);
        return data;
    }
}

export interface ICompanyCategoryHistoryModel extends IHistoryModelBase {
    id: number;
    company_id: number;
    category_id: number;
    price: number;
}

export class CompanyModel implements ICompanyModel {
    id!: number;
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact!: number;
    country?: string | undefined;

    constructor(data?: ICompanyModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.email = _data["email"];
            this.address = _data["address"];
            this.contact = _data["contact"];
            this.country = _data["country"];
        }
    }

    static fromJS(data: any): CompanyModel {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        data["address"] = this.address;
        data["contact"] = this.contact;
        data["country"] = this.country;
        return data;
    }
}

export interface ICompanyModel {
    id: number;
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact: number;
    country?: string | undefined;
}

export class CompanyView implements ICompanyView {
    id!: number;
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact!: number;
    country?: string | undefined;

    constructor(data?: ICompanyView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.email = _data["email"];
            this.address = _data["address"];
            this.contact = _data["contact"];
            this.country = _data["country"];
        }
    }

    static fromJS(data: any): CompanyView {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        data["address"] = this.address;
        data["contact"] = this.contact;
        data["country"] = this.country;
        return data;
    }
}

export interface ICompanyView {
    id: number;
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact: number;
    country?: string | undefined;
}

export class CompanyCreateModel implements ICompanyCreateModel {
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact!: number;
    country?: string | undefined;

    constructor(data?: ICompanyCreateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.email = _data["email"];
            this.address = _data["address"];
            this.contact = _data["contact"];
            this.country = _data["country"];
        }
    }

    static fromJS(data: any): CompanyCreateModel {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyCreateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["email"] = this.email;
        data["address"] = this.address;
        data["contact"] = this.contact;
        data["country"] = this.country;
        return data;
    }
}

export interface ICompanyCreateModel {
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact: number;
    country?: string | undefined;
}

export class CompanyHistoryModel extends HistoryModelBase implements ICompanyHistoryModel {
    id!: number;
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact!: number;
    country?: string | undefined;
    createdOn!: Date;
    createdBy?: string | undefined;
    updatedOn!: Date;
    updatedBy?: string | undefined;
    isDeleted!: boolean;
    deletdBy?: string | undefined;
    deletedOn!: Date;

    constructor(data?: ICompanyHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.email = _data["email"];
            this.address = _data["address"];
            this.contact = _data["contact"];
            this.country = _data["country"];
            this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            this.createdBy = _data["createdBy"];
            this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            this.updatedBy = _data["updatedBy"];
            this.isDeleted = _data["isDeleted"];
            this.deletdBy = _data["deletdBy"];
            this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): CompanyHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        data["address"] = this.address;
        data["contact"] = this.contact;
        data["country"] = this.country;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["updatedBy"] = this.updatedBy;
        data["isDeleted"] = this.isDeleted;
        data["deletdBy"] = this.deletdBy;
        data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface ICompanyHistoryModel extends IHistoryModelBase {
    id: number;
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    contact: number;
    country?: string | undefined;
    createdOn: Date;
    createdBy?: string | undefined;
    updatedOn: Date;
    updatedBy?: string | undefined;
    isDeleted: boolean;
    deletdBy?: string | undefined;
    deletedOn: Date;
}

export class CustomerModel implements ICustomerModel {
    id!: number;
    fullname?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;

    constructor(data?: ICustomerModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.fullname = _data["fullname"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
        }
    }

    static fromJS(data: any): CustomerModel {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["fullname"] = this.fullname;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        return data;
    }
}

export interface ICustomerModel {
    id: number;
    fullname?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
}

export class CustomerView implements ICustomerView {
    id!: number;
    fullName?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;

    constructor(data?: ICustomerView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.fullName = _data["fullName"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
        }
    }

    static fromJS(data: any): CustomerView {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["fullName"] = this.fullName;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        return data;
    }
}

export interface ICustomerView {
    id: number;
    fullName?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
}

export class CustomerCreateModel implements ICustomerCreateModel {
    id!: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;

    constructor(data?: ICustomerCreateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.firstname = _data["firstname"];
            this.lastname = _data["lastname"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
        }
    }

    static fromJS(data: any): CustomerCreateModel {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerCreateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstname"] = this.firstname;
        data["lastname"] = this.lastname;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        return data;
    }
}

export interface ICustomerCreateModel {
    id: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
}

export class CustomerHistoryModel extends HistoryModelBase implements ICustomerHistoryModel {
    id!: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;
    createdOn!: Date;
    createdBy?: string | undefined;
    updatedOn!: Date;
    updatedBy?: string | undefined;
    isDeleted!: boolean;
    deletdBy?: string | undefined;
    deletedOn!: Date;

    constructor(data?: ICustomerHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.firstname = _data["firstname"];
            this.lastname = _data["lastname"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
            this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            this.createdBy = _data["createdBy"];
            this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            this.updatedBy = _data["updatedBy"];
            this.isDeleted = _data["isDeleted"];
            this.deletdBy = _data["deletdBy"];
            this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): CustomerHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstname"] = this.firstname;
        data["lastname"] = this.lastname;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["updatedBy"] = this.updatedBy;
        data["isDeleted"] = this.isDeleted;
        data["deletdBy"] = this.deletdBy;
        data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface ICustomerHistoryModel extends IHistoryModelBase {
    id: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
    createdOn: Date;
    createdBy?: string | undefined;
    updatedOn: Date;
    updatedBy?: string | undefined;
    isDeleted: boolean;
    deletdBy?: string | undefined;
    deletedOn: Date;
}

export class LocationModel implements ILocationModel {
    id!: number;
    user_id!: number;
    customer_id!: number;
    longitude?: string | undefined;
    lattitude?: string | undefined;

    constructor(data?: ILocationModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.customer_id = _data["customer_id"];
            this.longitude = _data["longitude"];
            this.lattitude = _data["lattitude"];
        }
    }

    static fromJS(data: any): LocationModel {
        data = typeof data === 'object' ? data : {};
        let result = new LocationModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["customer_id"] = this.customer_id;
        data["longitude"] = this.longitude;
        data["lattitude"] = this.lattitude;
        return data;
    }
}

export interface ILocationModel {
    id: number;
    user_id: number;
    customer_id: number;
    longitude?: string | undefined;
    lattitude?: string | undefined;
}

export class LocationView implements ILocationView {
    id!: number;
    user_id!: number;
    customer_id!: number;
    userFullName?: string | undefined;
    customerFullName?: string | undefined;
    lattitude?: string | undefined;
    longitude?: string | undefined;

    constructor(data?: ILocationView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.customer_id = _data["customer_id"];
            this.userFullName = _data["userFullName"];
            this.customerFullName = _data["customerFullName"];
            this.lattitude = _data["lattitude"];
            this.longitude = _data["longitude"];
        }
    }

    static fromJS(data: any): LocationView {
        data = typeof data === 'object' ? data : {};
        let result = new LocationView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["customer_id"] = this.customer_id;
        data["userFullName"] = this.userFullName;
        data["customerFullName"] = this.customerFullName;
        data["lattitude"] = this.lattitude;
        data["longitude"] = this.longitude;
        return data;
    }
}

export interface ILocationView {
    id: number;
    user_id: number;
    customer_id: number;
    userFullName?: string | undefined;
    customerFullName?: string | undefined;
    lattitude?: string | undefined;
    longitude?: string | undefined;
}

export class LocationHistoryModel extends HistoryModelBase implements ILocationHistoryModel {
    id!: number;
    user_id!: number;
    customer_id!: number;
    longitude?: string | undefined;
    lattitude?: string | undefined;

    constructor(data?: ILocationHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.customer_id = _data["customer_id"];
            this.longitude = _data["longitude"];
            this.lattitude = _data["lattitude"];
        }
    }

    static override fromJS(data: any): LocationHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new LocationHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["customer_id"] = this.customer_id;
        data["longitude"] = this.longitude;
        data["lattitude"] = this.lattitude;
        super.toJSON(data);
        return data;
    }
}

export interface ILocationHistoryModel extends IHistoryModelBase {
    id: number;
    user_id: number;
    customer_id: number;
    longitude?: string | undefined;
    lattitude?: string | undefined;
}

export class NotesModel implements INotesModel {
    id!: number;
    description?: string | undefined;
    user_id!: number;
    customer_id!: number;

    constructor(data?: INotesModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.description = _data["description"];
            this.user_id = _data["user_id"];
            this.customer_id = _data["customer_id"];
        }
    }

    static fromJS(data: any): NotesModel {
        data = typeof data === 'object' ? data : {};
        let result = new NotesModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["user_id"] = this.user_id;
        data["customer_id"] = this.customer_id;
        return data;
    }
}

export interface INotesModel {
    id: number;
    description?: string | undefined;
    user_id: number;
    customer_id: number;
}

export class NotesView implements INotesView {
    id!: number;
    description?: string | undefined;
    user_id!: number;
    customer_id!: number;
    userFullName?: string | undefined;
    customerFullName?: string | undefined;

    constructor(data?: INotesView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.description = _data["description"];
            this.user_id = _data["user_id"];
            this.customer_id = _data["customer_id"];
            this.userFullName = _data["userFullName"];
            this.customerFullName = _data["customerFullName"];
        }
    }

    static fromJS(data: any): NotesView {
        data = typeof data === 'object' ? data : {};
        let result = new NotesView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["user_id"] = this.user_id;
        data["customer_id"] = this.customer_id;
        data["userFullName"] = this.userFullName;
        data["customerFullName"] = this.customerFullName;
        return data;
    }
}

export interface INotesView {
    id: number;
    description?: string | undefined;
    user_id: number;
    customer_id: number;
    userFullName?: string | undefined;
    customerFullName?: string | undefined;
}

export class NotesHistoryModel extends HistoryModelBase implements INotesHistoryModel {
    id!: number;
    description?: string | undefined;
    user_id!: number;
    customer_id!: number;

    constructor(data?: INotesHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.description = _data["description"];
            this.user_id = _data["user_id"];
            this.customer_id = _data["customer_id"];
        }
    }

    static override fromJS(data: any): NotesHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new NotesHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["user_id"] = this.user_id;
        data["customer_id"] = this.customer_id;
        super.toJSON(data);
        return data;
    }
}

export interface INotesHistoryModel extends IHistoryModelBase {
    id: number;
    description?: string | undefined;
    user_id: number;
    customer_id: number;
}

export class PasscodeModel implements IPasscodeModel {
    id!: number;
    user_id!: number;
    password?: string | undefined;
    hint?: string | undefined;

    constructor(data?: IPasscodeModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.password = _data["password"];
            this.hint = _data["hint"];
        }
    }

    static fromJS(data: any): PasscodeModel {
        data = typeof data === 'object' ? data : {};
        let result = new PasscodeModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["password"] = this.password;
        data["hint"] = this.hint;
        return data;
    }
}

export interface IPasscodeModel {
    id: number;
    user_id: number;
    password?: string | undefined;
    hint?: string | undefined;
}

export class PasscodeView implements IPasscodeView {
    id!: number;
    user_id!: number;
    userFullName?: string | undefined;
    userName?: string | undefined;
    password?: string | undefined;
    hint?: string | undefined;

    constructor(data?: IPasscodeView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.userFullName = _data["userFullName"];
            this.userName = _data["userName"];
            this.password = _data["password"];
            this.hint = _data["hint"];
        }
    }

    static fromJS(data: any): PasscodeView {
        data = typeof data === 'object' ? data : {};
        let result = new PasscodeView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["userFullName"] = this.userFullName;
        data["userName"] = this.userName;
        data["password"] = this.password;
        data["hint"] = this.hint;
        return data;
    }
}

export interface IPasscodeView {
    id: number;
    user_id: number;
    userFullName?: string | undefined;
    userName?: string | undefined;
    password?: string | undefined;
    hint?: string | undefined;
}

export class PasscodeHistoryModel extends HistoryModelBase implements IPasscodeHistoryModel {
    id!: number;
    user_id!: number;
    password?: string | undefined;
    hint?: string | undefined;

    constructor(data?: IPasscodeHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.password = _data["password"];
            this.hint = _data["hint"];
        }
    }

    static override fromJS(data: any): PasscodeHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new PasscodeHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["password"] = this.password;
        data["hint"] = this.hint;
        super.toJSON(data);
        return data;
    }
}

export interface IPasscodeHistoryModel extends IHistoryModelBase {
    id: number;
    user_id: number;
    password?: string | undefined;
    hint?: string | undefined;
}

export class RoleModel implements IRoleModel {
    id!: number;
    type?: string | undefined;

    constructor(data?: IRoleModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.type = _data["type"];
        }
    }

    static fromJS(data: any): RoleModel {
        data = typeof data === 'object' ? data : {};
        let result = new RoleModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["type"] = this.type;
        return data;
    }
}

export interface IRoleModel {
    id: number;
    type?: string | undefined;
}

export class RoleView implements IRoleView {
    id!: number;
    type?: string | undefined;

    constructor(data?: IRoleView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.type = _data["type"];
        }
    }

    static fromJS(data: any): RoleView {
        data = typeof data === 'object' ? data : {};
        let result = new RoleView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["type"] = this.type;
        return data;
    }
}

export interface IRoleView {
    id: number;
    type?: string | undefined;
}

export class RoleHistoryModel extends HistoryModelBase implements IRoleHistoryModel {
    id!: number;
    type?: string | undefined;

    constructor(data?: IRoleHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.type = _data["type"];
        }
    }

    static override fromJS(data: any): RoleHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new RoleHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["type"] = this.type;
        super.toJSON(data);
        return data;
    }
}

export interface IRoleHistoryModel extends IHistoryModelBase {
    id: number;
    type?: string | undefined;
}

export class UserCreateModel implements IUserCreateModel {
    userName?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    roles?: string | undefined;

    constructor(data?: IUserCreateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userName = _data["userName"];
            this.email = _data["email"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.roles = _data["roles"];
        }
    }

    static fromJS(data: any): UserCreateModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserCreateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["email"] = this.email;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["roles"] = this.roles;
        return data;
    }
}

export interface IUserCreateModel {
    userName?: string | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    roles?: string | undefined;
}

export class UserRoleModel implements IUserRoleModel {
    id!: number;
    user_id!: number;
    role_id!: number;

    constructor(data?: IUserRoleModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.role_id = _data["role_id"];
        }
    }

    static fromJS(data: any): UserRoleModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserRoleModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["role_id"] = this.role_id;
        return data;
    }
}

export interface IUserRoleModel {
    id: number;
    user_id: number;
    role_id: number;
}

export class UserRoleView implements IUserRoleView {
    id!: number;
    user_id!: number;
    role_id!: number;
    userFullName?: string | undefined;
    role?: string | undefined;

    constructor(data?: IUserRoleView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.role_id = _data["role_id"];
            this.userFullName = _data["userFullName"];
            this.role = _data["role"];
        }
    }

    static fromJS(data: any): UserRoleView {
        data = typeof data === 'object' ? data : {};
        let result = new UserRoleView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["role_id"] = this.role_id;
        data["userFullName"] = this.userFullName;
        data["role"] = this.role;
        return data;
    }
}

export interface IUserRoleView {
    id: number;
    user_id: number;
    role_id: number;
    userFullName?: string | undefined;
    role?: string | undefined;
}

export class UserRoleHistoryModel extends HistoryModelBase implements IUserRoleHistoryModel {
    id!: number;
    user_id!: number;
    role_id!: number;

    constructor(data?: IUserRoleHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.user_id = _data["user_id"];
            this.role_id = _data["role_id"];
        }
    }

    static override fromJS(data: any): UserRoleHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserRoleHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["user_id"] = this.user_id;
        data["role_id"] = this.role_id;
        super.toJSON(data);
        return data;
    }
}

export interface IUserRoleHistoryModel extends IHistoryModelBase {
    id: number;
    user_id: number;
    role_id: number;
}

export class UsersModel implements IUsersModel {
    id!: number;
    fullname?: string | undefined;
    userName?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;
    lastLogin!: Date;

    constructor(data?: IUsersModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.fullname = _data["fullname"];
            this.userName = _data["userName"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
            this.lastLogin = _data["lastLogin"] ? new Date(_data["lastLogin"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): UsersModel {
        data = typeof data === 'object' ? data : {};
        let result = new UsersModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["fullname"] = this.fullname;
        data["userName"] = this.userName;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        data["lastLogin"] = this.lastLogin ? this.lastLogin.toISOString() : <any>undefined;
        return data;
    }
}

export interface IUsersModel {
    id: number;
    fullname?: string | undefined;
    userName?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
    lastLogin: Date;
}

export class UsersView implements IUsersView {
    id!: number;
    fullname?: string | undefined;
    userName?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;
    lastLogin!: Date;

    constructor(data?: IUsersView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.fullname = _data["fullname"];
            this.userName = _data["userName"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
            this.lastLogin = _data["lastLogin"] ? new Date(_data["lastLogin"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): UsersView {
        data = typeof data === 'object' ? data : {};
        let result = new UsersView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["fullname"] = this.fullname;
        data["userName"] = this.userName;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        data["lastLogin"] = this.lastLogin ? this.lastLogin.toISOString() : <any>undefined;
        return data;
    }
}

export interface IUsersView {
    id: number;
    fullname?: string | undefined;
    userName?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
    lastLogin: Date;
}

export class UsersCreateModel implements IUsersCreateModel {
    id!: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    userName?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;

    constructor(data?: IUsersCreateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.firstname = _data["firstname"];
            this.lastname = _data["lastname"];
            this.userName = _data["userName"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
        }
    }

    static fromJS(data: any): UsersCreateModel {
        data = typeof data === 'object' ? data : {};
        let result = new UsersCreateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstname"] = this.firstname;
        data["lastname"] = this.lastname;
        data["userName"] = this.userName;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        return data;
    }
}

export interface IUsersCreateModel {
    id: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    userName?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
}

export class UsersHistoryModel extends HistoryModelBase implements IUsersHistoryModel {
    id!: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    userName?: string | undefined;
    contact_No!: number;
    email?: string | undefined;
    dob!: Date;
    address?: string | undefined;
    gender?: string | undefined;
    lastLogin!: Date;
    createdOn!: Date;
    createdBy?: string | undefined;
    updatedOn!: Date;
    updatedBy?: string | undefined;
    isDeleted!: boolean;
    deletdBy?: string | undefined;
    deletedOn!: Date;

    constructor(data?: IUsersHistoryModel) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.id = _data["id"];
            this.firstname = _data["firstname"];
            this.lastname = _data["lastname"];
            this.userName = _data["userName"];
            this.contact_No = _data["contact_No"];
            this.email = _data["email"];
            this.dob = _data["dob"] ? new Date(_data["dob"].toString()) : <any>undefined;
            this.address = _data["address"];
            this.gender = _data["gender"];
            this.lastLogin = _data["lastLogin"] ? new Date(_data["lastLogin"].toString()) : <any>undefined;
            this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            this.createdBy = _data["createdBy"];
            this.updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            this.updatedBy = _data["updatedBy"];
            this.isDeleted = _data["isDeleted"];
            this.deletdBy = _data["deletdBy"];
            this.deletedOn = _data["deletedOn"] ? new Date(_data["deletedOn"].toString()) : <any>undefined;
        }
    }

    static override fromJS(data: any): UsersHistoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new UsersHistoryModel();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstname"] = this.firstname;
        data["lastname"] = this.lastname;
        data["userName"] = this.userName;
        data["contact_No"] = this.contact_No;
        data["email"] = this.email;
        data["dob"] = this.dob ? this.dob.toISOString() : <any>undefined;
        data["address"] = this.address;
        data["gender"] = this.gender;
        data["lastLogin"] = this.lastLogin ? this.lastLogin.toISOString() : <any>undefined;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["updatedBy"] = this.updatedBy;
        data["isDeleted"] = this.isDeleted;
        data["deletdBy"] = this.deletdBy;
        data["deletedOn"] = this.deletedOn ? this.deletedOn.toISOString() : <any>undefined;
        super.toJSON(data);
        return data;
    }
}

export interface IUsersHistoryModel extends IHistoryModelBase {
    id: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    userName?: string | undefined;
    contact_No: number;
    email?: string | undefined;
    dob: Date;
    address?: string | undefined;
    gender?: string | undefined;
    lastLogin: Date;
    createdOn: Date;
    createdBy?: string | undefined;
    updatedOn: Date;
    updatedBy?: string | undefined;
    isDeleted: boolean;
    deletdBy?: string | undefined;
    deletedOn: Date;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class RestClientException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isRestClientException = true;

    static isRestClientException(obj: any): obj is RestClientException {
        return obj.isRestClientException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    throw new RestClientException(message, status, response, headers, result);
}