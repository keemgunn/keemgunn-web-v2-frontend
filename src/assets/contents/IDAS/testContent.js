


// Section => always Flex
export const section1 = [ // Arr

  { // Field => Always Grid
    key: "s1-f1",
    name: "field-name",
      // => to id
    fieldType: "abbb",
      //"XS S M L" => field-type class bind
    gap: false,
      // gap - preset by scale => class bind
    widthOverride: "",
      // => style bind
    columns: 18,
      // column numbers (Int) => style bind
    
    articles: 3, ////
    // Article => Always Flex
    nest: [ // Arr
      {
        key: "s1-f1-a1",
        // => to id
        name: "article-name",
        self: [ //  XS  S  M  L :: grid-area , width, place
          ["1 / 3 / 2 / 5" , "100%", "center stretch", "margin", "padding"],
          ["1 / 3 / 2 / 5" , "100%", "center stretch", "margin", "padding"],
          ["1 / 3 / 2 / 5" , "100%", "center stretch", "margin", "padding"],
          ["1 / 3 / 2 / 5" , "100%", "center stretch", "margin", "padding"]
        ], // => style bind

        flexContainer: [
          //  XS  S  M  L :: flex-direction , justify-content, align-items
          ["column", "start", "start"], 
          ["column", "start", "start"], 
          ["column", "start", "start"], 
          ["column", "start", "start"]
        ], // => class bind
        
        nest: [
          {
            key: "s1-f1-a1-b1",
            index: "auto incremental in the same field",
            name: "something",
            comp: "CompName",
            body: {
              style: "styles here.", 
              free: "form here.",
              // ... + more props ..
            }
          }
          // ... Blocks

        ]
        
      }
      // ... Articles

    ]
  }
  // ... Fields
  
]