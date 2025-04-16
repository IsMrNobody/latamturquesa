export default function ({ app }) {
  // Eventos de cambio de idioma
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    console.log(`Preparando para cambiar idioma de ${oldLocale} a ${newLocale}`)
  }
  
  app.i18n.onLanguageSwitch = (oldLocale, newLocale) => {
    console.log(`Idioma cambiado de ${oldLocale} a ${newLocale}`)
    
    // Si estamos en el cliente, forzamos la recarga de la página
    if (process.client) {
      console.log('Recargando página para aplicar cambios de idioma...')
      setTimeout(() => {
        window.location.reload()
      }, 100)
    }
  }
} 