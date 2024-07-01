import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subject } from 'rxjs';
import { AlmacenService } from 'src/app/services/almacen.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { CreateContactosComponent } from '../create-contactos/create-contactos.component';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-almacenes',
  templateUrl: './create-almacenes.component.html',
  styleUrls: ['./create-almacenes.component.css']
})
export class CreateAlmacenesComponent {
  
  constructor(private almacenService:AlmacenService,
              private snackBarService:SnackbarService,
              private cdr:ChangeDetectorRef,
              private dialog:MatDialog,
              private router:Router,
              private activadeRoute:ActivatedRoute
  ){    
    this.tipoNegocio.valueChanges.subscribe(value=>{
      this.getSubTipoNegocio(value);
    });
    // this.almacenForm.markAllAsTouched();
  }

  dataTipoNegocio:any = [];
  dataSubTipoNegocio:any = [];
  dataTipoNegocioSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  dataSubTipoNegocioSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  tipoNegocio:FormControl = new FormControl('');
  subTipoNegocio:FormControl = new FormControl('');
  clase:FormControl = new FormControl('',[Validators.required]);
  almacen:FormControl = new FormControl('',[Validators.required]);
  razonSocial:FormControl = new FormControl('',[Validators.required]);
  local:FormControl = new FormControl('',[Validators.required]);
  NIT:FormControl = new FormControl('',[Validators.required]);
  metrosCuadrados:FormControl = new FormControl(0,[Validators.required]);
  coeficiente:FormControl = new FormControl(0,[Validators.required]);
  horario:FormControl = new FormControl('',[Validators.required]);
  status:FormControl = new FormControl(true,[Validators.required]);
  telefono:FormControl = new FormControl('',[Validators.required]);
  telefono2:FormControl = new FormControl('',[Validators.required]);
  valorAdministracion:FormControl = new FormControl(0,[Validators.required]);
  nameContacto:FormControl = new FormControl('');

  dataAlmacen:any;



  almacenForm = new FormGroup({
    tipoNegocio: this.tipoNegocio,
    subTipoNegocio:this.subTipoNegocio,
    clase:this.clase,
    almacen:this.almacen,
    razonSocial:this.razonSocial,
    local:this.local,
    NIT:this.NIT,
    metrosCuadrados:this.metrosCuadrados,
    coeficiente:this.coeficiente,
    horario:this.horario,
    status:this.status,
    telefono:this.telefono,
    telefono2:this.telefono2,
    valorAdministracion:this.valorAdministracion
  });
  dataRadioBox:any = [
    {
      label:'Ancla',
      value:1
    },
    {
      label:'Normal',
      value:2
    }
  ]
  
  dataContactos:any[] = [];
  dataSource = new MatTableDataSource<any>(this.dataContactos);
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  displayedColumns = [
    'id',
    'nombres',
    'apellidos',
    'cargo',
    'email',
    'telefono',
    'actions'
  ];

  pageSize = 8;
  pageIndex = 0;
  totalData = 0;

  edit = false;
  idAlmacen:string='';

  ngOnInit(): void {     
    this.getTipoNegocio();
    
    this.nameContacto.valueChanges.subscribe(data=>{
      this.dataSource.filter = data.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    });
    

    const id = this.activadeRoute.snapshot.params['id'];

    if (id){
      this.idAlmacen = id;
      this.almacenService.getAlmacenById(id).subscribe((data:any)=>{
        const dataAlmacen = data.element;
        this.loadAlmacenData(dataAlmacen);
        this.edit = true;
      },
      error=>{
        this.snackBarService.show(error.error.message,'error')
      });      
    }
    else{
      this.almacenForm.markAllAsTouched();
      this.edit = false;
    }    
  }

  loadAlmacenData(dataAlmacen:any){
    if (dataAlmacen){
      this.tipoNegocio.setValue(dataAlmacen.idTipoNegocio);
      this.subTipoNegocio.setValue(dataAlmacen.idSubTipoNegocio);
      this.clase.setValue(dataAlmacen.clase);
      this.almacen.setValue(dataAlmacen.almacen);
      this.razonSocial.setValue(dataAlmacen.razonSocial);
      this.local.setValue(dataAlmacen.local);
      this.NIT.setValue(dataAlmacen.NIT);
      this.metrosCuadrados.setValue(dataAlmacen.metrosCuadrados);
      this.coeficiente.setValue(dataAlmacen.coeficiente);
      this.horario.setValue(dataAlmacen.horario);
      this.status.setValue(dataAlmacen.status);
      this.telefono.setValue(dataAlmacen.telefono);
      this.telefono2.setValue(dataAlmacen.telefono2);
      this.valorAdministracion.setValue(dataAlmacen.valorAdministracion);      
      this.getContactos();
    }
  }

  ngAfterViewInit(): void {    
    this.dataSource.paginator = this.paginator;
  }

  getTipoNegocio(){
    this.dataTipoNegocio = [];
    this.almacenService.getTipoNegocio().subscribe(
      (data:any)=>{        
        if (data) {

          data.elements.forEach((element:any) => {
            this.dataTipoNegocio.push(
              {
                id:element.idTipoNegocio,
                description:element.tipoNegocio
              }
            )
          });
          this.dataTipoNegocioSubject.next(this.dataTipoNegocio);
          this.tipoNegocio.setValue(this.dataTipoNegocio[0].id);
          this.getSubTipoNegocio(this.dataTipoNegocio[0].id);
          this.cdr.detectChanges(); // Detectar cambios
        }
      },
      error =>{
        this.snackBarService.show(error.error.message,'error')
      }
    )
  }

