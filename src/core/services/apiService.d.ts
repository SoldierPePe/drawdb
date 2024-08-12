/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}
export interface DiagramRequest {
  data: {
    name: string;
    /** @example "string or id" */
    file?: number | string;
    json?: any;
    /** @example "string or id" */
    strapi_stage?: number | string;
    /** @example "string or id" */
    strapi_assignee?: number | string;
  };
}
export interface DiagramListResponseDataItem {
  id?: number;
  attributes?: Diagram;
}
export interface DiagramListResponse {
  data?: DiagramListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}
export interface Diagram {
  name: string;
  file?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: Date;
                    /** @format date-time */
                    updatedAt?: Date;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: Date;
                                      /** @format date-time */
                                      updatedAt?: Date;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: Date;
                                /** @format date-time */
                                updatedAt?: Date;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: Date;
                          /** @format date-time */
                          updatedAt?: Date;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: Date;
              /** @format date-time */
              updatedAt?: Date;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: Date;
        /** @format date-time */
        updatedAt?: Date;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  json?: any;
  /** @format date-time */
  createdAt?: Date;
  /** @format date-time */
  updatedAt?: Date;
  /** @format date-time */
  publishedAt?: Date;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  strapi_stage?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        color?: string;
        workflow?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              stages?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              contentTypes?: any;
              /** @format date-time */
              createdAt?: Date;
              /** @format date-time */
              updatedAt?: Date;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        permissions?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        /** @format date-time */
        createdAt?: Date;
        /** @format date-time */
        updatedAt?: Date;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  strapi_assignee?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
}
export interface DiagramResponseDataObject {
  id?: number;
  attributes?: Diagram;
}
export interface DiagramResponse {
  data?: DiagramResponseDataObject;
  meta?: object;
}
export interface TemplateRequest {
  data: {
    title: string;
    /** @example "string or id" */
    file?: number | string;
    custom: boolean;
    json?: any;
    /** @example "string or id" */
    strapi_stage?: number | string;
    /** @example "string or id" */
    strapi_assignee?: number | string;
  };
}
export interface TemplateListResponseDataItem {
  id?: number;
  attributes?: Template;
}
export interface TemplateListResponse {
  data?: TemplateListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}
