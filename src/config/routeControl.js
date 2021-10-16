import bundle from "@/functions/bundler";

function routeParams(paramName, params) {
  const result = params.length ? 
    [':', String(paramName), '(', bundle.params(params), ')'] :
    [':', String(paramName)]
  return result.join('')
}

function Page(name, isBlocked, paramSetArr, inboundsFactory, redirectSuffix) {
  this.name = name;
  this.blocked = isBlocked;
  this.basePath = bundle.url([name.toLowerCase(), ...paramSetArr]);
  this.inbounds = inboundsFactory(name.toLowerCase());
  this.redirectPath = bundle.url([name.toLowerCase(), ...redirectSuffix]);
}

function BaseRoute(basePath, pageName) {
  return {
    path: basePath,
    component: () => import(`@/pages/${pageName}.vue`)
  }
}

function Redirection(inPath, toPath) {
  return {
    path: inPath,
    redirect: toPath
  }
}



// INBOUND REDIRECTION RULES ------------------

function inbounds_type_0() {
  return function (page) {
    return [
      `/${page}/:else`,
      '/:else'
    ]
  }
}
function inbounds_type_1() {
  return function (page) {
    return [
      `/${page}`,
      `/${page}/`,
      `/${page}/:else`
    ]
  }
}



// PAGE CONFIGURATIONS ------------------------

export const pages = [

  new Page( 'ErrorPage',
    false,
    [routeParams('code',
      ['404', '503']
    )],
    inbounds_type_0(),
    ['404']
  ),

  new Page( 'Home',
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),
  
  new Page( 'About',
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),

  new Page( 'Works',
    true,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),

  new Page( 'Blog',
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),

  new Page( 'Lab',
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),

  new Page( 'IDAS',
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),

]



// FINAL EXPORT -------------------------------

export const baseRoutes = []
for (let p of pages) {
  baseRoutes.push(BaseRoute(p.basePath, p.name));
}

export const redirections = []
for (let p of pages) {
  for (let i of p.inbounds) {
    redirections.push(Redirection(i, p.redirectPath));
  }
}

export const blockPages = []
for (let p of pages) {
  if (p.blocked) {
    blockPages.push(Redirection(p.redirectPath, '/errorpage/503'));
  }
}

export const navigations = []
for (let p of pages) {
  if (!p.blocked && (p.name !== 'ErrorPage')) {
    navigations.push(p.name.toLowerCase());
  }
}

