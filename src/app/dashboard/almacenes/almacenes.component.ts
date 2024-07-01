import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs/operators';
import { AlmacenService } from 'src/app/services/almacen.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent {
  data :any = [];
  dataSource = new MatTableDataSource(this.data);

  displayedColumns: string[] = [
    'id',    
    'almacen',
    'local',
    'tipo',
    'created_at',
    'updated_at',
    'actions',
  ];

  pageSize = 8;
  pageIndex = 0;
  totalData = 0;

  nameAlmacen:FormControl = new FormControl('');
  name:string ='';

  constructor(private almacenService:AlmacenService,
              private snackBarService:SnackbarService
  ){
    this.nameAlmacen.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value =>{
        this.pageSize = 8;
        this.pageIndex = 0;
        this.name =value;
        this.getAlmacenes();
      })
  }

  ngOnInit(): void {
    this.getAlmacenes();
    
  }

  onPageChange(event: PageEvent) {
    if (this.pageSize != event.pageSize) {
      this.pageSize = event.pageSize;
      this.pageIndex = 0;
    } else {
      this.pageIndex = event.pageIndex;
    }
    this.getAlmacenes();
  }

  getAlmacenes(){
  
    const queryParams:any ={
      page: this.pageIndex,
      pageElements:this.pageSize,
      name:this.name
    }
    this.almacenService.getAlmacenes(queryParams).subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource<any>(data.element);
      this.totalData = data.count;
    },
    error=>{
      this.snackBarService.show(error.error.message,'error')
    })
  }
}
