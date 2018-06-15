"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var foto_component_1 = require('../foto/foto.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var CadastroComponent = (function () {
    /*
    Eu alterei o imput, ai não precisa mais disso
    constructor() {
        this.foto.url = "";
        this.foto.titulo = "";
        this.foto.descricao = "";
    }
    */
    function CadastroComponent(http, fb) {
        this.foto = new foto_component_1.FotoComponent();
        this.http = http;
        this.meuForm = fb.group({
            titulo: [
                '',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)
                ])
            ],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        /*$event: para fazer o load só do form*/
        event.preventDefault();
        console.log(this.foto);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        /*Enviar como JSON*/
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(function () {
            console.log('Cadastrado com sucesso!');
            _this.foto = new foto_component_1.FotoComponent();
        }, function (erro) { return console.log("Deu erro! " + erro); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map