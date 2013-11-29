/**
 * Breakpoints
 * ===========
 * 
 */

/*(function() {*/

	var objets = [
			{ nom: 'AKTAS', prenom:'Gizem', type: 'T-Shirt', imgPath: 'images/objet-gizem.JPG', formURL: '' },
			{ nom: 'AUDOU', prenom:'Anais', type: 'Siège', imgPath: 'images/objet-anais.JPG', formURL: '' },
			{ nom: 'CARMOIN', prenom:'Emeline', type: 'Marionnette', imgPath: 'images/objet-emeline.JPG', formURL: '' },
			{ nom: 'CAVALEIRO', prenom:'Anne-Caroline', type: 'Oreiller/Plaid', imgPath: 'images/objet-anne-caroline.JPG', formURL: '' },
			{ nom: 'CHADEFFAUD', prenom:'Laetitia', type: 'Peluche', imgPath: 'images/objet-laetitia.JPG', formURL: '' },
			{ nom: 'CHEVAUCHE', prenom:'Valentin', type: 'Verres', imgPath: 'images/objet-valentin.JPG', formURL: '' },
			{ nom: 'CONSTANT', prenom:'Océane', type: 'Assise nounours', imgPath: 'images/objet-oceane.JPG', formURL: '' },
			{ nom: 'DAIRE', prenom:'Florine', type: 'Rideaux', imgPath: 'images/objet-florine.JPG', formURL: '' },
			{ nom: 'DURAND', prenom:'Marion', type: 'Pèle Mele', imgPath: 'images/objet-marion.JPG', formURL: '' },
			{ nom: 'EVENO', prenom:'Flora', type: 'Tunique', imgPath: 'images/objet-flora.JPG', formURL: '' },
			{ nom: 'EVERARD', prenom:'Maxime', type: 'Chaussons', imgPath: 'images/objet-maxime.JPG', formURL: '' },
			{ nom: 'GAMBIN', prenom:'Gatien', type: 'Peluche ', imgPath: 'images/objet-gatien.JPG', formURL: '' },
			{ nom: 'GOMES PINTO BARRETO', prenom:'Jessy', type: 'Luminaire', imgPath: 'images/objet-jessy.JPG', formURL: '' },
			{ nom: 'GUIDEZ', prenom:'Hélène', type: ' Sac femme', imgPath: 'images/objet-helene.JPG', formURL: '' },
			{ nom: 'GUIGNABEL-PICARD', prenom:'Axelle	', type: 'Bijoux', imgPath: 'images/objet-axelle.JPG', formURL: '' },
			{ nom: 'LALLIOT', prenom:'Léa	', type: 'Bijoux', imgPath: 'images/objet-lea.JPG', formURL: '' },
			{ nom: 'LEFEVRE', prenom:'Camille', type: 'Sièges', imgPath: 'images/objet-camille.JPG', formURL: '' },
			{ nom: 'LOPEZ-UROZ', prenom:'Clara', type: 'Tablier trousseau', imgPath: 'images/objet-clara.JPG', formURL: '' },
			{ nom: 'LORIN', prenom:'Loïse', type: 'Robe', imgPath: 'images/objet-loise.JPG', formURL: '' },
			{ nom: 'MASSARD', prenom:'Aurélie', type: 'Oreillers', imgPath: 'images/objet-aurelie.JPG', formURL: '' },
			{ nom: 'MELESSOUSSOU', prenom:'Chloé', type: 'Vase', imgPath: 'images/objet-chloe.JPG', formURL: '' },
			{ nom: 'MOSNIER', prenom:'Etienne', type: 'Luminaire', imgPath: 'images/objet-etienne.JPG', formURL: '' },
			{ nom: 'NIEL', prenom:'Eva', type: 'T-Shirt', imgPath: 'images/objet-eva.JPG', formURL: '' },
			{ nom: 'PALACIOS', prenom:'Emilie', type: 'Luminaire ', imgPath: 'images/objet-emilie.JPG', formURL: '' },
			{ nom: 'PERRIGOT', prenom:'Camille', type: 'Accessoires textiles', imgPath: 'images/objet-camille.JPG', formURL: '' },
			{ nom: 'PICCININ', prenom:'Floyd', type: 'Ornement façade', imgPath: 'images/objet-floyd.JPG', formURL: '' },
			{ nom: 'POINTEREAU', prenom:'Juliette', type: 'Luminaire', imgPath: 'images/objet-juliette.JPG', formURL: '' },
			{ nom: 'POTHIER', prenom:'Alexia', type: 'Peluche', imgPath: 'images/objet-alexia.JPG', formURL: '' },
			{ nom: 'RUIZ', prenom:'Pauline', type: 'Tissus', imgPath: 'images/objet-pauline.JPG', formURL: '' },
			{ nom: 'SAROT', prenom:'Marine', type: 'Sac femme', imgPath: 'images/objet-marine.JPG', formURL: '' },
			{ nom: 'SELLIER', prenom:'Raphaël', type: ' Pèle Mele', imgPath: 'images/objet-raphael.JPG', formURL: '' },
			{ nom: 'SEUGE', prenom:'Julie', type: 'Bijoux', imgPath: 'images/objet-julie.JPG', formURL: '' },
			{ nom: 'VILALARD', prenom:'Aurore', type: 'Robe/col', imgPath: 'images/objet-aurore.JPG', formURL: '' },
			{ nom: 'ZENNOUCHE', prenom:'Charlène', type: 'Peluche', imgPath: 'images/objet-charlene.JPG', formURL: '' }
		],
		breakpoints = {
			nav: document.querySelector('#nav').offsetTop,
			exposition: document.querySelector('#exposition').offsetTop,
			partenariat: document.querySelector('#partenariat').offsetTop,
			objets: document.querySelector('#objets').offsetTop,
			infospratiques: document.querySelector('#infospratiques').offsetTop,
		},
		nodes = {
			header: document.querySelector('header'),
			links: document.querySelectorAll('header ul a'),
			objets: document.querySelector('#objets'),
			background: document.querySelector('#background'),
			previous: document.querySelector('.previous'),
			next: document.querySelector('.next'),
			ribbon: {
				nom: document.querySelector('.ribbon h1'),
				type: document.querySelector('.ribbon p')
			},
			reserver: document.querySelector('.reserver')
		};
		

	function refreshBreakpoints() {
		breakpoints = {
			nav: document.querySelector('#nav').offsetTop,
			exposition: document.querySelector('#exposition').offsetTop,
			partenariat: document.querySelector('#partenariat').offsetTop,
			objets: document.querySelector('#objets').offsetTop,
			infospratiques: document.querySelector('#infospratiques').offsetTop,
		};
	}

	function scrolling(evt) {
		
		var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

		//console.log(y);

		// MENU POSITION
		if( y <= breakpoints.nav ) {
			// Remove fixed menu
			if( document.body.classList.contains('fix-menu') ) {
				// remove class
				document.body.classList.remove('fix-menu');
				// update useless properties
				nodes.header.style.top = 0;
				document.body.style.paddingTop = 0;
			}
		} else {
			// Setup fixed menu
			if( !document.body.classList.contains('fix-menu') ) {
				// setup padding to compensate for loss of header
				document.body.style.paddingTop = nodes.header.clientHeight + 'px';
				// move header upwards out of the screen
				nodes.header.style.top = -breakpoints.nav + 'px';
				// add class
				// THIS HAS TO COME AFTER THE POSITION ADJUSTMENTS !
				document.body.classList.add('fix-menu');
				
			}
		}

		// MENU HIGHLIGHT
		// a section is considered active if it is in the first third of the window
		
		function setCurrent( link ) {
			if( !link.classList.contains('current') ) {
				var current = document.querySelector('.current');
				if( current ) {
					current.classList.remove('current');
				}
			}
			link.classList.add('current');
		}

		if( y > breakpoints.infospratiques - window.innerHeight/3 ) {
			setCurrent( nodes.links[3] );
		} else if( y > breakpoints.objets - window.innerHeight/3 ) {
			setCurrent( nodes.links[2] );
		} else if( y > breakpoints.partenariat - window.innerHeight/3 ) {
			setCurrent( nodes.links[1] );
		} else {
			setCurrent( nodes.links[0] );
		}
	}

	function resizing( evt ) {
		//window.innerHeight = window.innerHeight;
		nodes.objets.style.height = window.innerHeight + 'px';
		refreshBreakpoints();
		checkHash();
		centerBackground();
	}

	function checkHash( evt ) {
		// Check hash for object reference
		var hash = window.location.hash,
			isObjetSet = false;
		console.log( hash );
		if( hash ) {
			hash = hash.slice(1); // remove # character
			hash = hash.toLowerCase();
			for (var i = 0; i < objets.length; i++) {
				if( objets[i].nom.toLowerCase() == hash ) {
					// The hash does reference an object
					//refreshBreakpoints();
					//window.scrollTo( window.scrollX, breakpoints.objets );
					setCurrentObjet( i );
					isObjetSet = true;
				}
			}
		}
		if( !isObjetSet ) {
			setCurrentObjet( 0 );
		}
	}

	function setCurrentObjet( i ) {
		var objet = objets[i];
		// change object displayed
		nodes.background.src = objet.imgPath;
		// update ribbon values
		if( nodes.ribbon.nom.textContent ) {
			nodes.ribbon.nom.textContent = objet.prenom + ' ' + objet.nom;
			nodes.ribbon.type.textContent = objet.type;
		} else {
			nodes.ribbon.nom.innerText = objet.prenom + ' ' + objet.nom;
			nodes.ribbon.type.innerText = objet.type;
		}
		// change next/previous links
		if( i === 0 ) {
			nodes.previous.href = '#' + objets[objets.length-1].nom;
			nodes.next.href = '#' + objets[1].nom;
		} else if( i === objets.length-1) {
			nodes.previous.href = '#' + objets[i-1].nom;
			nodes.next.href = '#' + objets[0].nom;
		} else {
			nodes.previous.href = '#' + objets[i-1].nom;
			nodes.next.href = '#' + objets[i+1].nom;
		}
		// change form link to default value for creator
		nodes.reserver.href = objet.formURL;
	}

	function centerBackground() {
		var containerHeight = parseInt( nodes.objets.style.height ),
			imageHeight = nodes.background.height,
			offset;
		offset = ( containerHeight - imageHeight ) / 2;
		console.log(offset);
		nodes.background.style.top = offset + 'px';
	}

	function loadForm( evt ) {
		evt.stopPropagation();
		evt.preventDefault();
		var popup = window.open(nodes.reserver.href, "_blank", "width: 630px");
		popup.focus();
		return false;
	}

	resizing();
	refreshBreakpoints();
	scrolling();
	window.addEventListener('scroll', scrolling);
	window.addEventListener('resize', resizing);
	window.addEventListener('hashchange', checkHash);
	nodes.background.addEventListener('load', centerBackground);
	nodes.reserver.addEventListener('click', loadForm);
	checkHash();
/*
})();*/
