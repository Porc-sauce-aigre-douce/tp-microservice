import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-film-page',
  templateUrl: './edit-film-page.component.html',
  styleUrls: ['./edit-film-page.component.css']
})
export class EditFilmPageComponent {
  choisirImage() {
    var inputImage = document.getElementById("inputImage");
    inputImage.click();
    
    // Écouter les changements dans l'input file
    inputImage.addEventListener("change", function() {
      afficherImage();
    });
  }

  // Fonction pour afficher l'image sélectionnée
  afficherImage() {
    var inputImage = document.getElementById("inputImage");
    var imageAffichee = document.getElementById("imageAffichee");

    // Vérifier s'il y a un fichier sélectionné
    if (inputImage.files && inputImage.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        imageAffichee.src = e.target.result;
        imageAffichee.style.display = "block";
      };

      reader.readAsDataURL(inputImage.files[0]);
    }
  }
}