export interface Template {
  title: string;
  file?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: Date;
                    /** @format date-time */
                    updatedAt?: Date;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: Date;
                                      /** @format date-time */
                                      updatedAt?: Date;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: Date;
                                /** @format date-time */
                                updatedAt?: Date;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: Date;
                          /** @format date-time */
                          updatedAt?: Date;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: Date;
              /** @format date-time */
              updatedAt?: Date;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: Date;
        /** @format date-time */
        updatedAt?: Date;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  custom: boolean;
  json?: any;
  /** @format date-time */
  createdAt?: Date;
  /** @format date-time */
  updatedAt?: Date;
  /** @format date-time */
  publishedAt?: Date;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  strapi_stage?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        color?: string;
        workflow?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              stages?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              contentTypes?: any;
              /** @format date-time */
              createdAt?: Date;
              /** @format date-time */
              updatedAt?: Date;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        permissions?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        /** @format date-time */
        createdAt?: Date;
        /** @format date-time */
        updatedAt?: Date;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  strapi_assignee?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
}
export interface TemplateResponseDataObject {
  id?: number;
  attributes?: Template;
}
export interface TemplateResponse {
  data?: TemplateResponseDataObject;
  meta?: object;
}
export interface UploadFile {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  /** @format integer */
  width?: number;
  /** @format integer */
  height?: number;
  formats?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format double */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format date-time */
  createdAt?: Date;
  /** @format date-time */
  updatedAt?: Date;
}
export interface UsersPermissionsRole {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  /** @format date-time */
  createdAt?: Date;
  /** @format date-time */
  updatedAt?: Date;
}
export interface UsersPermissionsUser {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: Date;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: Date;
}
export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}
export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;
export interface GetDiagramsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}
export interface GetTemplatesParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}
export interface UploadIdCreateParams {
  id: string;
}
export interface EmailConfirmationListParams {
  /** confirmation token received by email */
  confirmation?: string;
}
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
  protected stringifyFormItem(formItem: unknown): string;
  protected createFormData(input: Record<string, unknown>): FormData;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  diagrams: {
    /**
     * No description
     *
     * @tags Diagram
     * @name GetDiagrams
     * @request GET:/diagrams
     * @secure
     */
    getDiagrams: (query: GetDiagramsParams, params?: RequestParams) => Promise<AxiosResponse<DiagramListResponse>>;
    /**
     * No description
     *
     * @tags Diagram
     * @name PostDiagrams
     * @request POST:/diagrams
     * @secure
     */
    postDiagrams: (data: DiagramRequest, params?: RequestParams) => Promise<AxiosResponse<DiagramResponse>>;
    /**
     * No description
     *
     * @tags Diagram
     * @name GetDiagramsId
     * @request GET:/diagrams/{id}
     * @secure
     */
    getDiagramsId: (id: number, params?: RequestParams) => Promise<AxiosResponse<DiagramResponse>>;
    /**
     * No description
     *
     * @tags Diagram
     * @name PutDiagramsId
     * @request PUT:/diagrams/{id}
     * @secure
     */
    putDiagramsId: (
      id: number,
      data: DiagramRequest,
      params?: RequestParams,
    ) => Promise<AxiosResponse<DiagramResponse>>;
    /**
     * No description
     *
     * @tags Diagram
     * @name DeleteDiagramsId
     * @request DELETE:/diagrams/{id}
     * @secure
     */
    deleteDiagramsId: (id: number, params?: RequestParams) => Promise<AxiosResponse<number>>;
  };
  templates: {
    /**
     * No description
     *
     * @tags Template
     * @name GetTemplates
     * @request GET:/templates
     * @secure
     */
    getTemplates: (query: GetTemplatesParams, params?: RequestParams) => Promise<AxiosResponse<TemplateListResponse>>;
    /**
     * No description
     *
     * @tags Template
     * @name PostTemplates
     * @request POST:/templates
     * @secure
     */
    postTemplates: (data: TemplateRequest, params?: RequestParams) => Promise<AxiosResponse<TemplateResponse>>;
    /**
     * No description
     *
     * @tags Template
     * @name GetTemplatesId
     * @request GET:/templates/{id}
     * @secure
     */
    getTemplatesId: (id: number, params?: RequestParams) => Promise<AxiosResponse<TemplateResponse>>;
    /**
     * No description
     *
     * @tags Template
     * @name PutTemplatesId
     * @request PUT:/templates/{id}
     * @secure
     */
    putTemplatesId: (
      id: number,
      data: TemplateRequest,
      params?: RequestParams,
    ) => Promise<AxiosResponse<TemplateResponse>>;
    /**
     * No description
     *
     * @tags Template
     * @name DeleteTemplatesId
     * @request DELETE:/templates/{id}
     * @secure
     */
    deleteTemplatesId: (id: number, params?: RequestParams) => Promise<AxiosResponse<number>>;
  };
  upload: {
    /**
     * @description Upload files
     *
     * @tags Upload - File
     * @name UploadCreate
     * @request POST:/upload
     * @secure
     */
    uploadCreate: (
      data: {
        /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
        path?: string;
        /** The ID of the entry which the file(s) will be linked to */
        refId?: string;
        /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
        ref?: string;
        /** The field of the entry which the file(s) will be precisely linked to. */
        field?: string;
        files: File[];
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<UploadFile[]>>;
    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesList
     * @request GET:/upload/files
     * @secure
     */
    filesList: (params?: RequestParams) => Promise<AxiosResponse<UploadFile[]>>;
    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDetail
     * @request GET:/upload/files/{id}
     * @secure
     */
    filesDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<UploadFile>>;
    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDelete
     * @request DELETE:/upload/files/{id}
     * @secure
     */
    filesDelete: (id: string, params?: RequestParams) => Promise<AxiosResponse<UploadFile>>;
  };
  uploadIdId: {
    /**
     * @description Upload file information
     *
     * @tags Upload - File
     * @name UploadIdCreate
     * @request POST:/upload?id={id}
     * @secure
     */
    uploadIdCreate: (
      { id, ...query }: UploadIdCreateParams,
      data: {
        fileInfo?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
        };
        /** @format binary */
        files?: File;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<UploadFile[]>>;
  };
  connect: {
    /**
     * @description Redirects to provider login before being redirect to /auth/{provider}/callback
     *
     * @tags Users-Permissions - Auth
     * @name ConnectDetail
     * @summary Login with a provider
     * @request GET:/connect/{provider}
     * @secure
     */
    connectDetail: (provider: string, params?: RequestParams) => Promise<AxiosResponse<any>>;
  };
  auth: {
    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalCreate
     * @summary Local login
     * @request POST:/auth/local
     * @secure
     */
    localCreate: (
      data: {
        identifier?: string;
        password?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<UsersPermissionsUserRegistration>>;
    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalRegisterCreate
     * @summary Register a user
     * @request POST:/auth/local/register
     * @secure
     */
    localRegisterCreate: (
      data: {
        username?: string;
        email?: string;
        password?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<UsersPermissionsUserRegistration>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name CallbackDetail
     * @summary Default Callback from provider auth
     * @request GET:/auth/{provider}/callback
     * @secure
     */
    callbackDetail: (
      provider: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<UsersPermissionsUserRegistration>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ForgotPasswordCreate
     * @summary Send rest password email
     * @request POST:/auth/forgot-password
     * @secure
     */
    forgotPasswordCreate: (
      data: {
        email?: string;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        ok?: "true";
      }>
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ResetPasswordCreate
     * @summary Rest user password
     * @request POST:/auth/reset-password
     * @secure
     */
    resetPasswordCreate: (
      data: {
        password?: string;
        passwordConfirmation?: string;
        code?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<UsersPermissionsUserRegistration>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ChangePasswordCreate
     * @summary Update user's own password
     * @request POST:/auth/change-password
     * @secure
     */
    changePasswordCreate: (
      data: {
        password: string;
        currentPassword: string;
        passwordConfirmation: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<UsersPermissionsUserRegistration>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name EmailConfirmationList
     * @summary Confirm user email
     * @request GET:/auth/email-confirmation
     * @secure
     */
    emailConfirmationList: (query: EmailConfirmationListParams, params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name SendEmailConfirmationCreate
     * @summary Send confirmation email
     * @request POST:/auth/send-email-confirmation
     * @secure
     */
    sendEmailConfirmationCreate: (
      data: {
        email?: string;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        email?: string;
        sent?: "true";
      }>
    >;
  };
  usersPermissions: {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name PermissionsList
     * @summary Get default generated permissions
     * @request GET:/users-permissions/permissions
     * @secure
     */
    permissionsList: (params?: RequestParams) => Promise<
      AxiosResponse<{
        permissions?: UsersPermissionsPermissionsTree;
      }>
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesList
     * @summary List roles
     * @request GET:/users-permissions/roles
     * @secure
     */
    rolesList: (params?: RequestParams) => Promise<
      AxiosResponse<{
        roles?: (UsersPermissionsRole & {
          nb_users?: number;
        })[];
      }>
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesCreate
     * @summary Create a role
     * @request POST:/users-permissions/roles
     * @secure
     */
    rolesCreate: (
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        ok?: "true";
      }>
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDetail
     * @summary Get a role
     * @request GET:/users-permissions/roles/{id}
     * @secure
     */
    rolesDetail: (
      id: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        role?: UsersPermissionsRole;
      }>
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesUpdate
     * @summary Update a role
     * @request PUT:/users-permissions/roles/{role}
     * @secure
     */
    rolesUpdate: (
      role: string,
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        ok?: "true";
      }>
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDelete
     * @summary Delete a role
     * @request DELETE:/users-permissions/roles/{role}
     * @secure
     */
    rolesDelete: (
      role: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<{
        ok?: "true";
      }>
    >;
  };
  users: {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersList
     * @summary Get list of users
     * @request GET:/users
     * @secure
     */
    usersList: (params?: RequestParams) => Promise<AxiosResponse<UsersPermissionsUser[]>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersCreate
     * @summary Create a user
     * @request POST:/users
     * @secure
     */
    usersCreate: (
      data: {
        email: string;
        username: string;
        password: string;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        }
      >
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDetail
     * @summary Get a user
     * @request GET:/users/{id}
     * @secure
     */
    usersDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<UsersPermissionsUser>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersUpdate
     * @summary Update a user
     * @request PUT:/users/{id}
     * @secure
     */
    usersUpdate: (
      id: string,
      data: {
        email: string;
        username: string;
        password: string;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        }
      >
    >;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDelete
     * @summary Delete a user
     * @request DELETE:/users/{id}
     * @secure
     */
    usersDelete: (id: string, params?: RequestParams) => Promise<AxiosResponse<UsersPermissionsUser>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name GetUsers
     * @summary Get authenticated user info
     * @request GET:/users/me
     * @secure
     */
    getUsers: (params?: RequestParams) => Promise<AxiosResponse<UsersPermissionsUser>>;
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name CountList
     * @summary Get user count
     * @request GET:/users/count
     * @secure
     */
    countList: (params?: RequestParams) => Promise<AxiosResponse<number>>;
  };
}
