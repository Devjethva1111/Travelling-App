import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  croppedImagepath = "";
  imageObj = [];
  isLoading = false;

  constructor(public actionSheetController: ActionSheetController, private camera: Camera) { }

  ngOnInit() {
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
      console.log('Data is added', this.imageObj);
  
      this.imageObj.push(this.croppedImagepath);
      
      console.log('Data Add',this.imageObj);
    }, (err) => {
    });
  }
    options(options: any) {
      throw new Error('Method not implemented.');
    }
  
    async openMenu() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Select Image source"',
        buttons: [{
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        } ,{
          text: 'Cancel',
          role: 'cancel'
        }
        ]
      });
      await actionSheet.present();
    }
  }
  
