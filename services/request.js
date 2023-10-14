const API_DOMAIN = 'http://34.171.239.103/api/'
let headers = { 'Content-Type': 'application/json' }

export const GetDistritos = async () => {
  const URL = `${API_DOMAIN}distritos`
  try {
    const res = await fetch(URL)

    if (!res.ok) {
      throw new Error('ah ocurrido un error')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {String} nombre Nombre del distrito
 * @param {String} lider Nombre lider del distrito
 * @param {Number} cantidad_iglesias Canidad de iglesias que hay en el distrito
 * @returns ok | error
 */
export const PutDistritos = async ({ nombre, lider, cantidad_iglesias }) => {
  const URL = `${API_DOMAIN}saveDistritos`

  const body = {
    nombre: nombre,
    lider: lider,
    cantidad_iglesias: Number(cantidad_iglesias)
  }

  try {
    const res = await fetch(URL, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      throw new Error('ah ocurrido un error')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {Number} id identificado del distrito
 * @returns
 */
export const DeleteDistritos = async (id) => {
  const URL = `${API_DOMAIN}delete-distrito/${Number(id)}`
  try {
    const res = await fetch(URL, {
      method: 'DELETE'
    })

    if (!res.ok) {
      throw new Error('No se pudo eliminar')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {Number} id identificado del distrito
 * @returns
 */
export const EditDistritos = async (distrito) => {
  const URL = `${API_DOMAIN}edit-distrito/${distrito.id}`
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Establece el encabezado Content-Type como JSON
      },
      body: JSON.stringify(distrito)
    })

    if (!res.ok) {
      throw new Error('No se pudo actualizar')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
