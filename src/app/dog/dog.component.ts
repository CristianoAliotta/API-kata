import { Component } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent {
  randomDogImage: any;

  constructor(private imagesService: ImagesService) { }

  getRandomDog(): void {
    this.imagesService.getRandomDogImage().subscribe(
      (response) => {
        this.randomDogImage = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
