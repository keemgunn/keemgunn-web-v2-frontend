import bundle from "@/functions/bundler";

function routeParams(name, examples) {
  // make router parameter strings like: '/:name('ex1'||'ex2')'
  try {
    const result = examples.length ? 
      [':', String(name), '(', bundle.params(examples), ')'] :
      [':', String(name)]
    return result.join('')
  } catch (err) {
    console.error(err);
  }
}

function Page(name, allow, onNav, paramSetArr, inboundsFactory, redirectSuffix) {
  this.name = name;
  this.allowed = allow;
  this.onNav = onNav;
  this.basePath = bundle.url([name.toLowerCase(), ...paramSetArr]);
  this.inbounds = inboundsFactory(name.toLowerCase());

  if (redirectSuffix.filter(item => item.match('errorpage')).length) {
    this.redirectPath = bundle.url([...redirectSuffix]);
  } else {
    this.redirectPath = bundle.url([name.toLowerCase(), ...redirectSuffix]);
  }
}

function BaseRoute(basePath, pageName) {
  this.path = basePath;
  this.component = () => import(`@/pages/${pageName}.vue`);
}

function Redirection(inPath, toPath) {
  // if (inPath.match('errorpage')) {
    
  // }
  this.path = inPath;
  this.redirect = toPath;
}



// INBOUND REDIRECTION RULES ------------------
function inbounds_type_0() {
   // For Error Pages
  return function (page) {
    return [
      `/${page}/:else`,
      '/:else'
    ]
  }
}
function inbounds_type_1() {
   // For Home
  return function (page) {
    return [
      `/`,
      `/${page}`,
      `/${page}/`,
      `/${page}/:else`
    ]
  }
}
function inbounds_type_2() {
   // For Other Main Pages
  return function (page) {
    return [
      `/${page}`,
      `/${page}/`,
      `/${page}/:else`
    ]
  }
}
function inbounds_type_3() {
   // For Lab Page
  return function (page) {
    return [
      `/${page}`,
      `/${page}/`,
      `/${page}/:else`,
      `/${page}/:else/`,
      `/${page}/:else/:else`,
    ]
  }
}
// function inbounds_type_4() {
//    // redirect no-params only
//    return function (page) {
//     return [
//       `/${page}`,
//       `/${page}/`
//     ]
//   }
// }




// PAGE CONFIGURATIONS ------------------------
export const pages = [

  new Page( 'ErrorPage',
    true,
    false,
    [routeParams('code',
      ['404', '503']
    )],
    inbounds_type_0(),
    ['404']
  ),

  new Page( 'Home',
    true,
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_1(),
    ['en']
  ),

  new Page( 'Works',
    false,
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_2(),
    ['en']
  ),

  new Page( 'Blog',
    false,
    false,
    [ routeParams('lang', ['en']) ],
    inbounds_type_2(),
    ['en']
  ),

  new Page( 'Lab',
    false,
    false,
    [ routeParams('room', ['home']),
      routeParams('lang', ['en']) ],
    inbounds_type_3(),
    ['home','en']
  ),

  new Page( 'IDAS',
    true,
    true,
    [ routeParams('lang', ['en']) ],
    inbounds_type_2(),
    ['en']
  ),

  new Page( 'About',
    true,
    true,
    [ routeParams('lang', ['en']) ],
    inbounds_type_2(),
    ['en']
  ),

  // new Page( 'TestField',
  //   false,
  //   false,
  //   [ routeParams('key', ['']) ],
  //   inbounds_type_4(),
  //   ['none']
  // ),

]



// FINAL EXPORT -------------------------------

export const baseRoutes = []
for (let p of pages) {
  baseRoutes.push(new BaseRoute(p.basePath, p.name));
}

export const redirections = []
for (let p of pages) {
  for (let i of p.inbounds) {
    redirections.push(new Redirection(i, p.redirectPath));
  }
}

export const blockPages = []
for (let p of pages) {
  if (!p.allowed) {
    blockPages.push(new Redirection(p.redirectPath, '/errorpage/503'));
  }
}

export const navigations = []
let navIndex = 0;
for (let p of pages) {
  if (p.onNav) {
    navIndex += 1;
    navigations.push({
      name: p.name.toLowerCase(),
      index: navIndex,
      url: p.redirectPath
    });
  }
}

