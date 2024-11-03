import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RootService, VideoEntityControllerService, VideoForm, VideoRequestBody } from '../../api';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {




  constructor(private formBuilder: FormBuilder, private videoService: RootService) {

  }

  videoFile: Blob | undefined
  minatureFile: Blob | undefined

  form = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // user: new FormControl('dupa', [Validators.required])
  })

  onFileSelected(event: Event) {
    console.log(event)
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        this.videoFile = target.files[0]
    }
  }

  onMinatureSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        this.minatureFile = target.files[0]
    }
  }



  onSubmit()
  {



    const videoForm: VideoForm = {
      ...this.form.value
    }

    console.log(`: ${this.videoFile} ${this.minatureFile}`)

    if (this.videoFile && this.minatureFile)
    this.videoService.dupa(videoForm, this.videoFile, this.minatureFile).subscribe(
      val => console.log(val)
  )
  }

}
