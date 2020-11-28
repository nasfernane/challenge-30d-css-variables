'use strict';

// récupération des trois input
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // récupère data-sizing pour définir l'unité des nouvelles valeurs
    const suffix = this.dataset.sizing || '';
    // associe à la propriété correspondant à l'évènement sa nouvelle valeur
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
