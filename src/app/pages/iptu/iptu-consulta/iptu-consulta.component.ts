import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PrefeituraService } from 'src/app/shared/prefeitura.service';

import * as toastr from 'toastr';
@Component({
  selector: 'app-iptu-consulta',
  templateUrl: './iptu-consulta.component.html',
  styleUrls: ['./iptu-consulta.component.css']
})
export class IptuConsultaComponent implements OnInit {

  consultaIptuForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private prefeituraService: PrefeituraService,
    private readonly loaderService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.consultaIptuForm = this.formBuilder.group({
      documento: ['', [Validators.required]],
    });
  }
  
  get f() {
    return this.consultaIptuForm.controls;
  }

  consultarIptu() {
    this.submitted = true;
    if (this.consultaIptuForm.invalid) {
      return;
    }
    this.router.navigate(['iptu/detalhes']);
  }

}
