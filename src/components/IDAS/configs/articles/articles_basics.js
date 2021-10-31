

export const s1_f1_a1 = {
  _type: "article",
  serial: "s1-f1-a1",
  name: "article-name",
  customArticle: null,
  injectListeners: {
  }
}


export const s1_f1_a2 = {
  _type: "article",
  serial: "s1-f1-a2",
  name: "article-name",
  customArticle: null,
  injectListeners: {
    mouseEnter: (context) => {
      return function () {
        context.triggerEvent('test!');
      }
    },
  }
}


export const s1_f2_a1 = {
  _type: "article",
  serial: "s1-f2-a1",
  name: "article-name",
  customArticle: null,
  injectListeners: {
  }
}


export const s1_f2_a2 = {
  _type: "article",
  serial: "s1-f2-a2",
  name: "article-name",
  customArticle: null,
  injectListeners: {
    mouseEnter: () => {
      return function () {
        console.log('mouse-enter-test!!!');
      }
    }
  }
}


export const s2_f1_a1 = {
  _type: "article",
  serial: "s2-f1-a1",
  name: "article-name",
  customArticle: null,
  injectListeners: {

  }
}


export const s2_f1_a2 = {
  _type: "article",
  serial: "s2-f1-a2",
  name: "article-name",
  customArticle: null,
  injectListeners: {

  }
}


export const s2_f2_a1 = {
  _type: "article",
  serial: "s2-f2-a1",
  name: "article-name",
  customArticle: null,
  injectListeners: {

  }
}


export const s2_f2_a2 = {
  _type: "article",
  serial: "s2-f2-a2",
  name: "article-name",
  customArticle: null,
  injectListeners: {

  }
}
