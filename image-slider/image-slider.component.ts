import { Component } from '@angular/core';
import { PROJECT_ONE, PROJECT_TWO } from '../imgage_refs';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {

  // === Properties ===
  currentImgIdx = 0;
  currentProject = PROJECT_ONE
  currentImgSrc = this.currentProject[this.currentImgIdx];

  allProjects = [
    PROJECT_ONE,
    PROJECT_TWO
  ]


  // === Methods ===
  increaseCount() {
    this.currentImgIdx = (this.currentImgIdx +1) % this.currentProject.length;
    this.currentImgSrc = this.currentProject[this.currentImgIdx];
}


  decreaseCount() {
    this.currentImgIdx = (this.currentImgIdx -1 + this.currentProject.length) % this.currentProject.length
    this.currentImgSrc = this.currentProject[this.currentImgIdx];
}


 switchCurrentProject(projectNum: number){
  this.currentProject = this.allProjects[projectNum]
  this.currentImgSrc = this.currentProject[0]
 }


}
