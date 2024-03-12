// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})

//DASHBOARD
const categorias = document.getElementById('categorias');
const proveedores = document.getElementById('proveedores');
const tiposActivo = document.getElementById('tiposActivo');
const marcas = document.getElementById('marcas');
const estadoActivos = document.getElementById('estadoActivos');
const tiposPersona = document.getElementById('tiposPersona');
const personas = document.getElementById('personas');
const telefonosPersona = document.getElementById('telefonosPersona');
const asignaciones = document.getElementById('asignaciones');

function mostrarCategorias(){
	categorias.style.display = 'block';
	proveedores.style.display = 'none';
	tiposActivo.style.display = 'none';
	marcas.style.display = 'none';
	estadoActivos.style.display = 'none';
	tiposPersona.style.display = 'none';
	personas.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarProveedores(){
	proveedores.style.display = 'block';
	categorias.style.display = 'none';
	tiposActivo.style.display = 'none';
	marcas.style.display = 'none';
	estadoActivos.style.display = 'none';
	tiposPersona.style.display = 'none';
	personas.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarTiposActivo(){
	tiposActivo.style.display = 'block';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	marcas.style.display = 'none';
	estadoActivos.style.display = 'none';
	tiposPersona.style.display = 'none';
	personas.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarMarcas(){
	marcas.style.display = 'block';
	tiposActivo.style.display = 'none';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	estadoActivos.style.display = 'none';
	tiposPersona.style.display = 'none';
	personas.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarEstadoActivos(){
	estadoActivos.style.display = 'block';
	marcas.style.display = 'none';
	tiposActivo.style.display = 'none';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	tiposPersona.style.display = 'none';
	personas.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarTiposPersona(){
	tiposPersona.style.display = 'block';
	marcas.style.display = 'none';
	tiposActivo.style.display = 'none';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	estadoActivos.style.display = 'none';
	personas.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarPersonas(){
	personas.style.display = 'block';
	tiposPersona.style.display = 'none';
	marcas.style.display = 'none';
	tiposActivo.style.display = 'none';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	estadoActivos.style.display = 'none';
	telefonosPersona.style.display = 'none';
	asignaciones.style.display = "none";

}
function mostrarTelefonosPersona(){
	telefonosPersona.style.display = 'block';
	asignaciones.style.display = "none";
	personas.style.display = 'none';
	tiposPersona.style.display = 'none';
	marcas.style.display = 'none';
	tiposActivo.style.display = 'none';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	estadoActivos.style.display = 'none';

}
function mostrarAsignacion(){
	asignaciones.style.display = "block";
	telefonosPersona.style.display = 'none';
	personas.style.display = 'none';
	tiposPersona.style.display = 'none';
	marcas.style.display = 'none';
	tiposActivo.style.display = 'none';
	proveedores.style.display = 'none';
	categorias.style.display = 'none';
	estadoActivos.style.display = 'none';

}
//CRUD
const dashboardAgregar = document.querySelectorAll('.dashboardAgregar');
const dashboardEditar = document.querySelectorAll('.dashboardEditar');
const dashboardEliminar = document.querySelectorAll('.dashboardEliminar');
const dashboardBuscar = document.querySelectorAll('.dashboardBuscar');
const dashboardCrear = document.querySelectorAll('.dashboardCrear');
const dashboardAsignar = document.querySelectorAll('.dashboardAsignar');
const dashboardRetornar = document.querySelectorAll('.dashboardRetornar');
function mostrarDashboardAgregar(posicion) {
	dashboardAgregar[posicion].style.display = "block"
	dashboardEditar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEliminar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardBuscar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardCrear.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardAsignar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardRetornar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	const listaTipoActivos = document.getElementById('listaTipoActivos');
	const urlServidorTipoActivo = 'http://localhost:3000/categoriaActivo';
	fetch(urlServidorTipoActivo)
	.then(response => {
		if (response.ok) {
		return response.json();
		} else {
		throw new Error('No se encontró la categoria.');
		}
	})
	.then(data => {
		console.log('Activo encontrado:', data);
		JSON.stringify(data);	
		data.forEach (categoria =>{
			contenido.innerHTML = `
			<h3>Categoria de Activo</h3><br>
			<h5>Id: ${categoria.id} <br> Nombre: ${categoria.nombre}</h5>
		`;
			listaTipoActivos.appendChild(contenido)
		})
			
	})
	.catch(error => {
		console.error('Error al buscar la categoria por ID:', error);
	});

}
function mostrarDashboardEditar(posicion) {
	dashboardEditar[posicion].style.display = "block"
	dashboardAgregar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEliminar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardBuscar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardCrear.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardAsignar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardRetornar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
}
function mostrarDashboardEliminar(posicion) {
	dashboardEliminar[posicion].style.display = "block"
	dashboardAgregar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEditar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardBuscar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardCrear.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardAsignar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardRetornar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})

}
function mostrarDashboardBuscar(posicion) {
	dashboardBuscar[posicion].style.display = "block"
	dashboardAgregar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEditar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEliminar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardCrear.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardAsignar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardRetornar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})

}

function mostrarDashboardCrear(posicion) {
    const todosLosDashboards = [
        dashboardCrear,
        dashboardAgregar,
        dashboardEditar,
        dashboardEliminar,
        dashboardBuscar,
        dashboardAsignar,
        dashboardRetornar
    ];

    todosLosDashboards.forEach((dashboards, conjuntoIndex) => {
        dashboards.forEach((dashboard, dashboardIndex) => {
            dashboard.style.display = (conjuntoIndex === posicion) && (dashboardIndex === posicion) ? "block" : "none";
        });
    });
}

function mostrarDashboardAsignar(posicion) {
	dashboardAsignar[posicion].style.display = "block"
	dashboardAgregar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEditar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEliminar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardBuscar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardCrear.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardRetornar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
}

function mostrarDashboardRetornar(posicion) {
	dashboardRetornar[posicion].style.display = "block"
	dashboardAgregar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEditar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardEliminar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardBuscar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardAsignar.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
	dashboardCrear.forEach(dashboard =>{
		dashboard.style.display = "none"
	})
}
function agregarCategoria(){
	const nombre = document.getElementById('nombreCategoria').value;
	const categoria = {
		nombre
	};
	const urlServidor = 'http://localhost:3000/categoriaActivo';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(categoria),
};

// Realizar la solicitud POST al servidor JSON
fetch(urlServidor, opciones)
  .then(response => response.json())
  .then(data => {
    alert('Categoria agregada:', data);
  })
  .catch(error => {
    console.error('Error al agregar la categoria:', error);
  });
}
// Código para obtener los valores del ID de la llave categoriaActivo y poder utilizarlas como opciones del 
// selector de ID de proveedor y proseguir con su edicion
// const iddeProveedor = document.getElementById('iddeProveedor');
// const idProveedorEliminar = document.getElementById('idProveedorEliminar');
// const idProveedorBuscar = document.getElementById('idProveedorBuscar');
// const listaProveedores= document.getElementById('listaProveedores');
// const listaProveedores2= document.getElementById('listaProveedores2');
// const urlServidorProveedor = 'http://localhost:3000/proveedor';
// fetch(urlServidorProveedor)
//   .then(response => {
// 	if (response.ok) {
// 	  return response.json();
// 	} else {
// 	  throw new Error('No se encontró el proveedor.');
// 	}
//   })
//   .then(data => {
// 	console.log('Activo encontrado:', data);
// 	JSON.stringify(data);	
// 	data.forEach (proveedor =>{
// 		const option = document.createElement('option');
// 		option.textContent = `${proveedor.id}`
// 		const optionCloned = option.cloneNode(true);
// 		const optionCloned2 = option.cloneNode(true)
// 		iddeProveedor.appendChild(option);
// 		idProveedorEliminar.appendChild(optionCloned);
// 		idProveedorBuscar.appendChild(optionCloned2);
// 		const h5 = document.createElement('h5');
// 		h5.textContent = `ID: ${proveedor.id} / Identificacion: ${proveedor.identificacion} / Nombre: ${proveedor.nombre} / Email: ${proveedor.email} `
// 		const h5Cloned = h5.cloneNode(true);
// 		listaProveedores.appendChild(h5)
// 		listaProveedores2.appendChild(h5Cloned)
// 	})
		
//   })
//   .catch(error => {
// 	console.error('Error al buscar la categoria por ID:', error);
//   });
//_____________________________________________
function editarCategoria() {
	const idCategoria = document.getElementById('idBusquedaEditar').value;

	// Verificar si el ID es válido antes de continuar
	if (!idCategoria) {
		alert('Por favor, ingrese un ID de activo válido.');
		return;
	}

	// Obtener los nuevos valores para editar el activo
	const nuevoNombreCategoria = document.getElementById('nuevoNombreCategoria').value;
	

	const urlServidor = `http://localhost:3000/categoriaActivo/${idCategoria}`;

  // Configuración de la solicitud PUT o PATCH
  const opciones = {
    method: 'PATCH', // Puedes cambiar a 'PUT' si quieres reemplazar todos los campos
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: nuevoNombreCategoria,
      
    }),
  };

  // Realizar la solicitud PUT o PATCH al servidor JSON
  fetch(urlServidor, opciones)
    .then(response => response.json())
    .then(data2 => {
      alert('Categoria editada:', data2);
    })
    .catch(error => {
      console.error('Error al editar la categoria:', error);
	  alert('Por favor, ingrese un ID de categoria válido.');
    });
}
//__________________________________________________
function eliminarCategoria() {
	const idCategoria = document.getElementById('idBusquedaEliminar').value;
	const urlServidor = `http://localhost:3000/categoriaActivo/${idCategoria}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Categoria con ID ${idCategoria} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el activo.');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
//____________________________________________________

function buscarCategoria() {
	const idActivo1 = document.getElementById('idBusqueda').value;
	const resultado = document.getElementById('contenido');
	const urlServidor = `http://localhost:3000/categoriaActivo/${idActivo1}`;

	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
	  .then(response => {
		if (response.ok) {
		  return response.json();
		} else {
		  throw new Error('No se encontró la categoria.');
		}
	  })
	  .then(data => {
		console.log('Activo encontrado:', data);
		contenido.innerHTML = `
			<h3>Categoria de Activo</h3><br>
			<h5>Id: ${data.id} <br> Nombre: ${data.nombre}</h5>
		`;
		resultado.appendChild(contenido)
		// Puedes realizar acciones con el activo encontrado
	  })
	  .catch(error => {
		console.error('Error al buscar la categoria por ID:', error);
	  });
	  
  }
