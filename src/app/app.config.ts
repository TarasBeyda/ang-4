import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface FilePaths {
  cssPaths: string;
}

export const AppConfig: FilePaths = {
  cssPaths: "/src/style.css"
};
