"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./../lib/main");
require("reflect-metadata");
let Usuario = class Usuario {
    constructor() {
        this.id = 12;
        const keys = Reflect.getMetadata('restcontroller', this) || [];
        console.log(keys);
    }
    metodo(httpServer) {
        httpServer.res.json({ teste: this.id });
    }
};
__decorate([
    main_1.Get('/:id')
], Usuario.prototype, "metodo", null);
Usuario = __decorate([
    main_1.Controller({ url: '/usuario', cors: "*" })
], Usuario);
exports.Usuario = Usuario;