//___________________________________________________________
//PROVEEDORES
  function agregarProveedor(){
	const proveedores = document.getElementById('listaProveedores')
	const identificacion = document.getElementById('idProveedor').value;
	const nombre = document.getElementById('nombreProveedor').value;
	const email = document.getElementById('emailProveedor').value;
	const activo = {
		identificacion,
		nombre,
		email
	};
	const urlServidor = 'http://localhost:3000/proveedor';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(activo),
};

// Realizar la solicitud POST al servidor JSON
	fetch(urlServidor, opciones)
	.then(response => response.json())
	.then(data => {
		alert('Proveedor agregado:', data);
		
	})
	.catch(error => {
		console.log('Error al agregar proveedor:', error);
  });
}
// Código para obtener los valores del ID de la llave proveedores y poder utilizarlas como opciones del 
// selector de ID de proveedor y proseguir con su edicion
const iddeProveedor = document.getElementById('iddeProveedor');
const idProveedorEliminar = document.getElementById('idProveedorEliminar');
const idProveedorBuscar = document.getElementById('idProveedorBuscar');
const listaProveedores= document.getElementById('listaProveedores');
const listaProveedores2= document.getElementById('listaProveedores2');
const urlServidorProveedor = 'http://localhost:3000/proveedor';
fetch(urlServidorProveedor)
  .then(response => {
	if (response.ok) {
	  return response.json();
	} else {
	  throw new Error('No se encontró el proveedor.');
	}
  })
  .then(data => {
	console.log('Activo encontrado:', data);
	JSON.stringify(data);	
	data.forEach (proveedor =>{
		const option = document.createElement('option');
		option.textContent = `${proveedor.id}`
		const optionCloned = option.cloneNode(true);
		const optionCloned2 = option.cloneNode(true)
		iddeProveedor.appendChild(option);
		idProveedorEliminar.appendChild(optionCloned);
		idProveedorBuscar.appendChild(optionCloned2);
		const h5 = document.createElement('h5');
		h5.textContent = `ID: ${proveedor.id} / Identificacion: ${proveedor.identificacion} / Nombre: ${proveedor.nombre} / Email: ${proveedor.email} `
		const h5Cloned = h5.cloneNode(true);
		listaProveedores.appendChild(h5)
		listaProveedores2.appendChild(h5Cloned)
	})
		
  })
  .catch(error => {
	console.error('Error al buscar la categoria por ID:', error);
  });
