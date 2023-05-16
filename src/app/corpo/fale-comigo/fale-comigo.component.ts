import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import  emailjs  from '@emailjs/browser'
import { PopupFaleComigoComponent } from '../../services/popup-fale-comigo/popup-fale-comigo.component';

@Component({
  selector: 'app-fale-comigo',
  templateUrl: './fale-comigo.component.html',
  styleUrls: ['./fale-comigo.component.scss']
})

export class FaleComigoComponent implements OnInit{
  verificacao: boolean = false;
  momentForm!: FormGroup;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder)
  { }

  ngOnInit(): void {
    this.momentForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email]],
      text: ['']

      })
    console.log(this.email)
  }
  
  get nome() {
    return this.momentForm.get('nome')!
  }
  get email() {
    return this.momentForm.get('email')!
  }
  get text() {
    return this.momentForm.get('text')!
  }
  toggle() {
    
  }
  submit() {

    if (!this.momentForm.valid || null) {
      return;
    }
    const templateParams = {
      from_name: this.nome?.value,
      message: this.text?.value,
      email: this.email?.value
    }

    emailjs.send("service_0jxfdn9", "template_h5rboec", templateParams, "QfxWJz0hjj2jJZZjP")
      .then((res: any) => {
        let dialogRef = this.matDialog.open(PopupFaleComigoComponent, {
          enterAnimationDuration: '400ms',
          exitAnimationDuration:'400ms'
          })
        }, (err) => {
          console.log("O erro", err)
      }).finally(() => {
        return this.verificacao = false;
      });
      this.email.get(' ');
      this.nome.get(' ');
      this.text.get(' ');
      return this.verificacao = true;
   }
}
