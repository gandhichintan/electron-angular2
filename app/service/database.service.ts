import { Injectable } from "@angular/core";
import { getConnectionManager, Connection, ConnectionOptions, createConnection } from "typeorm";

@Injectable()
export class AvolDataContext {

    connection: Connection;
    options: ConnectionOptions;

    constructor() {
        this.options = require("config.json");
    }

    getConnection = () => {
        return createConnection(this.options)
    }
}