function editarProveedor(){

	const iddeProveedor = document.getElementById('iddeProveedor').value;
	const nuevoIdProveedor = document.getElementById('nuevoIdProveedor').value;
	const nuevoNombreProveedor = document.getElementById('nuevoNombreProveedor').value;
	const nuevoEmailProveedor = document.getElementById('nuevoEmailProveedor').value;
	const urlServidor = `http://localhost:3000/proveedor/${iddeProveedor}`;


  // Configuración de la solicitud PUT o PATCH
  const opciones = {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
		identificacion: nuevoIdProveedor,
    	nombre: nuevoNombreProveedor,
		email: nuevoEmailProveedor
    }),
  };

  // Realizar la solicitud PUT o PATCH al servidor JSON
  fetch(urlServidor, opciones)
    .then(response => response.json())
    .then(data2 => {
      alert('Proveedor Editado Exitosamente', data2);
    })
    .catch(error => {
      console.error('Error al editar proveedor:', error);
	  alert('Por favor, ingrese un ID de activo válido.');
    });
}
function eliminarProveedor() {
	const idProveedorEliminar = document.getElementById('idProveedorEliminar').value;
	const urlServidor = `http://localhost:3000/proveedor/${idProveedorEliminar}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Proveedor con ID ${idProveedorEliminar} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el proveedor');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
  function buscarProveedor() {
	const idProveedorBuscar = document.getElementById('idProveedorBuscar').value;
	const resultado = document.getElementById('contenidoBuscarProveedor');
	const urlServidor = `http://localhost:3000/proveedor/${idProveedorBuscar}`;
		
	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
		.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No se encontró la categoria.');
		}
		})
		.then(data => {
		console.log('Proveedor encontrado:', data);
		contenidoBuscarTipoActivo.innerHTML = `
			<h3 style="color:red">Proveedor</h3><br>
			<h5>Id: ${data.id} <br> Identificacion: ${data.identificacion} <br> Nombre: ${data.nombre} <br> Email: ${data.email}</h5>
		`;
		resultado.appendChild(contenidoBuscarTipoActivo)
		// Puedes realizar acciones con el activo encontrado
		})
		.catch(error => {
		console.error('Error al buscar la categoria por ID:', error);
		});
		
	}
//_____________________________________________
//TIPO DE ACTIVO
const categoriaTipo = document.getElementById('categoriaTipo');
const listaCategorias = document.getElementById('listaCategorias')
const marcaCategoria = document.getElementById('marcaCategoria'); // para el selector de la seccion de agregar marca
const urlServidorCategoriaActivo = 'http://localhost:3000/categoriaActivo';

