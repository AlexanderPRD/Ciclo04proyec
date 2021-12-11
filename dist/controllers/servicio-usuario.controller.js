"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioUsuarioController = class ServicioUsuarioController {
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    async getUsuario(id) {
        return this.servicioRepository.serorig(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/servicios/{id}/usuario', {
        responses: {
            '200': {
                description: 'Usuario belonging to Servicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Usuario) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioUsuarioController.prototype, "getUsuario", null);
ServicioUsuarioController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ServicioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ServicioRepository])
], ServicioUsuarioController);
exports.ServicioUsuarioController = ServicioUsuarioController;
//# sourceMappingURL=servicio-usuario.controller.js.map