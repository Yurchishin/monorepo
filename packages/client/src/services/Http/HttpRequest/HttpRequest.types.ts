import HttpURL from '../HttpURL'
import HttpMethod from '../HttpMethod'
import HttpHeaders from '../HttpHeaders'
import HttpBody from '../HttpBody'

export type HttpRequestOptions = Omit<RequestInit, 'url' | 'method' | 'headers' | 'body'>

export type HttpRequestInit = HttpRequestOptions & {
    url: HttpURL;
    method?: HttpMethod;
    headers?: HttpHeaders;
    body?: HttpBody;
}