// Código para obtener los valores del ID de la llave categoriaActivo y poder utilizarlas como opciones del 
// selector de ID de categoria
// PARA AGREGAR TIPO DE ACTIVO
fetch(urlServidorCategoriaActivo)
  .then(response => {
	if (response.ok) {
	  return response.json();
	} else {
	  throw new Error('No se encontró la categoria.');
	}
  })
  .then(data => {
	console.log('Activo encontrado:', data);
	JSON.stringify(data);	
	data.forEach (categoria =>{
		const option = document.createElement('option');
		option.textContent = `${categoria.nombre}`
		categoriaTipo.appendChild(option);
		const h5 = document.createElement('h5')
		h5.textContent = `ID: ${categoria.id} / Categoria: ${categoria.nombre}`
		listaCategorias.appendChild(h5)
	})
		
  })
  .catch(error => {
	console.error('Error al buscar la categoria por ID:', error);
  });
  //
  //
  //
  // PARA EDITAR TIPO DE ACTIVO
  const idTipoActivo = document.getElementById('idTipoActivo');
  const listaTipoActivos = document.getElementById('listaTipoActivos');
  const listaTipoActivos2 = document.getElementById('listaTipoActivos2');
  const idTipoActivo2 = document.getElementById('idTipoActivo2');
  const idTipoActivo3 = document.getElementById('idTipoActivo3');
  const marcaTipoActivo = document.getElementById('marcaTipoActivo'); // Para el selector de tipo de activo en la seccion de marcas
  const urlServidorTipoActivo = 'http://localhost:3000/tipoActivo'
  fetch(urlServidorTipoActivo)
  .then(response => {
	  if (response.ok) {
		  return response.json();
	  } else {
		  throw new Error('No se encontró la categoria.');
	  }
  })
  .then(data => {
	  console.log('Activo encontrado:', data);
	  JSON.stringify(data);	
	  data.forEach (categoria =>{
		  const option = document.createElement('option');
		  option.textContent = `${categoria.id}`
		  idTipoActivo.appendChild(option)
		  const cloneOption = option.cloneNode(true);
		  const cloneOption2 = option.cloneNode(true);
		  idTipoActivo2.appendChild(cloneOption);
		  idTipoActivo3.appendChild(cloneOption2);
		  const h5 = document.createElement('h5')
		  const cloneH5 = h5.cloneNode(true);
		  h5.textContent = `ID: ${categoria.id} / Categoria: ${categoria.categoria} / Nombre: ${categoria.nombre}`
		  cloneH5.textContent = `ID: ${categoria.id} / Categoria: ${categoria.categoria} / Nombre: ${categoria.nombre}`
		  listaTipoActivos.appendChild(h5);
		  listaTipoActivos2.appendChild(cloneH5)
		  const optionMarcaTipoActivo = document.createElement('option');
		  optionMarcaTipoActivo.textContent = `${categoria.nombre}`;
		  marcaTipoActivo.appendChild(optionMarcaTipoActivo); // Para el selector de tipo de activo en la seccion de marcas
	  })
  })
// Agregando el valor ingresado a tipoActivo
  function agregarTipoActivo(){
	const categoria = document.getElementById('categoriaTipo').value;
	const urlServidor = `http://localhost:3000/tipoActivo`;

	const nombre = document.getElementById('nombreTipoActivo').value;

	const tipoDeActivo = {
		categoria,
		nombre
	};


	// Configuración de la solicitud POST
	const opciones = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(tipoDeActivo),
	};

	// Realizar la solicitud POST al servidor JSON
	fetch(urlServidor, opciones)
	.then(response => response.json())
	.then(data => {
		alert('Tipo de Activo Agregado:', data);
	})
	.catch(error => {
		console.error('Error al agregar la tarea:', error);
	});
	}

function editarTipoActivo(){

	const idTipoActivo = document.getElementById('idTipoActivo').value;
	const nuevoNombreActivo = document.getElementById('nuevoNombreActivo').value;
	const nuevoNombreCategoria2 = document.getElementById('nuevoNombreCategoria2').value;
	const urlServidor = `http://localhost:3000/tipoActivo/${idTipoActivo}`;


  // Configuración de la solicitud PUT o PATCH
  const opciones = {
    method: 'PATCH', // Puedes cambiar a 'PUT' si quieres reemplazar todos los campos
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
		categoria: nuevoNombreCategoria2,
    	nombre: nuevoNombreActivo
      
    }),
  };

  // Realizar la solicitud PUT o PATCH al servidor JSON
  fetch(urlServidor, opciones)
    .then(response => response.json())
    .then(data2 => {
      alert('Tipo de Activo Editado:', data2);
    })
    .catch(error => {
      console.error('Error al editar el activo:', error);
	  alert('Por favor, ingrese un ID de activo válido.');
    });
}
function eliminarTipoActivo() {
	const idTipoActivo2 = document.getElementById('idTipoActivo2').value;
	const urlServidor = `http://localhost:3000/tipoActivo/${idTipoActivo2}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Categoria con ID ${idTipoActivo2} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el activo.');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }

function buscarTipoActivo() {
const idTipoActivo3 = document.getElementById('idTipoActivo3').value;
const resultado = document.getElementById('contenidoBuscarTipoActivo');
const urlServidor = `http://localhost:3000/tipoActivo/${idTipoActivo3}`;
	
// Realizar la solicitud GET al servidor JSON
fetch(urlServidor)
	.then(response => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error('No se encontró la categoria.');
	}
	})
	.then(data => {
	console.log('Activo encontrado:', data);
	contenidoBuscarTipoActivo.innerHTML = `
		<h3>Tipo de Activo</h3><br>
		<h5>Id: ${data.id} <br> Categoria: ${data.categoria} <br> Nombre: ${data.nombre}</h5>
	`;
	resultado.appendChild(contenido)
	// Puedes realizar acciones con el activo encontrado
	})
	.catch(error => {
	console.error('Error al buscar la categoria por ID:', error);
	});
	
}
  //_____________________________________________
//MARCAS
 // PARA EDITAR LA MARCA
 const idMarca = document.getElementById('idMarca');
 const idMarca2 = document.getElementById('idMarca2');
 const listaMarcas = document.getElementById('listaMarcas');
 const listaMarcas2 = document.getElementById('listaMarcas2');
 const idMarca3 = document.getElementById('idMarca3');

 const urlServidorMarca = 'http://localhost:3000/marcas'
 fetch(urlServidorMarca)
 .then(response => {
	 if (response.ok) {
		 return response.json();
	 } else {
		 throw new Error('No se encontró la categoria.');
	 }
 })
 .then(data => {
	 console.log('Activo encontrado:', data);
	 JSON.stringify(data);	
	 data.forEach (categoria =>{
		const option = document.createElement('option');
		option.textContent = `${categoria.id}`
		idMarca.appendChild(option)
		const h5 = document.createElement('h5')
		h5.textContent = `ID: ${categoria.id} / Tipo de Activo: ${categoria.tipoActivo} / Nombre: ${categoria.nombre}`
		listaMarcas.appendChild(h5);
		const cloneOption = option.cloneNode(true);
		const cloneOption2 = option.cloneNode(true);
		idMarca3.appendChild(cloneOption2)
		idMarca2.appendChild(cloneOption);
		const cloneH5 = h5.cloneNode(true);
		listaMarcas2.appendChild(cloneH5);
	 })
 })
  function agregarMarca(){
	const tipoActivo = document.getElementById('marcaTipoActivo').value;
	const nombre = document.getElementById('nombreMarca').value;
	const urlServidor = `http://localhost:3000/marcas`;

	const marcas = {
		tipoActivo,
		nombre
	};


	// Configuración de la solicitud POST
	const opciones = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(marcas),
	};

	// Realizar la solicitud POST al servidor JSON
	fetch(urlServidor, opciones)
	.then(response => response.json())
	.then(data => {
		alert('Marca Agregada:', data);
	})
	.catch(error => {
		console.error('Error al agregar la tarea:', error);
	});
	};

