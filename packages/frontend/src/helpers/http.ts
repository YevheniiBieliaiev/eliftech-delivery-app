import { HttpMethod, HttpHeaders, HttpContentType } from '../common/enums';
import type {
  ISetRequestOptions,
  IRequestWithData,
  IGetRequest,
  ErrorResponse,
} from '../common/interfaces';
import { HttpError } from '../helpers';
import { store } from '../store';

class Http {
  private setRequestOptions({
    method,
    contentType = HttpContentType.APPLICATION_JSON,
    body,
    needAuth,
  }: ISetRequestOptions): RequestInit {
    const requestHeaders: HeadersInit = {};

    const fetchOptions: RequestInit = {
      method,
      headers: requestHeaders,
    };

    if (needAuth) {
      requestHeaders[HttpHeaders.AUTHORIZATION] = `Bearer ${
        store.getState().auth.id
      }`;
    }

    if (body && contentType === HttpContentType.APPLICATION_JSON) {
      requestHeaders[HttpHeaders.CONTENT_TYPE] = contentType;
      fetchOptions.body =
        typeof body === 'string' ? body : JSON.stringify(body);
    }

    return fetchOptions;
  }

  private async makeRequest<T = unknown>(
    url: string,
    options: RequestInit,
  ): Promise<T> {
    const apiUrl = url;
    const response = await fetch(apiUrl, options);
    const resStatus = response.status;

    if (!response.ok) {
      const message: ErrorResponse = await response.json();
      throw new HttpError({
        status: resStatus,
        message: message.error,
      });
    }

    return response.json() as Promise<T>;
  }

  public get<T>({ url, headers }: IGetRequest) {
    const fetchOptions = this.setRequestOptions({
      method: HttpMethod.GET,
      needAuth: headers?.needAuth,
    });

    return this.makeRequest<T>(url, fetchOptions);
  }

  public post<T>({ url, body, headers }: IRequestWithData) {
    const fetchOptions = this.setRequestOptions({
      method: HttpMethod.POST,
      body,
      contentType: headers?.contentType,
      needAuth: headers?.needAuth,
    });

    return this.makeRequest<T>(url, fetchOptions);
  }

  public put<T>({ url, body, headers }: IRequestWithData) {
    const fetchOptions = this.setRequestOptions({
      method: HttpMethod.PUT,
      body,
      contentType: headers?.contentType,
      needAuth: true,
    });

    return this.makeRequest<T>(url, fetchOptions);
  }

  //TODO: delete
  // public delete() {}
}

export const http = new Http();
