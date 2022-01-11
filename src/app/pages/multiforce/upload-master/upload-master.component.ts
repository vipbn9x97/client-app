import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/core/services/utils/utilities.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-master',
  templateUrl: './upload-master.component.html',
  styleUrls: ['./upload-master.component.scss']
})
export class UploadMasterComponent implements OnInit {

  constructor(
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  uploadFile(files: FileList) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `Bạn có muốn upload file ${files[0].name}?`,
        icon: 'warning',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true
      })
      .then(result => {
        if (result.value && files.length > 0) {
          this.utilService.uploadSupporter(files.item(0))
            .subscribe(() => swalWithBootstrapButtons.fire(
              'Successful!',
              `Upload thành công file ${files[0].name}.`,
              'success'
            ));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            '',
            'error'
          );
        }
      });
  }

}