function editarMarca(){

	const idMarca = document.getElementById('idMarca').value;
	const nuevoNombreTipoActivo = document.getElementById('nuevoNombreTipoActivo').value;
	const nuevoNombreMarca = document.getElementById('nuevoNombreMarca').value;
	const urlServidor = `http://localhost:3000/marcas/${idMarca}`;


	// Configuración de la solicitud PATCH
	const opciones = {
	method: 'PATCH', 
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		tipoActivo: nuevoNombreTipoActivo,
		nombre: nuevoNombreMarca
		
	}),
	};

	// Realizar la solicitud PUT o PATCH al servidor JSON
	fetch(urlServidor, opciones)
	.then(response => response.json())
	.then(data2 => {
		alert('Marca Editada:', data2);
	})
	.catch(error => {
		console.error('Error al editar el activo:', error);
		alert('Por favor, ingrese un ID de activo válido.');
	});
}
function eliminarMarca() {
	const idMarca2 = document.getElementById('idMarca2').value;
	const urlServidor = `http://localhost:3000/marcas/${idMarca2}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Categoria con ID ${idMarca2} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el activo.');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }

function buscarMarca() {
const idMarca3 = document.getElementById('idMarca3').value;
const resultado = document.getElementById('contenidoBuscarMarca');
const urlServidor = `http://localhost:3000/marcas/${idMarca3}`;
	
// Realizar la solicitud GET al servidor JSON
fetch(urlServidor)
	.then(response => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error('No se encontró la categoria.');
	}
	})
	.then(data => {
	console.log('Activo encontrado:', data);
	contenidoBuscarMarca.innerHTML = `
		<br><h3>Marca</h3><br>
		<h5>Id: ${data.id} <br> Tipo de Activo: ${data.tipoActivo} <br> Marca: ${data.nombre}</h5>
	`;
	resultado.appendChild(contenidoBuscarMarca)
	// Puedes realizar acciones con el activo encontrado
	})
	.catch(error => {
	console.error('Error al buscar la categoria por ID:', error);
	});
	
}
//_____________________________________________
//ESTADO DE ACTIVO
// PARA EDITAR EL ESTADO
const idEstado = document.getElementById('idEstado');
const idEstado2 = document.getElementById('idEstado2');
const listaEstados = document.getElementById('listaEstados');
const listaEstados2 = document.getElementById('listaEstados2');
const idEstado3 = document.getElementById('idEstado3');

const urlServidorEstado = 'http://localhost:3000/estado'
fetch(urlServidorEstado)
.then(response => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error('No se encontró la categoria.');
	}
})
.then(data => {
	console.log('Activo encontrado:', data);
	JSON.stringify(data);	
	data.forEach (estado =>{
	   const option = document.createElement('option');
	   option.textContent = `${estado.id}`
	   idEstado.appendChild(option)
	   const h5 = document.createElement('h5')
	   h5.textContent = `ID: ${estado.id} / Estado: ${estado.nombre}`
	   listaEstados.appendChild(h5);
	   const cloneOption = option.cloneNode(true);
	   const cloneOption2 = option.cloneNode(true);
	   idEstado2.appendChild(cloneOption);
	   idEstado3.appendChild(cloneOption2)
	   const cloneH5 = h5.cloneNode(true);
	   listaEstados2.appendChild(cloneH5);
	});
})

function agregarEstado(){
	const nombre = document.getElementById('nombreEstado').value;
	const urlServidor = `http://localhost:3000/estado`;


	const estado = {
		nombre
	};


	// Configuración de la solicitud POST
	const opciones = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(estado),
	};

	// Realizar la solicitud POST al servidor JSON
	fetch(urlServidor, opciones)
	.then(response => response.json())
	.then(data => {
		alert('Estado Agregado:', data);
	})
	.catch(error => {
		console.error('Error al agregar estado:', error);
	});
}
//
function editarEstado(){

	const idEstado = document.getElementById('idEstado').value;
	const nuevoNombreEstado = document.getElementById('nuevoNombreEstado').value;
	const urlServidorEstado = `http://localhost:3000/estado/${idEstado}`;


	// Configuración de la solicitud PUT o PATCH
	const opciones = {
	method: 'PATCH', // Puedes cambiar a 'PUT' si quieres reemplazar todos los campos
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		nombre: nuevoNombreEstado
	}),
	};

	// Realizar la solicitud PUT o PATCH al servidor JSON
	fetch(urlServidorEstado, opciones)
	.then(response => response.json())
	.then(data2 => {
		alert('Estado Editado:', data2);
	})
	.catch(error => {
		console.error('Error al editar el estado:', error);
		alert('Por favor, ingrese un ID de estado válido.');
	});
}

