export async function postNoticias(URL_BASE_NOTICIAS, noticiasRequest) {
  try{
  const response = await fetch(URL_BASE_NOTICIAS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noticiasRequest),
  })

  if (!response.ok) {
    alert('Error de red o servidor.')
  }
  else{
    alert('OK')
  }
}
catch(error){
  alert('No hemos podido añadir la noticia')
}

  const responseData = await response.json()
  return responseData
}
