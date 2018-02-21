// querySelectorAll leidzia istraukti visus li elementus i masyva, su kurio darysim manipuliacijas.


var list = document.querySelectorAll ('li');

// ----------------------------------------------------------------------------

// console.log (list);   Galim pasitikrinti ar sukure array is visu li elementu

// Naudojam FOR isselektinti kiekviena li elementa is array
for (i = 0 ; i < list.length; i++) {					


		// Savikontrolei spausdinam kiekviena li elementa su indeksu (vieta kuria uzima masyve)
		console.log(list[i]);

		// kiekvienam li elementui sukuriam monitoringa klikui.
		list[i].addEventListener('click',function(e){

		// paspaudus li elementa galim pridet/panaikint klase, nors sioje vietoje logiskiau naudot [add] metoda. Nes dingus li elementui nera kur spausti kad jis atsirastu vel.
		e.currentTarget.classList.toggle('hide');

})};