function eliminarEstado() {
	const idEstado2 = document.getElementById('idEstado2').value;
	const urlServidor = `http://localhost:3000/estado/${idEstado2}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Estado con ID ${idEstado2} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el estado');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
  function buscarEstado() {
	const idEstado3 = document.getElementById('idEstado3').value;
	const resultado = document.getElementById('contenidoBuscarEstado');
	const urlServidor = `http://localhost:3000/estado/${idEstado3}`;
		
	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
		.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No se encontró el estado');
		}
		})
		.then(data => {
		console.log('Activo encontrado:', data);
		contenidoBuscarEstado.innerHTML = `
			<br><h3>Estado</h3><br>
			<h5>Id: ${data.id} <br> Estado: ${data.nombre}</h5>
		`;
		resultado.appendChild(contenido)
		// Puedes realizar acciones con el activo encontrado
		})
		.catch(error => {
		console.error('Error al buscar el estado por ID:', error);
		});
		
	}
//_____________________________________________
//TIPO PERSONA
// PARA EDITAR EL TIPO PERSONA
const idTipoPersonas = document.getElementById('idTipoPersonas');
const idTipoPersonas2 = document.getElementById('idTipoPersonas2');
const idTipoPersonas3 = document.getElementById('idTipoPersonas3');
const listaTipoPersonas = document.getElementById('listaTipoPersonas');
const listaTipoPersonas2 = document.getElementById('listaTipoPersonas2');
const tipoPersonas = document.getElementById('tipoPersonas');

const urlServidorTipoPersona = 'http://localhost:3000/tipoPersona'
fetch(urlServidorTipoPersona)
.then(response => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error('No se encontró el tipo de persona');
	}
})
.then(data => {
	console.log('Tipo de Persona encontrado:', data);
	JSON.stringify(data);	
	data.forEach (tipoPersona =>{
	   const option = document.createElement('option');
	   const option2 = document.createElement('option'); //Creacion de opciones para el selector de tipo persona en la seccion de agregar persona
	   option.textContent = `${tipoPersona.id}`;
	   option2.textContent = `${tipoPersona.tipoPersona}`;
	   idTipoPersonas.appendChild(option);
	   tipoPersonas.appendChild(option2); // agregar opciones al contenedor de tipo de personas en seccion de agregar persona
	   const h5 = document.createElement('h5');
	   h5.textContent = `ID: ${tipoPersona.id} / Tipo de persona: ${tipoPersona.tipoPersona}`;
	   listaTipoPersonas.appendChild(h5);
	   const cloneOption = option.cloneNode(true);
	   const cloneOption2 = option.cloneNode(true);
	   idTipoPersonas2.appendChild(cloneOption);
	   idTipoPersonas3.appendChild(cloneOption2);
	   const cloneH5 = h5.cloneNode(true);
	   listaTipoPersonas2.appendChild(cloneH5);
	});
})
function agregarTipoPersona(){
	const tipoPersona = document.getElementById('nombreTipoPersona').value;
	const activo = {
		tipoPersona
	};
	const urlServidor = 'http://localhost:3000/tipoPersona';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(activo),
};

// Realizar la solicitud POST al servidor JSON
fetch(urlServidor, opciones)
  .then(response => response.json())
  .then(data => {
    alert('Tipo de Persona agregado:', data);
  })
  .catch(error => {
    console.error('Error al agregar el tipo de persona:', error);
  });
}

function editarTipoPersona(){

	const idTipoPersonas = document.getElementById('idTipoPersonas').value;
	const nuevoNombreTipoPersona = document.getElementById('nuevoNombreTipoPersona').value;
	const urlServidorTipoPersona = `http://localhost:3000/tipoPersona/${idTipoPersonas}`;


	// Configuración de la solicitud PUT o PATCH
	const opciones = {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		tipoPersona: nuevoNombreTipoPersona
	}),
	};

	// Realizar la solicitud PUT o PATCH al servidor JSON
	fetch(urlServidorTipoPersona, opciones)
	.then(response => response.json())
	.then(data2 => {
		alert('Tipo de persona Editado:', data2);
	})
	.catch(error => {
		console.error('Error al editar el tipo de persona:', error);
		alert('Por favor, ingrese un ID de tipo de persona válido.');
	});
}

function eliminarTipoPersona() {
	const idTipoPersonas2 = document.getElementById('idTipoPersonas2').value;
	const urlServidor = `http://localhost:3000/tipoPersona/${idTipoPersonas2}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Tipo de persona con ID ${idTipoPersonas2} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el tipo de persona');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
  function buscarTipoPersona() {
	const idTipoPersonas3 = document.getElementById('idTipoPersonas3').value;
	const resultado = document.getElementById('contenidoBuscarTipoPersonas');
	const urlServidor = `http://localhost:3000/tipoPersona/${idTipoPersonas3}`;
		
	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
		.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No se encontró el tipo de persona');
		}
		})
		.then(data => {
		console.log('Tipo de persona encontrado:', data);
		contenidoBuscarTipoPersonas.innerHTML = `
			<br><h3>Tipo de Persona</h3><br>
			<h5>Id: ${data.id} <br> Tipo de Persona: ${data.tipoPersona}</h5>
		`;
		resultado.appendChild(contenidoBuscarTipoPersonas)
		// Puedes realizar acciones con el activo encontrado
		})
		.catch(error => {
		console.error('Error al buscar el tipo de persona por ID:', error);
		});
		
	}
//_____________________________________________
//PERSONAS
// PARA EDITAR PERSONA
const idPersonas2 = document.getElementById('idPersonas2');
const idPersonasEliminar = document.getElementById('idPersonasEliminar');
const idPersonasBuscar = document.getElementById('idPersonasBuscar');
const listaPersonas = document.getElementById('listaPersonas');
const listaPersonas2 = document.getElementById('listaPersonas2');
const contenidoBuscarPersonas = document.getElementById('contenidoBuscarPersonas');

