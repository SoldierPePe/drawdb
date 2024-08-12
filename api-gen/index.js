/* eslint-disable */
import axios from "axios";
import dotenv from "dotenv";
import { promises } from "node:fs";
import { dirname, resolve } from "node:path";
import { generateApi } from "swagger-typescript-api";

dotenv.config();

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// run time of execution
const startTime = Date.now();
const baseUrl = `${process.env.VITE_API_ENDPOINT}`;
const templates = resolve(__dirname, "templates");

async function getSwaggreFile() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/swagger-json`);
    // const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'swagger.json')))
    // remove /api/v1 from the response
    data.paths = Object.keys(data.paths).reduce((acc, curr) => {
      acc[curr.replace("/api/v1", "").replace("/api","")] = data.paths[curr];
      return acc;
    }, {});
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
async function runGenerateApi() {
  try {
    await generateApi({
      name: "apiService.js",
      output: resolve(__dirname, "../src/core/services/"),
      input: resolve(__dirname, "swagger.json"),
      httpClientType: "axios",
      toJS: true,
      silent: true,
      // templates: templates,
      extractRequestParams: true,

      // prettier: {
      //   printWidth: 120,
      //   tabWidth: 2,
      //   trailingComma: "all",
      //   parser: "javascript",
      // },
      codeGenConstructs: (constructs) => ({
        ...constructs,
        // RecordType: (key, value) => "MyRecord<key, value>",
      }),
      primitiveTypeConstructs: (constructs) => ({
        ...constructs,
        string: {
          "date-time": "Date",
        },
      }),
      // hooks: {
      //   onCreateComponent: component => {
      //   },
      //   onCreateRequestParams: rawType => {
      //   },
      //   onCreateRoute: routeData => {
      //   },
      //   onCreateRouteName: (routeNameInfo, rawRouteInfo) => {
      //   },
      //   onFormatRouteName: (routeInfo, templateRouteName) => {
      //   },
      //   onFormatTypeName: (typeName, rawTypeName, schemaType) => {
      //   },
      //   onInit: configuration => {
      //   },
      //   onPreParseSchema: (originalSchema, typeName, schemaType) => {
      //   },
      //   onParseSchema: (originalSchema, parsedSchema) => {
      //   },
      //   onPrepareConfig: currentConfiguration => {
      //   },
      // },
    });
  } catch (e) {
    console.log(e);
  }
}

async function Run() {
  const swaggerFile = await getSwaggreFile();
  await promises.writeFile(
    resolve(__dirname, "swagger.json"),
    JSON.stringify(swaggerFile)
  );
  console.log("swagger.json created");
  await runGenerateApi();
  console.log("apiService.ts created");
}

Run().then(() => {
  const endTime = Date.now();
  console.log(`Execution time: ${endTime - startTime}ms`);
  process.exit(0);
});
