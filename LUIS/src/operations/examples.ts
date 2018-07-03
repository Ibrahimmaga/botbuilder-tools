/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/examplesMappers";
import { LuisAuthoringContext } from "../luisAuthoringContext";

/** Class representing a Examples. */
export class Examples {
  private readonly client: LuisAuthoringContext;

  /**
   * Create a Examples.
   * @param {LuisAuthoringContext} client Reference to the service client.
   */
  constructor(client: LuisAuthoringContext) {
    this.client = client;
  }

  /**
   * Adds a labeled example to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject} exampleLabelObject An example label with the expected intent and
   * entities.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async addWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LabelExampleResponse>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            azureRegion,
            appId,
            versionId,
            exampleLabelObject
          },
          options),
        addOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Adds a batch of labeled examples to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject[]} exampleLabelObjectArray Array of examples.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async batchWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.BatchLabelExample[]>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            azureRegion,
            appId,
            versionId,
            exampleLabelObjectArray
          },
          options),
        batchOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Returns examples to be reviewed.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExamplesListOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async listWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: Models.ExamplesListOptionalParams): Promise<msRest.HttpOperationResponse<Models.LabeledUtterance[]>> {
    let skip = (options && options.skip !== undefined) ? options.skip : 0;
    let take = (options && options.take !== undefined) ? options.take : 100;

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            azureRegion,
            appId,
            versionId,
            skip,
            take
          },
          options),
        listOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Deletes the labeled example with the specified ID.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {number} exampleId The example ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async deleteMethodWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        msRest.createOperationArguments(
          {
            azureRegion,
            appId,
            versionId,
            exampleId
          },
          options),
        deleteMethodOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Adds a labeled example to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject} exampleLabelObject An example label with the expected intent and
   * entities.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LabelExampleResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.LabelExampleResponse} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject): Promise<Models.LabelExampleResponse>;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options: msRest.RequestOptionsBase): Promise<Models.LabelExampleResponse>;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  add(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LabelExampleResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.LabelExampleResponse>;
    if (!callback) {
      return this.addWithHttpOperationResponse(azureRegion, appId, versionId, exampleLabelObject, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.LabelExampleResponse);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.addWithHttpOperationResponse(azureRegion, appId, versionId, exampleLabelObject, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.LabelExampleResponse;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Adds a batch of labeled examples to the application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExampleLabelObject[]} exampleLabelObjectArray Array of examples.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.BatchLabelExample[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[]): Promise<Models.BatchLabelExample[]>;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options: msRest.RequestOptionsBase): Promise<Models.BatchLabelExample[]>;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  batch(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.BatchLabelExample[]>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.BatchLabelExample[]>;
    if (!callback) {
      return this.batchWithHttpOperationResponse(azureRegion, appId, versionId, exampleLabelObjectArray, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.BatchLabelExample[]);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.batchWithHttpOperationResponse(azureRegion, appId, versionId, exampleLabelObjectArray, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.BatchLabelExample[];
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Returns examples to be reviewed.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {ExamplesListOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LabeledUtterance[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string): Promise<Models.LabeledUtterance[]>;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: Models.ExamplesListOptionalParams): Promise<Models.LabeledUtterance[]>;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: Models.ExamplesListOptionalParams, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  list(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: Models.ExamplesListOptionalParams, callback?: msRest.ServiceCallback<Models.LabeledUtterance[]>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.LabeledUtterance[]>;
    if (!callback) {
      return this.listWithHttpOperationResponse(azureRegion, appId, versionId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.LabeledUtterance[]);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(azureRegion, appId, versionId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.LabeledUtterance[];
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Deletes the labeled example with the specified ID.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {number} exampleId The example ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number): Promise<Models.OperationStatus>;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.OperationStatus>;
    if (!callback) {
      return this.deleteMethodWithHttpOperationResponse(azureRegion, appId, versionId, exampleId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.OperationStatus);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.deleteMethodWithHttpOperationResponse(azureRegion, appId, versionId, exampleId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.OperationStatus;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/example",
  urlParameters: [
    {
      parameterPath: "azureRegion",
      skipEncoding: true,
      mapper: {
        required: true,
        serializedName: "AzureRegion",
        type: {
          name: "Enum",
          allowedValues: [
            "westus",
            "westeurope",
            "southeastasia",
            "eastus2",
            "westcentralus",
            "westus2",
            "eastus",
            "southcentralus",
            "northeurope",
            "eastasia",
            "australiaeast",
            "brazilsouth"
          ]
        }
      }
    },
    {
      parameterPath: "appId",
      mapper: {
        required: true,
        serializedName: "appId",
        type: {
          name: "Uuid"
        }
      }
    },
    {
      parameterPath: "versionId",
      mapper: {
        required: true,
        serializedName: "versionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: "exampleLabelObject",
    mapper: {
      ...Mappers.ExampleLabelObject,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    201: {
      bodyMapper: Mappers.LabelExampleResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const batchOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    {
      parameterPath: "azureRegion",
      skipEncoding: true,
      mapper: {
        required: true,
        serializedName: "AzureRegion",
        type: {
          name: "Enum",
          allowedValues: [
            "westus",
            "westeurope",
            "southeastasia",
            "eastus2",
            "westcentralus",
            "westus2",
            "eastus",
            "southcentralus",
            "northeurope",
            "eastasia",
            "australiaeast",
            "brazilsouth"
          ]
        }
      }
    },
    {
      parameterPath: "appId",
      mapper: {
        required: true,
        serializedName: "appId",
        type: {
          name: "Uuid"
        }
      }
    },
    {
      parameterPath: "versionId",
      mapper: {
        required: true,
        serializedName: "versionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: "exampleLabelObjectArray",
    mapper: {
      required: true,
      serializedName: "exampleLabelObjectArray",
      type: {
        name: "Sequence",
        element: {
          serializedName: "ExampleLabelObjectElementType",
          type: {
            name: "Composite",
            className: "ExampleLabelObject"
          }
        }
      }
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            serializedName: "BatchLabelExampleElementType",
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    207: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            serializedName: "BatchLabelExampleElementType",
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    {
      parameterPath: "azureRegion",
      skipEncoding: true,
      mapper: {
        required: true,
        serializedName: "AzureRegion",
        type: {
          name: "Enum",
          allowedValues: [
            "westus",
            "westeurope",
            "southeastasia",
            "eastus2",
            "westcentralus",
            "westus2",
            "eastus",
            "southcentralus",
            "northeurope",
            "eastasia",
            "australiaeast",
            "brazilsouth"
          ]
        }
      }
    },
    {
      parameterPath: "appId",
      mapper: {
        required: true,
        serializedName: "appId",
        type: {
          name: "Uuid"
        }
      }
    },
    {
      parameterPath: "versionId",
      mapper: {
        required: true,
        serializedName: "versionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "skip",
      mapper: {
        serializedName: "skip",
        defaultValue: 0,
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    },
    {
      parameterPath: "take",
      mapper: {
        serializedName: "take",
        defaultValue: 100,
        constraints: {
          InclusiveMaximum: 500,
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            serializedName: "LabeledUtteranceElementType",
            type: {
              name: "Composite",
              className: "LabeledUtterance"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/examples/{exampleId}",
  urlParameters: [
    {
      parameterPath: "azureRegion",
      skipEncoding: true,
      mapper: {
        required: true,
        serializedName: "AzureRegion",
        type: {
          name: "Enum",
          allowedValues: [
            "westus",
            "westeurope",
            "southeastasia",
            "eastus2",
            "westcentralus",
            "westus2",
            "eastus",
            "southcentralus",
            "northeurope",
            "eastasia",
            "australiaeast",
            "brazilsouth"
          ]
        }
      }
    },
    {
      parameterPath: "appId",
      mapper: {
        required: true,
        serializedName: "appId",
        type: {
          name: "Uuid"
        }
      }
    },
    {
      parameterPath: "versionId",
      mapper: {
        required: true,
        serializedName: "versionId",
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "exampleId",
      mapper: {
        required: true,
        serializedName: "exampleId",
        type: {
          name: "Number"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer: new msRest.Serializer(Mappers)
};