  getSubTipoNegocio(idTipoNegocio:string){
    this.dataSubTipoNegocio = []  ;
    this.almacenService.getSubTipoNegocio(idTipoNegocio).subscribe(
      (data:any)=>{
        if (data){
          data.elements.forEach((element:any) => {
            this.dataSubTipoNegocio.push({
              id:element.idSubTipoNegocio,
              description:element.subTipoNegocio
            });
          });
          this.subTipoNegocio.setValue(this.dataSubTipoNegocio[0].id);
          this.dataSubTipoNegocioSubject.next(this.dataSubTipoNegocio);
          this.cdr.detectChanges(); // Detectar cambios
        }
      },
      error=>{
        this.snackBarService.show(error.error.message,'error')
      }
    )  
  }

  getContactos(){
    if (this.idAlmacen){
      const queryParams ={
        all:true
      }
      this.almacenService.getContactos(this.idAlmacen,queryParams).subscribe((data:any)=>{
        this.dataContactos = data.element;
        this.dataSource = new MatTableDataSource<any>(this.dataContactos);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getContactos();
  }

  createContactos(){
    
    const registroMayor = this.dataContactos.reduce((max,current)=>{
      return (current.idContactoAlmacen > max.idContactoAlmacen) ? current : max
    },{ idContactoAlmacen: 0})

    const dialogRef = this.dialog.open(CreateContactosComponent,{   
      data:{
        indice:registroMayor.idContactoAlmacen
      }   
    })


    dialogRef.afterClosed().subscribe(data=>{

      if (data){
        this.dataContactos.push(data.data);
        this.dataSource = new MatTableDataSource<any>(this.dataContactos);
        this.dataSource.paginator = this.paginator;    
      }      
    })
  }

  save(){
    const auxData = this.loadData();

    if (this.almacenForm.invalid){
      this.almacenForm.markAllAsTouched();
      this.snackBarService.show('Debe digitar todos los campos','error')
      return;
    }

    if (this.edit){
      this.almacenService.putAlmacen(auxData,this.idAlmacen).subscribe((data:any)=>{
        this.snackBarService.show('Almacen Actualizado','success');
        this.router.navigate(['./dashboard/almacen']);
      },
      error=>{
        this.snackBarService.show(error.error.message,'error');
      });
    }
    else{
      this.almacenService.postAlmacen(auxData).subscribe((data:any)=>{
        this.snackBarService.show('Almacen Creado','success');
        this.router.navigate(['./dashboard/almacen']);
      },
      error=>{
        this.snackBarService.show(error.error.message,'error');
      });
    }    
  }

  loadData(){
    const auxData = {
      idTipoNegocio: this.almacenForm.get('tipoNegocio')?.value ? this.almacenForm.get('tipoNegocio')?.value : 0 ,
      idSubTipoNegocio:this.almacenForm.get('subTipoNegocio')?.value ? this.almacenForm.get('subTipoNegocio')?.value : 0,
      clase:this.almacenForm.get('clase')?.value ? this.almacenForm.get('clase')?.value : 2,
      almacen:this.almacenForm.get('almacen')?.value ? this.almacenForm.get('almacen')?.value : '',
      razonSocial:this.almacenForm.get('razonSocial')?.value ? this.almacenForm.get('razonSocial')?.value : '',
      local:this.almacenForm.get('local')?.value ? this.almacenForm.get('local')?.value : '',
      NIT:this.almacenForm.get('NIT')?.value ? this.almacenForm.get('NIT')?.value : '',
      metrosCuadrados:this.almacenForm.get('metrosCuadrados')?.value ? this.almacenForm.get('metrosCuadrados')?.value : 0,
      coeficiente:this.almacenForm.get('coeficiente')?.value ? this.almacenForm.get('coeficiente')?.value : 0,
      horario:this.almacenForm.get('horario')?.value ? this.almacenForm.get('horario')?.value : '',
      status:this.almacenForm.get('status')?.value ? 'S' : 'N',
      telefono:this.almacenForm.get('telefono')?.value ? this.almacenForm.get('telefono')?.value : '',
      telefono2:this.almacenForm.get('telefono2')?.value ? this.almacenForm.get('telefono2')?.value : '',
      valorAdministracion:this.almacenForm.get('valorAdministracion')?.value ? this.almacenForm.get('valorAdministracion')?.value : 0,
      contactos: this.dataContactos ? this.dataContactos : []
    }

    return auxData;
  }

  updateContacto(element:any){
    const dialogRef = this.dialog.open(CreateContactosComponent,{
      data:{
        element:element
      }
    });

    dialogRef.afterClosed().subscribe(data=>{
      const dataModal = data.data;      
      const dato = this.dataContactos.map(contacto =>{
        
        return contacto.idContactoAlmacen === dataModal.idContactoAlmacen ? dataModal : contacto
      });

      this.dataContactos = dato;
      this.dataSource = new MatTableDataSource<any>(this.dataContactos);
      this.dataSource.paginator = this.paginator;   
    })
  }
}
