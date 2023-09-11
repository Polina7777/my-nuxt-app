export default function ({ route, redirect, app }) {
    const currentLocale = app.i18n.locale;
  
    if (route.params.lang !== currentLocale) {
      redirect(`/${currentLocale}${route.fullPath}`);
    }
  }