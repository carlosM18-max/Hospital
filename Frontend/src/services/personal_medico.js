function obtenerPersonalMedico() {
    let arregloMedicos = [];
    try {
        fetch('http://localhost:8000/hospital/api/v1personal_medico/').then(res => {
            res.json().then(medicos => {
                medicos = Object.values(medicos)
                medicos.forEach(medico => {
                    arregloMedicos.push(medico.persona_ID);
                })
            })
        })

        return arregloMedicos;
    } catch (error) {
        console.error('Error al obtener los médicos: ' + error);
        throw error;
    }
}

export { obtenerPersonalMedico }