const urlServidorPersona = 'http://localhost:3000/personas'
fetch(urlServidorPersona)
.then(response => {
	if (response.ok) {
		return response.json();
	} else {
		throw new Error('No se encontró la persona');
	}
})
.then(data => {
	console.log('Persona encontrada:', data);
	JSON.stringify(data);	
	data.forEach (persona =>{
		const option = document.createElement('option');
		option.textContent = `${persona.id}`;
		idPersonas2.appendChild(option);
		//    option2.textContent = `${tipoPersona.tipoPersona}`;
		// tipoPersonas.appendChild(option2); // agregar opciones al contenedor de tipo de personas en seccion de agregar persona
		const h5 = document.createElement('h5');
		h5.textContent = `Id: ${persona.id} / Identificacion: ${persona.idPersona} / Nombre: ${persona.nombrePersona} / Email: ${persona.emailPersona} / Tipo de Persona: ${persona.tipoPersona}`;
		listaPersonas.appendChild(h5);
		const cloneOption = option.cloneNode(true);
		idPersonasEliminar.appendChild(cloneOption);
		const cloneOption2 = option.cloneNode(true);
		idPersonasBuscar.appendChild(cloneOption2);
		const cloneH5 = h5.cloneNode(true);
		listaPersonas2.appendChild(cloneH5);
	});
})

function agregarPersona(){
	const idPersona = document.getElementById('idPersonas').value;
	const nombrePersona = document.getElementById('nombrePersonas').value;
	const emailPersona = document.getElementById('emailPersonas').value;
	const tipoPersona = document.getElementById('tipoPersonas').value;
	const activo = {
		idPersona,
		nombrePersona,
		emailPersona,
		tipoPersona,
	};
	const urlServidor = 'http://localhost:3000/personas';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(activo),
};

// Realizar la solicitud POST al servidor JSON
fetch(urlServidor, opciones)
  .then(response => response.json())
  .then(data => {
    alert('Persona agregada:', data);
  })
  .catch(error => {
    console.error('Error al agregar la persona:', error);
  });
}

function editarPersona(){

	const idPersonas2 = document.getElementById('idPersonas2').value;
	const nuevaIdentPersona = document.getElementById('nuevaIdentPersona').value;
	const nuevoNombrePersona = document.getElementById('nuevoNombrePersona').value;
	const nuevoEmailPersona = document.getElementById('nuevoEmailPersona').value;
	const nuevoTipoPersonas = document.getElementById('nuevoTipoPersonas').value;
	const urlServidorPersona = `http://localhost:3000/personas/${idPersonas2}`;


	// Configuración de la solicitud PATCH
	const opciones = {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		idPersona : nuevaIdentPersona,
		nombrePersona : nuevoNombrePersona,
		emailPersona : nuevoEmailPersona,
		tipoPersona : nuevoTipoPersonas
	}),
	};

	// Realizar la solicitud PUT
	fetch(urlServidorPersona, opciones)
	.then(response => response.json())
	.then(data2 => {
		alert('Persona Editada:', data2);
	})
	.catch(error => {
		console.error('Error al editar la persona:', error);
		alert('Por favor, ingrese un ID de persona válido.');
	});
}

function eliminarPersona() {
	const idPersonas3 = document.getElementById('idPersonas3').value;
	const urlServidor = `http://localhost:3000/personas/${idPersonas3}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Tipo de persona con ID ${idPersonas3} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar la persona');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
  function buscarPersona() {
	const idPersonasBuscar = document.getElementById('idPersonasBuscar').value;
	const resultado = document.getElementById('contenidoBuscarPersonas');
	const urlServidor = `http://localhost:3000/personas/${idPersonasBuscar}`;
		
	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
		.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No se encontró el tipo de persona');
		}
		})
		.then(data => {
		console.log('Persona encontrada:', data);
		contenidoBuscarPersonas.innerHTML = `
			<br><h3>Persona</h3><br>
			<h5>Id: ${data.idPersona} <br> Nombre: ${data.nombrePersona} <br> Email: ${data.emailPersona} <br> Tipo de Persona: ${data.tipoPersona}</h5>
		`;
		resultado.appendChild(contenidoBuscarPersonas)
		// Puedes realizar acciones con el activo encontrado
		})
		.catch(error => {
		console.error('Error al buscar la persona por ID:', error);
		});
		
	}
//_____________________________________________
//____________________________ASIGNACION____________________________
const idResponsable = document.getElementById('idResponsable');
	const urlServidor = 'http://localhost:3000/personas';
	// Código para obtener los valores de la llave personas y poder utilizarlas como opciones del 
	// selector de responsable en el apartado de asignacion
	fetch(urlServidor)
	  .then(response => {
		if (response.ok) {
		  return response.json();
		} else {
		  throw new Error('No se encontró el id de la persona.');
		}
	  })
	  .then(data => {
		console.log('Activo encontrado:', data);
		JSON.stringify(data);	
		data.forEach (persona =>{
			const option = document.createElement('option');
			option.textContent = `ID: ${persona.idPersona} - ${persona.nombrePersona}`
			idResponsable.appendChild(option)
		})
			
	  })
	  .catch(error => {
		console.error('Error al buscar la categoria por ID:', error);
	  });

