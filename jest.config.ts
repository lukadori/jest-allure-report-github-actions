import type { Config } from "jest";
import * as os from "node:os";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "allure-jest/jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.test.json",
            },
        ],
    },
    testEnvironmentOptions: {
        environmentInfo: {
            os_platform: os.platform(),
            os_release: os.release(),
            os_version: os.version(),
            node_version: process.version,
        },
    },
};

export default config;
