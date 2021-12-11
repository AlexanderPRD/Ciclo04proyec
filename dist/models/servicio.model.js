"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
let Servicio = class Servicio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "origen", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "destino", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "hora", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "encomienda", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "valor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => usuario_model_1.Usuario, { name: 'serorig' }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "serviorigen", void 0);
Servicio = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Servicio);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.model.js.map