function agregarAsignacion(){
	const nombreResponsable = document.getElementById('nombreResponsable').value;
	const cedulaResponsable = document.getElementById('cedulaResponsable').value;
	const fechaAsignacion = document.getElementById('fechaAsignacion').value;
	const idActivo = document.getElementById('idActivo').value;

		
		const activo = {
			nombreResponsable,
			cedulaResponsable,
			fechaAsignacion,
			idActivo,
			
		};
		const urlServidor = 'http://localhost:3000/asignacion';
	
		
	// Configuración de la solicitud POST
	const opciones = {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(activo),
	};
	
	// Realizar la solicitud POST al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => response.json())
	  .then(data => {
		alert('Asignacion Agregada:', data);
	  })
	  .catch(error => {
		console.error('Error al agregar la tarea:', error);
	  });
	
	
}
//____________________________________________________________
function asignarAsignacion(event) {
    event.preventDefault();
    const cedulaResponsable = document.getElementById('documentoResponsable').value;
    const resultado = document.getElementById('asignarEspacio');
    const botonDiferente = document.getElementById('botonGuardar');
	
    const urlServidor = `http://localhost:3000/asignacion?cedulaResponsable=${cedulaResponsable}`;

    // Realizar la solicitud GET al servidor JSON
    fetch(urlServidor)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se encontró la asignacion.');
            }
        })
        .then(data => {
            console.log('Activo encontrado 1:', data);
            resultado.innerHTML = '';
            botonGuardar.innerHTML = '';

            if (data.length === 0) {
                resultado.innerHTML = '<p>No existe la persona en el sistema</p>';
            } else {
				const cedula = data[0].cedulaResponsable;
				const nombreRespon = data[0].nombreResponsable;
                data.forEach((asignacion, index) => {
                    const asignacionDiv = document.createElement('div');
                    asignacionDiv.innerHTML = `
                        <h3>Datos responsable y activos</h3><br>
                        <p>Nombre: ${data[index].nombreResponsable} <br>
                        Cedula: ${data[index].cedulaResponsable} <br>
                        Fecha de asignación: ${data[index].fechaAsignacion || ''} <br>
                        Id del activo asignado: ${data[index].idActivo || ''} <br>
                        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
						</p>`;

					const retorno = activosAsignados(data[index]);
					asignacionDiv.retorno = retorno;
                    resultado.appendChild(asignacionDiv);
					// Llamada a la función activosAsignados para mostrar los activos asignados
					
					    
                });
				
				console.log(cedula);
				console.log(nombreRespon);
					// registrarAsignaciones(cedula,nombreRespon);
					const deAgregarDiv = document.querySelector('.deAgregar');
					const asignacionGuardar = document.createElement('button');
					asignacionGuardar.textContent = 'Guardar';
					asignacionGuardar.id = 'guardarBoton';
					// asignacionGuardar.addEventListener('click', asigBoton(cedula,nombreRespon));
					asignacionGuardar.addEventListener('click', function() {
                        asigBoton(cedula, nombreRespon);
                    });
                    // Agregar el botón al elemento apropiado
                    botonDiferente.appendChild(asignacionGuardar);
					deAgregarDiv.style.display = "block";
					// botonDiferente.appendChild(asignacionGuardar);
					
            }
        })
        .catch(error => {
            console.error('Error al buscar asignaciones por cedula del Responsable:', error);
            const option = document.createElement('div');
            option.innerHTML = `<p>Error al buscar la asignación.</p>`;
            resultado.appendChild(option);
        });
}

function activosAsignados(asignacion) {
    
	const resultado3 = document.getElementById('activosAsignar');
	resultado3.innerHTML = '';
	const contenedor = document.createElement('div');
    const busqueda = asignacion.idActivo;
	if (busqueda.length === 0){
		alert('La persona no tiene activos asignados');
	}
	else{
	// resultado3.innerHTML = '';
    const urlServidor2 = `http://localhost:3000/activos?id=${busqueda}`;

    // Realizar la solicitud GET al servidor JSON
    fetch(urlServidor2)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se encontró el activo.');
            }
        })
        .then(data4 => {
            alert('Activos encontrados:', data4);
        
            if (data4.length === 0) {
                resultado3.innerHTML = '<p>No existen activos con la cedula dada</p>';
            } else {
                data4.forEach(activo => {
                    const asignacionActivo = document.createElement('div');
                    asignacionActivo.innerHTML = `
                        <h3>Activo asignado</h3><br>
                        <p>Id y descripcion activo: ${activo.id} - ${activo.DescripcionId || ''} </p>`;
                    contenedor.appendChild(asignacionActivo);
				    // alert("Si entro al forEach");
					return asignacionActivo;
					
                });
				resultado3.appendChild(contenedor);
            }
        })
        .catch(error => {
            console.error('Error al buscar activos asignados:', error);
            const option = document.createElement('div');
            option.innerHTML = `<p>Error al buscar los activos asignados.</p>`;
            resultado3.appendChild(option);
        });
}
}
function asigBoton(cedula,nombreRespon){
	// const nombreResponsable = document.getElementById('nombreResponsable').value;
	// const cedulaResponsable = document.getElementById('cedulaResponsable').value;
	const nombreResponsable = nombreRespon;
	const cedulaResponsable = cedula;
	const idActivo = document.getElementById('idActivo').value;
	const fechaAsignacion = document.getElementById('fechaAsignacion').value;
	alert(nombreRespon);
	const activo = {
		idActivo,
		fechaAsignacion,
		nombreResponsable,
		cedulaResponsable,
	};
	const urlServidor = 'http://localhost:3000/asignacionResponsable';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(activo),
};

// Realizar la solicitud POST al servidor JSON
fetch(urlServidor, opciones)
  .then(response => response.json())
  .then(data => {
    alert('Tipo de Persona agregado:', data);
  })
  .catch(error => {
    console.error('Error al agregar la tarea:', error);
  });
}
function registrarAsignaciones(cedula,nombreRespon){

const botonDiferente = document.getElementById('diferente');

const deAgregarDiv = document.querySelector('.deAgregar');

botonDiferente.addEventListener('click', function () {
    
    deAgregarDiv.style.display = 'block';
});
}
//_____________________________________________________________
